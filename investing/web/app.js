/* Presentation only: the canonical frozen forecast supplies every financial value. */
;(() => {
  function reveal() {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (target?.tagName === "DETAILS") {
      target.open = true
      target.scrollIntoView()
    }
  }
  window.addEventListener("hashchange", reveal)
  reveal()
  const source = document.querySelector("#report-data")
  if (!source) return
  const agi = JSON.parse(source.textContent).agi
  if (agi) {
    let months = 60, weights = "Working judgment"
    const usd = v => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v)
    const compact = v => "$" + (v / 1e6).toFixed(2) + "M"
    const max = Math.ceil(Math.max(...Object.values(agi.branches).flatMap(b => Object.values(b.horizons).map(h => h.ending_value))) / 2e6) * 2e6
    const updateAGI = () => {
      const summary = agi.summaries[weights][months]
      document.querySelector("#agi-horizon").textContent = (months === 6 ? "Six-month" : months / 12 + "-year") + " weighted illustration"
      document.querySelector("#agi-weighted").textContent = compact(summary.weighted_endpoint)
      document.querySelector("#agi-range").textContent = compact(summary.low_endpoint) + "–" + compact(summary.high_endpoint)
      document.querySelectorAll("[data-agi-months]").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.agiMonths) === months)))
      document.querySelectorAll("[data-agi-branch]").forEach(row => {
        const id = row.dataset.agiBranch, h = agi.branches[id].horizons[months]
        row.querySelector(".agi-value").textContent = usd(h.ending_value)
        row.querySelector(".agi-return").textContent = (h.cumulative_return >= 0 ? "+" : "") + Math.round(h.cumulative_return * 100) + "% cumulative"
        row.querySelector(".agi-weight").textContent = Math.round(100 * agi.weight_sets[weights][id]) + "% weight"
        row.querySelector(".agi-track span").style.width = 100 * h.ending_value / max + "%"
      })
      document.querySelectorAll("[data-agi-row]").forEach(row => row.querySelector(".agi-table-weighted").textContent = usd(agi.summaries[weights][row.dataset.agiRow].weighted_endpoint))
      document.querySelector("#agi-status").textContent = months + " months, " + weights + ". Weighted illustration " + usd(summary.weighted_endpoint) + ". Subjective scenarios, not calibrated probabilities."
    }
    document.querySelectorAll("[data-agi-months]").forEach(b => b.addEventListener("click", () => { months = Number(b.dataset.agiMonths); updateAGI() }))
    document.querySelector("#agi-weights").addEventListener("change", e => { weights = e.target.value; updateAGI() })
    updateAGI()
  }
  const model = JSON.parse(source.textContent).forecast
  if (!model) return
  let horizon = 60,
    scenario = "Main estimate",
    view = "fan"
  const labels = {
    6: "Six months",
    12: "One year",
    24: "Two years",
    36: "Three years",
    48: "Four years",
    60: "Five years",
  }
  const shortLabels = { 6: "6 mo", 12: "1 yr", 24: "2 yrs", 36: "3 yrs", 48: "4 yrs", 60: "5 yrs" }
  const scenarioLabels = {
    "Main estimate": "Main estimate",
    "Lower market returns (-4pp)": "Market returns 4 percentage points lower per year",
    "Higher market returns (+4pp)": "Market returns 4 percentage points higher per year",
    "25% larger shocks": "Market and company shocks 25% larger",
    "More correlated company shocks": "Company shocks move more closely together",
  }
  const money = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  const millions = (value) => "$" + (value / 1e6).toFixed(2) + "M"
  const percent = (value) => (value > 0 && value < 0.005 ? "<1%" : Math.round(value * 100) + "%")
  const dateLabel = (value) =>
    new Date(value + "T12:00:00Z").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    })
  const cases = { "Main estimate": model.horizons, ...model.sensitivity }
  const rows = () => cases[scenario]
  // The same rounded dollar domain is used in both views and for every assumption.
  const rawMax =
    Math.max(
      model.initial_value,
      ...Object.values(cases).flatMap((c) => Object.values(c).map((r) => r.p90)),
    ) * 1.05
  const roughStep = rawMax / 4,
    magnitude = 10 ** Math.floor(Math.log10(roughStep))
  const tick = [1, 2, 2.5, 5, 10].map((n) => n * magnitude).find((n) => n >= roughStep)
  const axisMax = Math.ceil(rawMax / tick) * tick
  const axisLabel = (value) => "$" + Number((value / 1e6).toFixed(2)) + "M"
  const ns = "http://www.w3.org/2000/svg"
  const svgNode = (tag, attrs = {}, text) => {
    const node = document.createElementNS(ns, tag)
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value))
    if (text !== undefined) node.textContent = text
    return node
  }
  const htmlNode = (tag, className, text) => {
    const node = document.createElement(tag)
    if (className) node.className = className
    if (text !== undefined) node.textContent = text
    return node
  }
  function chartButton(svg, row, attrs) {
    const button = svgNode(attrs.shape || "circle", {
      ...Object.fromEntries(Object.entries(attrs).filter(([k]) => k !== "shape")),
      fill: "transparent",
      tabindex: 0,
      role: "button",
      "data-chart-month": row.months,
      "aria-pressed": String(row.months === horizon),
      "aria-label": `${labels[row.months]}: median ${money(row.median)}, middle 80% ${money(row.p10)} to ${money(row.p90)}`,
    })
    button.addEventListener("click", () => setHorizon(row.months))
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        setHorizon(row.months)
      }
    })
    svg.append(button)
  }
  function chart() {
    const svg = document.querySelector("#fan-chart")
    const focusedMonth = svg.contains(document.activeElement)
      ? document.activeElement.dataset.chartMonth
      : null
    svg.replaceChildren()
    const width = svg.getBoundingClientRect().width
    const compact = width < 600
    svg.append(
      svgNode(
        "title",
        {},
        `${scenario}: conditional portfolio ${view === "fan" ? "outlook over time" : "ranges by horizon"}`,
      ),
    )
    svg.append(
      svgNode(
        "desc",
        {},
        "The band or bars show the 10th to 90th percentiles of ending values, not limits on losses. Dots show medians. The dashed starting-value line and dollar scale are shared across assumptions. Use the horizon buttons or focus a chart point; exact values appear in the data table.",
      ),
    )
    if (view === "ranges") {
      const height = 380,
        pad = { l: compact ? 47 : 76, r: 24, t: 25, b: 40 }
      const x = (value) => pad.l + (value / axisMax) * (width - pad.l - pad.r)
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
      const selectedIndex = Object.values(rows()).findIndex((row) => row.months === horizon)
      svg.append(
        svgNode("rect", {
          x: 1,
          y: pad.t + selectedIndex * 51,
          width: width - 2,
          height: 46,
          rx: 4,
          fill: "#edf2e9",
        }),
      )
      for (let value = 0; value <= axisMax; value += tick) {
        svg.append(
          svgNode("line", {
            x1: x(value),
            x2: x(value),
            y1: pad.t,
            y2: height - pad.b,
            stroke: "#dce1d7",
          }),
        )
        svg.append(
          svgNode(
            "text",
            { x: x(value), y: height - 12, "text-anchor": "middle", class: "axis-label" },
            axisLabel(value),
          ),
        )
      }
      svg.append(
        svgNode("line", {
          x1: x(model.initial_value),
          x2: x(model.initial_value),
          y1: pad.t,
          y2: height - pad.b,
          stroke: "#596b61",
          "stroke-dasharray": "5 5",
        }),
      )
      Object.values(rows()).forEach((row, index) => {
        const y = pad.t + 23 + index * 51
        svg.append(
          svgNode(
            "text",
            { x: pad.l - 12, y: y + 4, "text-anchor": "end" },
            shortLabels[row.months],
          ),
        )
        svg.append(
          svgNode("line", {
            x1: x(row.p10),
            x2: x(row.p90),
            y1: y,
            y2: y,
            stroke: "#6c8875",
            "stroke-width": 14,
            "stroke-linecap": "round",
          }),
        )
        svg.append(
          svgNode("line", {
            x1: x(row.p10),
            x2: x(row.p90),
            y1: y,
            y2: y,
            stroke: "#dce9df",
            "stroke-width": 12,
            "stroke-linecap": "round",
          }),
        )
        svg.append(
          svgNode("circle", {
            cx: x(row.median),
            cy: y,
            r: 6,
            fill: "#15644c",
            stroke: "#fffef9",
            "stroke-width": 2,
          }),
        )
        chartButton(svg, row, {
          shape: "rect",
          x: 1,
          y: y - 23,
          width: width - 2,
          height: 46,
          rx: 4,
        })
      })
      document.querySelector("#fan-chart-note").textContent =
        "Each row shows the middle 80% of modeled endings at that date; the dot is the median. The selected row is highlighted. Dollar scales stay fixed across assumptions and chart views."
    } else {
      const height = compact ? 300 : 360,
        pad = { l: compact ? 48 : 62, r: compact ? 15 : 130, t: 26, b: 42 }
      const x = (month) => pad.l + (month / 60) * (width - pad.l - pad.r)
      const y = (value) => height - pad.b - (value / axisMax) * (height - pad.t - pad.b)
      const points = [
        {
          months: 0,
          p10: model.initial_value,
          p90: model.initial_value,
          median: model.initial_value,
        },
        ...Object.values(rows()),
      ]
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
      for (let value = 0; value <= axisMax; value += tick) {
        svg.append(
          svgNode("line", {
            x1: pad.l,
            x2: width - pad.r,
            y1: y(value),
            y2: y(value),
            stroke: "#dce1d7",
          }),
        )
        svg.append(
          svgNode(
            "text",
            { x: pad.l - 10, y: y(value) + 4, "text-anchor": "end", class: "axis-label" },
            axisLabel(value),
          ),
        )
      }
      for (const month of [0, 12, 24, 36, 48, 60])
        svg.append(
          svgNode(
            "text",
            { x: x(month), y: height - 12, "text-anchor": "middle", class: "axis-label" },
            month ? month / 12 + "y" : "Now",
          ),
        )
      const area =
        "M" +
        points.map((p) => [x(p.months), y(p.p90)].join(",")).join("L") +
        "L" +
        points
          .slice()
          .reverse()
          .map((p) => [x(p.months), y(p.p10)].join(","))
          .join("L") +
        "Z"
      svg.append(
        svgNode("path", { d: area, fill: "#dce9df", stroke: "#6c8875", "stroke-width": 1 }),
      )
      svg.append(
        svgNode("line", {
          x1: pad.l,
          x2: width - pad.r,
          y1: y(model.initial_value),
          y2: y(model.initial_value),
          stroke: "#596b61",
          "stroke-dasharray": "5 5",
        }),
      )
      svg.append(
        svgNode("path", {
          d: "M" + points.map((p) => [x(p.months), y(p.median)].join(",")).join("L"),
          fill: "none",
          stroke: "#15644c",
          "stroke-width": 3,
        }),
      )
      svg.append(
        svgNode("line", {
          x1: x(horizon),
          x2: x(horizon),
          y1: pad.t,
          y2: height - pad.b,
          stroke: "#15644c",
          "stroke-dasharray": "3 5",
        }),
      )
      for (const key of ["p10", "median", "p90"])
        svg.append(
          svgNode("circle", {
            cx: x(horizon),
            cy: y(rows()[horizon][key]),
            r: key === "median" ? 5 : 3,
            fill: "#15644c",
          }),
        )
      if (!compact) {
        const end = rows()[60]
        svg.append(svgNode("text", { x: x(60) + 14, y: 14, class: "axis-label" }, "5-year endings"))
        for (const [key, label] of [
          ["p90", "Upper"],
          ["median", "Median"],
          ["p10", "Lower"],
        ]) {
          svg.append(
            svgNode(
              "text",
              {
                x: x(60) + 14,
                y: y(end[key]) + 4,
                class: "endpoint" + (key === "median" ? " median-label" : ""),
              },
              millions(end[key]),
            ),
          )
          svg.append(
            svgNode(
              "text",
              { x: x(60) + 14, y: y(end[key]) + 20, class: "axis-label" },
              label + (key === "median" ? "" : " · middle 80%"),
            ),
          )
        }
      }
      points
        .slice(1)
        .forEach((row) => chartButton(svg, row, { cx: x(row.months), cy: y(row.median), r: 18 }))
      document.querySelector("#fan-chart-note").textContent =
        "The chart always shows five years; the vertical guide marks your selected horizon. Shading shows the middle 80% of endings at each date, not a path the portfolio will follow. The dollar scale stays fixed across assumptions."
    }
    if (focusedMonth)
      svg.querySelector(`[data-chart-month="${focusedMonth}"]`)?.focus({ preventScroll: true })
  }
  function comparisons() {
    const target = document.querySelector("#sensitivity-comparison")
    const active = target.contains(document.activeElement)
      ? document.activeElement.dataset.scenario
      : null
    target.replaceChildren(
      ...Object.entries(cases).map(([name, allRows]) => {
        const row = allRows[horizon],
          button = htmlNode("button", "comparison-button")
        button.type = "button"
        button.dataset.scenario = name
        button.setAttribute("aria-pressed", String(name === scenario))
        button.setAttribute(
          "aria-label",
          `${scenarioLabels[name] || name}: ${millions(row.median)} median, ${percent(row.p_loss)} chance of ending lower`,
        )
        const nameNode = htmlNode("span", "comparison-name", scenarioLabels[name] || name)
        const values = htmlNode("span", "comparison-values")
        values.append(
          htmlNode("strong", "", millions(row.median)),
          htmlNode("span", "", percent(row.p_loss) + " ending lower"),
        )
        const track = htmlNode("span", "comparison-track"),
          fill = htmlNode("span")
        track.setAttribute("aria-hidden", "true")
        fill.style.width = (row.median / axisMax) * 100 + "%"
        track.append(fill)
        button.append(nameNode, values, track)
        button.addEventListener("click", () => setScenario(name))
        return button
      }),
    )
    if (active)
      [...target.children]
        .find((node) => node.dataset.scenario === active)
        ?.focus({ preventScroll: true })
  }
  function render() {
    const r = rows()[horizon],
      targetDate = r.target_date || model.horizons[horizon].target_date
    document.querySelector("#current-horizon").textContent =
      "Median at " + labels[horizon].toLowerCase() + " · " + dateLabel(targetDate)
    document.querySelector("#median-value").textContent = millions(r.median)
    const delta = r.median - model.initial_value
    document.querySelector("#median-return").textContent =
      (delta >= 0 ? "+" : "−") +
      millions(Math.abs(delta)) +
      " (" +
      (r.cumulative_median_return >= 0 ? "+" : "") +
      Math.round(r.cumulative_median_return * 100) +
      "%) versus the start"
    document.querySelector("#range-value").textContent = millions(r.p10) + "–" + millions(r.p90)
    document.querySelector("#forecast-status").textContent =
      `${labels[horizon]} under ${scenarioLabels[scenario] || scenario}: median ${money(r.median)}, ` +
      `middle 80% ${money(r.p10)} to ${money(r.p90)}, ${percent(r.p_loss)} ending lower, ` +
      `${percent(r.p_drawdown30)} experiencing a 30% drawdown. Conditional model estimates.`
    document.querySelector("#loss-value").textContent = percent(r.p_loss)
    document.querySelector("#drawdown-value").textContent = percent(r.p_drawdown30)
    document.querySelector("#loss-explanation").textContent =
      `Ending below ${millions(model.initial_value)} after ${labels[horizon].toLowerCase()}. This is different from a temporary decline.`
    document.querySelector("#drawdown-explanation").textContent =
      `A peak-to-trough fall of at least 30% before this horizon, even if the portfolio recovers. Observed monthly; deeper falls may be missed.`
    document.querySelector("#event-summary").textContent =
      `${labels[horizon]} under ${scenario === "Main estimate" ? "the main estimate" : "the selected assumptions"}. Percent of modeled endings, not real-world frequencies.`
    const bins = [r.p_loss20, r.p_loss - r.p_loss20, r.p_ahead - r.p_double, r.p_double]
    const names = ["Down 20% or more", "Smaller loss", "Gain below 100%", "At least doubled"]
    const colors = ["#984832", "#a67544", "#6d907b", "#15644c"]
    document.querySelector("#probability-bar").replaceChildren(
      ...bins.map((p) => {
        const span = htmlNode("span")
        span.style.width = p * 100 + "%"
        return span
      }),
    )
    document.querySelector("#probability-labels").replaceChildren(
      ...bins.map((p, i) => {
        const node = htmlNode("div")
        node.style.setProperty("--bin-color", colors[i])
        node.append(htmlNode("strong", "", percent(p)), htmlNode("span", "", names[i]))
        return node
      }),
    )
    document.querySelector("#rounding-note").textContent =
      bins.reduce((sum, p) => sum + Math.round(p * 100), 0) !== 100
        ? "Rounded percentages may not total 100%. The underlying outcomes do."
        : ""
    document.querySelector("#outlook-table tbody").replaceChildren(
      ...Object.values(rows()).map((row) => {
        const tr = htmlNode("tr")
        const header = htmlNode("th", "", labels[row.months])
        header.scope = "row"
        tr.append(header)
        for (const text of [
          money(row.median),
          money(row.p10) + "–" + money(row.p90),
          percent(row.p_loss),
          percent(row.p_double),
        ])
          tr.append(htmlNode("td", "", text))
        return tr
      }),
    )
    document.querySelector("#outlook-table-context").textContent =
      (scenarioLabels[scenario] || scenario) +
      ". USD, nominal and pre-tax. Six original target dates; no deposits or withdrawals."
    document
      .querySelectorAll("#outlook .horizons button")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(Number(button.dataset.months) === horizon)),
      )
    document
      .querySelectorAll(".chart-views button")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(button.dataset.view === view)),
      )
    document.querySelector("#scenario").value = scenario
    document.querySelector("#scenario-caption").textContent =
      scenario === "Main estimate"
        ? "Main estimate: historical broad-market risk premium, with no extra return assumed for stock picking or the AI sector."
        : (scenarioLabels[scenario] || scenario) +
          ". Same holdings, starting value and random seed. No probability is assigned to this alternative."
    comparisons()
    chart()
  }
  function setHorizon(month) {
    horizon = month
    render()
  }
  function setScenario(name) {
    scenario = name
    render()
  }
  document
    .querySelectorAll("#outlook .horizons button")
    .forEach((button) =>
      button.addEventListener("click", () => setHorizon(Number(button.dataset.months))),
    )
  document.querySelectorAll(".chart-views button").forEach((button) =>
    button.addEventListener("click", () => {
      view = button.dataset.view
      render()
    }),
  )
  document
    .querySelector("#scenario")
    .addEventListener("change", (event) => setScenario(event.target.value))
  document.querySelector("#holdings-search")?.addEventListener("input", (event) => {
    const allRows = [...document.querySelectorAll("#holdings-table tbody tr")]
    allRows.forEach(
      (tr) =>
        (tr.hidden = !tr.cells[0].textContent
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())),
    )
    const count = allRows.filter((tr) => !tr.hidden).length
    document.querySelector("#holdings-count").textContent = count
      ? `${count} holding${count === 1 ? "" : "s"}`
      : "No holdings match this ticker."
  })
  window.addEventListener("resize", chart)
  render()
})()
