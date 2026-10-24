# Household portfolio state

Updated October 24, 2026. [Current stock report](../../reports/investing/stocks/2026-10-24.md); [previous distinct report](../../reports/investing/stocks/2026-10-17.md). Long-term AI infrastructure is the core; supplementary swings have no approved numerical risk budget. No holdings, broker setting or order was changed.

## Current supported input scope

The source checkout and committed quantity references match. E*TRADE quantities retain October 16; both Robinhood snapshots retain October 14. No subsequent trades or cash flows are inferred. All 28 stock/ETF symbols have October 23 USD daily closing marks. Options, all cash, Treasury notes, borrowing, taxes, inflation and unrecorded assets are excluded; this is not complete household net worth.

| Account | Recorded stock/ETF value |
| --- | ---: |
| Chris E*TRADE | $2,909,149.37 |
| Chris Robinhood | $814,308.34 |
| Jen Robinhood | $407,824.90 |
| Combined | **$4,131,282.61** |

The same fixed quantities reprice $68,862.44 lower than October 16, or 1.64%. Without transaction/cash-flow reconciliation this is not verified account performance. The complete dated ticker/account table is in the stock report and immutable input; reports never overwrite the minimal holdings files.

## Exposure and model policy

- Direct NVIDIA: $926,698.76, 22.43% of the known subset.
- Direct Alphabet: $727,214.82, 17.60% of the known subset.
- QQQ + QQQM: $1,603,000.04, 38.80% of the known subset.

Sponsor look-through remains incomplete. QQQ/QQQM official exports redirected to generic HTML; recovered October 22 SPY file has 505 numeric weights summing to 100.220262%, unresolved. Do not normalize that discrepancy or add guessed constituents to wealth. GOOG/GOOGL share issuer research but retain separate listing prices/lots; QQQ/QQQM share fund return paths.

P-2026-10-23-v1 starts at $4,131,282.61, with six-horizon medians about $4.36M, $4.49M, $4.70M, $4.91M, $5.16M and $5.43M. Five-year loss/doubling/drawdown estimates round to 35%/28%/85%; no household calibration is established. The historical five-year 80% proxy interval covers 7/12 overlapping outcomes. Model/seed and completed-month dates retain September; small provider history revisions are recorded in the new input. No external flows, rebalancing or swing alpha; total-return convention reinvests in the same security.

A-2026-10-23-v1 uses the same marks/P-ID with the October 17 economic parameters, capability/adoption dates and judgment weights unchanged. Five-year endpoints: rapid $13.44M, measured $7.09M, efficiency $5.78M, overbuild $3.25M, delayed $4.53M. Working/equal/cautious weighted illustrations: $7.26M/$6.82M/$6.05M. These are price-only, deterministic economic sensitivities, not medians, confidence intervals or calibrated event odds. Weight and parameter origin remains October 17; source review is October 24. Missing issuer cash-flow/debt/valuation underwriting persists. Earlier P/A vintages are untouched and no forecast target is due.

## Options, bonds, cash and tax records

Recorded Robinhood calls: three NVDA $190 January 21 2028 and two MU $740 December 15 2028. Premiums/Greeks/exposure remain unverified. October 16 E*TRADE notes retain $2,900 face across seven issues; cash $6,516.68 and zero margin debt are dated capture observations, not refreshed balances. The stock forecast excludes them rather than inventing a perpetual cash/option return.

The 69 curated E*TRADE lot rows reconcile stock quantities, with seven Treasury issues separate. AAPL/GOOG each retain a 57-share zero-price-paid observation. Adjusted basis/holding-period codes and Robinhood/household transaction inputs remain absent. No new files were present under the source checkout's private investing inputs. No tax liability, wash-sale clearance or realized outcome is inferred.

## Current proposals

[Alphabet cash-based wait](../decisions/D-2026-10-24-001.md) is new analytical documentation, not a trade. The [NBIS/ORCL wait](../decisions/D-2026-10-15-001.md) has an Oct 24 facility review. Limited VRT hold/wait-on-adds remains proposed; Oct 28 results are still due. Index simplification remains conditional. No target allocation, user acceptance or execution is inferred. Next active work: R-006/R-012/R-003; R-008 data blocker and R-013 model quality remain open.

Arithmetic and policy: [current forecast inputs](../models/inputs/2026-10-23.json), [projection report](../../reports/investing/projections/2026-10-24.md), [tax context](../tax-context.md).
