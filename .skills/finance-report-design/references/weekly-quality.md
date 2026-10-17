# Weekly design and quality standard

The October 17, 2026 design pass (`d523a0f`) establishes the report pattern. Use the current maintained renderer in the fetched worktree, including later approved fixes; do not freeze the implementation at that old commit or copy one week's HTML. The dated archive and complete source reports remain part of each edition.

## Design to retain

- Decision brief first, followed by portfolio outlook, exposure, the AI-to-shareholder thesis and complete reports.
- Quiet ivory/green notebook identity, readable serif headings, aligned numbers, native controls, clear dates and scope. Keep substantive coverage limits visible.
- Both forecast views: **Over time** and **By horizon**. They share a fixed dollar scale across all assumptions. Readouts, risk explanations, ending-outcome bins, assumption comparisons and the exact-data table change together.
- Exposure bars show percentages and dollars against the recorded stock/ETF denominator. Expandable account/holdings tables preserve every recorded symbol, unknown values and snapshot dates.
- Conditional model language, actual validation limitations and exclusions stay close to the outlook. No visual treatment implies a completed company valuation, calibrated household odds or an executed trade.

The stock report's opening supplies the decision brief: a summary paragraph, up to three highest-impact recommendation paragraphs whose first sentence is bold, then any coverage/change context before the first `##` heading. A recommendation paragraph explains the reason and conditions after its bold sentence. Do not invent three recommendations to fill the layout. The renderer preserves other opening context and links the full report.

## Repeatable browser check

From the fetched run worktree, first build with `node scripts/build-investing-site.mjs`. The skill's maintained helper serves the generated files on a temporary loopback port and closes its server/browser on completion:

```sh
node .skills/finance-report-design/scripts/check-report.mjs \
  --date YYYY-MM-DD \
  --playwright-module /absolute/path/to/playwright/index.mjs \
  --browser-channel chrome \
  --output-dir private/investing/scratch/visual-qa/YYYY-MM-DD
```

Use an available Playwright installation; the helper defaults to importing `playwright` when `--playwright-module` is omitted. In Codex, locate the bundled Node dependency directory with `load_workspace_dependencies`, then pass its Playwright entry point if the repo has no local package. Use an installed browser/channel. This check does not require adding a chart library, downloading a browser or adding project dependencies each week.

After the Pages deployment succeeds, rerun the same helper with:

```sh
  --base-url https://chriswiles.github.io/wiles-wiki/investing-notebook/
```

Keep the same date, worktree and ignored output directory. The helper compares the browser's forecast with the canonical committed JSON, so run it from the current publication worktree, not a stale checkout. `--base-url` skips the local server. It performs read-only checks, writes local evidence and never commits, pushes or places orders.

The helper checks:

- All six horizons × every available assumption × both views (currently 60 combinations), exact displayed values/outcome bins and shared axes.
- Holdings, account values, exposure dollars/percentages and the covered starting value; forecast identity and unchanged historical forecast boundaries.
- Chart-point and comparison-button keyboard focus after redraw, horizon controls, search and empty results, archive/deep links and browser errors.
- 320, 390, 768, 1024 and 1440px layouts, including expanded source tables; readable source data without JavaScript.
- Selected text contrast against the actual rendered backgrounds. Screenshots support the remaining visual review.

An edition without an eligible forecast must state that gap in its report. The helper records forecast checks as not applicable, rather than manufacturing a chart or claiming numerical coverage. Its summary reports the number actually tested; it is not evidence that missing forecast work was completed.

## Human readability and visual review

Open the generated desktop/phone screenshots and the report opening. Check that the recommendation, reason, action conditions and next question are understandable without decoding research IDs or shorthand. Explain financial terms and connect the dollars to a decision. Confirm chart labels are legible, ranges are not portrayed as guarantees, scope/coverage limits remain visible, and the thesis diagram explains questions rather than asserting causation. Inspect contrast for graphics/focus states and color-independent cues; the automated text sample is not a full accessibility audit.

Keep `summary.json` and screenshots under ignored scratch storage. Record a compact **Visual review** result in the dated stock report's supporting detail: numerical combination count, layouts/interactions checked, human readability review, and any failed or unverified checks. Do not publish machine paths or screenshots merely to prove a run happened.

Correct misleading content and repeat affected checks before publishing. A renderer failure is a publication blocker; retain the authored reports for recovery and report the failure, since weekly runs cannot edit renderer/skill/model source automatically. Pure cosmetic suggestions can be queued. Missing browser access or an unperformed visual review must be disclosed as unverified and surfaced for attention; retain the draft rather than publishing an unchecked web edition. Independent research may continue. After publishing, verify the deployment and live checks before sending the report/archive links.

## AGI layer acceptance

When the stock report has an exact A-ID marker, verify the matching frozen scenario JSON, P-ID, holdings/input hashes, evidence/valuation dates and covered starting wealth. The current addition checks 18 horizon/weight combinations and 90 branch values, plus their fixed bar geometry and six-horizon table, independently of the original 60 market-model combinations. Test all available combinations if these counts change. Check capability versus adoption dates and visible analyst-weight labels, working/equal/cautious comparisons, price-only scope and missing underwriting. A branch endpoint range is not a confidence band; endpoint weights are not calibrated event odds. Confirm old editions receive no future AGI layer and all data remain available without JavaScript. Review the AGI introduction and branch-chart screenshots at 390px and 1440px, plus overflow at every required width. Record actual results; failures retain recoverable work.
