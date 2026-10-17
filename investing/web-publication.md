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

For a weekly run, write permitted dated inputs/results/reports and state, preview the renderer, and apply `publication.md`. The site index/history is generated automatically; no weekly template edit or generated HTML commit is needed. Model/code/skill changes remain a separately authorized setup task.

For renderer changes, test desktop and phone layouts, chart/horizon/assumption controls, source/deep links, historical-date boundaries and browser errors. A push alone is not evidence of a live page: check the Pages deployment for that commit, then fetch/open the dated URL and verify the expected content. If deployment fails, retain the commit and report the actual failure; do not claim the page is live. Publish only within the current repo and existing Pages site.

For a stock report with projections, include the non-rendered marker `<!-- forecast-id: P-YYYY-MM-DD-vN -->` naming its exact frozen result. The web edition uses that identity, never whichever newer forecast happens to exist later.
