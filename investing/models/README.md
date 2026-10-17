# Portfolio projection model

The working model is `factor-block-v1`. It produces conditional six-month and one- through five-year estimates from actual recorded stock/ETF quantities, with no external deposits or withdrawals. The first frozen forecast is [P-2026-10-16-v1](../forecasts/P-2026-10-16-v1.json); its readable explanation and limitations are in the [October 17 report](../../reports/investing/projections/2026-10-17.md).

This is a statistical risk model with separate business/valuation cross-checks, not a completed intrinsic-value forecast. It is not demonstrated to be calibrated for the household. In the first historical proxy diagnostics, the five-year 80% range covered only 7 of 12 observations. Longer horizons overlap; neither 50,000 paths nor a better Brier score makes that weakness disappear. Keep the point estimate, assumption sensitivity and validation evidence together.

## Run

Python requires [requirements.txt](requirements.txt). Install dependencies in an ignored virtual environment if the host lacks them; do not install into the system Python. The current Codex bundled Python has NumPy available.

```bash
python3 -m unittest discover -s .skills/portfolio-manager/scripts -p 'test_projection_model.py' -v
OPENBLAS_NUM_THREADS=1 python3 .skills/portfolio-manager/scripts/projection_model.py \
  --input investing/models/inputs/2026-10-16.json \
  --output investing/forecasts/P-2026-10-16-v1.json
node scripts/build-investing-site.mjs
```

A different result cannot overwrite an existing output path. Use `--version N` and a matching new output filename for a methodology/input correction; explain what changed and preserve the old published forecast. Future dated vintages use that date's supported marks and input snapshot. A report may carry a prior vintage if refresh fails, with the old valuation date explicit. Do not change the meaning of a frozen forecast to make a later outcome look better.

## Refresh data

Use public chart downloads for each recorded symbol, with an explicit `period2` no later than the report cutoff. Raw downloads and broker documents stay in ignored `private/investing/scratch/`. The helper [prepare_projection_inputs.py](../../.skills/portfolio-manager/scripts/prepare_projection_inputs.py) consumes the chart responses and an exact-decimal `prices` mapping; it reads minimal holdings references for quantities. It emits reviewed, identifier-free monthly log returns, account aliases/quantities, marks and provenance into `inputs/YYYY-MM-DD.json`.

Monthly chart timestamps label the month start. Exclude the valuation month's incomplete bar and any appended latest daily bar. Use adjusted close for total returns, never silently raw close for dividend-paying securities. Provider revisions/corporate actions remain a disclosed source limit. Pass an explicit `--position-dates` JSON mapping of account aliases to evidence-backed ISO snapshot dates. Confirm dates from retained user evidence; do not advance them merely because new prices were fetched. Never invent E*TRADE quantities from daily gains or a position's role from its ticker.

The model parses actual quantities, consolidates GOOG/GOOGL issuer growth and QQQ/QQQM fund growth, and reconciles exact starting value before simulation. Aliasing does not add ETF constituents on top of fund values. Current sponsor weights remain an open exposure task; the shared-return model does not pretend those weights were downloaded.

For subsequent weeks, the public-data refresh helper retains prior position snapshot dates when quantities are unchanged and rejects changed quantities without explicit evidence-backed dates:

```bash
python3 .skills/portfolio-manager/scripts/refresh_projection_inputs.py \
  --as-of YYYY-MM-DD --prior-input investing/models/inputs/PRIOR-DATE.json \
  --scratch private/investing/scratch/UNIQUE-RUN/market
```

Review the closing-session alignment, input scope and financial data before running the model. Same-date changes require a new input/forecast version; do not overwrite a published vintage. The public input consists of reviewed derived returns and quantities, not raw broker files.

## Main assumptions

- Broad-market and technology-spread monthly shocks are sampled jointly in three-month circular blocks, including the 2000–2002 and 2008 market periods. The incomplete current month is excluded.
- Company loadings/residual covariance use up to 60 observed months, with at least 18. Residual correlations with adequate overlap are regularized and projected to a valid covariance matrix. The main residual distribution is Gaussian; unseen tail events remain a limitation.
- Historical broad-market mean is uncertain: twelve-month blocks generate one mean estimate per simulated path. The 3% reference rate, zero stock-specific alpha and zero technology-spread premium are model assumptions. Company expected returns do not extrapolate their own past outperformance. This is not a valuation-aware return forecast.
- CBRS/NVDA and SPCX/RKLB are explicit short-history parameter proxies with additional residual risk. They are not historical price splices or assertions of equivalent business economics. Parameter assumptions and observation counts are in the frozen results. NBIS predecessor history is excluded before September 2024.
- Wealth starts once, without cash injection. Dividends reinvest into the same security under adjusted-return conventions. No cross-security rebalancing, profitable swing strategy, option roll or target-weight optimization is assumed. Fees embedded in fund returns are not charged again.
- Missing option/cash/bond/borrowing information limits the scope to stocks/ETFs. Taxes and inflation are excluded. Default hazards and options cannot be represented by an invented constant stock growth rate. Explicit permanent-loss and other scenario stresses have no assigned probabilities.

## Validation and publishing

The unit tests verify conservation, joint paths/aliases, negative-return behavior, input cutoffs, short histories, covariance, seeds and quantiles. Historical-origin tests compare a 50/50 SPY/QQQ buy-and-hold proxy with a simple joint-Gaussian reference fitted using only data known at each origin. They report loss-event Brier scores and proper 80% interval scores, not only hit rates. The exact origin observations and scores are retained. They do not validate household stock selection or eliminate current-vintage price-revision/selection limitations.

Sensitivity cases change market drift by ±4 percentage points, enlarge shocks 25%, and raise residual correlation. They have no scenario weights. Report no aggregate “chance of success” for a subjective set of mutually overlapping scenarios. Fixed loss/doubling thresholds are diagnostics, not the user's tolerable loss or target return.

The first forecast's first target is April 16, 2027. Score original events and intervals only at maturity, and preserve input/seed/policy identity. There is no live calibration record yet. If drift, interval quality or a proposed decision changes under plausible assumptions, explain that in the main report.

## Web publishing

Canonical Markdown and frozen JSON remain in Git. The renderer [build-investing-site.mjs](../../scripts/build-investing-site.mjs) builds a responsive archive plus one visual page per report date under ignored `public/investing-notebook/`. It renders all existing dated stock/research reports and optional projection reports. An older report never receives a future forecast. The Pages workflow builds Quartz first, then this archive, and uploads the combined site.

[Live report archive](https://chriswiles.github.io/wiles-wiki/investing-notebook/) · [Native wiki entry](https://chriswiles.github.io/wiles-wiki/investing/)

Render and check desktop/mobile controls before publishing template changes. Weekly generation may add dated reports, model inputs/results and state under the publication protocol; it does not edit the renderer, skills or model source automatically.

Target dates are calendar horizons. Score the last completed US trading-session close on or before each target date, including weekends/holidays; no trade is assumed on that date.

## AGI economic bridge

[AGI scenarios](agi-scenarios.md) add a separate normalized, price-only sensitivity layer using actual holdings and the user's 2027–2029 window. Run `.skills/portfolio-manager/scripts/agi_scenarios.py` and its `test_agi_scenarios.py` as documented there. Reviewed assumptions live in `investing/models/agi-inputs/YYYY-MM-DD-vN.json`; immutable output is `investing/forecasts/A-YYYY-MM-DD-vN.json`, linked to the exact P-ID and holdings hashes. Provisional analyst weights are separate from model-based event probabilities and are tested with equal/cautious alternatives. The bridge does not complete company valuations or change historical model calibration.
