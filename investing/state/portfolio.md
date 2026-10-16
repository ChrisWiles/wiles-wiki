# Household portfolio state

**Updated:** October 16, 2026 with the E*TRADE account capture. [Last investment decision report](../../reports/investing/stocks/2026-10-15.md); [recorded account quantities](../../.skills/holdings/references/accounts.md). E*TRADE quantities are now read from the broker UI; Robinhood quantities retain their earlier user-provided snapshot dates.

Long-term AI infrastructure investing remains the core; swing trading is supplementary under [D-2026-10-14-001](../decisions/D-2026-10-14-001.md). No numerical target weights, trading-risk budget or cash allocation was inferred.

## E*TRADE values and lots captured October 16

The [dated E*TRADE snapshot](../records/2026-10-16-chris-etrade.md) records 16 stock/ETF positions, seven Treasury notes, $6,516.68 cash and a $0.00 margin balance. Its position-view net account value is $3,000,918.95; a later detailed-balances refresh showed $3,001,781.33. Keep these intraday timestamps separate from the older Robinhood marks below.

All E*TRADE stock quantities and Treasury face amounts are now in the minimal holdings record. Treasury face amount totals $2,900.00. [Position values](../records/2026-10-16-chris-etrade-positions.csv) reconcile to quoted quantities/prices; the sum of rounded positions plus cash differs from the broker total by $0.01. [All 69 open-lot quantities](../records/2026-10-16-chris-etrade-lots.csv) reconcile to their positions. Acquisition dates and price paid were retained; the two 57-share AAPL/GOOG lots showing zero price paid require basis review. Broker tax-term/adjustment histories and transaction records are still incomplete.

The October 15 household-input gap is partly resolved. Refresh all accounts on a common market basis before calculating new combined dollar weights. Robinhood cash and current option terms/marks remain missing; this capture does not establish full household equity or an approved trading-risk budget. Original reports and decisions retain their evidence as of their own dates.

## Robinhood marks retained from the October 15 review

October 14 completed-session USD closes, exact-decimal quantity × price. Known stocks/ETFs only; current cash, options, E*TRADE quantities and Treasury face amounts are excluded. These are not complete account or household weights.

### Chris Robinhood

Known stock/ETF total: $855,961.85.

| Symbol | Shares | October 14 close | Position value | Subset weight |
| --- | ---: | ---: | ---: | ---: |
| QQQ | 501 | $728.95 | $365,203.95 | 42.67% |
| QQQM | 662 | $300.13 | $198,686.06 | 23.21% |
| GOOGL | 545.61 | $347.64 | $189,675.86 | 22.16% |
| NVDA | 239 | $221.30 | $52,890.70 | 6.18% |
| SPCX | 115.40 | $152.16 | $17,559.26 | 2.05% |
| CBRS | 100 | $141.48 | $14,148.00 | 1.65% |
| GOOG | 28 | $343.65 | $9,622.20 | 1.12% |
| VRT | 25.31 | $222.83 | $5,639.83 | 0.66% |
| SNDK | 0.940791 | $1,403.34 | $1,320.25 | 0.15% |
| AMZN | 4.20 | $254.08 | $1,067.14 | 0.12% |
| RDDT | 1 | $148.60 | $148.60 | 0.02% |

### Jen Robinhood

Known stock/ETF total: $428,270.31.

| Symbol | Shares | October 14 close | Position value | Subset weight |
| --- | ---: | ---: | ---: | ---: |
| QQQM | 532.15 | $300.13 | $159,714.18 | 37.29% |
| QQQ | 210.27 | $728.95 | $153,276.32 | 35.79% |
| GOOG | 73.38 | $343.65 | $25,217.04 | 5.89% |
| AVGO | 42.04 | $346.25 | $14,556.35 | 3.40% |
| VRT | 56.07 | $222.83 | $12,494.08 | 2.92% |
| NVDA | 53.77 | $221.30 | $11,899.30 | 2.78% |
| GEV | 12.12 | $941.78 | $11,414.37 | 2.67% |
| MU | 11.32 | $914.13 | $10,347.95 | 2.42% |
| SPY | 12.18 | $769.60 | $9,373.73 | 2.19% |
| ANET | 42.15 | $195.42 | $8,236.95 | 1.92% |
| CRDO | 28.24 | $179.225 | $5,061.31 | 1.18% |
| SNDK | 2.93 | $1,403.34 | $4,111.79 | 0.96% |
| NBIS | 13.80 | $186.01 | $2,566.94 | 0.60% |

## Combined known-subset findings

- Recorded Robinhood stocks/ETFs: **$1,284,232.16**.
- QQQ + QQQM: **$876,880.51 / 68.28%** of that subset. Both track Nasdaq-100 exposure; current constituent look-through is unfinished.
- Direct GOOG/GOOGL: **$224,515.10 / 17.48%** of that subset, before ETF exposure. Alphabet is 23.28% of Chris's subset.

No prior comparable marked baseline exists, so this is not a weekly allocation-change or return calculation. Marks matched the finance tool's reconstructed prior closes; upstream providers may overlap. [Market methodology and sources](../../reports/investing/stocks/2026-10-15.md#next-verified-events-and-coverage-limits).

## Proposals and limits

[Operator-add deferral](../decisions/D-2026-10-15-001.md), [conditional future-flow simplification](../decisions/D-2026-10-15-002.md) and [VRT hold after review](../decisions/D-2026-10-15-003.md) are proposed analysis. No transaction or accepted allocation change is recorded.

Both existing call positions remain recorded by contract/count only. Current marks, contract adjustments, Greeks and acquisition dates are unverified; no option delta or full account total is inferred. The seven Treasury issues, first maturity December 31, 2026 and last January 31, 2029, now have verified quantities totaling $2,900.00 face amount in the October 16 capture. Current yields and accrued interest were not verified.

[Tax context](../tax-context.md) confirms all three recorded accounts are US taxable. The October 15 run had no lot/transaction import; the October 16 E*TRADE lot capture now supplies acquisition dates and price-paid observations. Verified adjusted basis/term details, Robinhood lots, realized results, carryforwards, tax rates and household wash-sale status remain incomplete. R-001/R-009/R-010 retain only their unresolved input and risk questions. Continue independent issuer research meanwhile.
