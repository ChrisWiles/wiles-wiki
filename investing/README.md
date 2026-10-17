# Weekly investing research

The repo-local workflows run sequentially every Saturday at 9 AM America/Chicago:

1. `research-prioritization` selects the core decision questions worth deeper work.
2. `ai-research-monitor` refreshes primary AI research and the infrastructure thesis.
3. `stock-analysis` evaluates long-term ownership, valuation and exposure, with swing trading as a supplement.
4. `research-prioritization` reranks next actions; `decision-journal` records material proposals, confirmed choices and due reviews.
5. `finance-report-design` checks the generated visual edition for readable financial charts, correct comparisons, clear uncertainty and phone/keyboard usability before publication.

They compare against prior state, create dated Markdown reports, and commit/push their reviewed reports, frozen model inputs/results, state, queue and journal changes under the [publication protocol](publication.md). [Reports](../reports/investing/index.md), [household holdings](../.skills/holdings/references/accounts.md) and supported allocation analysis are public with the user's authorization.

The [mandate](mandate.md) defines the 2026–2035 thesis, research universe, uncertainty rules and separation of long-term investing from swing trading. [Sources](research-sources.md) are starting points, not a whitelist or proof that seed claims are true.

`holdings` is the committed position record. Generic investing skills support deeper work when needed; weekly runs do not require every installed skill or a paid broker integration.

Start with the [research queue](research-queue.md), [decision journal](decisions/index.md) and [report contract](report-contract.md) to see what to investigate next and why.

Portfolio recommendations include [tax-aware implementation](tax-review.md) when relevant. The [confirmed tax context](tax-context.md) identifies all three accounts as US taxable; lot dates/basis and personal rate inputs still need evidence. Open tax-lot reports are preferred; useful PDF/transaction exports can be imported without sharing passwords.

The [October 16 E*TRADE snapshot](records/2026-10-16-chris-etrade.md) saves its exact stock/ETF quantities, Treasury face amounts, cash, margin balance and 69 acquisition-date/price-paid lot rows. Positions are in the minimal holdings record; values and lot details are separate. Read this retained data before requesting E*TRADE quantities again. Adjusted tax basis and transaction history remain incomplete, including two lots showing zero price paid.

Weekly reviews also include a [portfolio outlook](projections.md) at six months and one through five years. The user confirmed no new deposits or withdrawals for the baseline. `portfolio-manager` owns the calculation and `stock-analysis` explains the decisions it supports. A working conditional engine, tests and limited proxy validation now exist in [models/README.md](models/README.md). The first five-year range covered only 7/12 proxy outcomes; household calibration is not established. Incomplete inputs limit the covered assets rather than becoming invented household values or probabilities.

Browse the [visual report archive](https://chriswiles.github.io/wiles-wiki/investing-notebook/) or the [wiki entry](https://chriswiles.github.io/wiles-wiki/investing/). The [web publication guide](web-publication.md) explains automatic dated editions.

The local [finance report design skill](../.skills/finance-report-design/SKILL.md) supplies chart patterns and weekly visual checks. [Anthropic's frontend design skill](../.skills/frontend-design/SKILL.md) is installed at a pinned revision for authorized layout/typography work. Both live in this repo so we can review and tailor them; weekly runs use the guidance without automatically changing skill or renderer source. The [source review](../.skills/finance-report-design/references/sources.md) explains the alternatives.
