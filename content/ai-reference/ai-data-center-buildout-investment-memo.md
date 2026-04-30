---
title: AI data center buildout investment memo
category: ai-reference
summary: Investment research memo on likely bottlenecks and public-company beneficiaries in a 50-100 GW AI data center buildout scenario.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
sources:
  - https://situational-awareness.ai/wp-content/uploads/2024/06/situationalawareness.pdf
  - https://darioamodei.com/essay/the-adolescence-of-technology
  - https://fintel.io/i/situational-awareness-lp-5020
  - https://www.tbpndigest.com/story/2026-02-03/dylan-patel-on-space-data-centers-the-tsmc-bottleneck-returning-in-2027-and-why-openai-is-fine
  - https://openai.com/index/stargate-advances-with-partnership-with-oracle/
  - https://www.iea.org/reports/energy-and-ai/executive-summary
  - https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers
  - https://www.woodmac.com/press-releases/data-center-demand-drives-us-electrical-equipment-market-to-%2465b-reshaping-industry-dynamics/
  - https://www.gevernova.com/sites/default/files/gev_webcast_pressrelease_04222026.pdf
  - https://power.mhi.com/regions/amer/insights/mitsubishi-power-ceos-demand-growth-reliability-and-whats-ahead
  - https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-results-second-quarter-fiscal-2026
  - https://investors.modine.com/news/news-details/2025/Modine-Reports-Second-Quarter-Fiscal-2026-Results/default.aspx
  - https://ir.solaris-energy.com/news/2026/04-27-2026-210632081
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.45
  inferred: 0.5
  ambiguous: 0.05
---

This is investment research, not financial advice. The scenario assumption is deliberately aggressive: advanced AI demand proves directionally closer to the [[post-agi-economy-research-analysis|country-of-geniuses / superintelligence buildout]] thesis than to a normal cloud capex cycle, and the industry attempts to add 50-100 GW or more of AI data center capacity over coming years.

## Executive View

The best way to underwrite a 50-100 GW AI data center buildout is not just to own more GPU exposure. The more differentiated thesis is that the bottleneck migrates across the stack:

1. Accelerators, HBM, advanced packaging, and leading-edge wafers.
2. Power availability, grid interconnection, turbines, transformers, switchgear, and substations.
3. Liquid cooling, rack-level power, optics, construction labor, and power-first sites.

Leopold Aschenbrenner's *Situational Awareness* frames frontier AI as an industrial mobilization problem and models training clusters scaling from roughly 10 MW in 2022 toward 100 MW, 1 GW, 10 GW, and potentially 100 GW class systems. Dario Amodei's "country of geniuses in a datacenter" metaphor raises the same infrastructure question from the capability side: if millions of high-capability AI workers run in parallel, the binding question becomes where the compute, power, cooling, networking, and sites come from.

Dylan Patel's latest public commentary usefully complicates the simple power story. He argues the baton moved from semiconductor shortages in 2023 to power and data centers in 2024-2025, but may swing back to semiconductors by 2027 because TSMC, memory makers, and advanced fabs cannot flex capacity like energy vendors can.

The resulting investment lens: prefer companies that control scarce delivery capacity, not companies that merely have AI narratives.

## Core Buildout Math

One GW running continuously consumes 8.76 TWh per year before facility overhead.

| AI IT load | Annual IT energy before overhead | With 20% facility overhead |
|---|---:|---:|
| 50 GW | 438 TWh | 526 TWh |
| 100 GW | 876 TWh | 1,051 TWh |

For context, the IEA estimated global data centers used about 415 TWh in 2024 and could reach about 945 TWh by 2030 in its base case. DOE/LBNL estimated U.S. data centers consumed about 4.4% of U.S. electricity in 2023 and could reach 6.7-12% by 2028.

The 50-100 GW scenario is therefore not a normal data center cycle. It implies a national-scale power, semiconductor, grid, and construction mobilization.

## Supply Chain Map

See [[ai-data-center-supply-chain-bottlenecks]] for the full map. The investable stack is:

- Power generation: gas turbines, engines, fuel cells, nuclear restarts, geothermal, batteries, gas supply.
- Grid and interconnection: substations, transmission, utility EPC, permitting, interconnection queues.
- Electrical equipment: transformers, MV switchgear, breakers, PDUs, UPS, busways, backup generation.
- Cooling: liquid cooling, chillers, CDUs, heat rejection, water systems.
- Semiconductor root constraints: GPUs, ASICs, HBM, DRAM, NAND, EUV, leading-edge wafers, advanced packaging.
- Networking: switches, optics, transceivers, AECs, DACs, retimers, fiber, copper, connectors.
- Construction and engineering: electrical, mechanical, civil, substation, commissioning labor.
- Data center operators and power-first sites: hyperscalers, neoclouds, converted crypto sites, power-secured campuses.

## Highest-Conviction Public-Company Groups

| Rank | Group | Representative names | Why it matters |
|---:|---|---|---|
| 1 | Electrical bottlenecks | Eaton, Schneider Electric, Hitachi, Hubbell, Powell Industries | Transformers, switchgear, substations, electrical distribution, and grid equipment are hard to substitute and already stretched. |
| 2 | Power generation | GE Vernova, Siemens Energy, Mitsubishi Heavy, Bloom Energy, Solaris Energy Infrastructure, Caterpillar, Cummins | Hyperscalers are constrained by time-to-power, not just theoretical power availability. |
| 3 | Memory | Micron, SK hynix, Samsung, SanDisk, Western Digital | HBM/DRAM/NAND intensity rises with AI training, inference, long context, KV cache, and storage-heavy workloads. |
| 4 | Construction execution | Quanta, EMCOR, Comfort Systems, MasTec, Sterling Infrastructure | The physical buildout requires scarce electrical, mechanical, transmission, and commissioning capacity. |
| 5 | Optics and interconnect | Broadcom, Arista, Coherent, Lumentum, Ciena, Credo, Fabrinet, Amphenol | Multi-GW clusters become networking systems; optical and electrical interconnect intensity rises with scale. |
| 6 | Cooling and rack infrastructure | Vertiv, Modine, nVent, Schneider, Johnson Controls, Trane, Carrier, Munters | Higher rack densities force liquid cooling and more complex power/cooling systems. |
| 7 | Power-first optionality | CoreWeave, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf, Hut 8, Bloom, Solaris | Highest upside if power-secured sites command scarcity rents; also highest financing/customer-concentration risk. |

## Valuation Dislocation Hypotheses

These are research hypotheses, not buy recommendations.

**Powell Industries (POWL).** Smaller electrical-equipment company with switchgear scarcity exposure. The thesis is that the market may still classify it as cyclical industrial equipment while AI demand changes the duration of its backlog. ^[inferred]

**EMCOR (EME) and Comfort Systems (FIX).** These are execution-capacity names rather than branded AI suppliers. They may be expensive versus history, but the market can still underappreciate scarcity in mechanical/electrical labor, commissioning, and complex facility delivery. ^[inferred]

**Modine (MOD) and nVent (NVT).** Cooling and electrical-enclosure exposure can look like old-line industrials, but Modine has publicly targeted more than $2B of data center revenue by fiscal 2028. The risk is that these already rerated and have execution expectations embedded. ^[inferred]

**Coherent (COHR), Lumentum (LITE), Fabrinet (FN), Ciena (CIEN), Credo (CRDO).** Optics/interconnect can be lumpy and cyclical, but Situational Awareness LP's large Lumentum and Coherent positions support the view that optical components are a non-obvious scarcity node. ^[inferred]

**Micron (MU).** As of fiscal Q2 2026, Micron reported record $23.86B revenue and framed memory as strategic in the AI era. The dislocation is whether investors keep valuing memory as a short commodity cycle when AI creates a longer HBM/DRAM/NAND shortage. ^[inferred]

**Solaris Energy Infrastructure (SEI).** High-beta speed-to-power exposure. Solaris reported more than 2 GW of contracted generation capacity with investment-grade global technology customers. The valuation risk is customer concentration, capital intensity, and whether temporary/behind-the-meter power normalizes.

## What Looks Well Understood

- Nvidia and direct accelerator scarcity.
- Vertiv as the default power/cooling infrastructure winner.
- GE Vernova as a gas-turbine and electrification winner.
- Public nuclear/power scarcity winners such as Constellation, Vistra, and Talen.
- CoreWeave and neocloud capacity as direct AI infrastructure exposure.

These can still work, but the market is already trained to connect them to AI.

## More Underappreciated Bottlenecks

- Transformers, MV switchgear, busways, breakers, substations, and protective equipment.
- Electrical/mechanical construction labor and commissioning capacity.
- Optics, active electrical cables, retimers, fiber, and connector supply.
- HBM/DRAM/NAND durability beyond a normal memory cycle.
- Behind-the-meter gas, fuel cells, engines, and mobile/temporary generation.
- Power-secured brownfield sites and converted crypto mining infrastructure.
- Natural gas gathering and midstream in regions with data center load growth.
- Water, heat rejection, and local permitting constraints.

## Situational Awareness Portfolio Read-Through

The [Fintel profile](https://fintel.io/i/situational-awareness-lp-5020) for Situational Awareness LP 5020 reported a roughly $5.5B 13F portfolio with 29 positions for the 2025-12-31 reporting period. Top exposure included Bloom Energy, CoreWeave calls, Intel calls, Lumentum, CoreWeave common, Core Scientific, IREN, Applied Digital, SanDisk, Cipher, EQT, Coherent, Solaris Energy Infrastructure, and Tower Semiconductor.

The portfolio is not a simple Nvidia proxy. It appears to be a scarcity-node basket:

- Power: Bloom, Solaris, EQT, Power Solutions International, Liberty Energy, ProPetro, Babcock & Wilcox.
- Power-secured compute real estate: CoreWeave, Core Scientific, IREN, Applied Digital, Cipher, Hut 8, Bitdeer, Riot, CleanSpark, Bitfarms.
- Optics/interconnect: Lumentum, Coherent.
- Semiconductors/memory: Intel calls, SanDisk, Tower Semiconductor.
- Power-adjacent real estate: Kilroy Realty.

The read-through is that Aschenbrenner's fund seems to express the thesis through power, optics, neocloud capacity, memory/storage, and AI-site optionality rather than only GPU designers.

## Risks That Could Break The Thesis

- Model efficiency, inference optimization, sparsity, quantization, routing, or architectural changes reduce compute intensity faster than usage grows.
- AI revenue fails to support hyperscaler and neocloud capex.
- Announced capacity is overbuilt, delayed, or never financed.
- Power, transformers, HBM, optics, or turbines normalize faster than expected.
- Local regulation, water constraints, air permits, utility ratepayer backlash, FERC, NEPA, or interconnection rules slow projects.
- Hyperscalers use buying power, vertical integration, and dual sourcing to compress supplier margins.
- Neoclouds and power-first sites face customer concentration, debt, dilution, or contract repricing.
- Taiwan, export controls, EUV, CoWoS, and geopolitics interrupt the semiconductor root constraint.
- Power prices rise enough to make marginal AI workloads uneconomic.

## Final View

The 50-100 GW AI buildout thesis is best viewed as a semiconductor, electrification, construction, and energy-infrastructure cycle at once.

The highest-quality scarcity basket is ASML, TSMC, Micron/SK hynix/Samsung, GE Vernova, Siemens Energy, Mitsubishi Heavy, Eaton, Schneider, Hitachi, Hubbell, Powell, Quanta, EMCOR, Comfort Systems, Broadcom, Arista, Coherent, Lumentum, Credo, Fabrinet, and Amphenol.

The highest-beta basket is Bloom, Solaris Energy Infrastructure, CoreWeave, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf, Hut 8, and selected gas/midstream names.

The central thesis: if the "country of geniuses" scenario is directionally correct, the market should increasingly reward companies that can deliver megawatts, transformers, turbines, memory, optics, cooling, interconnection, and construction capacity on time. Those bottlenecks may prove more durable than the first-wave GPU trade.

## Related

- [[ai-data-center-supply-chain-bottlenecks]]
- [[situational-awareness-ai-infrastructure-portfolio]]
- [[post-agi-economy-research-analysis]]
- [[openai-and-anthropic-economic-thinking]]
