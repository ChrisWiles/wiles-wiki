"""Prepare a dated, public, identifier-free model input from Yahoo chart downloads.
Raw downloads remain ignored. Monthly bars are labeled by month START; only months
strictly before the valuation month are training observations. Do not reuse tickers
across different issuers. This script never fetches brokerage state or credentials.
"""
import argparse, datetime as dt, hashlib, json
from pathlib import Path
from decimal import Decimal

def prepare(root, market, marks, valuation_date, position_dates):
    month=valuation_date[:7];series={};provenance={}
    for p in sorted(market.glob('*-monthly.json')):
        symbol=p.name.removesuffix('-monthly.json')
        if symbol=='SOXX':continue  # two-factor model: broad market and technology spread
        raw=p.read_bytes();j=json.loads(raw)['chart']['result'][0]
        if j['meta'].get('currency')!='USD':raise ValueError(f'{symbol}: non-USD input')
        adj=j['indicators']['adjclose'][0]['adjclose'];monthly={}
        for timestamp,value in zip(j['timestamp'],adj):
            date=dt.datetime.fromtimestamp(timestamp,dt.timezone.utc).date().isoformat()
            # Exclude the incomplete valuation month and duplicate latest daily bar.
            if date[:7]>=month or value is None:continue
            if symbol=='NBIS' and date<'2024-09-01':continue
            if value<=0:raise ValueError(f'{symbol}: nonpositive price')
            monthly[date[:7]]=float(value)
        keys=sorted(monthly);r={}
        for a,b in zip(keys,keys[1:]):
            ya,ma=map(int,a.split('-'));yb,mb=map(int,b.split('-'))
            if yb*12+mb!=ya*12+ma+1:continue
            import math
            r[b]=math.log(monthly[b]/monthly[a])
        series[symbol]=r
        provenance[symbol]={'source':f'https://query1.finance.yahoo.com/v8/finance/chart/{symbol}', 'raw_sha256':hashlib.sha256(raw).hexdigest(),'first_month':keys[0],'last_complete_month':keys[-1],'return_observations':len(r)}
    accounts={}
    for p in (root/'.skills/holdings/references').glob('*.md'):
        a={}
        for line in p.read_text().splitlines():
            if not line.startswith('|'):continue
            values=[v.strip() for v in line.strip('|').split('|')]
            if len(values)==2 and values[0] in marks['prices']:
                a[values[0]]=str(Decimal(values[1].replace(',','')))
        if a:accounts[p.stem]=a
    if set(position_dates)!=set(accounts):raise ValueError('Each account needs an evidence-backed snapshot date')
    if any(v>valuation_date for v in position_dates.values()):raise ValueError('Position date after valuation')
    assert len(accounts)==3 and set(t for a in accounts.values() for t in a)==set(marks['prices'])
    total=sum(Decimal(q)*Decimal(marks['prices'][t]) for a in accounts.values() for t,q in a.items())
    return {'schema_version':1,'valuation_date':valuation_date,'training_through':max(series['SPY']), 'currency':'USD','prices':marks['prices'],'accounts':accounts,'initial_stock_value':str(total),'exclusions':['All options','All cash including verified ETRADE cash','Treasury notes','Borrowing and unrecorded assets','Taxes and inflation'], 'position_dates':position_dates,'monthly_log_returns':series,'data_provenance':provenance,'return_convention':'Provider adjusted close: distributions reinvested in the same security; no rebalancing across securities. Fund fees embedded, no second fee deduction. Adjustment history not independently reconstructed.'}

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path.cwd());p.add_argument('--market',type=Path,required=True);p.add_argument('--marks',type=Path,required=True);p.add_argument('--date',required=True);p.add_argument('--position-dates',type=Path,required=True);p.add_argument('--output',type=Path,required=True);a=p.parse_args()
    position_dates=json.loads(a.position_dates.read_text());out=prepare(a.root,a.market,json.loads(a.marks.read_text()),a.date,position_dates);a.output.parent.mkdir(parents=True,exist_ok=True);
    if a.output.exists() and json.loads(a.output.read_text())!=out:raise SystemExit('Input vintage exists: use a new version/path')
    if not a.output.exists():a.output.write_text(json.dumps(out,indent=2,sort_keys=True)+'\n')
    print(out['initial_stock_value'],out['training_through'])
