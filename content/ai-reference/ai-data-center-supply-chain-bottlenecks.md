---
title: AI data center supply chain bottlenecks
category: ai-reference
summary: Layered map of scarce inputs in an AI data center buildout — power, grid, electrical, cooling, semis, networking, memory, sites, materials. Acts as a navigation spine into the per-sector deep dives.
tags:
  - ai
  - data-centers
  - infrastructure
  - supply-chain
sources:
  - https://www.iea.org/reports/energy-and-ai/executive-summary
  - https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers
  - https://www.woodmac.com/press-releases/data-center-demand-drives-us-electrical-equipment-market-to-%2465b-reshaping-industry-dynamics/
  - https://www.gevernova.com/sites/default/files/gev_webcast_pressrelease_04222026.pdf
  - https://power.mhi.com/regions/amer/insights/mitsubishi-power-ceos-demand-growth-reliability-and-whats-ahead
  - https://www.tbpndigest.com/story/2026-02-03/dylan-patel-on-space-data-centers-the-tsmc-bottleneck-returning-in-2027-and-why-openai-is-fine
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.5
  inferred: 0.45
  ambiguous: 0.05
---

The [[ai-data-center-buildout-investment-memo|AI data center buildout]] supply chain is a stack of migrating bottlenecks. The first-order constraint is not always the same: GPUs can bind in one year, power and sites in the next, then memory, optics, or transformers later.

This page is the navigation spine. Each row in the map below points to a deep-dive page where the subcomponent mechanics, lead times, and per-company exposure are worked out.

## How to use this map

- The **bottleneck map** below is the layer-by-layer table of scarce inputs. Use it to find which deep-dive covers a given constraint.
- The **most likely hard constraints** section lists which layers are actually binding right now (as of 2026-04-30).
- For per-company quantitative lookups (multiples, backlog, leverage, AI exposure %), go straight to [[ai-investment-public-company-scorecard]].
- For valuation frameworks on the highest-conviction names, see [[ai-investment-valuation-models]].

## Bottleneck map

| Layer | Scarce input | Bottleneck mechanism | Deep dive | Public companies to study |
|---|---|---|---|---|
| Power generation | Firm 24/7 electricity | Gas turbines, engines, fuel cells, nuclear restarts, gas supply, onsite generation | [[us-power-region-deep-dive]], [[second-order-beneficiaries-ranked]] | GE Vernova, Siemens Energy, Mitsubishi Heavy, Bloom Energy, Solaris Energy Infrastructure, Caterpillar, Cummins, EQT, Williams, Kinder Morgan |
| Grid and interconnection | Deliverable MW | Interconnection queues, transmission bottlenecks, substations, utility approvals | [[us-power-region-deep-dive]], [[electrical-equipment-deep-dive]] | Quanta, MasTec, Eaton, Schneider, Siemens Energy, GE Vernova, Hitachi Energy, Hubbell, Powell |
| Transformers and switchgear | LPTs, MV switchgear, breakers, PDUs | Multi-year lead times, limited domestic capacity, import dependence, pricing power | [[electrical-equipment-deep-dive]] | Eaton, Schneider, Siemens Energy, GE Vernova / Prolec GE, Hitachi Energy, Hubbell, Powell, Vertiv |
| Cooling | Liquid cooling, CDUs, chillers, heat rejection | Higher rack density, water constraints, retrofits, thermal engineering | [[ai-investment-public-company-scorecard]] | Vertiv, Modine, Schneider, nVent, Johnson Controls, Trane, Carrier, Munters |
| Land and permitting | Power-adjacent land, water, fiber, zoning | Real interconnection rights are scarce; local backlash rises | [[us-power-region-deep-dive]], [[neocloud-and-power-first-operator-diligence]] | Digital Realty, Equinix, Iron Mountain, CoreWeave, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf |
| Construction and engineering | Skilled electrical/mechanical labor | Substation EPC, MEP labor, commissioning, project sequencing | [[second-order-beneficiaries-ranked]] | Quanta, EMCOR, Comfort Systems, Sterling, MasTec, Jacobs, AECOM, Fluor |
| Accelerators and ASICs | GPUs, custom ASICs, leading-edge wafers | TSMC, CoWoS, EUV, HBM, design cycle limits | [[semiconductor-supply-chain-deep-dive]] | Nvidia, Broadcom, AMD, TSMC, ASML, Applied Materials, Lam Research, KLA, Tokyo Electron, BESI |
| Networking | Switches, optics, AECs, DACs, fiber | Scale-out/scale-up networking, optical intensity, retimers | [[optics-and-interconnect-deep-dive]] | Nvidia, Broadcom, Arista, Marvell, Coherent, Lumentum, Ciena, Credo, Fabrinet, Amphenol |
| Memory and storage | HBM, DRAM, NAND, SSDs | AI inference, long context, KV cache, HBM stacking, NAND recovery | [[semiconductor-supply-chain-deep-dive]] | Micron, SK hynix, Samsung, SanDisk, Western Digital, Seagate |
| Operators and neoclouds | GPU clouds, power-secured campuses | Financing, customer concentration, site/power execution | [[neocloud-and-power-first-operator-diligence]] | CoreWeave, Oracle, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf, Nebius |
| Materials and industrial inputs | Copper, electrical steel, aluminum, gas | Transformer steel, copper cable, gas supply, generation equipment | [[second-order-beneficiaries-ranked]] | Freeport-McMoRan, Southern Copper, Cleveland-Cliffs, Nucor, Steel Dynamics, EQT, Williams, Kinder Morgan |

## Most likely hard constraints

**Deliverable power.** The practical question is not national generation capacity on paper. It is firm, permitted, interconnected, reliable power at specific sites on a compressed schedule. See [[us-power-region-deep-dive]] for region-by-region analysis.

**Gas turbines and dispatchable capacity.** GE Vernova reported its Gas Power equipment backlog and slot reservations grew to 100 GW in Q1 2026. Mitsubishi Power Americas cited heavy-duty gas turbine demand rising from 6.1 GW in 2020 to nearly 40 GW in 2025, with roughly 45% of growth driven by hyperscale data centers.

**Transformers, switchgear, and substations.** Wood Mackenzie projects the U.S. data center electrical equipment market rising from about $20B to $65B by 2030, with data centers potentially capturing up to 40% of the market in accelerated scenarios. Subcomponent mechanics in [[electrical-equipment-deep-dive]].

**Memory and advanced packaging.** Dylan Patel's February 2026 commentary argues semiconductor capacity may become the binding constraint again by 2027 because TSMC and memory makers cannot add capacity quickly. HBM3E/HBM4 allocation, CoWoS-S/L/R capacity, ABF substrates, and ATE testing are root constraints — see [[semiconductor-supply-chain-deep-dive]].

**Optics and interconnect.** Multi-GW clusters are networking systems. Data movement across accelerators, racks, buildings, and campuses creates demand for switches, optics, AECs, DACs, retimers, fiber, and connectors. Per-company depth in [[optics-and-interconnect-deep-dive]].

**Construction labor and commissioning.** Even if equipment is available, data centers need scarce electrical/mechanical contractors, substation EPC, civil work, cooling installation, and commissioning expertise. Ranked exposure in [[second-order-beneficiaries-ranked]].

## Underappreciated second-order constraints

- Utility rate design and local ratepayer backlash.
- Air permits for gas-fired onsite generation.
- Water access and heat rejection.
- Power-secured land near fiber.
- Skilled labor for electrical rooms, substations, switchgear, and liquid cooling.
- Natural gas gathering and pipeline proximity.
- Replacement/RMA logistics for very large GPU fleets.
- Financing and customer prepayment structures for neoclouds.

## Buyer-side mapping

For which buyer (Microsoft, Amazon, Google, Meta, Oracle, CoreWeave, OpenAI, Anthropic, xAI) is bound by which layer in this map, see [[hyperscaler-constraint-map]]. For which private labs drive demand into the same layers without being investable themselves, see [[private-ai-buyers-and-labs]].

## Quantified breakage signals

Each layer has measurable thresholds that, if breached, force a re-underwrite. See [[risk-tripwires-and-warning-indicators]].

## Related

- [[ai-data-center-buildout-investment-memo]] — parent thesis.
- [[ai-investment-public-company-scorecard]] — quantitative lookup for any name in this map.
- [[ai-investment-valuation-models]] — NAV / DCF / replacement-value frameworks.
- [[hyperscaler-constraint-map]] — which buyer is bound by which layer.
- [[us-power-region-deep-dive]] — deliverable-MW depth.
- [[electrical-equipment-deep-dive]] — transformer, switchgear, GOES, copper.
- [[semiconductor-supply-chain-deep-dive]] — CoWoS, HBM, ABF, photomask, ATE.
- [[optics-and-interconnect-deep-dive]] — 800G/1.6T, DSPs, EMLs, AECs.
- [[neocloud-and-power-first-operator-diligence]] — operator balance sheets.
- [[second-order-beneficiaries-ranked]] — materials, gas midstream, EPC, fuel cells.
- [[risk-tripwires-and-warning-indicators]] — quantified breakage signals.
- [[private-ai-buyers-and-labs]] — OpenAI, Anthropic, xAI, Stargate, Databricks.
- [[situational-awareness-ai-infrastructure-portfolio]]
- [[post-agi-economy-research-analysis]]
