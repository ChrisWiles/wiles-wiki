---
name: stock-analysis
description: Analyze the research universe from saved holdings for long-term AI infrastructure investing and conditional swing setups; refresh company state and write the weekly stock report.
---

# Stock analysis

Read `investing/mandate.md`, the latest research report, `investing/state/companies.md`, the last stock report and `.skills/holdings/SKILL.md`. Read private account references only from the source checkout. Apply the mandate over inherited generic-skill defaults.

## Universe and evidence

- Deduplicate issuer research across accounts while keeping private positions separate. Analyze all equity/ETF symbols from available holdings each week; do not silently replace the universe with only attractive AI names. If private files are missing, use prior public coverage and say positions could not be refreshed. Comparison stocks stay labeled watchlist candidates.
- Resolve ambiguous symbols and corporate actions with exchange/issuer evidence before assigning an identity. Preserve CBRS/SPCX verbatim until resolved. Research GOOG/GOOGL together but value the listings separately. Identify actual DRAM/HBM versus NAND exposure; keep non-AI businesses in their own context.
- Refresh date-stamped prices and daily/weekly OHLCV from a documented feed. Record source, session, timezone, adjustments, corporate-action treatment and last completed trading date. A stale quote or weekly image cannot establish a current daily swing setup. If data is unavailable, omit invented indicators and levels.
- Check material filings, earnings/guidance, announcements and the upcoming earnings/macro calendar. Reuse previously verified unchanged fundamentals with their fiscal period and age; distinguish no new filing from no business change. Cross-check decision-critical valuation inputs, share counts and basis. Never estimate figures solely to fill a table.

## Long-term view

For each covered company, update the current thesis, business/segment drivers, bottleneck or demand role, competitive/architecture risks, margins, cash conversion, backlog quality/cancellations, balance sheet, financing, dilution and valuation. Consider supplier versus operator economics; particularly test debt, utilization, rental-price pressure, replacement capex and economic GPU depreciation for neoclouds.

Compare bull/base/bear assumptions. Give an explicit thesis status: strengthening, intact, weakening, broken or insufficient evidence, with the source-backed change and falsification trigger. Business quality and price attractiveness are separate judgments. Do not manufacture a ten-year return from an arbitrary exit multiple; use verified inputs and the local exact-arithmetic tools when returns are modeled.

Cover ETFs with current sponsor look-through, duplication and issuer/sector factors. Discuss Treasury maturities as a liquidity/duration sleeve privately; no face amounts, yields or total account weights without inputs.

## Swing view

Use `technical-analyst`, `vcp-screener`, `position-sizer` and `backtest-expert` as needed. Evaluate entries from daily data with weekly context. A fundamental long-term thesis is not an entry signal.

For credible candidates, record setup type, trigger, invalidation, exits, time horizon, liquidity, earnings/gap risk and reward/risk under plausible costs. Classify conditional watch, actionable setup, avoid or no trade. Without fresh data, earnings checks and adequate risk inputs, do not classify an executable or sized trade. Numerical probabilities require a calibrated method; a chart scenario alone is not a probability estimate.

Sizing requires user-approved per-trade risk, total equity, reliable entry/stop, cash/margin constraints and portfolio exposure. Do not default to 1% risk or concentration limits. Missing sizing inputs do not prevent qualitative analysis. Keep existing option contracts in private analysis and request verified premiums/Greeks before modeling them. No automatic orders.

## Weekly report and state

Write `reports/investing/stocks/YYYY-MM-DD.md`, update `investing/state/companies.md` and `reports/investing/index.md`. Public reports use a research coverage list, not household ownership. Never include personal names, quantities, options positions, balances, allocations or trade history.

Include: cutoff/data completeness; material weekly changes; a coverage table with long-term status, valuation/data status and swing status; selected material company deep dives; shared-factor/ETF overlap; conditional setup watchlist or no-trade conclusion; thesis invalidation checks; next-week earnings/events; primary sources. Mark any skipped or unresolved coverage clearly. Review every symbol briefly each week; rotate deeper coverage according to earnings, thesis changes and risk rather than rewriting every thesis from scratch.

Write private account-level calculations only to ignored `private/investing/portfolio-latest.md`, separate from the public reports. Reports never update holdings automatically. Compare with the previous distinct dated stock report and retain historical public reports. On a same-date rerun, reconcile the current draft against that earlier report rather than comparing it with itself. Initial reports may be explicitly labeled onboarding/coverage baselines; do not present them as completed live stock research.

Follow `investing/publication.md` only for the authorized scheduled workflow or an explicit commit/push request. Use the current research state with its cutoff; if research failed, disclose that the state was not refreshed.
