# Visual investing reports

Authorized October 17, 2026: retain Markdown and create a polished, public web edition of each report, with charts/diagrams and a dated archive on the existing wiki. This extends the weekly workflow within this repository; it does not authorize another hosting service, brokerage activity or third-party messages.

Live archive: **https://chriswiles.github.io/wiles-wiki/investing-notebook/**

A dated edition is `https://chriswiles.github.io/wiles-wiki/investing-notebook/reports/YYYY-MM-DD/`. Its AI, stock and projection sections support `#research`, `#stocks` and `#projections` deep links. The native Quartz entry is `/wiles-wiki/investing/`.

## Canonical sources

- `reports/investing/research/YYYY-MM-DD.md`
- `reports/investing/stocks/YYYY-MM-DD.md`
- Optional `reports/investing/projections/YYYY-MM-DD.md`
- Reviewed, dated `investing/models/inputs/YYYY-MM-DD[-vN].json`
- Immutable `investing/forecasts/P-YYYY-MM-DD-vN.json`

Do not publish raw broker documents, account identifiers, credentials or private tax profiles. Household holdings, owner labels and supported calculations are authorized public content. Model inputs contain reviewed price/derived-return data and quantities; original downloads remain ignored.

## Build and verify

`node scripts/build-investing-site.mjs` renders canonical reports and frozen numerical results to ignored `public/investing-notebook/`. Sources/templates live in `investing/web/`. The Pages workflow builds Quartz, runs the renderer, uploads the combined `public/` artifact, then deploys it.

Each dated edition includes readable decisions, an AI-to-cash diagram, complete source reports and any eligible frozen forecast. Interactive forecast controls use the same values as the Markdown: six horizons, assumption comparisons, ranges, loss/drawdown probabilities and holdings search. Exclusions and validation quality stay visible. A prior edition cannot use a future-dated forecast. If a later report carries an older forecast, keep the forecast's valuation date explicit. No old forecast or evidence is rewritten merely to improve a chart.

For a weekly run, write permitted dated inputs/results/reports and state, preview the renderer, apply the repo-local [finance report design skill](../.skills/finance-report-design/SKILL.md) in weekly-publication mode, and apply `publication.md`. Verify chart/table/source agreement for all horizons and assumptions, clear scope and uncertainty, mobile/desktop readability, keyboard interaction and an older edition. Record any checks that could not be completed. The site index/history is generated automatically; no weekly template edit or generated HTML commit is needed. Model/code/skill changes remain a separately authorized setup task; queue concrete design improvements with an acceptance check.

For an authorized UI change, use `finance-report-design` together with the installed `frontend-design` skill. Keep the established identity consistent across editions; choose charts by the reader's decision, not for decoration. The finance skill's [source review](../.skills/finance-report-design/references/sources.md) records the researched upstream options and why they were selected or deferred.

For renderer changes, test desktop and phone layouts, chart/horizon/assumption controls, source/deep links, historical-date boundaries and browser errors. A push alone is not evidence of a live page: check the Pages deployment for that commit, then fetch/open the dated URL and verify the expected content. If deployment fails, retain the commit and report the actual failure; do not claim the page is live. Publish only within the current repo and existing Pages site.

## Visual structure

The web edition leads with the original report's decision brief, then the portfolio outlook, exposure, AI-to-shareholder thesis and full source reports. `investing/web/views.mjs` supplies the presentation; `app.js` and `style.css` provide shared interactions and styling. Source reports and frozen model files remain canonical.

The forecast offers an over-time view and a six-row horizon comparison using the same fixed dollar scale across all assumptions. Readouts, outcome bins, risk explanations, sensitivity comparisons and the exact-data table update together. Separate ending-value loss from drawdown along the way. Alternative assumptions carry no assigned scenario probability. Exposure bars share a zero-to-100% denominator for the recorded stock/ETF subset, with exact dollar labels; account values are not complete account balances. Detailed tables are expandable and remain available without JavaScript.

Retain the quiet ivory/green notebook identity, readable serif headings, aligned numbers and native keyboard controls across editions. Check 320px through desktop, all six horizons and assumptions in both chart views, chart-point and comparison-button focus after redraw, search/empty results, expanded source tables, deep links and a no-JavaScript view. Shared CSS/JS URLs use a content version so an updated page requests the matching assets. A presentation update may restyle archived pages but must preserve their original evidence and forecast identities.

This is the standard for every future weekly edition. Use the current fetched renderer with later approved fixes, rather than copying October 17 HTML or pinning future runs to an old implementation. Run the maintained [weekly quality checks](../.skills/finance-report-design/references/weekly-quality.md) before commit and against the deployed date afterward. The helper produces ignored local evidence; screenshot inspection and plain-language readability review remain separate requirements. Its current forecast matrix has 60 combinations, but future runs test all available combinations and report the actual count. Preserve report drafts and surface required-check failures or unavailable verification; do not silently skip checks or automatically modify renderer/skill source.

For a stock report with projections, include the non-rendered marker `<!-- forecast-id: P-YYYY-MM-DD-vN -->` naming its exact frozen result. The web edition uses that identity, never whichever newer forecast happens to exist later.
