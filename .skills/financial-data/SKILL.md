---
name: financial-data
description: Verify dated investment research inputs against original filings and independent corroboration, with explicit gaps, accounting basis and exact arithmetic.
---

# Financial data

Read `investing/mandate.md`. Prefer SEC/issuer filings, earnings releases and official market/exchange data. Aggregators are secondary cross-checks, not primary filings. An IR release and aggregator repeating the same filing are not independent evidence.

For decision-critical valuations and return models, cross-check inputs independently where possible and reconcile material differences before calculating. For a single authoritative filing figure or a lab self-report, retain the fact with its source and scope, disclose absent independent corroboration, and lower conclusion confidence when that gap matters. Do not fabricate a second source or block an honest partial weekly review simply to fill a verification table.

Keep period/date, currency, units, listing/share class, diluted versus basic shares, trailing versus forward, GAAP versus adjusted, fiscal versus calendar periods and enterprise versus equity value consistent. Distinguish restatements and corporate actions. Zero denominators or incompatible bases are not meaningful percentage comparisons.

Use exact arithmetic helpers under `.skills/_support/ai-value-investing-agents/tools/` for material valuation/return calculations. For ten-year returns use the terminal-value audit instead of selecting an arbitrary exit multiple. Record only the inputs, calculation and checks that matter to the decision. Do not label a financial audit passed if it was not run or if inputs remain unverified.

Household quantities and account-level calculations are authorized for public reports. Verify prices and instrument details, preserve missing quantities, and state the denominator used for partial weights. Keep credentials and unrelated private documents out of reports.

For tax-sensitive implementation, use `investing/tax-review.md`: reconcile open lots to same-date positions and broker-adjusted basis/term records before calculating gains. Acquisition dates cannot be inferred from an aggregate position or percentage return. Refresh official tax rules for the applicable year; distinguish investment gain estimates from personalized incremental tax estimates. Keep raw broker documents and personal tax-profile inputs in ignored local storage.
