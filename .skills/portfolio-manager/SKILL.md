---
name: portfolio-manager
description: Calculate household exposure and conditional portfolio projections from saved holdings and verified data, including outcome ranges, probabilities and model limitations.
---

# Portfolio manager

Read `investing/mandate.md`, `investing/state/portfolio.md`, `investing/tax-context.md`, `holdings`, and `portfolio-review`. Saved account references are the starting account inputs; the portfolio/tax state links dated values and curated lot records. Check those records before requesting information already retained. Live brokerage access is not assumed; an Alpaca connection is optional and relevant only if the user actually supplies an Alpaca account.

Keep separate account records and distinguish stocks, ETFs, options and Treasury issues. Preserve ticker identity and known quantities; missing positions, cash, face amounts or cost basis remain unknown. A public report or issuer watchlist is never the current portfolio record.

For valuation, fetch timestamped quotes and confirmed instrument details, state the valuation session and quantify only the known subset. Without all account assets and cash, a denominator is incomplete: label known-security weights explicitly or omit weights. Do not use shares outstanding as personal shares. ETF look-through requires current sponsor holdings. Option delta/notional requires verified multiplier, quote, Greeks and contract details; do not equate long calls with common shares. Bond valuation requires face amount and quote convention, with accrued interest separate.

Use existing reconciliation helpers under this skill's `scripts/` only for supported file formats. Keep source exports, account IDs and credentials under ignored private storage. Optional Alpaca diagnostics in `references/alpaca-mcp-setup.md` and `scripts/check_alpaca_connection.py` do not authorize connecting or trading.

Write supported account-level calculations to the dated stock report and `investing/state/portfolio.md`; pass holdings, allocation and issuer-level findings to `stock-analysis`. Household investment data is authorized for publication. No mandatory broker setup, prescribed concentration percentages or executable orders.

## Portfolio projections

For six-month and one- through five-year projections, read [the projection method](../../investing/projections.md). The user confirmed no new deposits or withdrawals for the baseline. Establish complete-versus-subset scope before modeling; missing tax lots need not prevent a pre-tax stock model, while missing quantities and instrument marks prevent a full household forecast.

Use consistent joint paths and explicit assumptions for issuer/fund overlap, business economics, shared AI-cycle risk, dividends, fees, option expiry and Treasury cash flows. Show median/ranges and defined event probabilities rather than the supposed chance of one exact value. Compare current holdings with proposed changes on the same basis; do not assume swing-trading alpha or future rolls/rebalancing.

Numerical forecasts require reproducible calculation, input checks, sensitivity and relevant historical-origin validation. Label conditional model estimates and subjective assumptions separately from demonstrated calibration. A tested conditional engine and explicit diagnostic record now live in `investing/models/README.md`; they do not establish household calibration. If required checks or inputs fail, report the gap rather than inventing odds. Preserve fixed-date forecast versions for later scoring. Put technical detail in the report appendix and explain decision implications in plain language.


## Run the maintained model

Read `investing/models/README.md` before calculation. Use `scripts/refresh_projection_inputs.py` for dated public inputs and `scripts/projection_model.py` for the six joint horizons. Preserve prior quantity snapshot dates unless newer user evidence changes them. Run `scripts/test_projection_model.py`, reconcile exact starting wealth and inspect source, proxy, sensitivity, convergence and historical-origin diagnostics before publication. The first model's weak five-year proxy interval coverage must stay visible; do not call a conditional distribution empirically calibrated.

Freeze public inputs in `investing/models/inputs/` and versioned results in `investing/forecasts/`. Never overwrite a published vintage or silently change its policy. Same-date corrections get a new version and explanation. Pass the results to `stock-analysis`; write the readable projection report under `reports/investing/projections/YYYY-MM-DD.md`. No personal allocation or execution decision is inferred from a model refresh.
