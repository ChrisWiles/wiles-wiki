# Weekly reports for decisions

Long-term AI infrastructure ownership is the core objective. Swing trading is a supplement with no approved numerical sleeve or per-trade risk budget. Reports should make decisions and unresolved questions easy to find without pretending incomplete analysis is a recommendation.

## Write for Chris

Write like a clear, direct colleague explaining the investments. The main report should answer: what changed, why it matters to our holdings, what you recommend doing, and what would change your mind. Use short paragraphs and a few concrete takeaways; do not open with a dense table of analytical fields or a long coverage disclaimer.

- Use everyday words. Explain an essential financial term or acronym when it first appears. For example, replace 'replacement-adjusted funding bridge' with 'how much financing the company needs, including the cost of replacing its chips.'
- Connect numbers to their meaning. Explain why cash flow, an earnings multiple or concentration changes a decision; avoid strings of figures that leave the reader to draw the conclusion.
- Say buy, hold, trim, wait or research further in normal sentences, with the reason and any important condition. Keep proposals distinct from actions the user actually took.
- Put consequential uncertainty beside the recommendation in plain language. State missing inputs and their effect once; avoid repeating the same qualification throughout the report. Preserve all material limits, dates and evidence.
- Put the full ticker coverage, detailed calculations, technical indicators, source-check records and research/decision IDs in an appendix or linked supporting state. The opening should use descriptive links and company names rather than internal tracking labels.
- Use tables for comparisons that are easier to read that way. Keep explanations in prose, link sources near the claims they support, and remove repetitive summaries, canned transitions and process jargon.

Before publishing, read the opening as the investor: can Chris understand the conclusion and next action without decoding our workflow or financial shorthand? Rewrite anything that fails that check. This writing pass changes presentation, not evidence, uncertainty or recommendations. Apply it to future reports; do not rewrite historical reports merely to match the new style.

## Research report

Open with a plain-language assessment of the AI infrastructure thesis and what changed since the prior distinct report. Explain the effect on our investments, including the strongest evidence against the thesis. Keep capability growth, economic demand, compute efficiency and company economics distinct without making the reader decode those categories. Link consequential scientific questions to the research queue; keep R-IDs and the detailed signal/source ledger in supporting material. Explain any material coverage limit briefly, with the remaining source backlog in the appendix or state; a committed partial report is not completed coverage.

## Stock report

Start with a few readable recommendations and their reasons. For each material proposal, make clear which holdings/accounts it concerns, whether it is long-term or a swing trade, the evidence/date, a valuation/price condition if supportable, what would change the recommendation, and the next action or missing input. Spread this information across natural sentences and supporting details rather than packing every field into the opening table. Appropriate stances include consider add, hold after review, consider reduce/exit, wait, research first, or insufficient evidence. These are analytical proposals, not executed trades. Unassessed companies cannot be labeled hold/buy merely to fill the brief.

Then include:
1. **Core portfolio decisions:** material thesis/economics/valuation changes and what would change the conclusion. Separate business quality from today's price.
2. **Exposure and implementation:** account and supported household/ETF look-through findings, with known-subset denominators and missing quantities clear. For proposed portfolio changes, apply [tax-aware review](tax-review.md): show lot/holding-period status, realized-gain or supported incremental-tax scenarios, household wash-sale conditions and less disruptive alternatives. Missing tax inputs leave implementation conditional. Household investment data is authorized for publication.
3. **Portfolio outlook:** apply [portfolio projections](projections.md) at six months and one, two, three, four and five years. Use the confirmed no-deposit/no-withdrawal baseline. Explain what the investments could be worth, the range around that estimate, the chance of loss and any defined target, and what changed in the assumptions. Keep full household and known-subset forecasts distinct. Show model-based probabilities only when supported by reproducible inputs, calculation and validation; explain remaining model uncertainty. Include downside-path and benchmark comparisons in supporting detail. If the model or inputs are not ready, give the specific status and useful conditional scenarios without filling the table with invented odds. Preserve prior fixed-date forecasts for scorekeeping.
4. **Prioritized next research:** normally up to three active questions from the queue, why now, decision affected, completion criterion, owner/trigger and R-ID. Show important awaiting-user inputs separately so they do not stop independent work.
5. **Decision changes and follow-up:** proposed recommendations, user-confirmed choices, verified executions and due journal reviews remain distinct. Link D-IDs; unchanged weeks do not manufacture decisions.
6. **Supplementary swing watch:** conditional setups with reliable data, invalidation and event checks, or a no-trade conclusion. Missing risk inputs prevent sizing; tactical moves alone do not change the core thesis.
7. **Coverage and next events:** brief check of every symbol, deep-dive rotation, source dates/gaps and verified event triggers. A due-date guess is not a sourced earnings calendar.

Limit emphasis to developments that could change a decision. Preserve prior dated reports; on same-date reruns compare to the prior distinct date. Evidence-backed 'wait' is a useful result; a data gap should produce 'research first/insufficient evidence', not a manufactured investment judgment.

## Journal and learning

Capture original reasoning before outcomes are known, with a minimal material-evidence snapshot and immutable committed report links where available. Same-date report revisions must leave the original decision basis inspectable. Evaluate process, thesis observations and actual outcomes separately. Returns require verified execution and appropriate measurement. Use review triggers and stable review identity rather than logging identical entries every week. Repeating a run with identical evidence creates neither a second decision/review nor a journal-only commit. Recover retained unpublished proposals before assigning new IDs after publication failure. Record skill-improvement ideas only when a concrete workflow failure is repeatable and the proposed change has an observable acceptance criterion.


## Visual editions and forecast preservation

The user requested a polished web edition and dated archive in addition to Markdown. Follow [web publication](web-publication.md). Each edition explains the report with charts, a thesis diagram, readable decisions and complete source reports. Numerical views retain the same scope, assumptions, probabilities and validation limitations as the Markdown. Historical editions cannot receive later forecasts. GitHub Actions generates the site from canonical files; weekly runs do not edit rendering/model code automatically. After publishing, verify the Pages deployment and dated public URL.

For a stock report with projections, include the non-rendered marker `<!-- forecast-id: P-YYYY-MM-DD-vN -->` naming its exact frozen result. The web edition uses that identity, never whichever newer forecast happens to exist later.
