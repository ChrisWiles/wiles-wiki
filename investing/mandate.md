# Investment mandate

## Objective and priority

Build a household investment decision system centered on long-term AI infrastructure ownership. Swing trading is a supplement. Prioritize durable business economics, valuation, thesis falsification and portfolio exposure; tactical opportunities must not displace core-risk research. No numerical allocation split is inferred from this preference. Use [research priorities](research-queue.md), the [decision journal](decisions/index.md) and the [report contract](report-contract.md) to turn evidence into decisions and follow-up.

## Thesis and horizon

Long-term research covers 2026–2035. AI can become an economically useful form of cognitive labor; rapidly improving agents and AI-assisted R&D could expand demand while physical infrastructure scales more slowly. AGI in 2027–2029 is a scenario to test, not a premise every company must satisfy. Track research acceleration separately from autonomous successor-model development and self-sustaining recursive improvement.

Compute demand = useful workload volume × compute per workload. Model electricity separately using utilization, energy per unit of compute, and facility overhead. Falling API prices are not a direct measurement of FLOPs or electricity saved. Capacity, bookings, token usage, revenue, profit, and shareholder returns are distinct quantities.

Prefer durable economic capture: pricing power, barriers, cash conversion, disciplined capital allocation, sound financing, and valuation. Compare slower adoption, rapid adoption, efficiency/substitution, oversupply, funding stress, and regulatory disruption. Never assume bottleneck scarcity guarantees a good stock investment.

## Coverage universe

The holdings skill supplies the current research universe. Deduplicate research by ticker, while retaining separate account quantities. GOOG and GOOGL remain distinct securities but share issuer-level research. Coverage does not designate every company a core investment or a trade.

| Layer | Initial coverage | Research questions |
| --- | --- | --- |
| Accelerators and custom silicon | NVDA, AMD, AVGO | Competitive architecture, customer concentration, margins, custom-chip substitution |
| Foundry and advanced packaging | TSM; comparison ASML | Qualified capacity, yields, packaging, capex and export restrictions |
| Memory and storage | MU, SNDK | HBM versus commodity DRAM/NAND, qualified capacity, pricing cycle, inventories |
| Networking and interconnect | ANET, CRDO, AVGO | Ethernet/InfiniBand, optics/copper, attach rates, customer qualification |
| Power and cooling | GEV, VRT; comparisons ETN, PWR, CEG, VST | Orders, delivery lead times, cancellations, heat density, grid access and regional economics |
| Cloud and AI deployment | GOOG, GOOGL, AMZN, MSFT, ORCL, NBIS; comparisons CRWV, IREN | Paid demand, utilization, unit pricing, capex, debt, dilution and replacement cost |
| Application and other businesses | PLTR, AAPL, RDDT, TSLA, RKLB, LLY, JPM | Actual business drivers; test AI relevance rather than forcing every stock into the thesis |
| Index funds | SPY, QQQ, QQQM | Sponsor holdings, issuer/sector overlap; QQQ/QQQM share Nasdaq-100 exposure |
| Identity verification | CBRS, SPCX | Confirm issuer, exchange, instrument and corporate actions before analysis; no silent ticker correction |
| Fixed income | US Treasury notes | Maturity ladder, duration and liquidity role; quantities/yields stay unknown without evidence |

Comparison names are research candidates, not existing holdings or purchase recommendations.

## Portfolio and trading policy

Use `.skills/holdings` for account data. Keep records to ticker and quantity, options to contract and count, Treasury notes to issue and face amount. No prices, performance columns, screenshots or commentary in those references. Missing brokerage quantities remain unknown. A report never overwrites the holdings record or treats missing positions as sales.

Do not prescribe concentrated weights, cash percentages, loss limits, risk per trade or a trading sleeve without user input. No approved risk budget, complete account equity, cost basis, tax status or cash balances are currently recorded. Include partial known-account calculations in the reports when useful, with their denominator and completeness clearly labeled; never label them full household weights. ETFs require look-through evidence; long calls require verified contract terms, premiums and Greeks for exposure calculations.

Swing research normally covers days to weeks, with daily price/volume for entries and weekly charts for context. Separate tactical setups from 2026–2035 investment theses. Require entry condition, invalidation, exit plan, reward/risk net of plausible costs, liquidity and earnings/macro gap risk. Do not invent stops from a quote or assign numerical scenario probabilities without a calibrated model. Without reliable OHLCV or an approved risk budget, return conditional watch/no trade and omit share-size instructions. Existing long-dated options do not imply authorization to recommend new options trades.

## Evidence and publication

User-provided essays are thesis inputs and research leads. Open original sources and verify claims before presenting them as findings. Keep measured results, laboratory self-reports, preprints, model-dependent forecasts, targets and analyst inference distinct. Benchmark performance is not proof of professional replacement; API-equivalent spending is not revenue; projected infrastructure capacity is not realized demand.

The user explicitly authorizes public household investment data in this repository: account-owner labels, stock/ETF quantities, option positions, Treasury holdings and portfolio allocation analysis may be committed and pushed. Keep the account references minimal and include current valuations/allocations in reports when supported by verified data. Distinguish recorded holdings from comparison candidates. Missing quantities, cash, cost basis or instrument data remain unknown; permission to publish is not evidence of values. Credentials, login tokens and unrelated private documents are outside this investment-data publication scope.

Use [publication protocol](publication.md) for authorized weekly commit/push. No trade execution or messages to third parties are authorized by these workflows.

## Helper output paths

Run account-sensitive or intermediate helper output only under ignored `private/investing/scratch/` in the run worktree, never `.skills/` or the public `reports/` tree. Pass `--output-dir private/investing/scratch/<helper>` explicitly when supported (including position-sizer, VCP and weekly chart helpers). For fixed-output tools, supply an explicit output path or run from an ignored scratch directory; do not copy raw outputs wholesale into the public report. Reviewed company and household portfolio calculations may enter the allowed report paths. Intermediate scratch output remains ignored to keep the repo clean.
