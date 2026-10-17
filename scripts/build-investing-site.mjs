/** Build static visual editions from canonical Markdown and frozen forecasts.
 * No market/broker network access at build time. GitHub Pages serves the output.
 */
import fs from "node:fs/promises"
import { createHash } from "node:crypto"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import { toHtml } from "hast-util-to-html"
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const arg = process.argv.indexOf("--output")
const out = path.resolve(root, arg >= 0 ? process.argv[arg + 1] : "public/investing-notebook")
const github = "https://github.com/ChrisWiles/wiles-wiki/blob/main/"
const esc = (t) =>
  String(t).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  )
const money = (v) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v)
const short = (v) => "$" + (v / 1e6).toFixed(2) + "M"
const pct = (v) => (v > 0 && v < 0.005 ? "&lt;1%" : Math.round(v * 100) + "%")
const pretty = (d) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}
async function md(rel) {
  if (!(await exists(path.join(root, rel)))) return ""
  const text = await fs.readFile(path.join(root, rel), "utf8")
  const tree = unified().use(remarkParse).use(remarkGfm).parse(text)
  const processor = unified().use(remarkRehype)
  const html = toHtml(await processor.run(tree))
  return html
    .replace(/href="([^"#][^"]*)"/g, (all, href) => {
      if (/^(https?:|mailto:)/.test(href)) return all
      const [file, anchor] = href.split("#")
      const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(rel), file))
      const match = resolved.match(
        /^reports\/investing\/(stocks|research|projections)\/(\d{4}-\d{2}-\d{2})\.md$/,
      )
      return (
        'href="' +
        esc(
          match ? `../${match[2]}/#${match[1]}` : github + resolved + (anchor ? "#" + anchor : ""),
        ) +
        '"'
      )
    })
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>")
}
const header = (base = "") =>
  `<a class="skip" href="#main">Skip to content</a><header><div class="wrap masthead"><a class="brand" href="${base}index.html">The Wiles Notebook<span>Long-term investing · AI infrastructure</span></a><nav aria-label="Main navigation"><a href="${base}index.html">Report archive</a><a href="https://chriswiles.github.io/wiles-wiki/">Wiki ↗</a></nav></div></header>`
const foot = `<footer class="wrap footer"><div>Research → useful demand → business cash → shareholder returns.</div><div>No deposits or withdrawals. No automatic trades.</div></footer>`
const shell = (title, body, base = "", payload = null) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="description" content="The Wiles household investment notebook: readable AI research, stock reviews, interactive portfolio projections and a dated report archive."><title>${esc(title)} · The Wiles Notebook</title><link rel="stylesheet" href="${base}style.css"></head><body>${header(base)}${body}${foot}${payload ? `<script id="report-data" type="application/json">${JSON.stringify(payload).replace(/</g, "\\u003c")}</script>` : ""}<script src="${base}app.js" defer></script></body></html>`
const readJSON = async (p) => JSON.parse(await fs.readFile(p, "utf8"))
const dates = (await fs.readdir(path.join(root, "reports/investing/stocks")))
  .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
  .map((f) => f.slice(0, 10))
  .sort()
  .reverse()
const forecasts = (await fs.readdir(path.join(root, "investing/forecasts"))).filter((f) =>
  /^P-\d{4}-\d{2}-\d{2}-v\d+\.json$/.test(f),
)
await fs.mkdir(out, { recursive: true })
for (const file of ["style.css", "app.js"])
  await fs.copyFile(path.join(root, "investing/web", file), path.join(out, file))
let manifest = []
for (const date of dates) {
  const stockHTML = await md(`reports/investing/stocks/${date}.md`),
    researchHTML = await md(`reports/investing/research/${date}.md`),
    projectionHTML = await md(`reports/investing/projections/${date}.md`)
  // Older editions never receive a later forecast, and existing vintages are never rewritten here.
  const rawStock = await fs.readFile(path.join(root, `reports/investing/stocks/${date}.md`), "utf8")
  const marker = rawStock.match(/<!-- forecast-id: (P-\d{4}-\d{2}-\d{2}-v\d+) -->/)
  const selected = marker ? marker[1] + ".json" : null
  if (selected && !forecasts.includes(selected))
    throw new Error(`Missing frozen forecast ${selected} for ${date}`)
  const forecast = selected
    ? await readJSON(path.join(root, "investing/forecasts", selected))
    : null
  if (forecast && forecast.valuation_date > date)
    throw new Error("Historical edition cannot use a future forecast")
  const input = forecast
    ? await readJSON(
        path.join(
          root,
          "investing/models/inputs",
          forecast.input_file || forecast.valuation_date + ".json",
        ),
      )
    : null
  if (forecast) {
    const bytes = await fs.readFile(
      path.join(
        root,
        "investing/models/inputs",
        forecast.input_file || forecast.valuation_date + ".json",
      ),
    )
    if (createHash("sha256").update(bytes).digest("hex") !== forecast.input_sha256)
      throw new Error("Frozen input hash mismatch")
    if (forecast.external_deposits !== 0 || forecast.external_withdrawals !== 0)
      throw new Error("Unsupported cash-flow policy")
    const starting = Object.entries(input.accounts).reduce(
      (sum, [, a]) =>
        sum + Object.entries(a).reduce((x, [t, q]) => x + Number(q) * Number(input.prices[t]), 0),
      0,
    )
    if (Math.abs(starting - forecast.initial_value) > 0.005)
      throw new Error("Starting holdings value does not reconcile")
    for (const h of [6, 12, 24, 36, 48, 60]) {
      const r = forecast.horizons[h]
      if (!r || r.p10 > r.median || r.median > r.p90 || r.p_loss20 > r.p_loss)
        throw new Error("Invalid horizon")
      for (const k of [
        "p_loss",
        "p_ahead",
        "p_loss20",
        "p_double",
        "p_drawdown30",
        "p_beat_spy",
        "p_beat_qqq",
      ])
        if (!(r[k] >= 0 && r[k] <= 1)) throw new Error("Probability out of bounds")
    }
  }
  const edition = {
    date,
    title: pretty(date),
    hasForecast: !!forecast,
    forecastId: forecast?.forecast_id ?? null,
    stockPath: `reports/${date}/#stocks`,
    researchPath: `reports/${date}/#research`,
  }
  manifest.push(edition)
  const decisionParas = [...stockHTML.matchAll(/<p><strong>[\s\S]*?<\/p>/g)]
    .filter((m) => !m[0].startsWith("<p><strong>Our recorded stocks"))
    .slice(0, 3)
    .map((m) => m[0])
  let body = `<main id="main" class="wrap"><div class="hero"><div class="eyebrow">${esc(pretty(date))} · Investment review</div><h1>${forecast ? "A clearer view of<br>the portfolio." : "The investment<br>notebook."}</h1><p class="lead">${forecast ? "What we own, what could happen next, and what would change our decisions. Long-term AI infrastructure comes first." : "A preserved research edition. Read the AI thesis and stock review as they stood on this date."}</p><span class="pill">${forecast ? "Conditional model · No new deposits or withdrawals" : "Historical edition · No projection published"}</span></div>`
  if (forecast) {
    const h = forecast.horizons["60"]
    const values = forecast.position_values
    const nv = values.NVDA ?? 0,
      alph = (values.GOOG ?? 0) + (values.GOOGL ?? 0),
      qq = (values.QQQ ?? 0) + (values.QQQM ?? 0),
      total = forecast.initial_value
    const val = forecast.historical_proxy_validation.summary["60"]
    body += `<div class="summary-grid"><div class="metric"><span>Recorded stocks & funds</span><strong>${short(total)}</strong><small>${esc(pretty(forecast.valuation_date))} marks · ${Object.keys(values).length} symbols · three accounts</small></div><div class="metric"><span>Direct NVIDIA + Alphabet</span><strong>${pct((nv + alph) / total)}</strong><small>More exposure sits inside our funds</small></div><div class="metric"><span>Five-year middle estimate</span><strong>${short(h.median)}</strong><small>${pct(h.p_loss)} modeled chance of finishing below the start</small></div></div>
 <section id="outlook"><div class="section-head"><div><div class="eyebrow">01 / The outlook</div><h2>Explore the range<br>of possible outcomes.</h2></div><p>The shaded band contains the middle 80% of modeled ending values. The median splits those outcomes in half. Neither line is a promise or a limit on losses.</p></div>
 <div class="panel"><div class="controls"><div class="horizons" role="group" aria-label="Projection horizon">${[6, 12, 24, 36, 48, 60].map((m) => `<button type="button" data-months="${m}" aria-pressed="${m === 60}">${m === 6 ? "6 months" : m / 12 + " year" + (m === 12 ? "" : "s")}</button>`).join("")}</div><label for="scenario">Compare assumptions<select id="scenario"><option>Main estimate</option>${Object.keys(
   forecast.sensitivity,
 )
   .map((s) => `<option>${esc(s)}</option>`)
   .join(
     "",
   )}</select></label></div><p class="tag-number" id="current-horizon">Five years</p><svg id="fan-chart" class="chart" role="group" aria-label="Conditional forecast fan chart; interactive horizon points" aria-describedby="fan-chart-note"></svg><div class="legend"><span class="key">Median</span><span class="key band">Middle 80% at each date</span><span class="key start">Starting value</span></div><div class="stats" aria-live="polite"><div class="stat"><span>Middle estimate</span><strong id="median-value">${short(h.median)}</strong><small id="median-return">Cumulative return</small></div><div class="stat"><span>Middle 80% of endings</span><strong id="range-value">${short(h.p10)}–${short(h.p90)}</strong><small>Not a worst/best case</small></div><div class="stat"><span>Chance of ending lower</span><strong id="loss-value">${pct(h.p_loss)}</strong><small>Compared with today's starting value</small></div><div class="stat"><span>Chance of a 30% drawdown</span><strong id="drawdown-value">${pct(h.p_drawdown30)}</strong><small>At any point, observed monthly</small></div></div><p class="note" id="fan-chart-note">The dollar scale stays fixed when comparing assumptions. Select a horizon above or a point on the chart; the exact values are in the table below.</p><p class="note" id="scenario-caption"></p></div>
 <div class="notice"><strong>Use the long-term odds cautiously.</strong> The five-year middle-80% band covered ${Math.round(val.coverage * val.origins)} of ${val.origins} historical proxy outcomes. Those are overlapping SPY/QQQ tests, not our household's track record. The model is not demonstrated to be calibrated.</div><p class="note">Scope: recorded stocks/ETFs only, nominal and pre-tax. Options, all cash, Treasury notes, borrowing and unrecorded assets are excluded, not treated as zero. Dividends reinvest into the same security; no cross-security rebalancing or swing-trading profit is assumed. Historical market estimates are not a complete company valuation.</p>
 <div class="table-scroll"><table id="outlook-table"><caption class="sr-only">Six requested projection horizons</caption><thead><tr><th>Horizon</th><th>Median value</th><th>Middle 80%</th><th>Ending lower</th><th>Doubled</th></tr></thead><tbody>${Object.values(
   forecast.horizons,
 )
   .map(
     (r) =>
       `<tr><td>${r.months === 6 ? "6 months" : r.months / 12 + " year" + (r.months === 12 ? "" : "s")}</td><td>${money(r.median)}</td><td>${money(r.p10)}–${money(r.p90)}</td><td>${pct(r.p_loss)}</td><td>${pct(r.p_double)}</td></tr>`,
   )
   .join(
     "",
   )}</tbody></table></div><div class="two-col"><div><h3>Finishing down is different<br>from falling along the way.</h3><p class="note">A portfolio can recover from a large decline and finish ahead. A five-year loss probability of ${pct(h.p_loss)} can coexist with a ${pct(h.p_drawdown30)} chance of experiencing a 30% drawdown. Monthly sampling can miss deeper falls.</p></div><div><p id="event-summary" class="note"></p><div class="probability" id="probability-bar" aria-hidden="true"></div><p class="note" id="probability-labels"></p></div></div></section>
 <section id="holdings"><div class="section-head"><div><div class="eyebrow">02 / What we own</div><h2>Several tickers.<br>Shared risks.</h2></div><p>Our direct NVIDIA and Alphabet positions are ${pct((nv + alph) / total)} of recorded stocks and funds. QQQ and QQQM add overlapping technology exposure. Current fund constituent weights remain unverified; the funds are counted once.</p></div><div class="panel"><div class="allocation" aria-label="Recorded stock allocation">${[nv, alph, qq, total - nv - alph - qq].map((v) => `<span style="width:${(v / total) * 100}%"></span>`).join("")}</div><div class="legend"><span>NVIDIA ${pct(nv / total)}</span><span>Alphabet ${pct(alph / total)}</span><span>QQQ + QQQM ${pct(qq / total)}</span><span>Other ${pct(1 - (nv + alph + qq) / total)}</span></div><label for="holdings-search">Find a ticker<input id="holdings-search" type="search" placeholder="Try NVDA or GOOG" autocomplete="off"></label><div class="table-scroll"><table id="holdings-table"><thead><tr><th>Ticker</th><th>Chris E*TRADE</th><th>Chris Robinhood</th><th>Jen Robinhood</th><th>Marked value</th></tr></thead><tbody>${Object.keys(
   values,
 )
   .sort((a, b) => values[b] - values[a])
   .map(
     (t) =>
       `<tr><td>${esc(t)}</td>${["chris-etrade", "chris-robinhood", "jens-robinhood"].map((a) => `<td>${esc(input.accounts[a]?.[t] ?? "—")}</td>`).join("")}<td>${money(values[t])}</td></tr>`,
   )
   .join(
     "",
   )}</tbody></table></div><p class="note">Quantities: E*TRADE ${esc(input.position_dates["chris-etrade"])}; Robinhood ${esc(input.position_dates["chris-robinhood"])} / ${esc(input.position_dates["jens-robinhood"])}. A dash means absent from the supplied reference, not a verified zero today. Options and balances are listed separately in the stock report.</p></div></section>`
  }
  body += `<section id="decisions"><div class="eyebrow">${forecast ? "03" : "01"} / Decisions to consider</div><h2>What changes the next decision?</h2><div class="decision-grid">${decisionParas.length ? decisionParas.map((p) => `<article class="decision">${p}</article>`).join("") : `<article class="decision"><p>Read the original stock review below for this edition's conclusions, evidence and outstanding questions.</p></article>`}</div><p class="note">Recommendations remain proposals. No purchases, sales or accepted allocation changes are inferred from the report.</p></section>
 <section id="thesis"><div class="section-head"><div><div class="eyebrow">${forecast ? "04" : "02"} / The AI infrastructure thesis</div><h2>Follow the chain<br>all the way to cash.</h2></div><p>More capable AI can expand demand without guaranteeing good investment returns. Each link is a separate question to test against evidence.</p></div><div class="chain" role="list" aria-label="AI investment thesis chain"><div role="listitem"><b>01 / CAPABILITY</b><strong>Useful agents</strong><p>Can the work be done reliably, beyond a benchmark?</p></div><div role="listitem"><b>02 / ECONOMICS</b><strong>Paid workloads</strong><p>Do customers earn enough to keep paying?</p></div><div role="listitem"><b>03 / CAPACITY</b><strong>Physical bottlenecks</strong><p>Can chips, power and cooling arrive profitably?</p></div><div role="listitem"><b>04 / OWNERSHIP</b><strong>Cash per share</strong><p>What remains after investment, debt and dilution?</p></div></div></section>
 <section id="full-reports"><div class="eyebrow">${forecast ? "05" : "03"} / The evidence</div><h2>Read the full reports.</h2><p class="note">The visual overview sits alongside the original Markdown. Dates, source limits, tax conditions and unresolved research remain inspectable.</p>${projectionHTML ? `<details id="projections"><summary>Portfolio projections & validation</summary><article class="reading">${projectionHTML}</article></details>` : ""}<details id="stocks"><summary>Stock review & household exposure</summary><article class="reading">${stockHTML}</article></details><details id="research"><summary>AI research & bottleneck monitor</summary><article class="reading">${researchHTML}</article></details><div class="download-links"><a href="${github}reports/investing/stocks/${date}.md">Stock Markdown ↗</a><a href="${github}reports/investing/research/${date}.md">AI Markdown ↗</a>${forecast ? '<a href="forecast.json">Frozen model results (JSON) ↗</a>' : ""}</div></section><noscript>Interactive charts need JavaScript. The six-horizon table and complete written reports remain readable without it.</noscript></main>`
  const dir = path.join(out, "reports", date)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(
    path.join(dir, "index.html"),
    shell(pretty(date), body, "../../", {
      forecast,
      input: input ? { accounts: input.accounts } : null,
    }),
  )
  if (forecast)
    await fs.writeFile(path.join(dir, "forecast.json"), JSON.stringify(forecast, null, 2) + "\n")
}
const archive = `<main class="wrap" id="main"><div class="hero"><div class="eyebrow">The investment notebook</div><h1>Keep the thesis.<br>Check the evidence.</h1><p class="lead">Weekly AI research, stock decisions and a clear view of what our portfolio could do. Every edition stays here so we can revisit what we believed and learn from what followed.</p><span class="pill">Long-term AI infrastructure first · Swing trading second</span></div><div class="archive-grid">${manifest.map((e, i) => `<article class="edition"><div class="topline"><span>${esc(e.title)}</span><span>${i === 0 ? "LATEST EDITION" : "ARCHIVE"}</span></div><h2>${e.hasForecast ? "The portfolio, in perspective." : "Research & portfolio review."}</h2><p>${e.hasForecast ? "Six forecast horizons, conditional probabilities, sensitivity charts and the decisions that still need evidence." : "Preserved AI research and stock analysis. No later projections have been backfilled into this edition."}</p><a class="open" href="reports/${e.date}/">Open this edition →</a><div class="download-links" style="margin-top:18px"><a href="${e.stockPath}">Stock review</a><a href="${e.researchPath}">AI research</a></div></article>`).join("")}</div><section><div class="two-col"><div><h2>A record of decisions<br>we can learn from.</h2></div><div><p>Each report preserves its date and evidence. Model forecasts keep their original holdings, target dates and assumptions. Recommendations are separate from trades that were actually confirmed.</p><p class="note">The current model covers recorded stocks and funds only. Options, cash and bonds need their own verified handling. Public portfolio reporting is authorized; credentials and unrelated private records are excluded.</p></div></div></section></main>`
await fs.writeFile(path.join(out, "index.html"), shell("Investment reports", archive))
await fs.writeFile(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
console.log(`Built ${manifest.length} visual editions at ${out}`)
