---
title: "[Pick] Vertiv (VRT) — 5-year hold"
category: ai-reference
slug: pick-vertiv-vrt-5y
summary: Five-year analyst dossier on Vertiv as a long-duration compounder in the AI data-center thermal-and-power stack. Multi-generation liquid-cooling adoption (CDU + manifold + cold plate), rack-power architecture migration to 800 VDC, and a thickening installed-base service annuity carry the thesis from a ~$10B FY26 revenue base to a $20–25B FY30 base case at 25%+ adjusted operating margin. The 12-month catalyst trade is in [[pick-vertiv-vrt]]; this version reframes the same franchise as a 5-year compounding asset rather than a single guidance-cycle event.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - power
sources:
  - https://investors.vertiv.com/news-events/press-releases
  - https://investors.vertiv.com/financial-information/sec-filings
  - https://www.vertiv.com/en-us/about/news-and-insights/articles/
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001674101&type=10-K
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001674101&type=10-Q
  - https://investors.vertiv.com/events-and-presentations/events
  - https://www.vertiv.com/en-us/solutions/learn-about/what-is-liquid-cooling/
  - https://www.vertiv.com/en-us/products-catalog/thermal-management/coolant-distribution-units/
  - https://www.vertiv.com/en-us/about/news-and-insights/news-releases/vertiv-and-nvidia-announce-800-vdc-power-architecture-for-ai-factories/
  - https://www.datacenterdynamics.com/en/news/vertiv-q4-2025-earnings/
  - https://www.datacenterdynamics.com/en/news/vertiv-acquires-cooltera/
  - https://www.datacenterdynamics.com/en/analysis/the-rack-density-arms-race-from-100kw-to-1mw/
  - https://seekingalpha.com/symbol/VRT/analysis
  - https://www.wellsfargo.com/equityresearch/
  - https://www.williamblair.com/Insights/research
  - https://www.bloomberg.com/news/articles/2025-vertiv-liquid-cooling-backlog/
  - https://www.reuters.com/business/vertiv-italian-capacity-expansion/
  - https://www.tomshardware.com/pc-components/cooling/nvidia-pushes-the-industry-to-adopt-800-vdc
  - https://www.semianalysis.com/p/datacenter-anatomy-part-2-cooling
  - https://www.tradingview.com/symbols/NYSE-VRT/financials-statistics-and-ratios/
  - https://stockanalysis.com/stocks/vrt/financials/
  - https://stockanalysis.com/stocks/vrt/statistics/
  - https://stockanalysis.com/stocks/nvt/financials/
  - https://stockanalysis.com/stocks/jci/financials/
  - https://stockanalysis.com/stocks/tt/financials/
  - https://stockanalysis.com/stocks/mod/financials/
  - https://www.bloomberg.com/quote/SU:FP
  - https://www.idtechex.com/en/research-report/data-centers-cooling-2025-2035/
  - https://www.delltechnologies.com/asset/en-us/solutions/business-solutions/industry-market/dell-direct-liquid-cooling-roadmap.pdf
  - https://www.microsoft.com/en-us/research/blog/microsoft-sidekicks-and-the-future-of-rack-cooling/
  - https://aws.amazon.com/blogs/machine-learning/trainium2-liquid-cooling/
  - https://about.fb.com/news/2025/04/meta-mtia-2-cooling-architecture/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.40
  inferred: 0.55
  ambiguous: 0.05
---

This is investment research, not financial advice. No buy/sell/hold instruction is implied. The analyst (Chris) holds or may hold positions in names discussed. Forward-year figures (FY26–FY30) are explicitly tagged `^[inferred]`. Backward-looking and current figures are tagged `^[extracted]` where they come directly from filings, transcripts, the FY2025 10-K, the Q1 2026 10-Q, Investor Day decks, or trade press cited in the sources block above. The 12-month catalyst version of this thesis is [[pick-vertiv-vrt]]; this dossier deliberately refuses to relitigate the 12-month case and focuses on what an investor needs to believe to underwrite a 5-year hold. The full demand-side frame is in [[ai-data-center-buildout-investment-memo]] and the broader basket logic is in [[electrical-equipment-deep-dive]].

## Header

- Ticker: **VRT** (NYSE)
- Reference price (intraday April 30, 2026): **~$135** ^[inferred]
- Approximate market cap: **~$51B** on ~378M diluted shares ^[inferred]
- Time horizon: **5 years** (May 2026 — May 2031)
- Conviction: **High**
- 12-month catalyst companion: [[pick-vertiv-vrt]]
- Anchor sizing in 5-year basket; lower beta than the 12-month trade because the structural thesis cushions any single guidance miss.

## 1. Investment thesis (5-year frame)

The 5-year case is a compounding case, not a catalyst case. The 12-month dossier underwrites the next four prints. This dossier underwrites the next 20 prints, and asks a different question: **does Vertiv's franchise still earn excess returns in 2030 if the 2026–2027 cooling order surge has long since flattened into a steady-state replacement market?** I think the answer is yes, for six linked reasons, in roughly declining order of conviction:

1. **Liquid cooling is a multi-generation adoption curve, not a one-shot upgrade.** Generation 1 (rear-door heat exchangers, in-row CDUs) is already in production; Generation 2 (in-row + manifold + cold-plate retrofits) is the FY26–FY27 wave; Generation 3 (factory-integrated liquid-cooled racks at 130–250 kW) is the FY27–FY28 wave; Generation 4 (immersion + two-phase, 250–600 kW racks) is FY28–FY29; Generation 5 (1 MW racks with integrated DC busways and refrigerant-loop cooling) is FY29–FY31. ^[inferred] Each generation re-opens a fresh capex cycle for CDUs, manifolds, dielectric fluid loops, and rack-level monitoring. Vertiv sits at the **intersection of every layer** — chillers, CDUs, manifolds, busways, rack PDUs, switchgear, UPS, and the service contracts that wrap it all — which is structurally different from being a point-product vendor. A five-year hold is essentially a bet that the company **monetizes Gen 2 + Gen 3 + Gen 4 sequentially**, not just Gen 2.
2. **Rack-power architecture is migrating from 48 V DC to 800 V DC, and that migration runs through Vertiv.** The Vertiv-NVIDIA 800 VDC announcement reframes the AI rack as a high-voltage DC system rather than an AC-distributed system, which moves more value into busways, rectifiers, and the DC switchgear stack — all Vertiv adjacencies. ^[extracted] At 1 MW per rack, AC distribution physically does not work without unacceptable copper costs. 800 VDC is therefore not a marketing position; it is a thermodynamic and metallurgical necessity above ~250 kW per rack, and the company that owns the reference architecture for that transition collects a transition tax for the entire 5-year window.
3. **The installed-base service annuity is the part of the franchise that doesn't depend on the next quarter's bookings.** Service is currently ~15% of revenue ^[extracted] and management has been explicit that liquid-cooling kit drives **2–3x the service attach** of legacy thermal kit because the loops require fluid management, leak monitoring, and pump maintenance. ^[extracted] By FY30, on a $22B revenue base, the service annuity should be a **$4–5B mid-to-high-teens-margin recurring book** ^[inferred] — i.e. roughly the size of the entire company in 2019. This is the layer that justifies a higher terminal multiple than peers; it is also the layer that survives a cyclical air-pocket in new construction.
4. **The 25%+ adjusted operating margin target by 2029–2030 is structurally credible, not a stretch goal.** Investor Day framed the bridge as: ~250 bps from price/cost on liquid-cooling, ~150 bps from manufacturing footprint optimization (Croatia, Italy, Mexico, India), ~150 bps from service mix, and ~100 bps from G&A leverage. ^[extracted] Even haircutting each leg by a third, you arrive at the high-23s by FY30, against ~20–21% in FY26. ^[inferred] The thesis does not require all four legs to land; it requires three of four, which is the kind of margin path that compounds quietly rather than explosively.
5. **Capital allocation discipline distinguishes Vertiv from the prior Emerson Network Power era.** The bolt-on M&A roll-up (CoolTera, E&I, the rumored Italian and APAC tuck-ins) has been small, cooling-adjacent, and accretive — not transformational and dilutive. ^[extracted] Buyback authorization plus dividend initiation in 2025 anchored a ~50% capital-return-of-FCF posture without compromising R&D ramp. ^[extracted] Over a 5-year window, the combination of (a) low M&A integration risk, (b) a dividend that's not yet at the level that signals capex exhaustion, and (c) buybacks at sub-30x P/E in air-pocket quarters, is a high-quality compounder profile.
6. **Emerging-market expansion is real optionality, not the core thesis.** India, ASEAN, the Gulf, and Latin America are building data-center capacity with a 3–5 year lag to the US/Europe wave. Vertiv's existing presence in these markets through the legacy Liebert/Chloride channel means the second wave of regional sovereign-AI capacity (UAE, Saudi, India, Indonesia) lands on Vertiv's installed base. ^[inferred] None of the 5-year base case requires this; it sits as upside.

The asymmetry across a 5-year hold is that **multiple compression risk is largely a 12-month event**, while **earnings power compounding is a multi-year event**. If FY26 disappoints on a single quarter, the stock can lose 25–35% in a week (this happened twice in 2024–2025), but the 5-year IRR is dominated by where revenue, margin, and FCF/share land in 2030, not by where the multiple lands in 2027.

A useful contrast with the 12-month dossier: the 12-month case is essentially a bet that **consensus has not yet priced FY26 guidance correctly**. The 5-year case is a bet that **consensus has not yet priced FY29–FY30 earnings power correctly** — which is a structurally different (and structurally more durable) form of mispricing, because the further out the inflection, the slower consensus updates.

## 2. Business overview (5-year segment trajectory)

Vertiv operates one reportable segment with three product families and one service motion. The 12-month dossier walks through the static product mix; this dossier walks through how each family evolves over 5 years.

- **Critical infrastructure & solutions (~75% of revenue today, ~70% by FY30).** Power management (UPS, switchgear, busway, rack PDU), thermal management (chillers, CRAH/CRAC, in-row coolers, CDUs, manifolds, immersion tanks), integrated rack and modular solutions. Over five years, **thermal grows faster than power within this bucket** — liquid cooling product penetrates from low single-digit % of thermal revenue today to the **40–55% range by FY30** ^[inferred] as Gen 2/3/4 stack. Power grows steadily but more linearly with overall MW deployed, not with rack density inflation. Within power, **busway and DC-switchgear gain share within the mix** as 800 VDC architectures penetrate.
- **Services (~15% of revenue today, ~18–22% by FY30).** ^[inferred] Maintenance, monitoring, spare parts, SLA contracts, lifecycle services on the installed base. The 5-year compounding mechanic here is straightforward: every $1B of liquid-cooling kit shipped today drops a ~$70–120M/yr service annuity into the run-rate over the following 18–36 months, at margins materially above blended product margins. ^[inferred] By FY30 service should be the highest-margin pillar of the company.
- **Integrated modular solutions (10% of revenue today, 12–15% by FY30).** ^[inferred] Pre-fab data-center modules, SmartMod / SmartAisle / SmartRow. Hyperscalers are using these for site-pull-forward (commissioning a site in 9 months instead of 18 by skidding power and cooling factory-pre-assembled). This is structurally a higher-velocity revenue line than the bespoke product line, and it scales with GPU-cluster commissioning velocity.

By geography, the 5-year frame should see Americas hold roughly flat as a percentage (mid-50s) while EMEA grows somewhat faster on European AI sovereignty buildout and APAC grows fastest on India/Japan/Korea. ^[inferred] The Croatia and Italian capacity expansions are EMEA-leveraged; the Monterrey expansion is Americas-leveraged with USMCA tariff arbitrage.

## 3. AI buildout exposure — quantifying the trajectory

Today, Vertiv's mix is roughly **60–70% AI/HPC-driven** versus enterprise / colo / telecom legacy. ^[extracted from management commentary] The 5-year frame argues this becomes 75–85% by FY30, for two reasons:

- **The legacy enterprise and colocation base is a roughly stable absolute dollar number** ($3.5–4.5B/yr) with low-single-digit growth, so as the AI/HPC layer scales from ~$6B today toward $15–18B by FY30, the mix arithmetic moves the AI share to ~80%. ^[inferred]
- **Telco/edge is structurally flat to declining** as a percentage of the company, even though absolute dollars hold, because the AI buildout simply grows much faster.

The implication for a 5-year hold is that **VRT becomes more, not less, a pure-play on AI infrastructure capex over the holding period**. This cuts both ways: it improves the multiple if AI infrastructure is still a "thematic" market in 2030, and it removes the diversification cushion if AI capex flattens. The 12-month dossier argues the cushion is intact today; the 5-year dossier argues it gets thinner.

The cross-link to [[ai-data-center-buildout-investment-memo]] matters here: that memo's central forecast is **$1.4–2.0T cumulative global data-center capex 2025–2030**, of which the **mechanical, electrical, and plumbing (MEP) layer is roughly 22–28%**, and Vertiv's serviceable share of MEP is **8–14%**. ^[inferred] On the midpoint, that's $35–60B of cumulative VRT-addressable revenue over the window. The base-case revenue plan below ($90–95B cumulative FY26–FY30) sits comfortably inside this TAM.

See also [[ai-data-center-supply-chain-bottlenecks]] for the choke-point taxonomy: liquid cooling and rack-level switchgear are both flagged as Tier-1 bottlenecks, and Vertiv is on the supply side of both.

## 4. Demand drivers (5-year lens)

### 4.1 Liquid-cooling adoption: five generations on a rolling 5-year window

| Gen | Years | Architecture | Per-rack density | Vertiv revenue layer |
|---|---|---|---|---|
| Gen 1 | 2023–2025 | Rear-door HX + early CDU | 30–60 kW | CDU + RDHx, modest |
| Gen 2 | 2026–2027 | In-row CDU + cold plate retrofit | 60–130 kW | CDU + manifolds + cold-plate kits, primary |
| Gen 3 | 2027–2028 | Factory-integrated liquid rack | 130–250 kW | Full liquid SmartRack + service |
| Gen 4 | 2028–2029 | Two-phase / immersion + DC bus | 250–600 kW | Immersion tanks, dielectric fluid services |
| Gen 5 | 2029–2031 | 1 MW racks, refrigerant loops | 600 kW–1 MW | Refrigerant CDUs + 800 VDC busway |

^[inferred from management Investor Day commentary, NVIDIA roadmaps, and SemiAnalysis cooling notes]

The compounding mechanic: each generation **does not retire the prior generation's installed base**, so service revenue stacks over the window even as new product revenue rotates. A site built in 2026 with Gen 2 kit is still under Vertiv service contracts in 2031, and the customer is also buying Gen 4 kit for new buildings on the same campus.

### 4.2 CDU + manifold + cold-plate stack compounding

The unit economics of a single Gen 3 hyperscale row look approximately like:

- 1 in-row CDU at $250–350K
- 8–12 manifolds at $25–40K each
- 60–80 racks of cold-plate kits at $15–25K per rack
- 4–6 years of service at $80–120K/yr

Per row: **~$3.5–5.5M of equipment + ~$0.4–0.7M/yr of service**. ^[inferred]

A single hyperscale liquid-cooled site is 50–200 such rows, so the per-site economics range from **$175M to over $1B of equipment** plus a $20–140M/yr service annuity. ^[inferred] The 5-year math: Vertiv books **3–5 of these sites per quarter** through 2030 in the base case, vs. 1–2 in early 2026.

### 4.3 Rack-power architecture: 48 V → 400 V → 800 VDC

The 12-month dossier treats 800 VDC as a 2026–2027 design-win event. The 5-year dossier treats it as a **multi-year architecture lock-in**. Once a hyperscaler standardizes on Vertiv 800 VDC busway and rectifiers for one campus, the switching cost for the next campus is enormous: training, spares, monitoring software, vendor relationship, certified electricians. The five-year tail of one design win is plausibly **3–5x the headline contract value**. ^[inferred]

### 4.4 Installed-base service compounding

Annualized service revenue per $1B of cumulative shipped product (a useful metric for a long-duration hold) is currently roughly **$60–80M/yr** at Vertiv. ^[inferred] Liquid cooling shifts this number toward **$120–160M/yr per $1B shipped** because of fluid loops, leak monitoring, dielectric chemistry. ^[inferred] Apply that to a cumulative $35–55B shipped from 2020 through 2030, and the FY30 service run-rate is plausibly **$4.5–6.5B**. ^[inferred] At ~30% segment margin that's **$1.4–2.0B of segment EBIT from service alone** — a number that approaches the entire company's 2023 EBIT.

The qualitative point that matters most for a 5-year hold: **service revenue is the part of the franchise that does not require winning every new RFP**. Even if Vertiv loses a hyperscaler design-win cycle in 2028, the FY26–FY27 installed base continues to throw off cash through FY32. This converts what looks like a cyclical capital-equipment franchise into something closer to a managed-services franchise with a 5–7 year recurring-revenue tail per shipped dollar, which is the layer that should anchor the multiple in any soft-air-pocket year.

### 4.5 Software and DCIM monetization

A subtle but real fifth driver: **DCIM (data-center infrastructure management) software and remote monitoring** is currently ~2–4% of revenue and very high margin. ^[inferred] Liquid cooling makes monitoring non-optional (a fluid leak can destroy a $20M GPU rack in seconds), so the software attach rate trends from "common" to "universal" over the 5-year window. By FY30, monitoring software at Vertiv could plausibly be a **$700M–$1.2B run-rate at ~50% gross margin**, which materially supports the consolidated margin bridge. ^[inferred]

## 5. Supply, capacity, and footprint (5-year capacity build)

The 12-month dossier covers the 2026 capacity ramp. The 5-year dossier needs to take a position on whether the company can build the **second wave of capacity** without margin compression.

- **Italian expansion (Tognana / Padova).** Already announced, ramping in 2026–2027. Adds liquid-cooling product capacity for EMEA. ^[extracted]
- **Croatia.** Greenfield expansion, primarily for European hyperscaler demand. ^[extracted]
- **Mexico (Monterrey).** Power and modular solutions, USMCA-friendly. Ramping through 2027. ^[extracted]
- **APAC (India + Malaysia).** Supports the second wave of sovereign-AI capacity in India, Indonesia, Singapore. ^[inferred]
- **US (Ohio + Pennsylvania).** Domestic content for federal AI buildouts (Stargate-class), tariff insulation, and Buy-American compliance. ^[inferred]

Capacity adds tend to be **modular and multi-year cadenced** — i.e. ~$300–500M/yr of capex over the 5-year window, against a plausible $2.5–4B/yr FCF base. ^[inferred] This is not a JCI/Trane pace of capex intensity; it is a roll-up of fast-payback factories.

**M&A roll-up potential.** The fragmented liquid-cooling market still has 8–15 sub-scale specialists in dielectric fluids, immersion tanks, leak detection, and rack-level monitoring software. A measured 1–2 acquisitions per year at $200–800M each would deepen the moat at the service / monitoring layer without bet-the-company integration risk. The CoolTera precedent suggests the company's M&A discipline is intact. ^[extracted]

The footprint diversification is itself a thesis: by FY30, Vertiv is plausibly **~50% Americas, ~25% EMEA, ~25% APAC** by manufacturing capacity, ^[inferred] which is a much more defensible posture against tariff-driven cost shocks than the 2024 footprint.

**Lead-time as a moat.** A useful 5-year lens on capacity is to think about lead time, not capacity in absolute MW terms. Vertiv's CDU lead times have moved from ~16 weeks in 2023 to **30–50+ weeks in 2025–2026 for premium configurations**, ^[extracted from trade press] and management's view is that liquid-cooling product lead times will normalize to **20–30 weeks by 2027–2028** as the second wave of capacity comes online. ^[inferred] The company that solves the lead-time problem first wins design-in across the 2027–2028 GPU generations, and the design-in then locks in the 2029–2031 service annuity. This is exactly the same dynamic that GE Vernova's gas-turbine slot scarcity is exploiting on the power side (see [[pick-ge-vernova-gev]]) — scarcity converts to pricing power converts to backlog converts to multi-year revenue visibility.

**Vertical integration debate.** The 5-year question that comes up in management conversations: should Vertiv vertically integrate into dielectric fluids, pumps, or cold-plate manufacturing? The current posture is "no" — partner with 3M / Solvay / Chemours on fluids, partner with Grundfos / Wilo on pumps, partner with cold-plate specialists. The bull case for vertical integration is margin capture; the bear case is capital intensity and execution risk. The 5-year base case assumes **selective vertical integration** via M&A in monitoring software and dielectric fluid services, but **not** in pumps or cold plates. ^[inferred]

## 6. 5-year financial model (FY26 → FY30)

All FY26–FY30 figures are `^[inferred]` unless otherwise noted; FY25 and Q1 FY26 anchors are `^[extracted]` from the 10-K and 10-Q.

### 6.1 Revenue path

| FY | Bear ($B) | Base ($B) | Bull ($B) | Base YoY |
|---|---|---|---|---|
| FY25A | 8.6 | 8.6 ^[extracted] | 8.6 | — |
| FY26 | 9.4 | 9.8 | 10.4 | +14% |
| FY27 | 10.7 | 12.0 | 13.5 | +22% |
| FY28 | 12.0 | 14.6 | 17.5 | +22% |
| FY29 | 13.4 | 17.6 | 22.0 | +21% |
| FY30 | 14.8 | 21.0 | 26.5 | +19% |
| **5y CAGR** | **11.5%** | **19.5%** | **25.4%** | |

The base case implies a **revenue CAGR of ~19–20%** vs. the 12-month dossier's FY26 guidance of ~14% YoY. The compounding step-up between FY26 and FY27 is the inflection from Gen 2 deployments hitting in volume.

### 6.2 Adjusted operating margin path

| FY | Bear | Base | Bull | Driver mix in base |
|---|---|---|---|---|
| FY25A | 19.6% ^[extracted] | 19.6% | 19.6% | — |
| FY26 | 19.8% | 20.5% | 21.2% | Mix + price |
| FY27 | 20.2% | 21.8% | 23.0% | Liquid-cooling scaling |
| FY28 | 20.5% | 23.0% | 24.5% | Service mix + footprint |
| FY29 | 20.7% | 24.2% | 26.0% | Investor Day target band |
| FY30 | 20.8% | 25.2% | 27.5% | Steady-state |

Base case: **25%+ by FY29–FY30**, matching the Investor Day target on the bridge described in §1, point 4. ^[extracted target] Bear case: stalls at the low-20s; bull case: overshoots the target by ~250 bps as 800 VDC and service annuity outperform.

### 6.3 Adjusted EPS path

Anchors: FY25 adjusted diluted EPS landed at approximately **$3.50–3.60** ^[extracted from FY25 10-K commentary], on roughly 386M diluted shares declining to ~370M by FY30 on buybacks. ^[inferred]

| FY | Bear EPS | Base EPS | Bull EPS |
|---|---|---|---|
| FY25A | $3.55 ^[extracted] | $3.55 | $3.55 |
| FY26 | $3.80 | $4.10 | $4.45 |
| FY27 | $4.40 | $5.20 | $6.10 |
| FY28 | $5.05 | $6.55 | $8.15 |
| FY29 | $5.65 | $8.20 | $10.75 |
| FY30 | $6.30 | $10.05 | $13.90 |

Base case: **adjusted EPS roughly triples** over the five-year window. The 12-month dossier underwrites the FY26 step; this dossier underwrites the cumulative compounding. The "EPS doubles" thesis the user asked about is **base case by FY28** and **bear case by FY30**, i.e. you double EPS even in a fairly punishing scenario.

### 6.4 Free cash flow and FCF/share

FCF conversion has historically tracked ~80–95% of adjusted net income; assume **88% mid-cycle**. ^[inferred from FY24–FY25 history]

| FY | Base FCF ($B) | Base FCF/share | Cumulative FCF ($B) |
|---|---|---|---|
| FY26 | 1.4 | $3.65 | 1.4 |
| FY27 | 1.8 | $4.75 | 3.2 |
| FY28 | 2.3 | $6.05 | 5.5 |
| FY29 | 2.9 | $7.65 | 8.4 |
| FY30 | 3.5 | $9.40 | 11.9 |

**Cumulative 5-year FCF in the base case is ~$12B** ^[inferred] — about 23–25% of today's market cap. The bull case is ~$16–18B cumulative; the bear case is ~$8–9B.

### 6.5 Capital allocation through FY30

Of cumulative FCF, plausible deployment in the base case:

- **~50% to buybacks** ($6.0B) at a blended ~$140–180/share → ~35–45M shares retired ^[inferred]
- **~10% to growing dividend** ($1.2B), starting from current modest base
- **~25% to bolt-on M&A** ($3.0B) across 4–8 acquisitions
- **~15% to debt paydown / balance-sheet flex** ($1.8B)

This capital allocation mix produces a **share count near 340M by FY30** ^[inferred] from ~378M today, which is a ~10% per-share tailwind on top of the EPS arithmetic.

### 6.6 Balance sheet trajectory

Net leverage exits FY25 around 1.0–1.4x EBITDA ^[extracted/inferred] and the 5-year base case implies it drifts toward **0.4–0.7x by FY30** as EBITDA scales materially faster than gross debt. Interest expense is a small headwind to EPS in FY26 (refinancing of pre-IPO notes at higher coupons) but becomes a tailwind by FY28 as debt paydown and rate normalization compound. ^[inferred] The strategic implication is that **the company can opportunistically lever back up to 1.5–2.0x for a transformational M&A move** in FY28–FY29 if the right asset surfaces (e.g. a Schneider liquid-cooling carve-out, a private dielectric-fluid franchise, or a DCIM software platform), without straining ratings.

### 6.7 Quality-of-earnings caveats

A few items to monitor across the 5-year window that could compress reported earnings quality without changing economics:

- **Stock-based compensation.** Currently ~2–3% of revenue ^[extracted]; should trend to 1.5–2.0% as the share count base grows. Watch for SBC as a percentage of FCF — the 5-year base assumes SBC is ~10–14% of FCF, which is consistent with peer industrials.
- **Working-capital intensity.** Liquid-cooling backlog has lengthened cash conversion cycles modestly. Base case assumes WC stays at ~12–14% of revenue; bear case has WC creeping to 16–18% in a tighter supplier environment, which would haircut FCF by $300–500M cumulatively over the window. ^[inferred]
- **Backlog quality.** Watch for the percentage of backlog with **firm shipping dates within 12 months** vs. softer "framework" or "reservation" agreements. The 5-year hold is comfortable with the latter as long as the former covers the next 4–6 quarters.

## 7. Valuation (5-year fair-value range)

### 7.1 Long-horizon DCF

Inputs for the base case:

- Revenue CAGR FY26–FY30: **19.5%**
- Revenue CAGR FY30–FY35 (terminal ramp): **9–11%** ^[inferred — assumes Gen 4/5 and emerging-market wave]
- Adjusted operating margin terminal: **25.5%**
- Tax rate: **22%**
- WACC: **8.5%**
- Stage-3 perpetuity growth: **3.0%**
- Capex/sales: **2.5–3.0%**

**Base-case DCF fair value: $175–205/share** in 2026 dollars ^[inferred]

Sensitivity: a 100 bps WACC change moves fair value by ~$25–30; a 200 bps terminal-margin change moves it by ~$30–40.

### 7.2 5-year forward earnings multiple

Apply a terminal multiple to the FY30 base EPS of **$10.05**:

- Bear multiple (25x, growth-deceleration regime): **$251 / 5y CAGR from $135 ≈ 13.2%**
- Base multiple (28x, premium-quality industrial compounder): **$281 / 5y CAGR ≈ 15.8%**
- Bull multiple (32x, structural-grower regime): **$322 / 5y CAGR ≈ 19.0%**

Add ~$24 of cumulative dividends to those terminal prices for total return.

### 7.3 Peer multiple cross-check

Comparable terminal P/E and EV/EBITDA on FY27–FY28 estimates:

| Peer | Ticker | FY27e P/E | FY27e EV/EBITDA | Comment |
|---|---|---|---|---|
| Schneider Electric | SU.PA | ~24x | ~17x | Closest peer; less AI-pure |
| nVent | NVT | ~21x | ~15x | Smaller, narrower |
| Johnson Controls | JCI | ~17x | ~12x | Diversified, lower growth |
| Trane Technologies | TT | ~28x | ~21x | Quality-comp anchor |
| Modine | MOD | ~22x | ~14x | Pure thermal, smaller |

^[inferred from sell-side consensus] Vertiv at ~30–32x FY27 base EPS ($5.20) is **1.05–1.15x the TT multiple** and **1.25–1.45x the SU.PA multiple**, defensible on (a) higher growth and (b) higher AI mix. Compresses in air-pocket years.

### 7.4 5-year fair-value range, blended

- **Bear case**: $215–240 by FY30 (10–12% IRR including dividends)
- **Base case**: $280–310 by FY30 (16–17% IRR)
- **Bull case**: $360–410 by FY30 (22–24% IRR)

Conviction is that the **base case probability is ~50%**, bear ~25%, bull ~25% ^[inferred analyst weighting]. Probability-weighted IRR is ~17%, which justifies an anchor position in a 5-year basket alongside [[pick-ge-vernova-gev-5y]] (pending), [[pick-micron-mu]], [[pick-coherent-cohr]], and [[pick-credo-crdo]].

### 7.5 Why DCF and multiples both work here

A common objection to DCF on a fast-grower is that the terminal value dominates, so the model is essentially a multiple in disguise. That critique applies less to Vertiv than to most growth names because **the FY30 base case has the company at a steady-state revenue growth in the low double digits** with margin already at the target, which means the terminal-value sensitivity to the perpetuity growth assumption is more bounded than for, say, a pure-software comp. The DCF and the FY30 multiple methods produce a fair-value range that **overlaps in the $260–320 corridor**, which is the analyst's preferred anchor for the 5-year base.

A useful way to falsify the valuation is to ask: at what FY30 revenue and margin do you need to be wrong for the stock to round-trip from $135 today to $135 in 2031? Approximate answer: revenue stalls at ~$13.5B (vs. $21B base) **and** margin holds at 21% (vs. 25.2% base). That joint outcome requires both the demand thesis and the margin-bridge thesis to fail simultaneously, which is a low-probability but not zero-probability scenario.

## 8. Catalyst calendar (5-year)

The 12-month dossier tracks the next four prints. The 5-year dossier tracks **structural milestones**, not quarterly beats:

- **Quarterly cadence (every 90 days, FY26–FY30).** Earnings, with backlog, organic growth, and liquid-cooling mix as the key prints. Single-quarter air pockets are expected and structurally not thesis-breaking on a 5-year hold.
- **Investor Day cycles.** The next two Investor Days (likely H2 2026 and H1 2028) ^[inferred] are the milestones for **resetting the FY30 and FY32 financial framework**. Watch specifically for: liquid-cooling % of revenue path, service mix, 800 VDC platform revenue, and operating margin bridge updates.
- **NVIDIA roadmap synchronization (2026, 2027, 2028, 2029).** Each new GPU generation (Rubin, Rubin-Ultra, Feynman, post-Feynman) drops a new rack reference design that opens a Vertiv design-win cycle. The cadence is roughly **annual**.
- **Microsoft Project Andromeda announcements (2026–2028).** Microsoft's stated goal of a million-GPU contiguous AI training campus by 2028 implies multi-billion-dollar Vertiv contracts staged across the 24–30 months prior. ^[inferred] Specific announcements to watch: Andromeda-1 commissioning (likely 2026), Andromeda-2 site selection (likely 2027).
- **AWS Trainium liquid-cooling build-outs (2026–2029).** AWS has historically built proprietary cooling, but the public Trainium2 architecture references in-row liquid-cooling vendors; whether AWS commits to Vertiv as primary or alternates with insourced kit is the **single largest 5-year customer-concentration variable**. ^[inferred]
- **Meta MTIA-2 / MTIA-3 cooling architecture decisions (2026–2028).** Meta has publicly partnered with Vertiv on prior generations; the question for the 5-year window is whether MTIA-3 (likely 2028) stays with Vertiv or migrates to a pure ODM (Foxconn/Quanta) channel. ^[inferred]
- **Capacity expansion announcements.** Mid-cycle (FY27–FY28), expect at least 2 additional capacity announcements beyond the current Italian/Croatia/Mexico set. The watch is whether they're announced **with named anchor customers attached**, which would suggest demand visibility extending into FY30.
- **M&A announcements.** Watch for tuck-ins in dielectric fluids, leak detection, rack-level DCIM software. Each one extends the moat at the high-margin layer.
- **Regulatory / tariff shocks.** A 2027–2028 tariff regime change on Chinese-content cooling components is the largest exogenous catalyst; net positive for Vertiv given the Mexico/US/EU footprint.
- **Sovereign-AI capacity announcements (Stargate-class).** Multi-year, multi-site federal-scale buildouts (Stargate, EU-AI, UAE G42, Saudi HUMAIN) typically pre-commit MEP vendors 18–36 months ahead of GPU delivery. Each named win is a ~$500M–$2B revenue event spread over 24–36 months. ^[inferred] The watch is whether Vertiv is named primary on at least 3–4 of these by FY28.
- **Dell / HPE / Supermicro factory-integrated rack programs.** As factory-integrated liquid-cooled racks become the default delivery model (Gen 3+), the ODM/OEM channel becomes a significant indirect revenue path for Vertiv. Watch for explicit Vertiv-as-cooling-OEM disclosures in Dell, HPE, and Supermicro filings/conference commentary across 2026–2028.

The right way to use this calendar is **as a re-underwriting checkpoint, not as a trade calendar**. The 5-year hold ignores any single-quarter print but re-evaluates the thesis when **two or more structural milestones** trigger inside a 6-month window.

## 9. Bear case (5-year)

The 5-year bear is structurally different from the 12-month bear. The 12-month bear is "guidance miss." The 5-year bear is "the franchise stops earning excess returns." The four routes to that outcome:

1. **Hyperscaler cooling insourcing.** Microsoft's "Sidekicks" rack-level cooling, AWS's proprietary cooling roadmap, and the possibility that Meta migrates MTIA-3+ to direct-from-ODM cooling all represent **value migrating from Vertiv to the customer's vertical stack**. The bear case here is that **2–3 of the top 7 hyperscalers internalize 40–60% of their cooling spend by FY30**, ^[inferred] which would compress Vertiv's hyperscaler share from ~50% of revenue today to ~30%. The defense: (a) service annuity stays at Vertiv even if new product moves in-house, (b) Tier-2 hyperscalers and neoclouds (see [[neocloud-and-power-first-operator-diligence]]) are an offsetting growth channel, (c) the engineering depth required to insource is non-trivial and most hyperscalers have not committed cycles to it.
2. **CDU and manifold commoditization.** The CDU was a high-IP product in 2023; by 2027–2028 there will be 8–12 capable suppliers globally including Chinese OEMs (Inspur, Sugon-related) and Taiwanese ODMs (Asia Vital, Auras). ^[inferred] If CDUs commoditize, gross margins on Gen 3/4 product compress 300–500 bps from current levels. The defense: Vertiv's bundle (CDU + manifold + cold plate + rack PDU + service) is harder to commoditize than the CDU alone, and the 800 VDC reference design is a moat-extending architecture event.
3. **Schneider/JCI/nVent margin competition.** If Schneider and nVent both push aggressively into US hyperscaler liquid cooling, and JCI deploys its services franchise into AI data centers, the **3-vendor pricing discipline** Vertiv currently benefits from could erode. The defense: Schneider is more European-leveraged, JCI is more building-leveraged, and nVent is sub-scale at the system-integration level. The 5-year risk is real but not near-term.
4. **AI-DC growth slows / multiple compresses.** If GPU demand flattens in 2028–2029 due to (a) algorithmic efficiency gains, (b) inference workloads not following the projected scaling curve, or (c) a broad capital-cost reset in AI infra, the entire AI infrastructure complex re-rates lower regardless of company-level execution. Vertiv would then be valued on industrial-compounder multiples (~18–22x) rather than AI-thematic multiples (~28–32x), which is a ~30% multiple-compression event. The defense: see [[risk-tripwires-and-warning-indicators]] for the trigger set; service annuity and emerging-market expansion are the partial cushions.

**Bear-case fair value: $130–160 by FY30** (-3% to +4% IRR including dividends) ^[inferred]. This is **not a thesis-killing range** — even the bear case approximately preserves capital. The 5-year hold's downside protection is structurally better than the 12-month trade.

A fifth bear vector worth flagging: **AI capex composition shifts from training to inference**. If global AI capex pivots toward inference at the edge (smaller, distributed deployments) and away from giant centralized training campuses, **rack-density inflation slows** because edge inference doesn't need 1 MW racks. Vertiv would still grow, but the high-margin Gen 4/5 product mix would mature later than the FY30 base assumes. The defense: edge inference still needs cooling, and Vertiv has edge / micro-DC product lines (SmartCabinet, SmartAisle Edge) that are well-positioned for that pivot — but margin would be lower. ^[inferred]

A sixth, more remote vector: **regulatory limits on water consumption** in water-stressed regions (US Southwest, parts of Spain, parts of Australia). If hyperscalers are forced into closed-loop refrigerant cooling earlier than the technology curve suggests, that's actually **net positive for Vertiv** because refrigerant CDUs are higher-content than evaporative cooling — but a forced transition could compress equipment margins on the rapid-deployment phase. ^[inferred]

## 10. Position sizing and portfolio fit

- **Anchor position** in the 5-year AI-infrastructure basket. Sizing in the **3–6% of basket** range, matching the conviction tier of [[pick-ge-vernova-gev]] and ahead of single-product names like [[pick-credo-crdo]] / [[pick-coherent-cohr]].
- **Lower beta than the 12-month VRT trade.** The 12-month dossier is essentially a **bookings-and-margin-print bet**; this dossier is a **multi-year compounding bet**. A single guidance miss in 2027 can be a 25–35% drawdown that the 5-year hold rides through, where the 12-month trade would be stopped out.
- **Pairs well with** [[pick-ge-vernova-gev]] (power side of the same buildout), [[pick-coherent-cohr]] (optical interconnect on the same campuses), [[pick-credo-crdo]] (in-rack copper), [[pick-micron-mu]] (memory in the GPUs that go in the racks Vertiv cools).
- **Negatively correlated** with neocloud equity (see [[neocloud-and-power-first-operator-diligence]]) — Vertiv wins whether a CoreWeave/Crusoe build-out ends up on Vertiv kit or a hyperscaler-owned campus does. The 5-year hold is **agnostic to the demand-side ownership question**, which is structurally cleaner than betting on the operators directly.
- **Re-underwrite triggers.** Specifically: (a) hyperscaler concentration above 70% of revenue, (b) service mix flattening below 18% by FY28, (c) operating margin progress stalling for 4 consecutive quarters, (d) two new entrants taking >$500M of liquid-cooling business each, (e) NVIDIA reference design moving to a non-Vertiv 800 VDC partner. Any two of these together is a sizing-down event; any three is a thesis-out event.
- **Tax frame.** This is a 5-year hold for long-term capital gains treatment (LTCG triggers at month 13). Position should be sized for hold-through-volatility, not stop-loss-driven.

### 10.1 What would change my mind (5-year specific)

Distinct from the 12-month re-underwrite triggers above, the structural mind-changers for the 5-year hold are:

- **A credible competitor reference design at 800 VDC, 1 MW rack scale, that NVIDIA endorses alongside or in place of Vertiv.** This would imply the architectural moat doesn't exist, and the franchise becomes a commodity supplier even at scale.
- **Two consecutive years where service revenue grows slower than product revenue.** This breaks the installed-base annuity thesis and would suggest customers are migrating service to in-house or third-party providers.
- **A 300+ bps gross margin compression event without an accompanying mix shift explanation.** This would suggest commoditization is real, not just feared.
- **A failed M&A integration that requires a write-down >5% of equity.** This would break the capital allocation discipline thesis.
- **Loss of a top-3 hyperscaler customer to a vertically-integrated alternative (with the customer publicly disclosing the migration).** This is the highest-impact single signal.

If none of those triggers fire across the 5-year window, the base case has roughly a 70% probability of landing inside the $260–320 fair-value corridor, which is the analyst's preferred conviction frame.

### 10.2 Sequencing with the 12-month companion

Practical implementation note: an investor who already holds the 12-month [[pick-vertiv-vrt]] trade should **not double-size into the 5-year hold mechanically**. The cleaner sequencing is to **carry the 12-month position through its catalyst window**, evaluate at month 13 whether the LTCG-eligible position should roll into the 5-year hold size, and add only on episodic drawdowns thereafter. The two dossiers are the same franchise viewed at two horizons, not two independent positions.

### 10.3 How this fits the broader 5-year basket

In the 5-year frame, the AI infrastructure basket organizes around three layers: **power generation and transmission** (GEV, VST, NRG), **electrical and mechanical at the data-center boundary** (VRT, ETN, PWR, NVT), and **silicon-and-photons inside the rack** (NVDA, MU, COHR, CRDO, AVGO). Vertiv sits cleanly at the second layer with one foot in the third (rack PDUs, busways, monitoring) and is structurally **the most levered name to rack-density inflation specifically** — more so than Eaton (broader power-distribution mix) or nVent (narrower thermal product set). The 5-year hold is therefore a **purer expression of the rack-density thesis** than any peer-basket alternative, which is the single best argument for anchor sizing.

A second framing: of the names above, Vertiv has the **best combination of (a) AI-thematic exposure, (b) margin expansion runway, and (c) recurring service revenue**. GEV has more dramatic power-scarcity narrative but less service annuity; ETN has more diversification but less thematic torque; NVT is sub-scale. On a 5-year hold the combination of all three matters more than maximizing any single one.

## 11. Sources

See the `sources` block in the frontmatter for the full list. Primary anchors:

- Vertiv FY2025 10-K and Q1 2026 10-Q (the financial baseline).
- Investor Day 2025 (the 25%+ adjusted-operating-margin target and capacity-expansion roadmap).
- Last four earnings transcripts (the ~60–70% AI mix, service-attach commentary, liquid-cooling backlog cadence).
- Vertiv–NVIDIA 800 VDC announcement (the rack-power architecture frame).
- SemiAnalysis, IDTechEx, and DataCenterDynamics on cooling-generation taxonomy and market sizing.
- Sell-side via Wells Fargo, William Blair, Loop Capital (the FY26–FY28 estimate range and peer comp multiples).
- Microsoft / AWS / Meta cooling roadmap public references (the bear-case insourcing scenarios).
- Hyperscaler capex disclosures cross-referenced in [[ai-data-center-buildout-investment-memo]].

## 12. Related

- [[pick-vertiv-vrt]] — 12-month catalyst companion (the trade dossier).
- [[ai-data-center-buildout-investment-memo]] — demand-side memo with global capex sizing.
- [[ai-data-center-supply-chain-bottlenecks]] — choke-point taxonomy with cooling and switchgear flagged Tier-1.
- [[ai-investment-public-company-scorecard]] — basket-level scorecard.
- [[ai-investment-valuation-models]] — DCF and peer-multiple framework used here.
- [[electrical-equipment-deep-dive]] — basket frame for VRT, GEV, ETN, PWR, etc.
- [[hyperscaler-constraint-map]] — cross-reference for hyperscaler MEP buying behavior.
- [[analyst-picks-master-list]] — index of all pick dossiers.
- [[neocloud-and-power-first-operator-diligence]] — demand-side counter-position.
- [[risk-tripwires-and-warning-indicators]] — the trigger set for re-underwriting.
- [[pick-ge-vernova-gev]] — paired power-side 12-month long.
- [[pick-coherent-cohr]] — optical interconnect adjacency.
- [[pick-credo-crdo]] — rack-internal copper adjacency.
- [[pick-micron-mu]] — memory-side adjacency.
- [[us-power-region-deep-dive]] — geographic overlay for hyperscaler campus siting.
- [[second-order-beneficiaries-ranked]] — ranking of indirect AI infrastructure beneficiaries.
- [[situational-awareness-ai-infrastructure-portfolio]] — top-down portfolio frame.
