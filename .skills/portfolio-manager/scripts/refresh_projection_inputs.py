"""Fetch public market inputs for the saved stocks, without accessing a broker.
Use a fresh ignored scratch directory and a prior frozen input to retain position
snapshot dates when quantities are unchanged. Changed counts require explicit dates.
"""
import argparse, concurrent.futures, datetime as dt, json, re, time, urllib.request
from pathlib import Path
from decimal import Decimal
from prepare_projection_inputs import prepare

def read_accounts(root):
    accounts={}
    for p in (root/'.skills/holdings/references').glob('*.md'):
        a={}
        for line in p.read_text().splitlines():
            if not line.startswith('|'):continue
            v=[x.strip() for x in line.strip('|').split('|')]
            if len(v)!=2 or not re.fullmatch(r'[A-Z][A-Z0-9.-]{0,7}',v[0]):continue
            try:q=Decimal(v[1].replace(',',''))
            except:continue
            if q<=0:raise ValueError('Nonpositive share count')
            a[v[0]]=str(q)
        if a:accounts[p.stem]=a
    if not accounts:raise ValueError('No account quantities found')
    return accounts

def fetch(symbol,interval,endpoint_end,scratch):
    dest=scratch/f'{symbol}-{"monthly" if interval=="1mo" else "daily"}.json'
    if dest.exists():raise ValueError('Use a fresh scratch directory; cached vintages must not silently supply new forecasts')
    begin=946684800 if interval=='1mo' else endpoint_end-40*86400
    url=f'https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?period1={begin}&period2={endpoint_end}&interval={interval}&events=div%2Csplits'
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=40) as response:raw=response.read()
            data=json.loads(raw);j=data['chart']['result'][0]
            if j['meta'].get('currency')!='USD':raise ValueError(f'{symbol}: unsupported currency')
            dest.write_bytes(raw);return symbol,interval,j
        except Exception:
            if attempt==2:raise
            time.sleep(attempt+1)

def run(args):
    root=args.root.resolve();scratch=args.scratch.resolve()
    if not scratch.is_relative_to(root/'private'):raise ValueError('Raw market downloads must stay under ignored private storage')
    scratch.mkdir(parents=True,exist_ok=True);accounts=read_accounts(root)
    prior=json.loads(args.prior_input.read_text())
    if args.position_dates:dates=json.loads(args.position_dates.read_text())
    else:
        if prior['accounts']!=accounts:raise ValueError('Quantities changed: provide evidence-backed --position-dates, do not infer new dates')
        dates=prior['position_dates']
    symbols=sorted(set(t for a in accounts.values() for t in a)|{'SPY','QQQ'})
    end=int((dt.datetime.fromisoformat(args.as_of).replace(tzinfo=dt.timezone.utc)+dt.timedelta(days=1)).timestamp())
    prices={};last_dates={}
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        jobs=[pool.submit(fetch,t,interval,end,scratch) for t in symbols for interval in ['1mo','1d']]
        for future in concurrent.futures.as_completed(jobs):
            t,interval,j=future.result()
            if interval=='1d':
                bars=[(dt.datetime.fromtimestamp(ts,dt.timezone.utc).date().isoformat(),price) for ts,price in zip(j['timestamp'],j['indicators']['quote'][0]['close']) if price is not None and dt.datetime.fromtimestamp(ts,dt.timezone.utc).date().isoformat()<=args.as_of]
                if not bars:raise ValueError(f'{t}: no supported daily price')
                date,price=bars[-1];prices[t]=str(round(price,2));last_dates[t]=date
    if len(set(last_dates.values()))!=1:raise ValueError(f'Closing sessions do not align: {last_dates}')
    valuation_date=next(iter(last_dates.values()))
    if (dt.date.fromisoformat(args.as_of)-dt.date.fromisoformat(valuation_date)).days>4:raise ValueError('Market prices are stale')
    held=set(t for a in accounts.values() for t in a)
    out=prepare(root,scratch,{'prices':{t:prices[t] for t in held}},valuation_date,dates)
    out['daily_price_provenance']={'last_completed_session':valuation_date,'as_of_request':args.as_of,'source':'Yahoo public chart quote.close; USD; daily session date, corporate-action basis not independently reconstructed'}
    dest=args.output or root/'investing/models/inputs'/f'{valuation_date}.json';text=json.dumps(out,indent=2,sort_keys=True)+'\n'
    if dest.exists() and dest.read_text()!=text:raise ValueError('Input vintage exists: retain it and use a new version/path for changed inputs')
    dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text);print(dest)

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path.cwd());p.add_argument('--as-of',required=True);p.add_argument('--prior-input',type=Path,required=True);p.add_argument('--position-dates',type=Path);p.add_argument('--scratch',type=Path,required=True);p.add_argument('--output',type=Path);run(p.parse_args())
