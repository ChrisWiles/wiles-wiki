# Weekly investing research

The repo-local workflows run sequentially every Saturday at 9 AM America/Chicago:

1. `research-prioritization` selects the core decision questions worth deeper work.
2. `ai-research-monitor` refreshes primary AI research and the infrastructure thesis.
3. `stock-analysis` evaluates long-term ownership, valuation and exposure, with swing trading as a supplement.
4. `research-prioritization` reranks next actions; `decision-journal` records material proposals, confirmed choices and due reviews.

They compare against prior state, create dated Markdown reports, and commit/push only their report, state, queue and journal changes under the [publication protocol](publication.md). [Reports](../reports/investing/index.md), [household holdings](../.skills/holdings/references/accounts.md) and supported allocation analysis are public with the user's authorization.

The [mandate](mandate.md) defines the 2026–2035 thesis, research universe, uncertainty rules and separation of long-term investing from swing trading. [Sources](research-sources.md) are starting points, not a whitelist or proof that seed claims are true.

`holdings` is the committed position record. Generic investing skills support deeper work when needed; weekly runs do not require every installed skill or a paid broker integration.

Start with the [research queue](research-queue.md), [decision journal](decisions/index.md) and [report contract](report-contract.md) to see what to investigate next and why.

Portfolio recommendations include [tax-aware implementation](tax-review.md) when relevant. The [confirmed tax context](tax-context.md) identifies all three accounts as US taxable; lot dates/basis and personal rate inputs still need evidence. Open tax-lot reports are preferred; useful PDF/transaction exports can be imported without sharing passwords.

The [October 16 E*TRADE snapshot](records/2026-10-16-chris-etrade.md) saves its exact stock/ETF quantities, Treasury face amounts, cash, margin balance and 69 acquisition-date/price-paid lot rows. Positions are in the minimal holdings record; values and lot details are separate. Read this retained data before requesting E*TRADE quantities again. Adjusted tax basis and transaction history remain incomplete, including two lots showing zero price paid.

Weekly reviews also include a [portfolio outlook](projections.md) at six months and one through five years. The user confirmed no new deposits or withdrawals for the baseline. `portfolio-manager` owns the calculation and `stock-analysis` explains the decisions it supports. The researched method is in place; a numerical forecasting engine and validation are still needed. Incomplete inputs limit the covered assets rather than becoming invented household values or probabilities.
