---
title: Electrical equipment supply chain deep dive
category: ai-reference
summary: Subcomponent-level map of the electrical-equipment scarcity feeding AI data centers, plus company-by-company exposure for Eaton, Schneider, Hubbell, Powell, Hitachi Energy, Siemens Energy, and GE Vernova.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - supply-chain
sources:
  - https://www.woodmac.com/press-releases/data-center-demand-drives-us-electrical-equipment-market-to-$65b-reshaping-industry-dynamics/
  - https://www.bloomberg.com/news/articles/2026-04-28/ai-boom-to-triple-us-power-equipment-market-to-65-billion
  - https://www.eaton.com/us/en-us/company/news-insights/news-releases/2026/eaton-reports-record-fourth-quarter-2025-results.html
  - https://www.fool.com/earnings/call-transcripts/2026/02/03/eaton-etn-q4-2025-earnings-call-transcript/
  - https://www.stocktitan.net/news/POWL/powell-industries-announces-first-quarter-fiscal-2026-5va7bbadszc0.html
  - https://www.stocktitan.net/news/HUBB/hubbell-reports-fourth-quarter-and-full-year-2025-p17a9eksgn3n.html
  - https://www.gevernova.com/news/press-releases/ge-vernova-reports-first-quarter-2026-financial
  - https://www.gevernova.com/news/press-releases/ge-vernova-completes-prolec-ge-acquisition
  - https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q1-fy-2026.html
  - https://www.investing.com/news/company-news/schneider-electric-fy-2025-slides-record-40bn-revenues-strong-outlook-93CH-4526856
  - https://www.hitachi.com/New/cnews/month/2025/09/250905.html
  - https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/010526-interview-no-peak-demand-in-sight-for-booming-power-grid-demand-hitachi-energy-ceo
  - https://www.cisa.gov/sites/default/files/2024-09/NIAC_Addressing%20the%20Critical%20Shortage%20of%20Power%20Transformers%20to%20Ensure%20Reliability%20of%20the%20U.S.%20Grid_Report_06112024_508c_pdf_0.pdf
  - https://www.utilitydive.com/news/cleveland-cliffs-confirms-150-million-electric-transformer-weirton-plant/723363/
  - https://www.meppi.com/news/mitsubishi-electric-power-products-inc-meppi-to-make-86-million-dollar-investment-in-new-manufacturing-factory-in-western-pa
  - https://finance.yahoo.com/markets/commodities/articles/freeport-mcmoran-inc-fcx-q1-071156745.html
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

This is investment research, not financial advice. The frame is the [[ai-data-center-buildout-investment-memo|50-100 GW buildout scenario]] and the broader [[ai-data-center-supply-chain-bottlenecks|bottleneck map]]. The question here: when people say "transformers are tight," what do they actually mean a layer down — and which public companies own the scarce links?

## The subcomponent map

A hyperscale campus is fed from the utility through a chain of physical objects, in roughly this order:

1. Substation high-side **large power transformers (LPTs)**, typically 100-500+ MVA, ≥138 kV, that step transmission voltage down for the campus.
2. **HVDC cables** and converters where the campus is too far from generation, or in interregional transfer paths feeding the load center.
3. Medium-voltage **switchgear** lineups (15-38 kV) and **vacuum/SF6 breakers** that distribute and protect inside the substation and yard.
4. **Pad-mounted / unit substation transformers** stepping MV down to building service voltage (typically ~480V/600V three-phase).
5. **Low-voltage switchgear**, **busway**, and **panelboards** distributing to whitespace and mechanical loads.
6. **PDUs and UPS** (static or rotary) at rack-row level; **protection relays** wrapped around all of the above.
7. Underlying materials: **GOES electrical steel** for transformer cores, **copper rod / wire / busbar**, transformer **bushings**, dielectric fluids, and SF6 alternatives.

Every one of these has a different supply chain, different lead time, and different incumbent set. Wood Mackenzie projects the US data-center electrical-equipment TAM rises from ~$20B today to ~$65B by 2030, with data centers reaching ~40% of total US electrical-equipment demand in an upside scenario. ^[extracted] US data-center capacity in the same forecast grows from ~24 GW (2026) to ~110 GW (2030). ^[extracted]

This is structural, not cyclical: hyperscalers are bidding for slots on production lines that take years to build. Hitachi Energy's CEO publicly says he sees "no peak demand in sight" and pegs the global grid-equipment TAM at ~$350B by 2030. ^[extracted]

Why is this multi-year and not a normal cycle?

1. **Capital intensity of upstream capacity.** A new LPT line is a multi-hundred-million-dollar build with a 3-5 year capex-to-first-shipment cycle. Hitachi's South Boston VA plant ($457M) starts construction in 2025-2026 and reaches operations only by 2028. ^[extracted]
2. **GOES is the gating input.** Transformer cores need grain-oriented electrical steel; the global producer set is small (CLF, Nippon Steel, JFE, POSCO, NLMK, ThyssenKrupp), and adding a new GOES line is itself a 4-5 year project.
3. **Skilled-labor constraint.** Coil winding, core stacking, tank fabrication, vacuum oil-impregnation, and field commissioning all require trained labor that can't be hired in 18 months. The North American electrical-construction labor pool is already absorbing utility T&D, semiconductor fab, and data-center work concurrently.
4. **NIAC has called the LPT shortage a national-reliability issue.** The DHS-level National Infrastructure Advisory Council in 2024 framed LPT scarcity as a US grid-reliability concern, which both validates the constraint and triggers federal procurement preferences favoring domestic capacity. ^[extracted]
5. **600 GW of planned data-center capacity is searching for power.** Per Wood Mac, only ~183 GW has secured utility supply agreements vs. ~600 GW seeking. ^[extracted] The ones that *do* clear interconnection are the ones bidding hardest for switchgear and transformer slots.

## Subcomponent table

| Subcomponent | Lead time now | 2019 baseline | Key suppliers | DC demand exposure | Substitution risk | Pricing |
|---|---|---|---|---|---|---|
| Large power transformers (≥100 MVA) | 80-210 weeks (avg ~128w; GSUs ~144w) ^[extracted] | 12-20 weeks ^[inferred] | Hitachi Energy, Siemens Energy, GE Vernova/Prolec, Mitsubishi Electric, Hyundai, Hyosung, WEG, SPX | Indirect via utility substations; data-center utility upgrades drive incremental orders | Very low — engineered-to-order, multi-year qualification | Up; Wood Mac flags 18-36 month lead times pushing prices ^[extracted] |
| Pad-mounted / unit substation transformers | 60-120 weeks ^[extracted] | 12-26 weeks ^[inferred] | Prolec GE, Eaton, Schneider, Howard, ERMCO, Hammond | Direct — every hyperscale campus consumes 100s | Low — UL/CSA design cycles | Up; Wood Mac models hyperscale unit volume from 1,573 (2025) to 9,395 (2030) ^[extracted] |
| MV switchgear (15-38 kV) | 50-90 weeks ^[inferred] | 16-26 weeks ^[inferred] | Eaton, Schneider, ABB, Siemens Energy, Powell, Mitsubishi Electric, Hitachi Energy | Direct, primary | Low — utility-grade type tests | Up; Powell taking pricing visible in margins ^[inferred] |
| LV switchgear / switchboards | 40-70 weeks ^[inferred] | 8-16 weeks ^[inferred] | Eaton, Schneider, ABB, Siemens, Hubbell | Direct, primary | Moderate — more vendors qualified | Up |
| Vacuum / SF6 circuit breakers | 50-100 weeks ^[inferred] | 12-24 weeks ^[inferred] | Mitsubishi Electric, Hitachi Energy, Siemens Energy, ABB, Eaton | Indirect via switchgear | Low — SF6 phase-out forces vacuum, narrows supply | Up |
| Busway | 30-60 weeks ^[inferred] | 6-14 weeks ^[inferred] | Eaton, Schneider, Siemens, ABB, Legrand/Starline | Direct | Moderate | Up |
| Protection relays | 20-50 weeks ^[inferred] | 6-12 weeks ^[inferred] | SEL, GE Vernova (Multilin), Hitachi Energy, Siemens Energy, ABB | Indirect | Moderate — software-heavy, vendors interchangeable | Stable to up |
| PDUs / UPS | 30-60 weeks ^[inferred] | 8-20 weeks ^[inferred] | Vertiv, Schneider (APC), Eaton, ABB, Mitsubishi Electric, Cyber Power | Direct, primary | Moderate | Up; Schneider EM segment +11% organic 2025 ^[extracted] |
| GOES electrical steel | Allocated; queues into 2027 ^[inferred] | Spot-available 2019 ^[inferred] | Cleveland-Cliffs (sole US producer), Nippon Steel, JFE, POSCO, NLMK, ThyssenKrupp | Indirect via every transformer core | Very low — capital-intensive cold-rolling + annealing | Up; CLF doing $195M Butler expansion ^[extracted] |
| Copper rod / conductor | Tight but not gated | Available | Freeport-McMoRan, Southern Copper, Codelco, BHP, Glencore, Antofagasta, Wieland, Aurubis, Encore Wire | Indirect, broad | Aluminum partial substitute in some MV / LV applications | Up; FCX realized $5.78/lb Q1'26 ^[extracted] |
| Bushings | 40-70 weeks ^[inferred] | 8-16 weeks ^[inferred] | Hitachi Energy (Micafil), HSP Hochspannungsgeräte, GIPRO, Trench (Siemens Energy) | Indirect via transformers | Very low — specialty | Up |
| HVDC cables / converters | Multi-year, project-allocated | Project-allocated | Prysmian, Nexans, NKT, Sumitomo, LS Cable; converter stations: Hitachi Energy, Siemens Energy, GE Vernova | Indirect (used for long-distance DC links to load centers) | None at scale | Up; GEV HVDC backlog ~$10B ^[extracted] |

The critical asymmetry: the items at the top (LPTs, GOES, MV switchgear, HVDC) are the hardest to substitute, the slowest to expand, and have the smallest supplier sets. They are also where pricing power is most durable.

## Eaton (ETN)

Revenue mix: ~70% Electrical (Americas + Global), ~17% Aerospace, ~10% Vehicle/eMobility (with the Vehicle/Mobility business being spun off as announced with Q4 2025 results). ^[extracted]

Data-center exposure: Q4 2025 — data-center revenue +~40% YoY; data-center orders +~200% YoY. ^[extracted] Internal estimates put data-center as a high-teens to low-20s percent of Electrical Americas; Eaton has not given a single clean disclosed share. ^[ambiguous]

Backlog: total >$19B; Electrical Americas backlog ~$10B, +31% YoY and ~4x 2019 levels. ^[extracted] Management says they win ~40% of the ~$3T North American megaproject pipeline they track ($78B/month run-rate). ^[extracted]

Capacity expansion: multi-year plant expansions across Electrical Americas under construction; full ramp not until late 2026. Q4 2025 Electrical Americas operating margin was 29.8%, down 180 bps YoY despite 15% organic growth and a 21% segment-revenue print to $3.5B — explicitly attributed to ramp under-absorption, with Q4'25 and Q1'26 the heaviest drag. ^[extracted]

Lead-time exposure: spans LV/MV switchgear, busway, breakers, PDUs, UPS, transformer dry-type — broadly covered across the full data-center electrical room.

Pricing power: solid but not extraordinary. The story is volume + sustained backlog, not pricing breakouts. 2026 guide of 7-9% organic and Electrical Americas 9-11% with a 30% segment-margin target implies pricing remains in the mix but ramp absorption is the swing factor. ^[extracted]

Substitution risk: low at the system level. Eaton's specs sit in hyperscaler standards; switching costs for whitespace electrical are real.

Customer concentration: hyperscaler concentration is rising. Eaton has not disclosed top-customer percentages; assume top-5 hyperscalers are the marginal buyer driving the +200% data-center order growth. ^[inferred]

## Schneider Electric (SU.PA)

Revenue mix: Energy Management ~78%, Industrial Automation ~22% (rough). ^[extracted]

Data-center exposure: data center + network infrastructure is now ~30% of total end-market exposure — the single largest growth driver. ^[extracted] Reported on FY 2025 (released Feb 2026): >€40B revenue first time, +8.9% organic; Energy Management +11% organic, "led by Data Center"; North America +15%. ^[extracted] Q4 2025: €11B revenue +10.7% organic; EM €9B +11.2%; IA €2B +8.2%. ^[extracted]

Backlog: not disclosed as a single hard number; management has said data-center order momentum accelerated into late 2025 and stays strong through 2026 on an 18-24 month project pipeline. ^[extracted]

Capacity expansion: continuous capacity additions across MV switchgear, transformers, PDUs (APC), busway, and prefab modular data-center skids; the prefab/skid business is increasingly important for hyperscaler delivery speed.

Lead-time exposure: broadest of any single vendor — covers MV switchgear, LV switchgear, transformers (medium), UPS (APC InfraStruXure), busway, PDUs, EcoStruxure software/management.

Pricing power: 2026 guide of 7-10% organic and 10-15% adj. EBITA growth implies multi-year operating leverage; Schneider's mix toward software/services + prefab is an underappreciated margin lever. ^[inferred]

Substitution risk: lowest among peers — incumbent on most large hyperscaler standards including the prefab + APC management stack.

Customer concentration: high hyperscaler exposure but more diversified across enterprise, utility, building automation than peers.

## Hubbell (HUBB)

Revenue mix: Utility Solutions ~60%, Electrical Solutions ~40%. ^[inferred]

Data-center exposure: dual — direct via Electrical Solutions (data-center wiring devices, grounding, enclosures) and indirect via Utility Solutions T&D (utilities upgrading substations to feed data centers). Hubbell does not break out a clean data-center percentage. ^[ambiguous] Q4 2025 Utility Solutions sales $936M, +10% YoY (7% organic + 4% M&A); grid infrastructure (~75% of segment) +12% organic with strength across distribution, substation, transmission. ^[extracted]

Backlog: record $2.2B at Q4 2025, +14% YoY; T&D order momentum continued into Q1 2026. ^[extracted]

Capacity expansion: continuous T&D capacity adds; the Systems Control / grid-automation acquisitions in 2024-2025 expanded substation-engineering capabilities.

Lead-time exposure: medium-voltage distribution components, grounding, enclosures, voltage regulators, distribution transformers (smaller end). Less direct LPT exposure than Hitachi/GEV/Siemens.

Pricing power: visible — 12% Q4 sales growth, +140 bps adj. operating-margin expansion, +19% adj. operating profit, +15% adj. EPS. ^[extracted] 2026 guide: 7-9% sales growth, $19.15-$19.85 adj. EPS, ≥90% FCF conversion, $0.9-1.0B FCF. ^[extracted]

Substitution risk: low — dense utility-distribution incumbent positions. Substation visibility is uniquely strong.

Customer concentration: investor-owned utilities (IOUs), public power, and rural co-ops; hyperscaler exposure is mediated by utilities, which insulates Hubbell from direct hyperscaler-margin compression.

## Powell Industries (POWL)

Revenue mix: dominated by integrated MV switchgear lineups for oil & gas, utility, petrochemical, and now increasingly data centers and commercial. Q1 FY2026 (period ending Dec 2025): revenue $251.2M (+4.4% YoY), gross margin 28.4%, net income $41.4M, diluted EPS $3.40. ^[extracted]

Data-center exposure: data-center orders >$100M in Q1 FY2026 alone, including Powell's first-ever megaproject >$75M; data centers ~15% of total backlog (record level); commercial & other industrial 22% of backlog. ^[extracted]

Backlog: record $1.6B at Q1 FY2026; $933M expected to convert to revenue in next twelve months; book-to-bill 1.7x in Q1; new orders $439M. ^[extracted]

Capacity expansion: capacity-constrained until Houston / Northlake plant expansions complete; this is the most visible bottleneck-on-the-bottleneck in the group. ^[inferred]

Lead-time exposure: integrated MV / arc-resistant switchgear lineups — long lead-time, custom-engineered equipment that hyperscalers need at the substation handoff.

Pricing power: highly visible — gross margin 28.4% reflects mix shift to higher-value integrated systems. The data-center mix is dilutive to backlog duration but accretive to pricing per unit. ^[inferred]

Substitution risk: real but bounded — Eaton, Schneider, ABB, Siemens, Mitsubishi Electric, and Hitachi Energy can all compete on MV switchgear, but Powell's reputation in arc-resistant integrated lineups for energy and now data-center customers is differentiated.

Customer concentration: historically oil & gas concentrated; the data-center pivot is diversification, but it imports hyperscaler concentration risk in exchange.

## Hitachi Energy (parent: Hitachi 6501.T)

Revenue mix: Hitachi Energy is a segment of Hitachi Ltd., reporting through the Energy segment. Hitachi Energy itself is the world's largest dedicated grid-equipment vendor — transformers (including LPTs), HVDC, MV/HV switchgear, grid automation, capacitors, FACTS.

Data-center exposure: indirect (utility T&D) and direct (rapidly growing data-center transformer + HVDC business). Hitachi Energy publicly markets a hyperscale data-center platform including 800-volt DC architectures.

Backlog: not separately disclosed in segment public form; CEO Andreas Schierenbeck publicly cites global grid-equipment TAM of ~$350B by 2030 and "no peak demand in sight." ^[extracted] Lead times for large transformers reported up to 40 months. ^[extracted]

Capacity expansion: $9B global investment program announced; in the US, $1B headline including a $457M power-transformer factory in South Boston, Virginia (largest US LPT plant when complete; operations targeted ~2028). ^[extracted] Additional $195M USD-equivalent in Varennes, Quebec for LPT capacity. ^[extracted]

Lead-time exposure: the deepest of any vendor — Hitachi sits at the LPT, HVDC, and MV switchgear scarcity nodes simultaneously.

Pricing power: very high. With order books gated by physical capacity for years, Hitachi has been steadily lifting transformer prices and tightening commercial terms (deposits, escalators). ^[inferred]

Substitution risk: very low for LPT and HVDC; only Siemens Energy, GE Vernova, Mitsubishi Electric, Hyundai, and Hyosung can credibly bid the largest projects.

Customer concentration: utilities globally; data-center hyperscaler share growing but minority.

## Siemens Energy (ENR.DE)

Revenue mix: Gas Services, Grid Technologies, Transformation of Industry, Siemens Gamesa (under spin-off review).

Data-center exposure: primarily through Grid Technologies (transformers, HV/MV switchgear, gas-insulated substations, HVDC). Q1 FY2026 (calendar Q4 2025): Grid Technologies orders €6B, +22% YoY. ^[extracted] US contributed "high triple-digit-million" euros of data-center-related orders in Q1 alone. ^[extracted]

Backlog: total order backlog €146B record at Q1 FY2026; Q1 orders €17.6B record, +34% YoY comparable. ^[extracted]

Capacity expansion: Charlotte NC switchgear/transformer plant expansion, plus Berlin and Mumbai capacity. Grid Technologies has been the standout segment, with Gas Services a close second on AI-driven gas-turbine demand.

Lead-time exposure: full transmission stack — LPTs, GIS, HVDC converters, vacuum breakers via Trench (bushings) and other subsidiaries.

Pricing power: visible in the Grid Technologies margin trajectory; management has lifted mid-term group margin guidance.

Substitution risk: very low at the LPT / HVDC / GIS layer; ABB, GE Vernova, and Hitachi Energy are the only credible alternates.

Customer concentration: utilities and TSOs; data-center hyperscalers an emergent and fast-growing channel.

## GE Vernova (GEV)

Revenue mix: Power (gas, steam, nuclear, hydro), Wind, Electrification (grid solutions, power conversion). After the Prolec GE buy-in completes (announced Oct 2025; closed Feb 2026 per company), Electrification gets meaningfully larger and transformer-centric. ^[extracted]

Data-center exposure: Q1 2026 — Electrification data-center orders $2.4B in the quarter, exceeding all of 2025 for the data-center vertical. ^[extracted] Power segment also exposed via gas-turbine backlog (~100 GW). ^[extracted]

Backlog: total $163B at Q1 2026; Electrification equipment backlog $39B (+75% YoY, ~+$17B). ^[extracted] Prolec backlog $5B and rising; HVDC backlog ~$10B. ^[extracted] Path to $200B total backlog pulled forward to 2027 from 2028. ^[extracted]

Capacity expansion: Prolec's recent capacity adds total >$300M in US + Mexico; $140M Goldsboro NC plant with 330 new jobs over three years. ^[extracted] Prolec data-center sales went from ~10% of total in 2024 to ~20% in 2025. ^[extracted] GEV Electrification segment EBITDA more than doubled YoY in Q1 2026; segment margin +590 bps to 17.8%. ^[extracted]

Lead-time exposure: now spans gas turbines, transformers (Prolec), HVDC, MV switchgear, capacitors — arguably the broadest scarcity-stack exposure of any single ticker.

Pricing power: very high. Gas-turbine prices have risen materially through 2024-2025; Prolec transformer pricing is rising with the broader market.

Substitution risk: low for HVDC and large gas turbines; medium for distribution-class transformers post-Prolec.

Customer concentration: utilities, IPPs, and now hyperscalers directly via the Prolec data-center channel.

## Prolec GE / Mitsubishi Electric note

**Prolec GE** (private until Feb 2026): leading North American transformer producer (most ratings/voltages, ~10,000 employees, 7 plants, 5 in the US). Data-center sales ~10% (2024) → ~20% (2025); now wholly owned by GE Vernova at a $5.275B EV. ^[extracted] The acquisition removes the "is Prolec independent enough to dual-source against GEV" hedge that some hyperscaler procurement teams relied on.

**Mitsubishi Electric (6503.T)**: MEPPI investing ~$86M in a new ~160,000 sq ft advanced switchgear plant in Western Pennsylvania — first new US plant in over a decade — initially producing vacuum and SF6/gas circuit breakers, transitioning toward primarily vacuum. ^[extracted] Mitsubishi also has US power-transformer capacity adds underway. Public ownership is via the Tokyo-listed parent; segment disclosure is coarse.

## Materials upstream

**GOES electrical steel.** Cleveland-Cliffs (CLF) is the **only** US domestic producer of grain-oriented electrical steel. ^[extracted] Butler Works PA expansion: $195M underway; separate $150M Weirton WV transformer plant announced. ^[extracted] The DOE awarded up to $75M for Butler decarbonization, though the future of certain DOE awards has been uncertain. ^[extracted] Imports come from Nippon Steel (Japan), JFE (Japan), POSCO (Korea), NLMK (Russia, sanctioned), ThyssenKrupp (Germany). The Treasury Section 48D advanced-manufacturing credit and Section 232 steel tariffs both bias toward domestic GOES preference. The investable read: CLF is a quasi-monopoly on US GOES, but the GOES line is a small slice of CLF's overall steel mix, so the leverage is muted at the consolidated level. ^[inferred]

**Copper.** FCX realized $5.78/lb in Q1 2026 with revenue $6.23B, but cut 2026 copper sales guidance to ~3.1B lbs from ~3.4B after the Grasberg mud-rush event; H2 2026 expected at ~65% of nameplate capacity, full recovery slipping to late 2027. ^[extracted] SCCO Q1 2026 revenue $4.25B, net income $1.58B (+66.7% YoY), but 2026 production guided down 4.7% YoY to 911,400 tons on weaker Peruvian ore grades; long-term plan ~1.6 Mt by 2035 backed by ~$19.9B capex. ^[extracted] The data-center / electrification copper-intensity case ties into [[second-order-beneficiaries-ranked]] — copper grid build alone drives multi-year incremental demand independent of EV adoption pace.

**Bushings & specialty.** Largely captive — Hitachi Energy's Micafil (Switzerland), Siemens Energy's Trench, plus HSP Hochspannungsgeräte and GIPRO. No public pure-play. The bushing supply is one of the quieter physical bottlenecks: a single bushing failure can delay an entire LPT delivery by months. ^[inferred]

## What's priced in

The rerating is well underway but uneven.

- **Powell (POWL)** trades at ~49x trailing P/E post-3-for-1 split, market cap ~$9B — pricing in continued backlog growth and pricing power. ^[extracted] Stock up materially since 2024 (cited >1,600% since June 2024 in trade press). The risk: Powell is now a high-multiple, high-expectations name; any data-center order air-pocket compresses the multiple fast.
- **Eaton (ETN)** ~41x trailing / ~32x forward P/E. ^[extracted] Margin under-absorption is the near-term overhang; the bull case is 2H 2026+ ramp expansion converting to operating leverage.
- **Hubbell (HUBB)** ~32x trailing / ~27x forward P/E — the cheapest of the high-quality electrical names on multiple. ^[extracted] Less direct hyperscaler hype but durable T&D-tied earnings.
- **GE Vernova (GEV)** the most spectacular re-rating since the spin: backlog growth + Prolec acquisition + gas-turbine pricing + HVDC scale make it the broadest scarcity exposure single-ticker, but the multiple now reflects most of that.
- **Siemens Energy (ENR.DE)** record €146B backlog with the Gamesa overhang largely repriced; multiple has expanded but the European listing tends to lag US peers on AI-narrative re-rates.
- **Schneider (SU.PA)** the steady compounder — premium multiple held through 2025-2026 on data-center mix expansion.
- **Hitachi Energy (parent 6501.T)** is the trickiest — exposure is real but blended into Hitachi Ltd.; cleanest expression is the segment narrative rather than the ticker.

The honest read: the easy, obvious electrical-equipment trade is done. What's still up for grabs is duration and pricing-power persistence. If LPT lead times stay 80-200 weeks for another 24-36 months, and if data-center capacity grows from 24 GW to 110 GW as Wood Mac projects, the backlog conversion alone supports the high-multiple regime for another two to three years — but this is where forward returns get gated by execution, not by narrative. ^[inferred]

The risks that puncture the thesis sit in [[risk-tripwires-and-warning-indicators]]: AI revenue undershoot, hyperscaler capex pause, power-margin compression as utilities push back, model-efficiency gains, or supply normalization (e.g., Hitachi's South Boston plant + GEV/Prolec capacity + Mitsubishi PA plant + CLF Butler GOES expansion all hitting roughly the same 2027-2028 window).

Watch-list of leading indicators:

- **LPT lead-time prints.** If average LPT lead time falls below ~80 weeks for two consecutive quarters, the supply tightness is breaking. Today's ~128-week average has room to fall before the trade unwinds. ^[inferred]
- **Backlog book-to-bill.** Powell's 1.7x, Eaton's 31% YoY backlog growth, GEV's 75% Electrification equipment backlog growth, Siemens Energy €146B record — any of these turning over is the early warning.
- **Hyperscaler capex commentary.** Microsoft, Amazon, Meta, Google, and Oracle quarterly capex prints are the upstream demand signal; see [[hyperscaler-constraint-map]] for the demand-side read.
- **Permitting and interconnection clears.** If the gap between 600 GW seeking and 183 GW secured starts to compress fast, the throughput of the chain rises faster than supply, *increasing* near-term equipment scarcity even as longer-term it dissipates.
- **GOES pricing and CLF segment commentary.** CLF doesn't disclose GOES separately, but commentary cadence and Butler expansion progress are the cleanest US-domestic supply signal.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[us-power-region-deep-dive]]
- [[hyperscaler-constraint-map]]
- [[second-order-beneficiaries-ranked]]
- [[risk-tripwires-and-warning-indicators]]
- [[situational-awareness-ai-infrastructure-portfolio]]
