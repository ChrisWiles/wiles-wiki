---
name: ai-research-monitor
description: Refresh AI capability, recursive improvement, agent adoption and infrastructure research; compare with prior evidence and write the weekly AI investment research report.
---

# AI research monitor

Read `investing/mandate.md`, `investing/research-sources.md`, `investing/state/research.md`, the latest research report, `investing/research-queue.md` and `investing/report-contract.md`. Resolve all paths from this repository root. Apply the mandate over inherited generic investing-skill defaults.

## Weekly research

- Track the attempted report cutoff separately from each source/signal's verified-through date. Start each search from that source's last verified frontier, retain unresolved retry items across reports, and never advance coverage merely because a partial report was committed. On a same-date rerun, compare against the prior distinct dated report, then reconcile the existing same-date draft. On first run, verify the supplied thesis leads and create an explicitly scoped baseline. Search for important new primary research and corrections through the current cutoff, including skeptical and disconfirming evidence.
- Open original papers/articles and relevant methods/appendices. Identify actual publication date, revisions, authors, reliability levels, tasks, model/hardware assumptions and whether evidence is independently replicated. A self-reported lab result is useful but is not independent corroboration.
- Maintain nine signals: validated autonomous research; reliable task horizons; AI R&D productivity; paid agent adoption; inference economics/efficiency; HBM/packaging capacity; electrical/grid/cooling bottlenecks; infrastructure financing; economic productivity/labor diffusion.
- Distinguish engineering assistance, bounded agent self-modification, successor-model development and self-sustaining RSI. Keep AGI timing as scenarios. Preserve the workload-growth versus compute-efficiency equation; account for power efficiency separately. Do not equate cheaper API pricing, capability benchmarks and physical compute savings.
- Trace changed evidence through infrastructure demand, supplier pricing/margins, capital intensity and shareholder economics. Use `bottleneck-hunter` or `industry-research` only when an identified constraint needs deeper work. Evaluate resolution/substitution/oversupply as well as scarcity. Feed company-specific questions to `stock-analysis` and link decision-relevant uncertainty to existing R-IDs. Prioritize core long-term questions selected by `research-prioritization`; do not issue stock trades from research headlines.
- Update the ledger with claim, source/date, scope, evidence type, verification status, prior-to-current change, confidence and thesis implication. Use `verified-with-scope`, `partially-supported`, `contradicted`, `unverified` or `source-unavailable`; do not turn an inaccessible source into contradiction.
- Record important unchanged signals and remaining uncertainties. Failed source access is disclosed; a report may be partial, but cannot call unread claims verified. No forced bullish conclusion or weekly churn.

## Output

Write `reports/investing/research/YYYY-MM-DD.md` and update `investing/state/research.md` plus `reports/investing/index.md`. Follow the plain-language writing requirements in `investing/report-contract.md`: lead with what changed and why it matters to our investments; explain essential terms and numbers in short paragraphs. Keep the detailed evidence table, source backlog and tracking IDs in supporting material. Include bottleneck/demand implications, the bear case, next checks, cutoff, primary-source links, limitations and clear fact/forecast/inference distinctions. Preserve prior dated reports. First runs must identify baseline versus new developments.

Public output follows the mandate's publication rules. User-supplied investment essays may be saved under `investing/thesis-inputs/` and must remain labeled as research leads until verified. Household investment data is authorized for public reporting. The holdings references remain minimal.

For a scheduled run, hand the resulting state to `stock-analysis`; finish with `research-prioritization` and `decision-journal`, revise the report decision briefs, then follow `investing/publication.md`. For a read-only/ad hoc request, do not commit or push unless asked. A new report remains Markdown. The user also requested a visual web edition on this wiki; `investing/web-publication.md` explains its generated archive. Use `finance-report-design` in weekly-publication mode to check that research diagrams and chart takeaways preserve evidence, dates and uncertainty. No PDF, social publishing or paid API is required.

Every future visual edition uses the maintained October 17 design pattern, including later approved fixes. Supply plain-language research that fits the shared AI-to-shareholder diagram, preserving the distinction between capability, paid demand, profitable capacity and cash per share. Hand off to the stock workflow for the shared `finance-report-design/references/weekly-quality.md` browser and human-readability review; do not build a separate research website. Keep partial coverage and research uncertainty visible in the report and visual overview.
