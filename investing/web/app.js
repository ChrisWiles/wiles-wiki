/* Static, dependency-free interactions. Every number comes from the frozen model JSON. */
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
  const data = JSON.parse(source.textContent)
  const model = data.forecast
  if (!model) return
  let horizon = 60,
    scenario = "Main estimate"
  const labels = {
    6: "Six months",
    12: "One year",
    24: "Two years",
    36: "Three years",
    48: "Four years",
    60: "Five years",
  }
  const money = (v) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(v)
  const millions = (v) => "$" + (v / 1e6).toFixed(2) + "M"
  const percent = (v) => (v > 0 && v < 0.005 ? "<1%" : Math.round(v * 100) + "%")
  const getRows = () =>
    scenario === "Main estimate" ? model.horizons : model.sensitivity[scenario]
  const ns = "http://www.w3.org/2000/svg"
  const el = (name, attrs = {}, text) => {
    const node = document.createElementNS(ns, name)
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v))
    if (text !== undefined) node.textContent = text
    return node
  }
  function chart() {
    const svg = document.querySelector("#fan-chart")
    svg.replaceChildren()
    const rows = getRows()
    const points = [
      {
        months: 0,
        p10: model.initial_value,
        median: model.initial_value,
        p90: model.initial_value,
      },
      ...Object.values(rows),
    ]
    const width = Math.max(340, svg.getBoundingClientRect().width),
      height = width < 600 ? 300 : 355,
      pad = { l: 65, r: 20, t: 22, b: 45 }
    const max = Math.max(...points.map((r) => r.p90)) * 1.05
    const x = (m) => pad.l + (m / 60) * (width - pad.l - pad.r)
    const y = (v) => height - pad.b - (v / max) * (height - pad.t - pad.b)
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
    svg.append(el("title", {}, `Conditional portfolio outlook: ${scenario}`))
    svg.append(
      el(
        "desc",
        {},
        "The shaded band is the 10th to 90th percentile of ending values at each horizon. It is not a guarantee of staying within this band. Exact numbers appear in the table below.",
      ),
    )
    for (let i = 0; i <= 4; i++) {
      let v = (max * i) / 4
      svg.append(
        el("line", {
          x1: pad.l,
          x2: width - pad.r,
          y1: y(v),
          y2: y(v),
          stroke: "#d9dfd5",
          "stroke-width": 1,
        }),
      )
      svg.append(
        el(
          "text",
          { x: pad.l - 10, y: y(v) + 4, "text-anchor": "end" },
          "$" + (v / 1e6).toFixed(1) + "M",
        ),
      )
    }
    for (const m of [0, 12, 24, 36, 48, 60])
      svg.append(
        el("text", { x: x(m), y: height - 12, "text-anchor": "middle" }, m ? m / 12 + "y" : "Now"),
      )
    const d =
      "M" +
      points.map((p) => [x(p.months), y(p.p90)].join(",")).join("L") +
      "L" +
      points
        .slice()
        .reverse()
        .map((p) => [x(p.months), y(p.p10)].join(","))
        .join("L") +
      "Z"
    svg.append(el("path", { d, fill: "#d9e8db" }))
    svg.append(
      el("line", {
        x1: pad.l,
        x2: width - pad.r,
        y1: y(model.initial_value),
        y2: y(model.initial_value),
        stroke: "#65736b",
        "stroke-dasharray": "5 5",
      }),
    )
    svg.append(
      el("path", {
        d: "M" + points.map((p) => [x(p.months), y(p.median)].join(",")).join("L"),
        fill: "none",
        stroke: "#15644c",
        "stroke-width": 3,
      }),
    )
    const r = rows[horizon]
    svg.append(
      el("line", {
        x1: x(horizon),
        x2: x(horizon),
        y1: pad.t,
        y2: height - pad.b,
        stroke: "#15644c",
        "stroke-width": 1,
        "stroke-dasharray": "3 5",
      }),
    )
    svg.append(el("circle", { cx: x(horizon), cy: y(r.median), r: 5, fill: "#15644c" }))
    for (const p of points.slice(1)) {
      const hit = el("circle", {
        cx: x(p.months),
        cy: y(p.median),
        r: 17,
        fill: "transparent",
        tabindex: 0,
        role: "button",
        "aria-label": `${labels[p.months]}, median ${money(p.median)}`,
      })
      hit.addEventListener("click", () => setHorizon(p.months))
      hit.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setHorizon(p.months)
        }
      })
      svg.append(hit)
    }
  }
  function render() {
    const r = getRows()[horizon]
    document.querySelector("#current-horizon").textContent =
      `${labels[horizon]} · ${r.target_date || model.horizons[horizon].target_date}`
    document.querySelector("#median-value").textContent = millions(r.median)
    document.querySelector("#median-return").textContent =
      (r.cumulative_median_return >= 0 ? "+" : "") +
      Math.round(r.cumulative_median_return * 100) +
      "% cumulative"
    document.querySelector("#range-value").textContent = millions(r.p10) + "–" + millions(r.p90)
    document.querySelector("#loss-value").textContent = percent(r.p_loss)
    document.querySelector("#drawdown-value").textContent = percent(r.p_drawdown30)
    document.querySelector("#event-summary").textContent =
      `${labels[horizon]}: ${percent(r.p_ahead)} ahead, ${percent(r.p_loss20)} down at least 20%, ${percent(r.p_double)} doubled. These are conditional modeled events.`
    const bins = [
      r.p_loss20,
      Math.max(0, r.p_loss - r.p_loss20),
      Math.max(0, r.p_ahead - r.p_double),
      r.p_double,
    ]
    document.querySelector("#probability-bar").replaceChildren(
      ...bins.map((p, i) => {
        const s = document.createElement("span")
        s.style.width = 100 * p + "%"
        s.title =
          [
            "Down 20% or more",
            "Down less than 20%",
            "Ahead, less than doubled",
            "At least doubled",
          ][i] +
          ": " +
          percent(p)
        return s
      }),
    )
    document.querySelector("#probability-labels").textContent =
      `Down 20%+: ${percent(bins[0])} · Smaller loss: ${percent(bins[1])} · Gain below 100%: ${percent(bins[2])} · Doubled+: ${percent(bins[3])}`
    const body = document.querySelector("#outlook-table tbody")
    body.replaceChildren(
      ...Object.values(getRows()).map((r) => {
        const tr = document.createElement("tr")
        for (const v of [
          labels[r.months],
          money(r.median),
          money(r.p10) + "–" + money(r.p90),
          percent(r.p_loss),
          percent(r.p_double),
        ]) {
          const td = document.createElement("td")
          td.textContent = v
          tr.append(td)
        }
        return tr
      }),
    )
    document
      .querySelectorAll(".horizons button")
      .forEach((b) => b.setAttribute("aria-pressed", String(Number(b.dataset.months) === horizon)))
    document.querySelector("#scenario-caption").textContent =
      scenario === "Main estimate"
        ? "Main estimate: historical broad-market risk premium; no assumed stock-picking or AI-sector alpha."
        : scenario +
          ". Same starting wealth, holdings and random seed; no probability is assigned to this alternative assumption."
    chart()
  }
  function setHorizon(h) {
    horizon = h
    render()
  }
  document
    .querySelectorAll(".horizons button")
    .forEach((b) => b.addEventListener("click", () => setHorizon(Number(b.dataset.months))))
  document.querySelector("#scenario").addEventListener("change", (e) => {
    scenario = e.target.value
    render()
  })
  const search = document.querySelector("#holdings-search")
  search?.addEventListener("input", () => {
    document
      .querySelectorAll("#holdings-table tbody tr")
      .forEach(
        (tr) => (tr.hidden = !tr.textContent.toLowerCase().includes(search.value.toLowerCase())),
      )
  })
  window.addEventListener("resize", chart)
  render()
})()
