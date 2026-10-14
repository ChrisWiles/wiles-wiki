---
name: research-prioritization
description: Rank unresolved investment questions by their ability to change long-term AI infrastructure decisions; maintain a focused research queue and identify real workflow gaps.
---

# Research prioritization

Read `investing/mandate.md`, `investing/state/research.md`, `investing/state/companies.md`, `investing/state/portfolio.md`, the latest distinct dated reports, `investing/research-queue.md` and `investing/decisions/index.md`. Use the holdings skill when position context matters. Long-term AI infrastructure investing is the core; swing trading is supplementary. Resolve paths from the repository root.

## Rank questions, not ticker popularity

Start each task with a specific unresolved question, the decision it could change, the evidence that would resolve it and the result that would change the conclusion. Prefer a task whose answer can alter capital allocation, expose a thesis break or avoid an irreversible mistake over another general company summary.

Assess decision impact, exposure relevance, uncertainty, time sensitivity and research effort. Use ordinal judgments and explain the ordering; do not multiply invented probabilities or unknown position weights into a precise score. Qualitative shared-cycle relevance is valid when household weights are incomplete, provided the exposure gap is disclosed.

Distinguish:
- **Data/input blocker:** quantities, cash, contract identity, risk budget or reliable prices are missing. Identify who can supply it; no new skill will manufacture that information.
- **Research question:** primary evidence, methods, valuations or business economics need investigation.
- **Workflow gap:** a repeatable capability fails despite adequate data; state an example and an observable acceptance criterion before proposing a skill change.

Prioritize material long-term thesis/valuation/exposure questions. Treat swing research as a bounded secondary section; it must not displace urgent core-risk work. An explicit user request or imminent verified event can override that ordering without changing the standing strategy. Do not infer that a particular holding belongs to a core or swing sleeve solely from its ticker.

## Queue discipline

Update `investing/research-queue.md`. Preserve stable IDs (`R-001`, etc.), carry unresolved work forward and retain a concise completed/deferred history. Each row needs priority/status, question and affected decision, evidence/trigger, next action and owner, timing, and the current blocker. Typical statuses: active, queued, awaiting-user, blocked-source, resolved or deferred.

Select a small workable set of active questions, normally up to three. An awaiting-user question is visible but does not consume an agent research slot; continue independent work. Resolve a task only when the evidence answers its question or the underlying decision is explicitly retired. No-update weeks preserve IDs rather than creating duplicate tasks. On a same-date rerun reconcile with the earlier draft and previous distinct report.

Before research, use the queue to select deeper work. After research and stock analysis, rerank with actual findings, link evidence, explain priority changes and feed the report's next actions. Every top priority must have a falsifiable completion criterion, not just 'research more'.

Add workflow/skill suggestions only when supported by a concrete failure or recurring burden; distinguish them from ordinary missing data. Weekly automation may suggest improvements but may not modify skills. New skill creation or trades require the applicable user instruction.

## Output

Write the queue and add a compact next-actions table to the dated stock report: rank, question, why now, decision affected, next evidence/action, owner/trigger and R-ID. The research report links scientific questions back to those IDs. When inputs prevent a decision, say exactly which input is missing. Avoid listing every uncertainty as an urgent task.

For authorized scheduled runs follow `investing/publication.md`; ad hoc analysis does not independently authorize push.
