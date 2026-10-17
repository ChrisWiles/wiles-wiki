---
name: stock-analysis
description: Analyze saved holdings for long-term AI infrastructure ownership, tax-aware portfolio changes and conditional swing setups; refresh company state and write the weekly stock report.
---

# Stock analysis

Read `investing/mandate.md`, the latest research report, `investing/state/companies.md`, the last stock report, `investing/research-queue.md`, `investing/decisions/index.md`, `investing/report-contract.md` and `.skills/holdings/SKILL.md`. Read the committed account references; use newer user-provided source-checkout quantities when present. Apply the mandate over inherited generic-skill defaults.

## Universe and evidence

- Deduplicate issuer research across accounts while keeping account positions separate. Analyze all equity/ETF symbols from available holdings each week; do not silently replace the universe with only attractive AI names. If holdings files are missing, use prior public coverage and say positions could not be refreshed. Comparison stocks stay labeled watchlist candidates.
- Resolve ambiguous symbols and corporate actions with exchange/issuer evidence before assigning an identity. Preserve CBRS/SPCX verbatim until resolved. Research GOOG/GOOGL together but value the listings separately. Identify actual DRAM/HBM versus NAND exposure; keep non-AI businesses in their own context.
- Refresh date-stamped prices and daily/weekly OHLCV from a documented feed. Record source, session, timezone, adjustments, corporate-action treatment and last completed trading date. A stale quote or weekly image cannot establish a current daily swing setup. If data is unavailable, omit invented indicators and levels.
- Check material filings, earnings/guidance, announcements and the upcoming earnings/macro calendar. Reuse previously verified unchanged fundamentals with their fiscal period and age; distinguish no new filing from no business change. Cross-check decision-critical valuation inputs, share counts and basis. Never estimate figures solely to fill a table.

## Long-term view

For each covered company, update the current thesis, business/segment drivers, bottleneck or demand role, competitive/architecture risks, margins, cash conversion, backlog quality/cancellations, balance sheet, financing, dilution and valuation. Consider supplier versus operator economics; particularly test debt, utilization, rental-price pressure, replacement capex and economic GPU depreciation for neoclouds.

Compare bull/base/bear assumptions. Give an explicit thesis status: strengthening, intact, weakening, broken or insufficient evidence, with the source-backed change and falsification trigger. Business quality and price attractiveness are separate judgments. Do not manufacture a ten-year return from an arbitrary exit multiple; use verified inputs and the local exact-arithmetic tools when returns are modeled.

Cover ETFs with current sponsor look-through, duplication and issuer/sector factors. Discuss Treasury maturities as a liquidity/duration sleeve; no face amounts, yields or total account weights without inputs.

## Decision support

Follow `investing/report-contract.md`: explain the main recommendations, reasons, what would change your mind and missing inputs in everyday language. Use short paragraphs rather than a dense opening decision table; explain financial terms and why the numbers matter. Put detailed calculations, full ticker/technical tables and R-/D-IDs in supporting material, using descriptive links in the main narrative. An unassessed holding is insufficient evidence, not an automatic hold recommendation. Review every symbol briefly, but use the queue to choose deeper work and put urgent core-risk questions ahead of supplementary swings. Preserve account scope and never infer the role of an existing position from ticker alone.

## Portfolio projections

Use `portfolio-manager` and `investing/projections.md` for the user's six-month and one-, two-, three-, four- and five-year outlook. The confirmed baseline assumes no new deposits or withdrawals. Explain the outcome range, defined event probabilities, downside in dollars and what changed since the prior forecast; distinguish conditional model estimates from subjective scenario assumptions and actual validation evidence. Compare proposed changes on the same paths and basis. Missing complete household inputs may permit a clearly labeled stock/ETF subset forecast; missing a reproducible, checked model requires an explicit status and conditional scenarios, not invented probabilities. Preserve earlier fixed-date forecasts. Put methods and scorekeeping in supporting detail, with the implications for ownership in the main report.

## Swing view

Use `technical-analyst`, `vcp-screener`, `position-sizer` and `backtest-expert` as needed. Evaluate entries from daily data with weekly context. A fundamental long-term thesis is not an entry signal.

For credible candidates, record setup type, trigger, invalidation, exits, time horizon, liquidity, earnings/gap risk and reward/risk under plausible costs. Classify conditional watch, actionable setup, avoid or no trade. Without fresh data, earnings checks and adequate risk inputs, do not classify an executable or sized trade. Numerical probabilities require a calibrated method; a chart scenario alone is not a probability estimate.

Sizing requires user-approved per-trade risk, total equity, reliable entry/stop, cash/margin constraints and portfolio exposure. Do not default to 1% risk or concentration limits. Missing sizing inputs do not prevent qualitative analysis. Include existing option contracts in portfolio analysis and request verified premiums/Greeks before modeling them. No automatic orders.

## Tax-aware implementation

Read `investing/tax-context.md`; for tax-sensitive changes follow `investing/tax-review.md`. The three recorded accounts are US taxable brokerage accounts. Use verified open lots to assess each lot's adjusted basis, holding period, eligible long-term sale date and alternative sale/rebalancing methods. Check loss-sale conflicts across both spouses' accounts, including relevant options, reinvestment and recurring purchases. Never clear a household wash sale from a single broker flag or assume different ETF/share-class tickers establish a safe replacement.

Recommend portfolio changes when evidence supports them, distinguishing the investment rationale from tax/implementation conditions. Compare waiting, specific lots, staged sales and new-cash rebalancing where relevant; do not let an unsupported tax-savings claim drive a decision. Without lot/rate/history inputs, give a conditional investment recommendation and state exactly which implementation questions remain unknown. Keep tax details separate from the minimal holdings files, and record material tax assumptions/review dates in the decision journal.

## Weekly report and state

Write `reports/investing/stocks/YYYY-MM-DD.md`, update `investing/state/companies.md` and `reports/investing/index.md`. The user authorizes public household portfolio reporting. Include account-owner labels, recorded quantities, option/Treasury positions and supported valuation/allocation calculations where useful. Keep actual holdings and comparison candidates clearly separated.

Run `research-prioritization` after the company refresh and `decision-journal` for material new recommendations or due reviews. Update the queue/journal and link them from the decision brief. Distinguish analytical proposals, user-confirmed choices and verified executed actions. No-change weeks may have no new journal entry.

Include: cutoff/data completeness; material weekly changes; a coverage table with long-term status, valuation/data status and swing status; selected material company deep dives; shared-factor/ETF overlap; conditional setup watchlist or no-trade conclusion; thesis invalidation checks; next-week earnings/events; primary sources. Mark any skipped or unresolved coverage clearly. Review every symbol briefly each week; rotate deeper coverage according to earnings, thesis changes and risk rather than rewriting every thesis from scratch.

Include account-level calculations in the dated stock report and update `investing/state/portfolio.md`. Keep intermediate calculations under ignored scratch storage. Define account versus household versus known-securities denominators; missing E*TRADE quantities/cash/option marks prevent complete household weights. Reports never update holdings automatically. Compare with the previous distinct dated stock report and retain historical public reports. On a same-date rerun, reconcile the current draft against that earlier report rather than comparing it with itself. Initial reports may be explicitly labeled onboarding/coverage baselines; do not present them as completed live stock research.

Follow `investing/publication.md` only for the authorized scheduled workflow or an explicit commit/push request. Use the current research state with its cutoff; if research failed, disclose that the state was not refreshed.


## Visual report edition

The user requested a web edition alongside Markdown. Follow `investing/web-publication.md`: write the dated stock/research reports and available projection report, link the frozen forecast and keep model exclusions/validation beside the numerical outlook. Run `node scripts/build-investing-site.mjs` to preview the archive. CI builds the visual pages from canonical Markdown/JSON after Quartz; do not stage ignored `public/` or rewrite old forecasts to populate the archive. Verify the deployed dated URL before claiming the visual report is live.

For a stock report with projections, include the non-rendered marker `<!-- forecast-id: P-YYYY-MM-DD-vN -->` naming its exact frozen result. The web edition uses that identity, never whichever newer forecast happens to exist later.
