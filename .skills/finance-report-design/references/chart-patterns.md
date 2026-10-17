# Financial chart patterns

Use the smallest visual that answers the decision question. The notebook is a static weekly publication, not a live trading terminal. Prefer its existing SVG/HTML renderer; a new dependency needs a concrete benefit that the current implementation cannot provide.

## Portfolio outlook

- Plot horizon on x, USD value on y, the median as a solid line and the p10–p90 range as a band. Label these as point-in-time ending-value percentiles. Quantiles joined across dates are not a simulated investor's path; a straight joining segment is a visual guide, not an additional monthly forecast.
- Mark the current starting value separately. Provide all requested horizons: six months and one through five years. Show dollars and cumulative return with consistent rounding; keep exact values in a table.
- Label the selected horizon and assumption. Keep y limits stable across assumption switches so a larger or smaller result does not look unchanged after autoscaling. Include an explicit scale label if using a log scale. Nonzero axes are acceptable for a line plot when clearly labeled and justified; magnitude bars begin at zero.
- A loss event needs a threshold and horizon: ending below the start, ending at least 20% down, doubling, and experiencing a 30% drawdown are distinct events. Do not turn overlapping probabilities into a stacked bar. Only mutually exclusive, exhaustive bins may form a 100% bar; reconcile the underlying probabilities before rounding.
- Round odds for readability without showing a small positive probability as zero. Do not show decimal precision suggesting calibration the model lacks. Historical-model sensitivity alternatives remain unweighted. The separately authorized AGI layer may show explicit provisional analyst judgment weights with rationale and sensitivity, never as empirically calibrated probabilities.
- Keep missing options/cash/bonds, tax/inflation treatment and validation evidence near the chart. A long optimistic tail or median alone is not a recommendation.

## Exposure and holdings

- Prefer sorted horizontal bars to many pie slices; keep short allocation bars for a few clearly labeled groups. Name "Other" and its contents in the table. Preserve each security in the full holdings view.
- State denominator and snapshot date alongside percentages. "Share of recorded stocks/ETFs" and "share of household assets" are not interchangeable.
- Separate security value, issuer exposure and economic factors. QQQ/QQQM overlap is a risk observation, not extra portfolio value. Show verified look-through as its own view with its own arithmetic.
- Right-align comparable numbers, use tabular numerals and meaningful currency/share precision. Do not turn a missing quantity into zero. A dash needs an explanation.

## Valuation and implementation

- Use a dot/range chart to compare current price with a source-backed valuation range; show date, per-share units, valuation assumptions and a plain-language condition. Fair value, market forecast and trade trigger need separate labels.
- A cash-flow or financing bridge needs reconciled starting and ending totals. Show debt, dilution and replacement capex distinctly when they change shareholder economics. Do not use revenue as a proxy for profit.
- Tax alternatives may compare sale/wait/new cash only with supported inputs. Identify holding-period and adjusted-basis gaps. Tax estimates are not exact savings and do not establish wash-sale clearance.

## Research diagrams and history

- A thesis diagram explains a causal hypothesis. Link each step to evidence and a failure condition; arrows do not establish causation. Separate capability measures, adoption, electricity demand and shareholder returns.
- An archive compares what was known on each publication date. Preserve original targets and assumptions. Only plot forecast errors after a target is due and supported realized prices exist; do not compare moving targets as though they were fixed forecasts.
- Week-over-week wealth change requires comparable position/price snapshots and cash-flow evidence. Without those, explain changes in forecast assumptions rather than presenting an invented performance chart.

## Price and volume, when needed

TradingView's official Lightweight Charts skill is a good implementation reference for a future OHLCV view; see the source review. It is not required for the current fan chart. Before adopting it, verify the actual package version, public API, licensing/attribution, data feed and corporate-action treatment. Never draw fictional price history to fill an empty panel. Provide a readable summary and data alternative alongside a canvas chart.

## Accessible delivery

Use semantic headings, native buttons/selects, labeled tables, visible focus and short chart descriptions. Supply exact data and a text explanation, following [W3C guidance for complex images](https://www.w3.org/WAI/tutorials/images/complex/). Verify relevant essential graphics and controls against [non-text contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html); use direct text/pattern/line-style cues as well as color. Light gridlines can remain subordinate. Test at the rendered size, including keyboard navigation after chart redraw, rather than judging only source code.

## AGI economic branches

Use a separate shared-scale, zero-based bar comparison with direct dollar labels, cumulative returns, starting-value reference and explicit capability/adoption dates. Keep branch order and axis domain fixed when changing horizon/weight set. A judgment-weighted illustration is an endpoint average, not a statistical median, confidence interval or price target. Show the unweighted branches alongside working/equal/cautious weight choices. Do not mix these with the historical model's probability bins or derive new calibrated loss odds. Link all operating and valuation settings and disclose the income-policy difference.
