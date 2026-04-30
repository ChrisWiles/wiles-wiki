---
title: AI data center supply chain bottlenecks
category: ai-reference
summary: Map of scarce inputs in an AI data center buildout, from power and grid equipment to memory, optics, cooling, construction, and power-secured sites.
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

## Bottleneck Map

| Layer | Scarce input | Bottleneck mechanism | Public companies to study |
|---|---|---|---|
| Power generation | Firm 24/7 electricity | Gas turbines, engines, fuel cells, nuclear restarts, gas supply, onsite generation | GE Vernova, Siemens Energy, Mitsubishi Heavy, Bloom Energy, Solaris Energy Infrastructure, Caterpillar, Cummins, EQT, Williams, Kinder Morgan |
| Grid and interconnection | Deliverable MW | Interconnection queues, transmission bottlenecks, substations, utility approvals | Quanta, MasTec, Eaton, Schneider, Siemens Energy, GE Vernova, Hitachi, Hubbell, Powell |
| Transformers and switchgear | LPTs, MV switchgear, breakers, PDUs | Multi-year lead times, limited domestic capacity, import dependence, pricing power | Eaton, Schneider, Siemens Energy, GE Vernova/Prolec GE, Hitachi, Hubbell, Powell, Vertiv |
| Cooling | Liquid cooling, CDUs, chillers, heat rejection | Higher rack density, water constraints, retrofits, thermal engineering | Vertiv, Modine, Schneider, nVent, Johnson Controls, Trane, Carrier, Munters |
| Land and permitting | Power-adjacent land, water, fiber, zoning | Real interconnection rights are scarce; local backlash rises | Digital Realty, Equinix, Iron Mountain, CoreWeave, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf |
| Construction and engineering | Skilled electrical/mechanical labor | Substation EPC, MEP labor, commissioning, project sequencing | Quanta, EMCOR, Comfort Systems, Sterling, MasTec, Jacobs, AECOM, Fluor |
| Accelerators and ASICs | GPUs, custom ASICs, leading-edge wafers | TSMC, CoWoS, EUV, HBM, design cycle limits | Nvidia, Broadcom, AMD, TSMC, ASML, Applied Materials, Lam Research, KLA, Tokyo Electron |
| Networking | Switches, optics, AECs, DACs, fiber | Scale-out/scale-up networking, optical intensity, retimers | Nvidia, Broadcom, Arista, Marvell, Coherent, Lumentum, Ciena, Credo, Fabrinet, Amphenol |
| Memory and storage | HBM, DRAM, NAND, SSDs | AI inference, long context, KV cache, HBM stacking, NAND recovery | Micron, SK hynix, Samsung, SanDisk, Western Digital, Seagate |
| Operators and neoclouds | GPU clouds, power-secured campuses | Financing, customer concentration, site/power execution | CoreWeave, Oracle, Applied Digital, Core Scientific, IREN, Cipher, TeraWulf, Nebius |
| Materials and industrial inputs | Copper, electrical steel, aluminum, gas | Transformer steel, copper cable, gas supply, generation equipment | Freeport-McMoRan, Southern Copper, Nucor, Steel Dynamics, EQT, Williams, Kinder Morgan |

## Most Likely Hard Constraints

**Deliverable power.** The practical question is not national generation capacity on paper. It is firm, permitted, interconnected, reliable power at specific sites on a compressed schedule.

**Gas turbines and dispatchable capacity.** GE Vernova reported its Gas Power equipment backlog and slot reservations grew to 100 GW in Q1 2026. Mitsubishi Power Americas cited heavy-duty gas turbine demand rising from 6.1 GW in 2020 to nearly 40 GW in 2025, with roughly 45% of growth driven by hyperscale data centers.

**Transformers, switchgear, and substations.** Wood Mackenzie projects the U.S. data center electrical equipment market rising from about $20B to $65B by 2030, with data centers potentially capturing up to 40% of the market in accelerated scenarios.

**Memory and advanced packaging.** Dylan Patel's February 2026 commentary argues semiconductor capacity may become the binding constraint again by 2027 because TSMC and memory makers cannot add capacity quickly. This makes HBM, DRAM, CoWoS, EUV, and leading-edge wafers root constraints.

**Optics and interconnect.** Multi-GW clusters are networking systems. Data movement across accelerators, racks, buildings, and campuses creates demand for switches, optics, active electrical cables, retimers, fiber, and connectors.

**Construction labor and commissioning.** Even if equipment is available, data centers need scarce electrical/mechanical contractors, substation EPC, civil work, cooling installation, and commissioning expertise.

## Underappreciated Second-Order Constraints

- Utility rate design and local ratepayer backlash.
- Air permits for gas-fired onsite generation.
- Water access and heat rejection.
- Power-secured land near fiber.
- Skilled labor for electrical rooms, substations, switchgear, and liquid cooling.
- Natural gas gathering and pipeline proximity.
- Replacement/RMA logistics for very large GPU fleets.
- Financing and customer prepayment structures for neoclouds.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[situational-awareness-ai-infrastructure-portfolio]]
- [[post-agi-economy-research-analysis]]
