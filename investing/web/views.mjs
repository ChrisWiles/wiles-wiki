/** Presentation only. All financial inputs are supplied by the canonical report builder. */
export function editionView({
  date,
  title,
  forecast: f,
  input,
  stockHTML,
  researchHTML,
  projectionHTML,
  decisions,
  esc,
  money,
  short,
  pct,
  pretty,
  github,
}) {
  const share = (fraction) => (fraction * 100).toFixed(1) + "%"
  const firstParagraph = stockHTML.match(/<p>[\s\S]*?<\/p>/)?.[0] ?? ""
  const openingParagraphs = [...stockHTML.split("<h2>")[0].matchAll(/<p>[\s\S]*?<\/p>/g)].map(
    (m) => m[0],
  )
  const openingContext = openingParagraphs
    .filter((p) => p !== firstParagraph && !decisions.includes(p))
    .join("")
  const nav = `<nav class="edition-nav" aria-label="In this report"><a href="#decisions">Decisions</a>${f ? '<a href="#outlook">Portfolio outlook</a><a href="#holdings">Our exposure</a>' : ""}<a href="#thesis">AI thesis</a><a href="#full-reports">Full reports</a></nav>`
  let body = `<main id="main" class="wrap"><div class="edition-date"><a href="../../">Investment notebook</a><span aria-hidden="true">/</span><time datetime="${date}">${esc(title)}</time></div>
  <div class="report-intro"><div><h1>The investment review.</h1><p class="lead">Long-term AI infrastructure. A closer look at what we own, what could happen, and what deserves our attention next.</p></div>${f ? `<aside class="snapshot"><span>Recorded stocks &amp; funds</span><strong>${short(f.initial_value)}</strong><p>${Object.keys(f.position_values).length} symbols across three accounts<br>Closing prices: ${esc(pretty(f.valuation_date))}</p><a href="#scope">What this includes</a></aside>` : '<aside class="snapshot historical"><span>From the archive</span><p>The research and recommendations as they stood on this date. No later forecast has been added.</p></aside>'}</div>
  ${nav}<section id="decisions" class="decision-section"><div class="section-heading"><h2>What matters this week</h2><a href="#stocks">Read the stock review</a></div><div class="brief-lead">${firstParagraph}</div><div class="decision-list">${decisions.length ? decisions.map((p) => `<article class="decision">${p.replace("<p><strong>", "<h3>").replace("</strong>", "</h3><p>")}</article>`).join("") : "<p>The original stock review below preserves this edition’s conclusions and open questions.</p>"}</div>${openingContext ? `<div class="brief-context">${openingContext}</div>` : `<p class="note">These are proposals, not confirmed trades. The detailed review retains its coverage limits and tax conditions.</p>`}</section>`
  if (f) {
    const h = f.horizons[60],
      total = f.initial_value,
      values = f.position_values
    const nv = values.NVDA ?? 0,
      alphabet = (values.GOOG ?? 0) + (values.GOOGL ?? 0),
      funds = (values.QQQ ?? 0) + (values.QQQM ?? 0)
    const validation = f.historical_proxy_validation.summary[60]
    const exposures = [
      ["QQQ + QQQM", "Overlapping Nasdaq-100 funds", funds, "funds"],
      ["NVIDIA", "Direct shares", nv, "nvidia"],
      ["Alphabet", "Direct GOOG + GOOGL shares", alphabet, "alphabet"],
      [
        "Other stocks & funds",
        "All remaining recorded securities",
        total - nv - alphabet - funds,
        "other",
      ],
    ]
    body += `<section id="outlook"><div class="section-heading"><div><h2>What could the portfolio be worth?</h2><p>Explore the range, then test the assumptions behind it.</p></div><span class="status">Conditional model estimate</span></div>
    <div class="forecast-panel"><div class="forecast-controls"><div><span class="control-label" id="horizon-label">Choose a horizon</span><div class="horizons" role="group" aria-labelledby="horizon-label">${[6, 12, 24, 36, 48, 60].map((m) => `<button type="button" data-months="${m}" aria-pressed="${m === 60}">${m === 6 ? "6 months" : m / 12 + " year" + (m === 12 ? "" : "s")}</button>`).join("")}</div></div><label for="scenario">Assumptions<select id="scenario"><option value="Main estimate">Main estimate</option>${Object.keys(
      f.sensitivity,
    )
      .map((s) => `<option value="${esc(s)}">${esc(s)}</option>`)
      .join("")}</select></label></div>
    <div class="forecast-reading"><div><p id="current-horizon" class="current-horizon">Median at five years · ${esc(pretty(h.target_date))}</p><strong id="median-value" class="forecast-number">${short(h.median)}</strong><p id="median-return" class="return-line">Median ending value</p></div><div class="range-reading"><span>Middle 80% of modeled endings</span><strong id="range-value">${short(h.p10)}–${short(h.p90)}</strong><p>Some outcomes fall outside this range. It is not a best or worst case.</p></div></div>
    <div class="chart-toolbar"><p class="chart-unit">Portfolio value · USD millions</p><div class="chart-views" role="group" aria-label="Chart view"><button type="button" data-view="fan" aria-pressed="true">Over time</button><button type="button" data-view="ranges" aria-pressed="false">By horizon</button></div></div>
    <svg id="fan-chart" class="chart" role="group" aria-label="Portfolio projection chart with selectable horizons" aria-describedby="fan-chart-note"></svg>
    <div class="chart-key"><span><i class="key-median"></i>Median</span><span><i class="key-range"></i>Middle 80% of endings</span><span><i class="key-start"></i>Starting value ${short(total)}</span></div><p id="fan-chart-note" class="chart-note">The median splits modeled endings in half. The dollar scale stays the same when you compare assumptions.</p><p id="scenario-caption" class="note"></p>
    <p id="forecast-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p><div class="risk-grid"><div><div class="risk-heading"><strong id="loss-value">${pct(h.p_loss)}</strong><span>Chance of finishing lower</span></div><p id="loss-explanation">Ending below the starting value.</p></div><div><div class="risk-heading"><strong id="drawdown-value">${pct(h.p_drawdown30)}</strong><span>Chance of a 30% fall along the way</span></div><p id="drawdown-explanation">Peak-to-trough decline, observed monthly.</p></div></div>
    </div>
    <aside class="model-caution"><div class="caution-heading"><span aria-hidden="true">!</span><strong>These odds still need stronger validation.</strong></div><p>The five-year middle-80% range covered ${Math.round(validation.coverage * validation.origins)} of ${validation.origins} historical proxy outcomes. Those overlapping SPY/QQQ tests are not our household’s track record. Household calibration has not been established.</p><a href="#projections">Read the assumptions and validation</a></aside>
    <p id="scope" class="scope">${esc(pretty(f.valuation_date))} prices. Recorded stocks/ETFs only, nominal and pre-tax. No new deposits or withdrawals. Options, all cash, Treasury notes, borrowing, taxes, inflation and unrecorded assets are excluded. Dividends reinvest into the same security; no cross-security rebalancing or swing-trading profit is assumed.</p>
    <div class="outcome-section"><div><h3>How could it end?</h3><p id="event-summary" class="note">Mutually exclusive ending-value outcomes for the selected horizon.</p></div><div><div id="probability-bar" class="probability" aria-hidden="true"></div><div id="probability-labels" class="outcome-labels"></div><p id="rounding-note" class="note"></p></div></div>
    <div class="sensitivity-section"><div><h3>Change the assumptions.<br>See the difference.</h3><p>The same holdings can produce very different results. Compare the median and loss chance at your selected horizon.</p><p class="note">These alternatives have no assigned probability. They are separate conditional cases, not weighted forecasts.</p></div><div id="sensitivity-comparison" class="sensitivity-comparison" aria-label="Assumption comparisons"></div></div>
    <details class="data-details" id="projection-data"><summary>See the exact values for all six horizons</summary><p id="outlook-table-context" class="note">Main estimate. USD, nominal and pre-tax.</p><div class="table-scroll" role="region" aria-label="Six-horizon projection data" tabindex="0"><table id="outlook-table"><caption class="sr-only">Projection values under the selected assumptions</caption><thead><tr><th scope="col">Horizon</th><th scope="col">Median value</th><th scope="col">Middle 80%</th><th scope="col">Ending lower</th><th scope="col">Doubled</th></tr></thead><tbody>${Object.values(
      f.horizons,
    )
      .map(
        (r) =>
          `<tr><th scope="row">${r.months === 6 ? "6 months" : r.months / 12 + " year" + (r.months === 12 ? "" : "s")}</th><td>${money(r.median)}</td><td>${money(r.p10)}–${money(r.p90)}</td><td>${pct(r.p_loss)}</td><td>${pct(r.p_double)}</td></tr>`,
      )
      .join("")}</tbody></table></div></details></section>
    <section id="holdings"><div class="section-heading"><div><h2>Different tickers. Shared exposure.</h2><p>Direct NVIDIA and Alphabet shares are ${share((nv + alphabet) / total)} of recorded stocks and funds. Our Nasdaq-100 funds add overlap.</p></div></div><div class="exposure-layout"><div class="exposure-chart" role="group" aria-label="Share of recorded stocks and ETFs"><div class="exposure-heading"><span>Holding group</span><span>Share of ${short(total)}</span></div>${exposures.map(([name, description, value, key]) => `<div class="exposure-row"><div class="exposure-label"><div><strong>${name}</strong><span>${description}</span></div><div><strong>${share(value / total)}</strong><span>${money(value)}</span></div></div><div class="exposure-track"><span class="${key}" style="width:${(value / total) * 100}%"></span></div></div>`).join("")}<p class="note">Each security is counted once. These are security values, not a fund look-through. Current fund constituent weights remain unverified. Percentages are rounded.</p></div><aside class="account-panel"><h3>Across our accounts</h3>${[
      ["chris-etrade", "Chris · E*TRADE"],
      ["chris-robinhood", "Chris · Robinhood"],
      ["jens-robinhood", "Jen · Robinhood"],
    ]
      .map(
        ([key, name]) =>
          `<div class="account-row"><span>${name}</span><strong>${money(f.account_values[key])}</strong></div>`,
      )
      .join(
        "",
      )}<p class="note">Stock/ETF values only. E*TRADE quantities: ${esc(pretty(input.position_dates["chris-etrade"]))}. Robinhood quantities: ${esc(pretty(input.position_dates["chris-robinhood"]))} / ${esc(pretty(input.position_dates["jens-robinhood"]))}. This is not total household wealth.</p></aside></div>
    <details class="data-details" id="holdings-data"><summary>Explore all ${Object.keys(values).length} holdings by account</summary><label class="search-label" for="holdings-search">Find a ticker<input id="holdings-search" type="search" placeholder="Search NVDA, GOOG…" autocomplete="off" aria-controls="holdings-table"></label><p id="holdings-count" class="note" role="status">${Object.keys(values).length} holdings</p><div class="table-scroll" role="region" aria-label="Recorded holdings by account" tabindex="0"><table id="holdings-table"><thead><tr><th scope="col">Ticker</th><th scope="col">Chris E*TRADE</th><th scope="col">Chris Robinhood</th><th scope="col">Jen Robinhood</th><th scope="col">Marked value</th></tr></thead><tbody>${Object.keys(
      values,
    )
      .sort((a, b) => values[b] - values[a])
      .map(
        (t) =>
          `<tr><th scope="row">${esc(t)}</th>${["chris-etrade", "chris-robinhood", "jens-robinhood"].map((a) => `<td>${esc(input.accounts[a]?.[t] ?? "—")}</td>`).join("")}<td>${money(values[t])}</td></tr>`,
      )
      .join(
        "",
      )}</tbody></table></div><p class="note">A dash means absent from the supplied reference, not a verified zero today. Options and balances remain in the full stock review.</p></details></section>`
  }
  body += `<section id="thesis"><div class="section-heading"><div><h2>From AI progress to shareholder returns</h2><p>Four links to test. A breakthrough at one does not prove the next.</p></div><a href="#research">Read the AI research</a></div><ol class="thesis-chain"><li><span>Capability</span><h3>Useful agents</h3><p>Can they do valuable work reliably, beyond a benchmark?</p></li><li><span>Demand</span><h3>Paying customers</h3><p>Do useful workloads generate enough value to keep growing?</p></li><li><span>Infrastructure</span><h3>Profitable capacity</h3><p>Can chips, power and cooling arrive at a cost customers can support?</p></li><li><span>Ownership</span><h3>Cash per share</h3><p>What remains after investment, equipment replacement, debt and dilution?</p></li></ol><div class="thesis-takeaway"><strong>The question that connects them</strong><p>Does useful workload growth outpace efficiency gains, and which businesses keep the resulting profit?</p></div></section>
  <section id="full-reports"><div class="section-heading"><div><h2>The complete picture</h2><p>Read the original reports, including sources, tax conditions and unfinished research.</p></div></div>${projectionHTML ? `<details id="projections"><summary>Portfolio projections <span>Assumptions &amp; validation</span></summary><article class="reading">${projectionHTML}</article></details>` : ""}<details id="stocks"><summary>Stock review <span>Companies, exposure &amp; tax conditions</span></summary><article class="reading">${stockHTML}</article></details><details id="research"><summary>AI research <span>Evidence, bottlenecks &amp; open questions</span></summary><article class="reading">${researchHTML}</article></details><div class="download-links"><span>Source files</span><a href="${github}reports/investing/stocks/${date}.md">Stock review</a><a href="${github}reports/investing/research/${date}.md">AI research</a>${projectionHTML ? `<a href="${github}reports/investing/projections/${date}.md">Projections</a>` : ""}${f ? '<a href="forecast.json">Frozen model data</a>' : ""}</div></section><noscript>Interactive views need JavaScript. The six-horizon table and complete written reports remain readable below; expand “See the exact values” for the table.</noscript></main>`
  return body
}
