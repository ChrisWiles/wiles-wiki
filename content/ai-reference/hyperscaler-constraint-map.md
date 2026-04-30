---
title: AI hyperscaler constraint map
category: ai-reference
summary: Maps each major AI hyperscaler and lab to the specific binding constraint on their buildout, so AI capex can be underwritten buyer by buyer rather than as one bucket.
tags:
  - ai
  - investing
  - infrastructure
  - hyperscalers
  - supply-chain
sources:
  - https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
  - https://www.theregister.com/2026/04/30/microsoft_q3_2026
  - https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster
  - https://www.anthropic.com/news/anthropic-amazon-compute
  - https://www.datacenterdynamics.com/en/news/google-raises-2025-capex-estimate-again-to-91-93bn-significant-increase-in-data-center-spend-for-2026/
  - https://www.fool.com/earnings/call-transcripts/2026/04/29/alphabet-googl-q1-2026-earnings-call-transcript/
  - https://www.datacenterdynamics.com/en/news/google-and-anthropic-confirm-massive-1gw-cloud-deal-with-up-to-one-million-google-tpus/
  - https://www.datacenterdynamics.com/en/news/meta-delivers-blowout-earnings-says-it-will-ramp-ai-data-center-investment-significantly-in-2026/
  - https://fortune.com/2026/03/27/meta-hyperion-10-gas-power-plants-louisiana-entergy/
  - https://openai.com/index/five-new-stargate-sites/
  - https://openai.com/index/stargate-advances-with-partnership-with-oracle/
  - https://www.tomshardware.com/tech-industry/oracle-and-openai-scrap-planned-600mw-abilene-expansion
  - https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Fourth-Quarter-and-Fiscal-Year-2025-Results/
  - https://s205.q4cdn.com/133937190/files/doc_events/2026/Mar/02/March-2026-Investor-Presentation.pdf
  - https://www.datacenterdynamics.com/en/news/three-mile-island-nuclear-power-plant-to-return-as-microsoft-signs-20-year-835mw-ai-data-center-ppa/
  - https://www.datacenterfrontier.com/energy/article/55239739/data-center-nuclear-power-update-microsoft-constellation-aws-talen-meta
  - https://www.tomshardware.com/pc-components/cpus/microsoft-introduces-newest-in-house-ai-chip-maia-200-is-faster-than-other-bespoke-nvidia-competitors-built-on-tsmc-3nm-with-216gb-of-hbm3e
  - https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ironwood-tpu-age-of-inference/
  - https://www.utilitydive.com/news/ge-vernova-gas-turbine-investor/807662/
  - https://www.spglobal.com/commodity-insights/en/news-research/latest-news/electric-power/052025-us-gas-fired-turbine-wait-times-as-much-as-seven-years-costs-up-sharply
  - https://www.astutegroup.com/news/general/sk-hynix-holds-62-of-hbm-micron-overtakes-samsung-2026-battle-pivots-to-hbm4/
  - https://www.trendforce.com/news/2026/01/05/news-sk-hynix-2026-outlook-hbm3e-remains-mainstream-hbm4-dual-strategy-amid-triple-market-headwinds/
  - https://seekingalpha.com/article/4890719-vertiv-holdings-the-15-billion-backlog-liquid-cooling-dominance-and-the-ai-infrastructure-trade-wall-street-is-still-underpricing
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
---

This is investment research, not financial advice. The central claim: "AI capex" is not one bucket. Each major buyer is bound by a different scarce resource right now, and the cleanest way to underwrite the cycle is to name the specific constraint binding each buyer and the specific public-company beneficiaries that resolve it. See [[ai-data-center-buildout-investment-memo]] and [[ai-data-center-supply-chain-bottlenecks]] for the cross-cutting framework.

Data is as of 2026-04-30, drawn from Q3 FY2026 (Microsoft) and Q1 CY2026 (Alphabet, Meta, Amazon) earnings releases, the latest CoreWeave 10-K and March 2026 investor presentation, OpenAI/Stargate press releases, and reporting on the Abilene cancellation, Hyperion Entergy expansion, and Anthropic-Google-Broadcom expansion. Where a number is disputed (e.g., Stargate site delivery dates), it is marked `^[ambiguous]`.

## Summary table

| Buyer | Latest disclosed AI/DC capex | MW pipeline (announced + contracted) | Primary binding constraint | Secondary constraint | Custom silicon | Key supplier dependencies | Preferred regions |
|---|---|---|---|---|---|---|---|
| Microsoft | ~$190B CY2026 ^[extracted] | Multi-GW; not disclosed at the company level ^[ambiguous] | Time-to-power and component pricing ^[extracted] | GPU/HBM allocation | Maia 200 (live), Maia 300 (design) | Nvidia, AMD, TSMC, SK hynix, Vertiv, Constellation | Wisconsin, Iowa, Arizona, Virginia, Texas, Wyoming |
| Amazon (AWS) | ~$200B CY2026 ^[inferred] | ~1 GW added by year-end 2026 across Trainium fleet ^[extracted] | Custom-silicon ramp + power siting ^[inferred] | HBM3E for Trainium2/3 | Trainium2 (live), Trainium3 (mid-2026) | Anthropic (anchor tenant), Marvell, TSMC, Talen | Virginia, Oregon, Ohio, Indiana, Pennsylvania (Susquehanna) |
| Google (Alphabet) | $180-190B CY2026 ^[extracted] | >2 GW energized by late 2026 (pipeline) ^[inferred] | Power and grid interconnection ^[inferred] | Optical interconnect at TPU scale | Ironwood (TPU v7), v8 in development | Broadcom, TSMC, Celestica, Arista | Iowa, Oklahoma, Ohio, South Carolina, Nevada |
| Meta | $125-145B CY2026 ^[extracted] | Hyperion scaling to 5 GW; Prometheus online 2026 ^[extracted] | On-site gas generation + transmission ^[extracted] | GPU allocation; networking | MTIA v3 "Iris" (deployed early 2026) | Nvidia, AMD, Entergy, Broadcom | Louisiana (Richland Parish), Ohio, Texas |
| Oracle | ~$50B FY2026 ^[inferred] | 4.5 GW under Stargate agreement; Abilene at 1.2 GW operational ^[extracted] | Financing and balance sheet ^[extracted] | Construction execution; cooling | None (Nvidia-pure) | Nvidia, Crusoe, Vantage, OpenAI (sole anchor) | Texas (Abilene), New Mexico, Wisconsin |
| CoreWeave | ~$30B CY2026 capex ^[extracted] | 850 MW active, ~3.1 GW contracted ^[extracted] | Customer concentration + debt cost ^[extracted] | Power-secured site supply | None | Nvidia, Microsoft (~67% of 2025 rev), OpenAI, Meta | Texas, Pennsylvania, Virginia, Nevada |
| OpenAI (Stargate) | >$400B over 3 years (announced) ^[extracted] | ~7 GW Stargate planned; 10 GW long-term target ^[extracted] | Project finance + on-time power ^[inferred] | Cooling reliability (Abilene winter incident) | None directly; Broadcom co-design rumored ^[ambiguous] | Oracle, Crusoe, SoftBank, Nvidia | Texas, New Mexico, Ohio |
| Anthropic | >$100B AWS commit (10yr) + tens of $B Google deal ^[extracted] | Up to 5 GW AWS Trainium + ~1 GW Google TPU in 2026 ^[extracted] | Multi-vendor compute access ^[extracted] | HBM and packaging at vendor level | None (uses TPU, Trainium, Nvidia) | AWS, Google, Broadcom, Nvidia | AWS regions (Indiana, Virginia), Google regions |

## Per-buyer detail

The eight subsections below follow a consistent template: current capex run-rate, disclosed cluster sizes and key commitments, the specifically binding constraint, the strategy to break that constraint, and which public companies benefit most directly from this buyer's spend. Where a buyer is private (OpenAI, Anthropic), the read-through is to public counterparties.

## Microsoft

Run-rate. Q3 FY2026 capex was $31.9B, with guidance for $40B+ in Q4. CY2026 capex revised to ~$190B, including ~$25B added specifically to absorb higher component pricing. ^[extracted] Roughly two-thirds of recent capex is short-lived assets (GPUs, CPUs); finance leases of $4.7B in Q3 were primarily large data center sites. ^[extracted]

Binding constraint. Management's own framing: Microsoft "expects to remain capacity-constrained at least through 2026" even after the capex bump. ^[extracted] The marginal bottleneck is time-to-power for new sites plus component pricing escalation, not GPU availability per se — they are buying everything Nvidia and AMD will sell while paying up. The Three Mile Island / Crane Clean Energy Center 835 MW PPA with Constellation is the cleanest expression of this: it is power procurement, not chip procurement. ^[extracted]

Breakout strategy. Maia 200 in production in Iowa (TSMC 3nm, 216 GB HBM3E), Maia 300 in design — but Microsoft has been explicit that custom silicon does not reduce its Nvidia/AMD spend, it adds inference capacity. ^[extracted] Plus large nuclear PPAs, gas turbine slot reservations, and global site spread to dilute interconnection risk.

Notable second-order disclosure. The OpenAI restructuring announced in Q3 FY2026 reduces Microsoft's exclusive cloud exposure to OpenAI but preserves Microsoft as a major customer; the practical implication is that Microsoft now needs more of its own AI demand (Copilot, Azure AI services) to fill the capacity it is building. AI run rate of $37B (up 123% YoY) and 20M paid Copilot seats (up 250% YoY) are management's evidence that organic demand is filling capacity. ^[extracted]

Beneficiaries (see [[ai-investment-public-company-scorecard]]). Constellation Energy (Crane PPA), Vistra and Talen as adjacencies, Vertiv (cooling), Eaton/Schneider/Hubbell/Hitachi (electrical), Nvidia and AMD (still primary), Micron and SK hynix (HBM), Coherent and Lumentum (optics), Quanta and EMCOR (electrical EPC). Microsoft is the buyer most exposed to merchant GPU pricing because Maia 200 only addresses inference today; training capacity remains Nvidia-dependent through at least 2027. ^[inferred] See [[us-power-region-deep-dive]] for Microsoft's regional exposure (heavy in PJM, ERCOT, MISO).

## Amazon (AWS)

Run-rate. CY2026 capex tracking ~$200B, almost entirely AI infrastructure. ^[inferred] Cumulative Anthropic investment is $13B (latest tranche $5B in April 2026). ^[extracted]

Binding constraint. Two-stage. First, Trainium ramp execution: Trainium2 is fully subscribed with Project Rainier (~500K Trainium2 chips for Anthropic) live; Trainium3 in production mid-2026. Total deployed AI capacity targeting ~1 GW by end-2026. ^[extracted] The constraint is how fast AWS can convert Marvell/TSMC ASIC + HBM3E supply into deployed racks. Second, power siting: the 1.92 GW Susquehanna PPA with Talen for the campus adjacent to the nuclear plant is AWS's answer to the same time-to-power problem Microsoft has. ^[extracted]

Breakout strategy. Anthropic anchor tenancy (>$100B over 10 years) underwrites Trainium volume. ^[extracted] Vertical integration with Annapurna Labs reduces unit cost and HBM-per-socket waste. Behind-the-meter and co-located nuclear (Talen). Heavy investment in Indiana (New Carlisle) and Mississippi.

Notable second-order disclosure. The April 2026 expansion of the Anthropic deal added $5B to Amazon's cumulative Anthropic stake (now $13B) and added explicit mention of up to 5 GW of new Trainium-based capacity. ^[extracted] AWS's bet is that custom silicon plus a captive frontier-lab tenant compounds: Trainium prices itself off Nvidia, but Anthropic absorbs whatever AWS produces. The risk is that Anthropic's own multi-vendor strategy (1M+ TPUs at Google) caps how much of AWS's Trainium capacity Anthropic actually fills.

Beneficiaries. Marvell (Trainium ASIC partner; cleanest direct read-through to AWS custom silicon volume), TSMC (N3/N2 wafers for Trainium), SK hynix and Micron (HBM3E for Trainium2/3), Talen Energy (1.92 GW Susquehanna PPA), Vertiv (rack and cooling), Quanta and EMCOR (construction), Arista (networking; AWS is a top-three Arista customer historically). Anthropic's $100B AWS commitment is also a Marvell volume commitment by transitive property — every Trainium socket sold consumes Marvell IP and packaging slot. ^[inferred]

## Google (Alphabet)

Run-rate. CY2026 capex guided to $180-190B (raised from $175-185B). TPU-related infrastructure spend exceeds $65B in 2026, ~45% of total capex. ^[extracted] Pipeline of owned + leased capacity could exceed 2 GW energized by late 2026. ^[inferred]

Binding constraint. Power and grid interconnection. Google's TPU stack is more vertically integrated than peers — Ironwood (TPU v7) scales to 9,216 chips per pod and is co-designed with Broadcom on TSMC, with HBM coming through SK hynix/Samsung. ^[extracted] Compared to Microsoft, Google's exposure to merchant GPU pricing is lower and to power siting is higher. The Anthropic deal (up to 1M TPUs, >1 GW in 2026, scaling to 3.5 GW from 2027) is a power demand commitment as much as a silicon commitment. ^[extracted]

Breakout strategy. Continued Broadcom-partnered TPU generations, optical interconnect at pod scale (Google designs much of its own optical switching), Kairos SMR MoU and other long-dated nuclear/geothermal contracts. ^[ambiguous on Kairos delivery dates] Ironwood scaling 9,216 chips per pod with 42.5 ExaFLOPs is the public proof point that Google's interconnect-and-pod architecture is competitive with Nvidia's NVLink scale-out. ^[extracted]

Notable second-order disclosure. Google now reports its TPU stack as a sustained competitive moat in earnings calls, framing it as a "decade-long" advantage. Cloud revenue grew nearly 48% in the quarter, and TPU is positioned as the differentiator. ^[extracted] The Anthropic 1M-TPU deal is the most important external proof point that TPU silicon is competitive outside Google's own first-party workloads.

Beneficiaries. Broadcom (TPU co-design and optical switching — Google is Broadcom's largest custom-ASIC customer and the marginal volume from Anthropic flows directly to Broadcom packaging revenue ^[inferred]), Celestica (server systems), Arista (selectively), SK hynix and Samsung (HBM4 ramp for Ironwood-class TPUs), Coherent, Lumentum, and Fabrinet (optics at TPU pod scale; Google designs much of its own optical switching but still buys merchant transceivers and laser engines), regional utilities in Iowa (MidAmerican), Oklahoma (OG&E), Ohio (AEP). See [[optics-and-interconnect-deep-dive]] for why Google's Ironwood pod scale-up changes optical-component intensity per chip.

## Meta

Run-rate. CY2026 capex guided $125-145B (raised from $115-135B). 2025 capex was $72.2B. ^[extracted] Hyperion (Richland Parish, Louisiana) is the flagship, scaling toward 5 GW; Prometheus (Ohio) comes online 2026. ^[extracted]

Binding constraint. On-site power generation and transmission, not chips. The March 2026 Entergy expansion has Meta financing 10 gas plants totaling ~7 GW for Hyperion, plus ~240 miles of 500-kV transmission and battery storage, at an estimated $11B cost. ^[extracted] No major U.S. utility could deliver this on a normal queue; Meta is effectively the developer. Secondary constraint is GPU allocation — Meta has signed massive Nvidia/AMD deals in parallel, and component pricing was a cited reason for the capex raise. ^[extracted]

Breakout strategy. MTIA v3 "Iris" deployed early 2026 for ranking/recommendation; MTIA 300/400/450/500 cadence at ~6 month intervals targets training. ^[extracted] Self-financed gas generation (Entergy partnership). Ohio sites (Prometheus) leveraging AEP/Ohio interconnection. Vertically integrated with Broadcom on MTIA accelerator silicon.

Notable second-order disclosure. The Hyperion campus is on track to be the largest single-site AI compute deployment in the U.S. on a power basis (5+ GW). The Entergy structure has Meta funding the gas plants directly to avoid socializing cost onto retail Louisiana ratepayers — a regulatory model other hyperscalers will likely copy if it survives PSC review. ^[ambiguous] Meta's capex raise of $10-20B (to $125-145B) was attributed primarily to component pricing and additional data center costs, not GPU volume — confirming the cost-of-build, not chip-count, is the swing factor. ^[extracted]

Beneficiaries. Entergy (regulated utility partner), GE Vernova, Mitsubishi Heavy, and Siemens Energy (gas turbine OEMs splitting the 10-plant Hyperion order), Quanta Services and MasTec (transmission EPC for the 240-mile 500-kV build), Nvidia and AMD (still primary training silicon), Broadcom (MTIA accelerator co-design), Arista (training fabric), Vertiv (cooling), Sterling Infrastructure and Comfort Systems (mechanical/site work), Cummins and Caterpillar (peaking and backup generation). Meta is the cleanest pure-play on the [[electrical-equipment-deep-dive|electrical equipment and gas-turbine theme]] of any hyperscaler because so much of the Hyperion bill of materials is power, not chips. ^[inferred]

## Oracle

Run-rate. FY2026 capex ~$50B, an order of magnitude above historical Oracle. ^[inferred] OpenAI / Stargate is the primary use; OCI is the platform; Oracle is now effectively a GPU landlord with one anchor tenant.

Binding constraint. Financing and balance sheet. Oracle reportedly carries >$100B in debt against Stargate commitments, with FCF turning negative; credit agencies have flagged the capital intensity. ^[extracted] The Abilene flagship is 1.2 GW operational on OCI, but the planned 600 MW Abilene expansion was scrapped in early 2026 after financing negotiations failed and winter weather disrupted liquid-cooling infrastructure. ^[extracted] The 4.5 GW Stargate commitment with OpenAI remains on track on Oracle's telling. ^[ambiguous] Some 2027 deliveries reportedly slipped to 2028. ^[ambiguous]

Breakout strategy. SoftBank co-financing, JPMorgan and Mizuho project loans, Crusoe as build partner, Vantage as colo partner. Oracle is not pursuing custom silicon; it is the most Nvidia-pure of the major buyers.

Notable second-order disclosure. Oracle's Stargate exposure is single-tenant — OpenAI is the only customer of consequence at this scale. If OpenAI revenue undershoots Stargate's debt service requirements, Oracle absorbs the gap or restructures. The Abilene 600 MW expansion cancellation in March 2026 demonstrates that even committed Stargate capacity is contingent on incremental financing closing on time. ^[extracted] Investors should treat Oracle's AI capex as a leveraged bet on OpenAI revenue ramp, not a diversified hyperscaler bet.

Beneficiaries. Nvidia (cleanest single-name read-through — Oracle is buying Nvidia at every layer of the stack), Crusoe (private build partner at Abilene), Vantage Data Centers (private colo partner), Vertiv (cooling, including the system that failed in Abilene's winter incident), Eaton and Schneider, Quanta (substations and interconnection). Oracle bondholders and OCI customers have effectively underwritten an Nvidia revenue annuity, financed with Oracle debt. ^[inferred] Public-company exposure to Oracle's spend is therefore Nvidia plus electrical equipment plus EPC, with little custom-silicon read-through.

## CoreWeave

Run-rate. 2025 revenue $5.1B (up from $1.9B in 2024); 2026 revenue guided to roughly double. CY2026 capex ~$30B, double 2025. ^[extracted] 850 MW active, ~3.1 GW contracted across 43 data centers. ^[extracted] $66.8B revenue backlog; remaining performance obligations $60.7B at year-end 2025. ^[extracted]

Binding constraint. Customer concentration plus cost of capital. Microsoft was ~67% of 2025 revenue. ^[extracted] OpenAI and Meta are large multi-year commits. The financing structure is debt-heavy against GPU collateral; net loss $1.2B in 2025. ^[extracted] CoreWeave's binding constraint is therefore not chips or power individually but the spread between debt service and contracted revenue, and concentration risk if Microsoft re-internalizes.

Breakout strategy. Customer diversification (no single customer >35% of backlog at year-end 2025, vs. 85% to start the year). ^[extracted] Power-first site acquisition (Core Scientific assets, Texas/Pennsylvania expansion). Continued Nvidia first-priority allocation as the largest neocloud.

Notable second-order disclosure. The shift in concentration metric from 85% to 35% top-customer share in 12 months is a material credit improvement, but Microsoft's 67% share of 2025 revenue means the income statement still trails the backlog on diversification. ^[extracted] If Microsoft accelerates its own data-center buildout (which the $190B 2026 capex implies), CoreWeave's Microsoft revenue could plateau even as Microsoft's overall AI capex grows.

Beneficiaries. Nvidia (CoreWeave is one of Nvidia's largest customers and gets early allocation), Vertiv, Applied Digital (adjacency and partial overlap in customer set), Core Scientific (acquired site portfolio), and the broader [[neocloud-and-power-first-operator-diligence|neocloud and power-first operator]] cohort including IREN, Cipher, TeraWulf, Hut 8. CoreWeave equity is itself the most direct public expression of the neocloud thesis, but also carries the highest customer-concentration and refinancing risk of the names listed in this page.

## OpenAI (Stargate)

Run-rate. >$400B announced investment over 3 years across the Stargate consortium (OpenAI, Oracle, SoftBank, Nvidia, Microsoft as legacy partner). ^[extracted] ~7 GW planned across the flagship Abilene + five new sites; long-term target of ~10 GW. ^[extracted] Anthropic's AWS commit ($100B over 10 years) is a useful comparison but Stargate is the larger absolute number.

Binding constraint. Project finance plus on-time power. OpenAI itself does not run the buildout — Oracle and Crusoe do — and the Abilene expansion cancellation in March 2026 was a financing failure as much as a weather/cooling failure. ^[extracted] SoftBank is reportedly seeking $40B in incremental loans; Mizuho led a $10B tranche, JPMorgan a $2.3B tranche for Abilene. ^[extracted]

Breakout strategy. New sites in Shackelford County TX, Doña Ana County NM, Lordstown OH, Milam County TX, with SoftBank-financed campuses targeting ~1.5 GW within 18 months. ^[extracted] Equity raises at $500B+ implied valuation provide some equity cushion. Reported Broadcom co-design for inference silicon would reduce Nvidia dependency over time. ^[ambiguous]

Notable second-order disclosure. The Stargate program is the single largest source of demand for U.S. gas turbine and transformer supply over the next three years on a per-site basis. Meta in Crusoe-vacated capacity (reportedly with Nvidia's help) is one example of demand reallocation when Stargate sites slip. ^[ambiguous] If Stargate's $400B announced over three years is even directionally accurate, it implies multi-GW of new generation procurement that competes directly with Meta and Microsoft for the same GE Vernova and Mitsubishi delivery slots.

Beneficiaries. Nvidia (primary silicon supplier across all Stargate sites), Oracle (anchor partner — but Oracle's own beneficiaries flow through as listed above), Crusoe (private build partner), Vertiv (cooling — the Abilene cooling incident was a Vertiv-system failure that highlights both Vertiv's centrality and the lead-time risk), Eaton and Schneider (electrical), Coherent and Lumentum (optics for full-stack clusters), GE Vernova and Mitsubishi (turbines for Stargate-adjacent generation), regional gas and midstream operators in Permian-adjacent counties (EQT, Liberty Energy, ProPetro show up in the [[situational-awareness-ai-infrastructure-portfolio|Situational Awareness portfolio]] for this reason). ^[inferred]

## Anthropic

Run-rate. ~$30B annualized run rate as of April 2026. ^[extracted] $100B+ committed to AWS over 10 years; tens of billions committed to Google Cloud in October 2025 (expanded April 2026 with Broadcom). ^[extracted]

Binding constraint. Multi-vendor compute access — Anthropic's strategy is explicitly to spread across Trainium, TPU, and Nvidia rather than single-source. ^[extracted] Up to 5 GW of AWS Trainium capacity, up to 1 M Google TPUs (>1 GW in 2026, 3.5 GW from 2027). ^[extracted] The binding constraint is therefore inherited from each vendor: HBM allocation at SK hynix/Micron/Samsung, CoWoS-L at TSMC, Marvell/Broadcom ASIC ramp.

Breakout strategy. Pay multiple vendors to compete on delivered tokens-per-dollar; do not vertically integrate into silicon. Heavy use of [[ai-investment-public-company-scorecard|merchant compute]] and the [[neocloud-and-power-first-operator-diligence|neocloud]] layer where capacity is more elastic than hyperscaler bookings.

Notable second-order disclosure. Anthropic's "three-platform" strategy is genuinely differentiating versus OpenAI's tighter Oracle/Nvidia coupling. The April 2026 expansion of the Google/Broadcom relationship for tens of billions of dollars and the parallel $100B AWS commitment let Anthropic play vendors against each other on delivered cost per token. The risk is that this strategy depends on at least two of (Trainium, TPU, Nvidia) ramping on schedule; if one slips, Anthropic does not get the price competition it depends on.

Beneficiaries. AWS (revenue) and Google (revenue) on the cloud side; SK hynix, Micron, Samsung, TSMC, Broadcom, Marvell, Nvidia, AMD on the silicon side. No direct Anthropic-only public name, but Anthropic's revenue trajectory ($30B run rate, April 2026) is a key swing variable for whether the AWS and Google buildouts can be filled. ^[extracted] If Anthropic revenue undershoots, Trainium and TPU utilization both deteriorate; if it overshoots, the multi-vendor strategy still leaves Anthropic exposed to whichever silicon stack ramps fastest. See [[openai-and-anthropic-economic-thinking]].

## Cross-cutting observations

The buyers above compete for the same finite resources at multiple layers. Every name below is also covered in [[ai-data-center-supply-chain-bottlenecks]] and the deep dives below.

| Scarce resource | Who is fighting for it | Binding metric (2026) |
|---|---|---|
| HBM3E / HBM4 wafer capacity | All eight buyers, indirectly through Nvidia/AMD/Trainium/TPU/MTIA/Maia | SK hynix and Micron sold out through CY2026; HBM contract prices up high-teens to low-20s % year over year ^[extracted] |
| TSMC CoWoS-L advanced packaging | Nvidia, AMD, Broadcom (TPU + MTIA), Marvell (Trainium), Apple | Capacity constraint persisting into 2027 per Patel and others ^[ambiguous] |
| Vertiv liquid-cooling lead times | Microsoft, Meta, Oracle, CoreWeave, Stargate sites | $15B Vertiv backlog, book-to-bill ~1.4x at year-end 2025 ^[extracted] |
| Eaton/Schneider/Hitachi/Hubbell switchgear and busway | Every buyer | Lead times multi-quarter; Eaton acquired Boyd Thermal to add liquid-cool depth ^[extracted] |
| Large power transformer queue | Meta (Hyperion 500 kV), Microsoft, AWS, Google | Multi-year queues; GE Vernova electrification orders to data center customers $2.4B in Q1 2026 alone ^[extracted] |
| Gas turbine slot reservations | Meta (Entergy partnership), Oracle/Stargate, Microsoft (peaking), neoclouds | GE Vernova backlog 44 GW + 56 GW slot reservations; quoted lead times 5-7 years ^[extracted] |
| Power-secured brownfield sites | CoreWeave, Applied Digital, Core Scientific, IREN, Stargate | Public neocloud comps trading on MW per share more than $/EBITDA ^[inferred] |
| Investment-grade nuclear capacity | Microsoft (Constellation), AWS (Talen), Meta (Entergy MoU), Google (Kairos MoU) | Constellation, Vistra, Talen all booked for the cycle; SMR delivery dates remain ^[ambiguous] |

Three implications for [[ai-investment-public-company-scorecard|the scorecard]]:

1. Microsoft and AWS spend dollars at the chip layer first; Meta and Stargate spend dollars at the power and site layer first; Google and Anthropic spend dollars at the silicon-design plus optical-pod layer; CoreWeave spends dollars at the financing-and-power-site layer. The same headline "AI capex" number moves different supplier P&Ls.
2. The buyers compete with each other for the same Vertiv slot, the same transformer, the same gas turbine reservation, and the same HBM stack. Aggregating capex without netting against shared supplier capacity overstates effective deployable compute.
3. Custom silicon (TPU, Trainium, MTIA, Maia) reduces Nvidia volume share at the margin, but adds Broadcom, Marvell, and SK hynix volume — the bottleneck migrates rather than disappears. See [[semiconductor-supply-chain-deep-dive]] for the packaging and HBM mechanics.

Where to look for the next constraint shift. Three triggers worth tracking quarterly:

- HBM4 first-volume shipments (March 2026 sampling for Nvidia Rubin per Samsung/SK hynix). If HBM4 yields lag, training-cluster ramps for Microsoft, AWS, Oracle/Stargate, and Meta all slip simultaneously. ^[extracted]
- Gas turbine delivery slots through 2030. GE Vernova's CEO expects all 2030 slots to be sold by end of 2026; the marginal buyer at that point either pays a premium, takes a back-up engine package (Cummins/Caterpillar), or delays a site. ^[extracted]
- Cooling reliability at frontier scale. The Abilene winter incident is the first publicly disclosed example of a multi-hundred-MW AI cluster losing meaningful uptime to liquid-cooling failure; expect this to flow through to Vertiv backlog quality and to insurance/uptime SLAs across the cohort. ^[extracted]

A note on what this page does not do. It does not rank buyers by likelihood of follow-through, does not project model revenue, and does not handicap which custom-silicon program will displace Nvidia first. Those are separate analyses; here the goal is constraint identification.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[us-power-region-deep-dive]]
- [[electrical-equipment-deep-dive]]
- [[semiconductor-supply-chain-deep-dive]]
- [[optics-and-interconnect-deep-dive]]
- [[neocloud-and-power-first-operator-diligence]]
- [[situational-awareness-ai-infrastructure-portfolio]]
- [[openai-and-anthropic-economic-thinking]]
