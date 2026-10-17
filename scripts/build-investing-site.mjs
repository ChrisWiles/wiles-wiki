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
import { editionView } from "../investing/web/views.mjs"
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const arg = process.argv.indexOf("--output")
const out = path.resolve(root, arg >= 0 ? process.argv[arg + 1] : "public/investing-notebook")
const github = "https://github.com/ChrisWiles/wiles-wiki/blob/main/"
const assetVersion = createHash("sha256")
  .update(await fs.readFile(path.join(root, "investing/web/app.js")))
  .update(await fs.readFile(path.join(root, "investing/web/style.css")))
  .digest("hex")
  .slice(0, 12)
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
  // Broker branding contains a literal asterisk, not an emphasis delimiter.
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(text.replace(/\bE\*TRADE\b/g, "E\\*TRADE"))
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
    .replace(
      /<table>/g,
      '<div class="table-scroll" role="region" aria-label="Report data table" tabindex="0"><table>',
    )
    .replace(/<\/table>/g, "</table></div>")
}
const header = (base = "") =>
  `<a class="skip" href="#main">Skip to content</a><header><div class="wrap masthead"><a class="brand" href="${base}index.html">The Wiles Notebook<span>Long-term AI infrastructure investing</span></a><nav aria-label="Main navigation"><a href="${base}index.html">All reports</a><a href="https://chriswiles.github.io/wiles-wiki/">Wiki</a></nav></div></header>`
const foot = `<footer class="wrap footer"><div>Research → useful demand → business cash → shareholder returns.</div><div>Projection baseline: no new deposits or withdrawals.</div></footer>`
const shell = (title, body, base = "", payload = null) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="description" content="The Wiles household investment notebook: readable AI research, stock reviews, interactive portfolio projections and a dated report archive."><title>${esc(title)} · The Wiles Notebook</title><link rel="stylesheet" href="${base}style.css?v=${assetVersion}"></head><body>${header(base)}${body}${foot}${payload ? `<script id="report-data" type="application/json">${JSON.stringify(payload).replace(/</g, "\\u003c")}</script>` : ""}<script src="${base}app.js?v=${assetVersion}" defer></script></body></html>`
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
  const agiMarker = rawStock.match(/<!-- agi-scenario-id: (A-\d{4}-\d{2}-\d{2}-v\d+) -->/)
  const agi = agiMarker ? await readJSON(path.join(root, "investing/forecasts", agiMarker[1] + ".json")) : null
  if (agi) {
    if (agi.scenario_id !== agiMarker[1]) throw Error("AGI file identity mismatch")
    if (!forecast || agi.baseline_forecast_id !== forecast.forecast_id || agi.valuation_date > date || agi.evidence_cutoff > date)
      throw Error("AGI scenario identity/date does not match this edition")
    for (const [file, hash] of [
      [path.join(root,"investing/models/agi-inputs",agi.input_file),agi.input_sha256],
      [path.join(root,"investing/models/inputs",agi.holdings_input),agi.holdings_sha256],
      [path.join(root,"investing/forecasts",agi.baseline_forecast_id+".json"),agi.baseline_sha256],
    ]) if (createHash("sha256").update(await fs.readFile(file)).digest("hex") !== hash) throw Error("AGI lineage hash mismatch")
    if (Math.abs(agi.initial_value-forecast.initial_value)>.005 || agi.external_deposits!==0 || agi.external_withdrawals!==0)
      throw Error("AGI scope does not reconcile")
    if (Object.keys(agi.security_groups).sort().join() !== Object.keys(forecast.position_values).sort().join()) throw Error("AGI universe mismatch")
    for (const weights of Object.values(agi.weight_sets)) {
      if (Object.keys(weights).sort().join() !== Object.keys(agi.branches).sort().join() || Math.abs(Object.values(weights).reduce((x,v)=>x+v,0)-1)>1e-10 || Object.values(weights).some(v=>!Number.isFinite(v)||v<0||v>1)) throw Error("Invalid judgment weights")
    }
    for (const b of Object.values(agi.branches)) {
      for (const m of [6,12,24,36,48,60]) {
        const h=b.horizons[m]
        if (!h || h.target_date!==forecast.horizons[m].target_date || !Number.isFinite(h.ending_value) || h.ending_value<=0 || Math.abs(Object.values(h.securities).reduce((sum,s)=>sum+s.ending_value,0)-h.ending_value)>.01)
          throw Error("Invalid AGI endpoint reconciliation")
      }
    }
  }
  const edition = {
    date,
    title: pretty(date),
    hasForecast: !!forecast,
    forecastId: forecast?.forecast_id ?? null,
    agiScenarioId: agi?.scenario_id ?? null,
    stockPath: `reports/${date}/#stocks`,
    researchPath: `reports/${date}/#research`,
  }
  manifest.push(edition)
  const openingHTML = stockHTML.split("<h2>")[0]
  const openingParagraph = openingHTML.match(/<p>[\s\S]*?<\/p>/)?.[0]
  const decisionParas = [...openingHTML.matchAll(/<p><strong>[\s\S]*?<\/p>/g)]
    .map((m) => m[0])
    .filter((paragraph) => paragraph !== openingParagraph)
    .slice(0, 3)
  const body = editionView({
    date,
    title: pretty(date),
    forecast,
    agi,
    input,
    stockHTML,
    researchHTML,
    projectionHTML,
    decisions: decisionParas,
    esc,
    money,
    short,
    pct,
    pretty,
    github,
  })
  const dir = path.join(out, "reports", date)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(
    path.join(dir, "index.html"),
    shell(pretty(date), body, "../../", {
      forecast,
      agi,
      input: input ? { accounts: input.accounts } : null,
    }),
  )
  if (forecast)
    await fs.writeFile(path.join(dir, "forecast.json"), JSON.stringify(forecast, null, 2) + "\n")
  if (agi)
    await fs.writeFile(path.join(dir, "agi-scenarios.json"), JSON.stringify(agi, null, 2) + "\n")
}
const archive = `<main class="wrap" id="main"><div class="hero"><div class="eyebrow">The investment notebook</div><h1>Keep the thesis.<br>Check the evidence.</h1><p class="lead">Weekly AI research, stock decisions and a clear view of what our portfolio could do. Every edition stays here so we can revisit what we believed and learn from what followed.</p><span class="pill">Long-term AI infrastructure first · Swing trading second</span></div><div class="archive-grid">${manifest.map((e, i) => `<article class="edition"><div class="topline"><span>${esc(e.title)}</span><span>${i === 0 ? "LATEST EDITION" : "ARCHIVE"}</span></div><h2>${e.hasForecast ? "The portfolio, in perspective." : "Research & portfolio review."}</h2><p>${e.hasForecast ? "Six forecast horizons, conditional probabilities, sensitivity charts and the decisions that still need evidence." : "Preserved AI research and stock analysis. No later projections have been backfilled into this edition."}</p><a class="open" href="reports/${e.date}/">Open this edition →</a><div class="download-links" style="margin-top:18px"><a href="${e.stockPath}">Stock review</a><a href="${e.researchPath}">AI research</a></div></article>`).join("")}</div><section><div class="two-col"><div><h2>A record of decisions<br>we can learn from.</h2></div><div><p>Each report preserves its date and evidence. Model forecasts keep their original holdings, target dates and assumptions. Recommendations are separate from trades that were actually confirmed.</p><p class="note">The current model covers recorded stocks and funds only. Options, cash and bonds need their own verified handling. Public portfolio reporting is authorized; credentials and unrelated private records are excluded.</p></div></div></section></main>`
await fs.writeFile(path.join(out, "index.html"), shell("Investment reports", archive))
await fs.writeFile(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
console.log(`Built ${manifest.length} visual editions at ${out}`)
