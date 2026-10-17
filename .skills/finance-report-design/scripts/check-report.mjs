/** Read-only browser QA for the maintained investing notebook; writes ignored local evidence. */
import assert from "node:assert/strict"
import fs from "node:fs/promises"
import path from "node:path"
import http from "node:http"
import { fileURLToPath, pathToFileURL } from "node:url"
import { execFileSync } from "node:child_process"

const root = fileURLToPath(new URL("../../../", import.meta.url))
const args = new Map()
const allowed = ["--date", "--base-url", "--playwright-module", "--browser-channel", "--output-dir"]
for (let i = 2; i < process.argv.length; i += 2) {
  if (process.argv[i] === "--help") {
    console.log(
      "check-report.mjs --date YYYY-MM-DD --output-dir private/investing/scratch/visual-qa/DATE [--base-url URL] [--playwright-module PATH] [--browser-channel chrome]",
    )
    process.exit(0)
  }
  if (
    !allowed.includes(process.argv[i]) ||
    !process.argv[i + 1] ||
    process.argv[i + 1].startsWith("--")
  )
    throw Error("Unknown or incomplete argument: " + process.argv[i])
  args.set(process.argv[i], process.argv[i + 1])
}
const date = args.get("--date")
assert.match(date || "", /^\d{4}-\d{2}-\d{2}$/, "Provide the exact report date")
const output = path.resolve(
  root,
  args.get("--output-dir") || `private/investing/scratch/visual-qa/${date}`,
)
const relativeOutput = path.relative(root, output).split(path.sep).join("/")
assert(
  relativeOutput.startsWith("private/investing/scratch/"),
  "QA output must stay under ignored private/investing/scratch/",
)
execFileSync("git", ["check-ignore", "--quiet", path.join(output, "summary.json")], { cwd: root })
await fs.mkdir(output, { recursive: true })
const summary = {
  date,
  status: "running",
  baseUrl: null,
  forecastId: null,
  forecastChecks: "not_applicable",
  combinations: 0,
  layouts: [],
  previousEdition: null,
  screenshots: [],
  humanReadabilityReview: "required separately; not assessed by this script",
}
let browser, server
const errors = []
const money = (v) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v)
const millions = (v) => "$" + (v / 1e6).toFixed(2) + "M"
const pct = (v) => (v > 0 && v < 0.005 ? "<1%" : Math.round(v * 100) + "%")
const horizons = {
  6: "6 months",
  12: "1 year",
  24: "2 years",
  36: "3 years",
  48: "4 years",
  60: "5 years",
}
async function json(url) {
  const response = await fetch(url)
  assert(response.ok, `Cannot read ${url}: ${response.status}`)
  return response.json()
}
async function serve() {
  const site = path.resolve(root, "public/investing-notebook")
  server = http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname)
      if (pathname === "/favicon.ico") {
        res.writeHead(204)
        res.end()
        return
      }
      let file = path.resolve(site, "." + pathname)
      const relative = path.relative(site, file)
      if (relative.startsWith("..") || path.isAbsolute(relative)) {
        res.writeHead(403)
        res.end()
        return
      }
      if ((await fs.stat(file)).isDirectory()) file = path.join(file, "index.html")
      const mime = {
        ".html": "text/html; charset=utf-8",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
      }
      res.writeHead(200, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-store",
      })
      res.end(await fs.readFile(file))
    } catch {
      res.writeHead(404)
      res.end("Not found")
    }
  })
  await new Promise((resolve, reject) => {
    server.once("error", reject)
    server.listen(0, "127.0.0.1", resolve)
  })
  return `http://127.0.0.1:${server.address().port}/`
}
async function noOverflow(page, context) {
  assert(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    `Document overflow: ${context}`,
  )
}
async function capture(page, name) {
  await page.screenshot({ path: path.join(output, name) })
  summary.screenshots.push(name)
}
try {
  const base = args.get("--base-url")
    ? new URL(args.get("--base-url").replace(/\/?$/, "/")).href
    : await serve()
  assert(/^https?:\/\//.test(base), "Use an HTTP(S) preview or published archive URL")
  summary.baseUrl = base
  const manifest = await json(new URL("manifest.json", base))
  const edition = manifest.find((e) => e.date === date)
  assert(edition, "Requested date is missing from the archive")
  const modulePath = args.get("--playwright-module")
  const { chromium } = await import(
    modulePath ? pathToFileURL(path.resolve(modulePath)).href : "playwright"
  )
  browser = await chromium.launch({
    headless: true,
    ...(args.get("--browser-channel") ? { channel: args.get("--browser-channel") } : {}),
  })
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
    reducedMotion: "reduce",
  })
  page.on("pageerror", (e) => errors.push(e.message))
  page.on("console", (m) => {
    if (m.type() === "error" && !m.text().includes("Failed to load resource")) errors.push(m.text())
  })
  page.on("response", (r) => {
    if (r.status() >= 400 && r.url().startsWith(base) && !r.url().includes("favicon.ico"))
      errors.push(`${r.status()} ${r.url()}`)
  })
  await page.goto(base)
  assert(
    await page.locator(`.edition .open[href="reports/${date}/"]`).count(),
    "Archive link missing",
  )
  await page.locator(`.edition .open[href="reports/${date}/"]`).click()
  await page.waitForSelector("#decisions")
  assert.equal(await page.locator("h1").first().innerText(), "The investment review.")
  const payload = await page.locator("#report-data").evaluate((el) => JSON.parse(el.textContent))
  const f = payload.forecast
  assert.equal(
    Boolean(f),
    edition.hasForecast,
    "Archive and report disagree about forecast availability",
  )
  await capture(page, "desktop-opening.png")
  if (f) {
    summary.forecastId = f.forecast_id
    assert.match(f.forecast_id, /^P-\d{4}-\d{2}-\d{2}-v\d+$/)
    assert.equal(f.forecast_id, edition.forecastId)
    assert(f.valuation_date <= date, "Report uses future-dated inputs")
    assert.deepEqual(
      f,
      JSON.parse(
        await fs.readFile(path.join(root, "investing/forecasts", f.forecast_id + ".json"), "utf8"),
      ),
      "Browser forecast differs from canonical JSON",
    )
    if (args.has("--base-url"))
      assert.deepEqual(
        await json(new URL(`reports/${date}/forecast.json`, base)),
        f,
        "Published data differs from chart data",
      )
    assert(
      await page
        .locator("#decisions")
        .evaluate((el) =>
          Boolean(
            el.compareDocumentPosition(document.querySelector("#outlook")) &
            Node.DOCUMENT_POSITION_FOLLOWING,
          ),
        ),
      "Decisions must precede the outlook",
    )
    await page.locator("#projection-data summary").click()
    const cases = { "Main estimate": f.horizons, ...f.sensitivity }
    for (const view of ["fan", "ranges"]) {
      await page.locator(`[data-view="${view}"]`).click()
      const axis = await page.locator("#fan-chart .axis-label").allTextContents()
      for (const [name, rows] of Object.entries(cases)) {
        await page.selectOption("#scenario", name)
        assert.deepEqual(
          await page.locator("#fan-chart .axis-label").allTextContents(),
          axis,
          "Comparison scale changed",
        )
        for (const [month, label] of Object.entries(horizons)) {
          const r = rows[month]
          assert(r, `${name} is missing ${month} months`)
          await page.getByRole("button", { name: label, exact: true }).click()
          assert.equal(
            await page.locator("#median-value").innerText(),
            millions(r.median),
            "Median readout mismatch",
          )
          assert.equal(
            await page.locator("#range-value").innerText(),
            millions(r.p10) + "–" + millions(r.p90),
            "Range readout mismatch",
          )
          assert.equal(
            await page.locator("#loss-value").innerText(),
            pct(r.p_loss),
            "Ending-loss mismatch",
          )
          assert.equal(
            await page.locator("#drawdown-value").innerText(),
            pct(r.p_drawdown30),
            "Drawdown mismatch",
          )
          const words = {
            6: "six months",
            12: "one year",
            24: "two years",
            36: "three years",
            48: "four years",
            60: "five years",
          }
          assert(
            (await page.locator("#loss-explanation").innerText()).includes(words[month]),
            "Risk explanation did not follow the selected horizon",
          )
          const cells = await page
            .locator("#outlook-table tbody tr")
            .nth(Object.keys(horizons).indexOf(month))
            .locator("th,td")
            .allTextContents()
          assert.deepEqual(
            cells.slice(1),
            [money(r.median), money(r.p10) + "–" + money(r.p90), pct(r.p_loss), pct(r.p_double)],
            "Exact table mismatch",
          )
          const bins = [r.p_loss20, r.p_loss - r.p_loss20, r.p_ahead - r.p_double, r.p_double]
          assert(
            bins.every((n) => n >= 0) && Math.abs(bins.reduce((a, n) => a + n, 0) - 1) < 1e-6,
            "Outcome bins are not exhaustive, disjoint probabilities",
          )
          assert.deepEqual(
            await page.locator("#probability-labels strong").allTextContents(),
            bins.map(pct),
          )
          assert.deepEqual(
            await page.locator(".comparison-values strong").allTextContents(),
            Object.values(cases).map((c) => millions(c[month].median)),
          )
          assert.equal(
            await page
              .locator('[data-chart-month][aria-pressed="true"]')
              .getAttribute("data-chart-month"),
            month,
          )
          summary.combinations++
        }
      }
      await page.locator('[data-chart-month="24"]').focus()
      await page.keyboard.press("Enter")
      assert.equal(
        await page.evaluate(() => document.activeElement.dataset.chartMonth),
        "24",
        "Chart lost focus after redraw",
      )
      await page.keyboard.press("Tab")
      assert.equal(await page.evaluate(() => document.activeElement.dataset.chartMonth), "36")
      await page.keyboard.press("Space")
      assert.equal(await page.evaluate(() => document.activeElement.dataset.chartMonth), "36")
    }
    const alternatives = Object.keys(f.sensitivity)
    if (alternatives.length) {
      await page.locator(".comparison-button").nth(1).focus()
      await page.keyboard.press("Enter")
      assert.equal(
        await page.evaluate(() => document.activeElement.dataset.scenario),
        alternatives[0],
      )
      assert.equal(await page.locator("#scenario").inputValue(), alternatives[0])
    }
    await page.selectOption("#scenario", "Main estimate")
    await page.getByRole("button", { name: "5 years", exact: true }).click()
    const v = f.position_values,
      nv = v.NVDA ?? 0,
      alphabet = (v.GOOG ?? 0) + (v.GOOGL ?? 0),
      funds = (v.QQQ ?? 0) + (v.QQQM ?? 0)
    const groups = [funds, nv, alphabet, f.initial_value - funds - nv - alphabet]
    assert.deepEqual(
      await page.locator(".exposure-label > div:last-child > span").allTextContents(),
      groups.map(money),
    )
    assert.deepEqual(
      await page.locator(".exposure-label > div:last-child > strong").allTextContents(),
      groups.map((n) => ((100 * n) / f.initial_value).toFixed(1) + "%"),
    )
    assert.equal(
      await page.locator(".account-row").count(),
      Object.keys(f.account_values).length,
      "Rendered account coverage is incomplete",
    )
    assert(
      Math.abs(
        Object.values(f.account_values).reduce((sum, value) => sum + value, 0) - f.initial_value,
      ) < 0.01,
      "Account values do not reconcile to the covered starting value",
    )
    assert.deepEqual(
      await page.locator(".account-row strong").allTextContents(),
      ["chris-etrade", "chris-robinhood", "jens-robinhood"].map((k) => money(f.account_values[k])),
    )
    assert(Math.abs(Object.values(v).reduce((a, n) => a + n, 0) - f.initial_value) < 0.01)
    await page.locator("#holdings-data summary").click()
    assert.equal(await page.locator("#holdings-table tbody tr").count(), Object.keys(v).length)
    for (const row of await page.locator("#holdings-table tbody tr").all()) {
      const cells = await row.locator("th,td").allTextContents(),
        ticker = cells[0]
      assert.equal(cells[4], money(v[ticker]))
      for (const [i, key] of ["chris-etrade", "chris-robinhood", "jens-robinhood"].entries())
        assert.equal(cells[i + 1], String(payload.input.accounts[key]?.[ticker] ?? "—"))
    }
    const query = Object.keys(v)[0]
    for (const text of [query.toLowerCase(), "__no_such_holding__", ""]) {
      await page.locator("#holdings-search").fill(text)
      assert.equal(
        await page.locator("#holdings-table tbody tr:visible").count(),
        Object.keys(v).filter((t) => t.toLowerCase().includes(text)).length,
      )
    }
    await page.locator("#holdings-data summary").click()
    await page.locator("#projection-data summary").click()
    summary.forecastChecks = "passed"
  }
  const sourceIds = [
    "stocks",
    "research",
    ...((await page.locator("#projections").count()) ? ["projections"] : []),
  ]
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const view of f ? ["fan", "ranges"] : [null]) {
      if (view) await page.locator(`[data-view="${view}"]`).click()
      await noOverflow(page, `${width}px ${view || "report"}`)
    }
    for (const id of sourceIds) {
      await page.locator(`#${id} summary`).click()
      await noOverflow(page, `${width}px expanded ${id}`)
      await page.locator(`#${id} summary`).click()
    }
    summary.layouts.push(width)
  }
  const missing = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute("href"))
        .filter((h) => h.length > 1 && !document.getElementById(decodeURIComponent(h.slice(1)))),
    )
  assert.deepEqual(missing, [], "Broken in-page link")
  const contrast = await page.evaluate(() => {
    const luminance = (c) => {
      const x = c
        .slice(0, 3)
        .map((n) => n / 255)
        .map((n) => (n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4))
      return 0.2126 * x[0] + 0.7152 * x[1] + 0.0722 * x[2]
    }
    const parse = (c) => c.match(/[\d.]+/g)?.map(Number)
    return [
      ".brief-context",
      ".forecast-controls label",
      ".risk-heading span",
      ".model-caution",
      ".comparison-values span",
    ].flatMap((selector) => {
      const el = document.querySelector(selector)
      if (!el) return []
      const fg = parse(getComputedStyle(el).color)
      let bg,
        ancestor = el
      while (ancestor) {
        const c = parse(getComputedStyle(ancestor).backgroundColor)
        if (c && c.length >= 3 && (c.length < 4 || c[3] === 1)) {
          bg = c
          break
        }
        ancestor = ancestor.parentElement
      }
      if (!fg || !bg) throw Error("Text contrast needs manual verification: " + selector)
      const levels = [luminance(fg), luminance(bg)].sort((a, b) => b - a)
      return [{ selector, ratio: (levels[0] + 0.05) / (levels[1] + 0.05) }]
    })
  })
  assert(
    contrast.every((c) => c.ratio >= 4.5),
    "Sampled normal text contrast below 4.5:1",
  )
  summary.textContrast = contrast
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1100 })
    await page.goto(new URL(`reports/${date}/`, base).href)
    await capture(page, `${width}-opening.png`)
    if (f) {
      for (const view of ["fan", "ranges"]) {
        await page.locator(`[data-view="${view}"]`).click()
        await page.locator("#fan-chart").scrollIntoViewIfNeeded()
        await capture(page, `${width}-${view}.png`)
      }
    }
  }
  const previous = manifest
    .filter((e) => e.date < date)
    .sort((a, b) => b.date.localeCompare(a.date))[0]
  if (previous) {
    await page.goto(new URL(`reports/${previous.date}/#stocks`, base).href)
    assert.notEqual(await page.locator("#stocks").getAttribute("open"), null)
    const old = await page
      .locator("#report-data")
      .evaluate((el) => JSON.parse(el.textContent).forecast)
    assert.equal(old?.forecast_id ?? null, previous.forecastId)
    if (old) assert(old.valuation_date <= previous.date)
    else assert.equal(await page.locator("#fan-chart").count(), 0)
    await noOverflow(page, "previous edition")
    summary.previousEdition = previous.date
  }
  const nojs = await browser.newPage({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  })
  await nojs.goto(new URL(`reports/${date}/`, base).href)
  if (f) {
    await nojs.locator("#projection-data summary").click()
    assert.equal(await nojs.locator("#outlook-table tbody tr").count(), 6)
  }
  await nojs.locator("#stocks summary").click()
  assert((await nojs.locator("#stocks .reading").innerText()).length > 0)
  await noOverflow(nojs, "no-JavaScript sources")
  await nojs.close()
  assert.deepEqual(errors, [], "Browser errors or failed report assets")
  summary.status = "passed"
  const numericalResult = f
    ? `${summary.combinations} forecast combinations reconciled`
    : "no eligible forecast; numerical checks not applicable"
  console.log(
    `PASS ${date}: ${numericalResult}; layout, interaction, history and no-JavaScript checks. Human screenshot/readability review remains required.`,
  )
} catch (error) {
  summary.status = "failed"
  summary.error = error.message
  console.error(error.stack)
  process.exitCode = 1
} finally {
  await browser?.close()
  if (server) await new Promise((resolve) => server.close(resolve))
  await fs.writeFile(path.join(output, "summary.json"), JSON.stringify(summary, null, 2) + "\n")
}
