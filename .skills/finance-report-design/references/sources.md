# Source review and maintenance

Reviewed October 17, 2026. These are design/implementation references, not investment evidence or independently tested guarantees of visual quality.

| Source | Assessment for this notebook | Decision |
| --- | --- | --- |
| [Anthropic frontend-design](https://github.com/anthropics/skills/tree/dbd4588f9e1033efb41dad4bef2f7947c8993d44/skills/frontend-design) | Focused guidance for deliberate layout, typography, plain-language UI and browser critique; no runtime required. General visual guidance needs financial semantics and our existing identity. | Installed unchanged in `.skills/frontend-design`, with its Apache-2.0 license. Use for authorized UI changes, with `finance-report-design` supplying financial constraints. |
| [TradingView Lightweight Charts skill](https://github.com/tradingview/lightweight-charts/blob/master/.github/skills/lightweight-charts/SKILL.md) | Official guidance for price/volume series, time/price scales, markers and version-specific APIs. Strong candidate for a verified swing-chart feature. It does not supply our portfolio model or decision narrative. | Keep as a documented candidate; no library or second trading interface needed for the current static forecast. Verify a pinned revision and license before any later installation. |
| [Impeccable](https://github.com/pbakaus/impeccable/tree/08d5b470495d242ca0470f4aeae1956c3a074f83) | Broader design critique/polish workflow. The reviewed distribution includes launchers, optional provider hooks and a design-catalog request workflow. More integration than this reporting task needs. | Reviewed README and workflow scope; not installed or executed. Revisit for a larger design-system project. |
| [Household Finance Dashboard Builder](https://github.com/lyndonkl/claude/blob/4acc337d4dbdb19da6469eb2504c16669c1cafa1/skills/household-finance-dashboard-builder/SKILL.md) | Relevant static weekly HTML concept, but assumes a different household schema, six budgeting panels and several sibling skills. Its default target-allocation behavior does not match our unapproved allocation targets. | Reviewed, not installed. Our companion skill is written for existing report/forecast files rather than importing that schema. |

The companion skill and chart-pattern reference are original repository-specific instructions. They link to these sources rather than copying their implementations. No third-party installer, hook or analytics code was added to the published site.

## Updating

Keep the installed Anthropic source pinned. `.skills/frontend-design/UPSTREAM.md` records its revision and hashes. On a requested update, inspect upstream changes and license first, compare them with our financial constraints, apply only reviewed changes, and rerun the relevant browser checks. Preserve local customizations or make their removal explicit. Weekly research never updates skill or chart-library source automatically.

Keep the finance skill tied to the actual renderer and data contract. When a repeatable failure is observed, add the smallest instruction or check that would have caught it; avoid accumulating generic design rules.
