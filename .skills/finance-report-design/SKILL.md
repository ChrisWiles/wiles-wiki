---
name: finance-report-design
description: Design and review the wiki's weekly investing web reports, portfolio charts, forecast ranges and financial diagrams. Use for the weekly visual publication check or when improving the investing notebook's UI, readability, mobile layout or chart interactions.
---

# Finance report design

Make the next investment decision easier to understand. Long-term AI infrastructure ownership comes first; swing trading is supplementary. A polished chart must preserve the evidence, scope and uncertainty of the written report.

## Choose the mode

- **Weekly publication:** read `investing/report-contract.md` and `investing/web-publication.md`; review the generated edition with the checks below. Use the maintained renderer. Improve the authorized Markdown and evidence, and record specific template improvements for later setup work. A weekly run does not edit skills, renderer/model source or historical forecasts.
- **UI or chart improvement:** also read the repo-local `frontend-design` skill and [chart patterns](references/chart-patterns.md). Inspect the existing page, CSS and actual data before proposing a short design plan. Build and inspect the result in a browser. The finance rules and this repository's established purpose take precedence over generic aesthetic suggestions.

For the researched options, pinned upstream source and update policy, see [sources](references/sources.md). No chart-library installation or external design service is required.

## Design for the actual reader

Chris should quickly find what changed, the recommendation and its conditions, the dollar downside, and the next question worth researching. Lead with that story; let detailed tables and original reports support it. Do not replace an evidence gap with a reassuring green badge.

Retain a consistent identity across dated editions. The current notebook uses an ivory surface, dark green ink, serif headings and restrained comparison colors. Keep readable body text, short paragraphs, aligned numbers and generous space around charts. Visual changes should solve an observed problem; do not change fonts or palettes every week just to look new.

Prefer one useful visual per question:

| Reader's question | Preferred visual |
| --- | --- |
| What could these holdings be worth? | Forecast range with median and starting value; six-horizon data table |
| How sensitive is that result? | Assumption control or small multiples on a shared scale; label alternatives as unweighted |
| Where is our exposure concentrated? | Sorted bars or a short allocation bar, with dollar values and a stated denominator |
| What would justify buying or trimming? | Valuation range or condition with dated inputs; distinguish fair value from an entry trigger |
| How does AI progress reach shareholders? | Evidence-linked capability → paid demand → capacity → cash-per-share diagram |
| Is a swing setup ready? | Verified daily price/volume with weekly context, events and invalidation; no invented candles or targets |

Read the chart-pattern reference when creating or changing one of these visuals. Text is often better than a chart for a recommendation, blocker or small source checklist.

## Keep the financial meaning intact

- Bind numbers to the canonical dated Markdown and exact frozen forecast ID. Label valuation date, position dates when different, USD, nominal/pre-tax basis, covered assets and exclusions. Never call the stock/ETF subset household net worth.
- Preserve the no-deposit/no-withdrawal baseline and original forecast vintages. Forecast changes, market performance and cash flows are different quantities. Do not invent a return history from a few holdings snapshots.
- Use "conditional model estimate" for the model's event probabilities. Keep actual validation limitations close to the outlook; an 80% modeled band is neither a guaranteed path nor a verified 80% household success rate.
- Compare like with like: same units, horizons, denominator and axis scale when switching assumptions. Separate ending loss from drawdown along the way, and subjective scenarios from calibrated probabilities.
- Count ETF values once. Only show issuer look-through when sponsor weights and dates are verified. Do not combine direct positions and fund constituents as though they were additional wealth. Options are not share equivalents without supported contract/exposure data.
- Recommendations are proposals unless execution is verified. Do not imply trades, target weights, risk budgets, tax savings or AGI dates the evidence does not establish.

## Preview and publication check

Run `node scripts/build-investing-site.mjs`. Inspect the latest edition and at least one older edition, using the repository's existing browser/preview tools. Check at phone and desktop widths; include 320 CSS px when changing layout. Keep scratch screenshots under ignored `private/investing/scratch/`.

1. **Understand it:** the opening answers what matters now; each chart has a plain-language takeaway, units, date, scope and nearby uncertainty.
2. **Reconcile it:** chart, readout, table and source JSON agree for all six horizons and each available assumption. Switching assumptions preserves the comparison scale. Allocation segments use the documented denominator. Zero, tiny probabilities and missing values remain distinguishable.
3. **Use it:** horizon buttons, assumption selector, holdings search, archive and deep links work with keyboard as well as pointer. Focus stays visible after redraw; no essential value is hover-only. Read the exact data without using the picture.
4. **Read it:** mobile labels do not collide or shrink into illegibility; no document overflow. Tables may scroll inside a labeled container. Color is reinforced by text, line style or position. Check relevant text/graphic contrast rather than treating a palette as automatically accessible. Respect reduced motion.
5. **Preserve it:** an older edition retains its own evidence and forecast identity; no future forecast is backfilled. Complete source reports and model limitations remain reachable. No browser errors or new unapproved external data requests.

If a check cannot be performed, record what remains unverified. Correct misleading data/labels before publication; a purely cosmetic improvement can be queued without blocking otherwise valid reports. Do not hide consequential source gaps to pass a visual check.

Use the existing publication protocol and verify the deployed dated URL. A screenshot or successful push alone does not establish that the web edition is live. Record design-improvement proposals only when they name the observed problem, the affected decision and an observable acceptance check.
