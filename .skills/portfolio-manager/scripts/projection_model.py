"""Reproducible conditional stock-portfolio risk model. Requires numpy>=1.26,<3.
No broker access, portfolio optimization, probability claims about AGI, or orders.
See investing/models/README.md for assumptions and validation boundaries.
"""
import argparse, calendar, datetime as dt, hashlib, json, math
from decimal import Decimal
from pathlib import Path
import numpy as np

VERSION='factor-block-v1'
HORIZONS=(6,12,24,36,48,60)
ALIASES={'GOOGL':'GOOG','QQQM':'QQQ'}
PEERS={'CBRS':'NVDA','SPCX':'RKLB'}

def common_factors(data, cutoff=None):
    r=data['monthly_log_returns'];dates=sorted(set(r['SPY'])&set(r['QQQ']))
    if cutoff:dates=[d for d in dates if d<=cutoff]
    f=np.array([[r['SPY'][d],r['QQQ'][d]-r['SPY'][d]] for d in dates],float)
    if len(dates)<100:raise ValueError('At least 100 completed monthly factor returns required')
    return dates,f

def psd_correlation(corr):
    e,v=np.linalg.eigh((corr+corr.T)/2);a=(v*np.maximum(e,1e-8))@v.T
    d=np.sqrt(np.diag(a));return a/d[:,None]/d[None,:]

def fit(data, cutoff=None, only_funds=False):
    dates,f=common_factors(data,cutoff);idx={d:i for i,d in enumerate(dates)}
    tickers=['SPY','QQQ'] if only_funds else sorted(set(data['prices'])-set(ALIASES))
    b={};res={};sig={};notes={}
    for t in tickers:
        if t in ['SPY','QQQ']:
            b[t]=np.array([1.,float(t=='QQQ')]);res[t]={};sig[t]=0.;notes[t]={'kind':'fund','observations':len(dates)};continue
        r=data['monthly_log_returns'][t];ds=[d for d in dates if d in r][-60:]
        if len(ds)<18:continue
        x=f[[idx[d] for d in ds]];y=np.array([r[d] for d in ds]);xc=x-x.mean(0);yc=y-y.mean()
        b[t]=np.linalg.lstsq(xc,yc,rcond=None)[0];e=yc-xc@b[t]
        res[t]=dict(zip(ds,e));sig[t]=float(np.sqrt(np.sum(e*e)/(len(ds)-3)))
        notes[t]={'kind':'observed fit','observations':len(ds),'first_fit_month':ds[0],'last_fit_month':ds[-1]}
    for t in tickers:
        if t in b:continue
        peer=PEERS.get(t)
        if peer not in b:raise ValueError(f'{t}: short history and no verified explicit proxy')
        ds=[d for d in dates if d in data['monthly_log_returns'][t]]
        own=np.array([data['monthly_log_returns'][t][d] for d in ds])
        # Proxy parameters, never fabricated pre-IPO prices. Conservative short-history noise.
        b[t]=b[peer].copy();sig[t]=1.25*max(sig[peer],float(np.std(own,ddof=1)) if len(own)>1 else sig[peer]);res[t]={}
        notes[t]={'kind':'parameter proxy','peer':peer,'observations':len(ds),'residual_scale':1.25}
    n=len(tickers);corr=np.eye(n)
    for i,t in enumerate(tickers):
        for j,u in enumerate(tickers[:i]):
            ds=sorted(set(res[t])&set(res[u]))
            if len(ds)>=12 and sig[t]>0 and sig[u]>0:
                co=float(np.corrcoef([res[t][d] for d in ds],[res[u][d] for d in ds])[0,1]);corr[i,j]=corr[j,i]=.75*co
    corr=psd_correlation(corr);sd=np.array([sig[t] for t in tickers]);cov=corr*sd[:,None]*sd[None,:]
    return {'dates':dates,'factors':f,'tickers':tickers,'beta':np.array([b[t] for t in tickers]),'residual_cov':cov,'notes':notes,'aliases':ALIASES.copy()}

def circular_indices(rng,n,paths,steps,block):
    starts=rng.integers(0,n,size=(paths,math.ceil(steps/block)))
    return ((starts[:,:,None]+np.arange(block))%n).reshape(paths,-1)[:,:steps]

def simulate(spec, initial, *, paths=50000,seed=20261017,steps=60,market_shift=0.,vol_scale=1.,parameter_uncertainty=True,correlation_stress=False):
    rng=np.random.default_rng(seed);f=spec['factors'];b=spec['beta'];n=len(spec['tickers'])
    centered=f-f.mean(0);fcov=np.cov(f,rowvar=False,ddof=1)
    rcov=spec['residual_cov'].copy()
    if correlation_stress:
        sd=np.sqrt(np.diag(rcov));rcov=.5*rcov+.5*np.outer(sd,sd)
    # No arbitrary bull/base/bear probabilities. One empirical mean uncertainty draw per path.
    mean_uncertainty=np.zeros(paths)
    if parameter_uncertainty:
        means=np.array([f[(i+np.arange(12))%len(f),0].mean() for i in range(len(f))])
        mean_uncertainty=means[rng.integers(0,len(f),size=(paths,math.ceil(len(f)/12)))].mean(1)-f[:,0].mean()
    shockidx=circular_indices(rng,len(f),paths,steps,3)
    eig,vec=np.linalg.eigh(rcov);root=vec@np.diag(np.sqrt(np.maximum(eig,0)))
    # 3% is a model assumption, not a current observed yield. No cash is included.
    rf=math.log1p(.03)/12
    market_log=f[:,0].mean()+market_shift/12
    market_arithmetic=market_log+.5*fcov[0,0]
    variance=np.einsum('ij,jk,ik->i',b,fcov,b)+np.diag(rcov)
    drift=rf+b[:,0]*(market_arithmetic-rf)-.5*variance*vol_scale**2
    drift=drift[None,:]+mean_uncertainty[:,None]*b[:,0]
    initial=np.asarray(initial,float);values=np.broadcast_to(initial,(paths,n)).copy()
    if initial.shape!=(n,) or np.any(initial<0):raise ValueError('invalid starting values')
    wealth=np.empty((paths,steps+1));wealth[:,0]=values.sum(1);peak=wealth[:,0].copy();dd=np.zeros(paths)
    # Benchmarks use the identical market shocks and drift convention; no double-counting ETF constituents.
    bench=np.ones((paths,2));bwealth=np.empty((paths,steps+1,2));bwealth[:,0]=bench
    qb=np.array([[1.,0.],[1.,1.]])
    qvar=np.einsum('ij,jk,ik->i',qb,fcov,qb)
    qdrift=(rf+qb[:,0]*(market_arithmetic-rf)-.5*qvar*vol_scale**2)[None,:]+mean_uncertainty[:,None]
    results={}
    for month in range(1,steps+1):
        shared=centered[shockidx[:,month-1]]
        eps=rng.standard_normal((paths,n))@root.T
        returns=drift+(shared@b.T+eps)*vol_scale
        values*=np.exp(returns);wealth[:,month]=values.sum(1)
        bench*=np.exp(qdrift+shared@qb.T*vol_scale);bwealth[:,month]=bench
        peak=np.maximum(peak,wealth[:,month]);dd=np.maximum(dd,1-wealth[:,month]/peak)
        if month in HORIZONS:
            w=wealth[:,month];start=wealth[0,0];q=np.quantile(w,[.05,.10,.50,.90,.95]);tail=w[w<=q[0]]
            results[str(month)]={'months':month,'p05':q[0],'p10':q[1],'median':q[2],'p90':q[3],'p95':q[4],'mean':w.mean(),'cumulative_median_return':q[2]/start-1,'p_ahead':np.mean(w>start),'p_loss':np.mean(w<start),'p_loss20':np.mean(w<=.8*start),'p_double':np.mean(w>=2*start),'p_drawdown30':np.mean(dd>=.3),'p_beat_spy':np.mean(w/start>bwealth[:,month,0]*(1+1e-12)),'p_beat_qqq':np.mean(w/start>bwealth[:,month,1]*(1+1e-12)),'worst5_mean':tail.mean(), 'drawdown_frequency':'monthly; intramonth falls may be deeper'}
    quantiles=np.quantile(wealth,[.05,.1,.5,.9,.95],axis=0)
    return results,{'months':list(range(steps+1)),'p05':quantiles[0].tolist(),'p10':quantiles[1].tolist(),'median':quantiles[2].tolist(),'p90':quantiles[3].tolist(),'p95':quantiles[4].tolist()},wealth

def interval_score(lo,hi,actual,alpha=.2):
    return hi-lo+(2/alpha)*max(lo-actual,0)+(2/alpha)*max(actual-hi,0)

def validate_origins(data, paths=4000):
    dates,f=common_factors(data);records=[]
    for year in range(2010,2027):
        cutoff=f'{year}-01'
        if cutoff not in dates:continue
        origin=dates.index(cutoff);available=len(dates)-origin-1
        if available<6:continue
        sp=fit(data,cutoff,only_funds=True)
        rr,_,_=simulate(sp,[.5,.5],paths=paths,seed=year,steps=min(60,available))
        # Simple Gaussian joint buy-and-hold fund reference, fitted only on data available then.
        train=sp['factors'];hist=np.column_stack((train[:,0],train.sum(1)));rng=np.random.default_rng(year+500)
        draws=rng.multivariate_normal(hist.mean(0),np.cov(hist,rowvar=False),size=(paths,min(60,available)))
        refpaths=(.5*np.exp(draws.cumsum(1))).sum(2)
        for h in HORIZONS:
            if h>available:continue
            realized=.5*np.exp(f[origin+1:origin+h+1,0].sum())+.5*np.exp(f[origin+1:origin+h+1].sum())
            a=rr[str(h)];ref=refpaths[:,h-1];lo,hi=np.quantile(ref,[.1,.9]);loss=float(realized<1)
            records.append({'origin_month':cutoff,'target_month':dates[origin+h],'months':h,'realized_multiple':realized,'p_loss':a['p_loss'],'coverage':bool(a['p10']<=realized<=a['p90']),'brier':(a['p_loss']-loss)**2,'interval_score':interval_score(a['p10'],a['p90'],realized),'reference_brier':(float(np.mean(ref<1))-loss)**2,'reference_coverage':bool(lo<=realized<=hi),'reference_interval_score':interval_score(lo,hi,realized)})
    summary={}
    for h in HORIZONS:
        rows=[r for r in records if r['months']==h]
        summary[str(h)]={'origins':len(rows),'coverage':np.mean([r['coverage'] for r in rows]),'brier':np.mean([r['brier'] for r in rows]),'interval_score':np.mean([r['interval_score'] for r in rows]),'reference_coverage':np.mean([r['reference_coverage'] for r in rows]),'reference_brier':np.mean([r['reference_brier'] for r in rows]),'reference_interval_score':np.mean([r['reference_interval_score'] for r in rows]),'constant_50pct_brier':.25}
    return {'scope':'Annual January origins 2010 onward; 50/50 SPY/QQQ buy-and-hold proxy, NOT actual-household or company-level calibration. Long horizons overlap, are few and dependent. Data vendor adjustments are current-vintage; fundamentals/holdings selection not backtested.','summary':summary,'records':records}

def stress_cases(initial):
    semis={'NVDA','AMD','AVGO','MU','SNDK','CRDO','ANET','TSM'};cloud={'GOOG','GOOGL','AMZN','MSFT'};power={'VRT','GEV'};operators={'NBIS','ORCL'}
    shocks={}
    for name in ['Profitable deployment','Slower monetization','Efficiency and substitution','Operator funding stress','Higher rates','Taiwan disruption','Direct NVIDIA permanent loss']:
        shock={}
        for t in initial:
            if name=='Profitable deployment':x=.30 if t in semis else .20 if t in power|operators else .18 if t in {'QQQ','QQQM'} else .1
            elif name=='Slower monetization':x=-.5 if t in operators else -.35 if t in semis else -.3 if t in power else -.25 if t in cloud|{'QQQ','QQQM'} else -.15
            elif name=='Efficiency and substitution':x=-.45 if t in operators else -.4 if t in {'NVDA','AMD','CRDO'} else -.25 if t in semis|power else .05 if t in cloud else -.15 if t in {'QQQ','QQQM'} else -.05
            elif name=='Operator funding stress':x=-.7 if t=='NBIS' else -.4 if t=='ORCL' else -.2 if t in semis|power|cloud|{'QQQ','QQQM'} else -.1
            elif name=='Higher rates':x=-.4 if t in operators|{'CBRS','SPCX','RKLB','PLTR'} else -.3 if t in semis|power|cloud else -.25 if t in {'QQQ','QQQM'} else -.15
            elif name=='Taiwan disruption':x=-.7 if t=='TSM' else -.5 if t in {'NVDA','AMD'} else -.35 if t in semis else -.25 if t in cloud|{'QQQ','QQQM'} else -.15
            else:x=-1. if t=='NVDA' else 0.
            shock[t]=x
        total=sum(initial.values());after=sum(v*(1+shock[t]) for t,v in initial.items())
        shocks[name]={'value':after,'dollar_change':after-total,'return':after/total-1,'shocks':shock,'probability':None,'timing':'Immediate hypothetical level shock, not an annual return or weighted forecast. Direct NVIDIA loss omits fund/contagion effects.'}
    return shocks

def plain(x):
    if isinstance(x,dict):return {k:plain(v) for k,v in x.items()}
    if isinstance(x,(list,tuple)):return [plain(v) for v in x]
    if isinstance(x,np.ndarray):return x.tolist()
    if isinstance(x,(np.floating,np.integer,np.bool_)):return x.item()
    return x

def build(data, paths=50000,seed=20261017):
    spec=fit(data);nominal={t:0. for t in data['prices']};accounts={}
    exact=Decimal(0)
    for a,holdings in data['accounts'].items():
        accounts[a]=0.
        for t,q in holdings.items():
            value=Decimal(q)*Decimal(data['prices'][t]);exact+=value;nominal[t]+=float(value);accounts[a]+=float(value)
    if exact!=Decimal(data['initial_stock_value']):raise ValueError('Position total does not reconcile')
    initial={t:0. for t in spec['tickers']}
    for t,value in nominal.items():initial[ALIASES.get(t,t)]+=value
    rr,curves,_=simulate(spec,[initial[t] for t in spec['tickers']],paths=paths,seed=seed)
    sensitivity={}
    for name,kw in {'Lower market returns (-4pp)':{'market_shift':-.04},'Higher market returns (+4pp)':{'market_shift':.04},'25% larger shocks':{'vol_scale':1.25},'More correlated company shocks':{'correlation_stress':True}}.items():
        r,_,_=simulate(spec,[initial[t] for t in spec['tickers']],paths=paths,seed=seed,**kw);sensitivity[name]=r
    check,_,_=simulate(spec,[initial[t] for t in spec['tickers']],paths=paths//2,seed=seed+1)
    conv={'comparison_paths':paths//2,'comparison_seed':seed+1,'max_loss_probability_difference':max(abs(rr[h]['p_loss']-check[h]['p_loss']) for h in rr),'max_median_relative_difference':max(abs(rr[h]['median']/check[h]['median']-1) for h in rr)}
    if conv['max_loss_probability_difference']>.02 or conv['max_median_relative_difference']>.04:raise ValueError('Convergence check failed')
    validation=validate_origins(data)
    for h,row in rr.items():
        date=dt.date.fromisoformat(data['valuation_date']);m=date.month-1+int(h);y=date.year+m//12;mo=m%12+1;row['target_date']=dt.date(y,mo,min(date.day,calendar.monthrange(y,mo)[1])).isoformat()
    f=spec['factors'];annualmu=12*f[:,0].mean()+.5*12*np.var(f[:,0],ddof=1)
    return plain({'forecast_id':f'P-{data["valuation_date"]}-v1','model_version':VERSION,'valuation_date':data['valuation_date'],'training_through':data['training_through'],'initial_value':float(exact),'external_deposits':0,'external_withdrawals':0,'currency':'USD','tax_basis':'nominal pre-tax stock/ETF subset','exclusions':data['exclusions'],'paths':paths,'seed':seed,'path_frequency':'monthly','target_close_policy':'Last completed US trading-session close on or before the calendar target date.','factor_block_months':3,'mean_uncertainty_block_months':12,'market_annual_arithmetic_drift_estimate':annualmu,'risk_free_assumption':.03,'sector_premia_assumption':0,'alpha_assumption':0,'fundamental_view':'Separate scenario/sensitivity cross-check, not a completed intrinsic-value model; no AGI probabilities or arbitrary weighted bull/base/bear mixture.','parameters':{t:{**spec['notes'][t],'market_loading':spec['beta'][i,0],'technology_spread_loading':spec['beta'][i,1],'annual_residual_volatility':np.sqrt(12*spec['residual_cov'][i,i])} for i,t in enumerate(spec['tickers'])},'factor_dates':[spec['dates'][0],spec['dates'][-1]],'position_values':nominal,'account_values':accounts,'horizons':rr,'curves':curves,'sensitivity':sensitivity,'stress_cases':stress_cases(nominal),'convergence':conv,'historical_proxy_validation':validation,'calibration_status':'Conditional model estimates; no demonstrated household calibration or live track record. Historical proxy diagnostics are limited and do not prove real-world odds.','income_policy':'Provider total-return convention: dividends reinvested into the same security; static starting positions with reinvested income, no cross-security rebalancing; fund expenses embedded once.','limitations':['Unverified full account balances and options excluded, not assumed zero.','Market drift is a historical estimate, not an intrinsic-value forecast; 3% reference rate and zero sector/stock alpha are modeling assumptions.','Mean uncertainty is sampled, but factor loadings and company covariance estimation uncertainty is not fully modeled.','Residual innovations are Gaussian; factor shocks retain historical blocks. Unseen tail events and company failure probabilities are not calibrated.','Explicit permanent-loss stress has no assigned probability; baseline excludes a calibrated bankruptcy process.','Monthly drawdown monitoring misses intramonth falls.','GOOGL shares GOOG growth paths; QQQM shares QQQ total-return paths, ignoring small fee/tracking differences.','Residual correlations are pairwise-estimated, shrunk 25% toward zero off-diagonal, then projected to positive semidefinite.','Current holdings and current-vintage adjusted prices entail selection/revision limitations in historical diagnostics.','ETF constituent weights remain unverified; ETFs modeled as funds, never double-counted.']})

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--input',type=Path,required=True);p.add_argument('--output',type=Path,required=True);p.add_argument('--paths',type=int,default=50000);p.add_argument('--seed',type=int,default=20261017);p.add_argument('--version',type=int,default=1);a=p.parse_args();
    if a.version<1:raise SystemExit('Forecast version must be positive')
    raw=a.input.read_bytes();out=build(json.loads(raw),a.paths,a.seed);out['forecast_id']=f'P-{out["valuation_date"]}-v{a.version}';out['input_sha256']=hashlib.sha256(raw).hexdigest();out['input_file']=a.input.name;out['model_code_sha256']=hashlib.sha256(Path(__file__).read_bytes()).hexdigest();a.output.parent.mkdir(parents=True,exist_ok=True)
    if a.output.parent.name=='forecasts' and a.output.stem!=out['forecast_id']:raise SystemExit('Output filename must match forecast identity/version')
    if a.output.exists() and json.loads(a.output.read_text())!=out:raise SystemExit('Forecast vintage immutable: use a new version/path rather than overwriting')
    if not a.output.exists():a.output.write_text(json.dumps(out,indent=2,allow_nan=False)+'\n')
    print(json.dumps({'id':out['forecast_id'],'initial':out['initial_value'],'market_drift':out['market_annual_arithmetic_drift_estimate'],'horizons':out['horizons'],'validation':out['historical_proxy_validation']['summary'],'convergence':out['convergence']},indent=2))
