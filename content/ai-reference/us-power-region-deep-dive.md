---
title: US power-grid regional deliverability for AI data centers
category: ai-reference
summary: Region-by-region investability view of where firm, interconnected, permitted power is actually deliverable for new ~500MW AI campuses through 2026-2028.
tags:
  - ai
  - infrastructure
  - data-centers
  - power
  - investing
sources:
  - https://www.pjm.com/-/media/DotCom/markets-ops/rpm/rpm-auction-info/2027-2028/2027-2028-bra-report.pdf
  - https://insidelines.pjm.com/pjm-auction-procures-134479-mw-of-generation-resources/
  - https://www.utilitydive.com/news/data-centers-pjm-capacity-auction/808951/
  - https://www.aepohio.com/company/about/rates/data-center-tariff/
  - https://www.powermag.com/regulator-approves-aep-ohios-landmark-data-center-tariff/
  - https://www.ercot.com/files/docs/2025/12/24/Large-Load-Interconnection-Process-Q-A.pdf
  - https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/
  - https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-senate-bill-6-understanding-the-impacts-to-large-loads-and-co-located-generation
  - https://www.georgiapower.com/content/dam/georgia-power/pdfs/company-pdfs/2025-Integrated-Resource-Plan.pdf
  - https://georgiarecorder.com/2025/12/19/georgia-regulators-approve-massive-power-grid-expansion-to-serve-data-centers/
  - https://www.utilitydive.com/news/tva-tennessee-valley-authority-nuclear-gas-demand-growth/811306/
  - https://www.datacenterdynamics.com/en/news/tennessee-utility-tva-projects-data-center-load-to-double-across-service-area-by-2030/
  - https://www.hklaw.com/en/insights/publications/2025/04/loudoun-county-virginia-eliminates-by-right-data-center-development
  - https://www.datacenterdynamics.com/en/news/dominion-reports-high-data-center-demand-in-northern-virginia-proposes-new-electricty-rates-for-large-load-customers/
  - https://openai.com/index/stargate-advances-with-partnership-with-oracle/
  - https://www.datacenterdynamics.com/en/news/openai-and-oracle-to-deploy-450000-gb200-gpus-at-stargate-abilene-data-center/
  - https://www.ferc.gov/explainer-interconnection-final-rule
  - https://www.datacenterdynamics.com/en/news/data-center-capacity-in-pacific-northwest-could-hit-4000mw-before-2030/
  - https://www.afslaw.com/perspectives/energy-cleantech-counsel/illinois-data-center-boom-incentives-grid-pressures-and-what
  - https://www.power-eng.com/gas/arizona-utilities-lock-in-fuel-supply-for-gas-plants-to-power-data-center-boom/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

This is investment research, not financial advice. The page complements [[ai-data-center-buildout-investment-memo]], [[ai-data-center-supply-chain-bottlenecks]], and [[ai-investment-public-company-scorecard]] by making the question explicitly geographic.

## Deliverable MW vs announced MW

Most public discussion of AI power constraint stops at "the grid is constrained." That framing is too coarse to underwrite. The binding question is not whether the U.S. has enough generation in aggregate, but where firm, interconnected, permitted, transmission-deliverable MW can land on a hyperscaler-grade schedule (24-48 months for 500MW campuses). Headline totals like ERCOT's 226 GW of large-load interconnection requests ^[extracted] or PJM's 5,400+ MW of forecasted year-on-year peak load growth driven by data centers ^[extracted] both overstate what is actually buildable, because most queue entries fail readiness, transmission, or load-flow tests.

The investable lens is therefore:

1. Which ISO/RTO controls the queue, and on what reform timeline?
2. What is the marginal capacity price signal (BRA, scarcity, bilateral)?
3. Who controls the substations, transmission rights, and gas interconnects?
4. Where are local moratoria, large-load tariffs (LLTs), or zoning fights blocking projects?
5. Which utilities, IPPs, and gas/midstream firms benefit if the buildout proceeds?

## Regional summary table

| Region | Queued / forecast load | Queue status | Recent capacity signal | Large-load tariff status | Dominant utilities / IPPs | Dominant DC clusters |
|---|---|---|---|---|---|---|
| PJM | ~5,100 MW DC-driven peak load adder for 2027/28 ^[extracted] | Reformed but capacity-short; cleared at cap | $329.17/MW-day 2026/27, $333.44/MW-day 2027/28 (UCAP, at cap) ^[extracted] | LLT framework being negotiated zone-by-zone (Dominion, AEP, FirstEnergy) ^[ambiguous] | Dominion, AEP Ohio, FirstEnergy, Exelon (T&D); Constellation, Vistra, Talen (gen) | Northern Virginia, Columbus OH, Chicago (ComEd) |
| ERCOT | ~226 GW large-load requests, ~73% data centers ^[extracted] | SB 6 + new Batch Study process; rules changed Dec 2025 ^[extracted] | Energy-only / scarcity ORDC; no capacity auction | SB 6: mandatory curtailability for ≥75 MW post-2025 loads ^[extracted] | Oncor, CenterPoint, AEP Texas, LCRA TSC; Vistra, Calpine, NRG | Abilene/Stargate, Dallas, San Antonio, West Texas |
| MISO | Capacity shortfalls forecast in N. Illinois by 2029, downstate by 2031 ^[extracted] | 2022/23/25 cycles delayed; 2025 cycle starts Q1 2026 ^[extracted] | PRA tightened materially through 2025; details by zone | LLT reform under stakeholder discussion ^[inferred] | AEP Indiana Michigan, Ameren, NIPSCO, Entergy, ComEd; Vistra Indiana fleet | Chicago/ComEd, central Indiana, Mississippi River corridor |
| SPP | Surplus relative to PJM/MISO; ~10.7 GW BESS pipeline by 2030 ^[extracted] | Less congested, faster connect; queue still long-cycle | Energy + capacity (RA) tightening | Limited LLT activity to date ^[inferred] | OGE, Evergy, AEP-PSO, Xcel SPS | Pryor/Tulsa OK, Wichita KS, Texas Panhandle |
| WECC (AZ/NV) | APS contractually committed ~4.7 GW new large load over decade, 2/3 data centers; ~10 GW+ pending DC requests ^[extracted] | Vertically integrated utilities; bilateral, not auction | Bilateral PPAs + IRP-based | Behind-the-meter gas allowances (Energy Transfer/SRP 1.2 GW deal) ^[extracted] | APS (Pinnacle West), SRP, NV Energy (Berkshire), TEP | Phoenix metro, Reno-Sparks, Las Vegas |
| WECC (PNW) | DC load could reach ~2,500 aMW by 2030, up to 4,000 aMW high-case ^[extracted] | BPA + IOU + PUD patchwork | BPA tier-1/tier-2 hydro; bilateral | Some PUDs imposing DC-specific rates ^[ambiguous] | PacifiCorp, PGE, Puget Sound Energy, BPA, Grant/Douglas PUD | Quincy/Moses Lake WA, Hillsboro OR, Prineville |
| TVA / SOCO | TVA: DC = 18% of 2025 industrial load, doubles by 2030; SOCO: GA Power 8,500 MW load growth by 2030 ^[extracted] | Single-buyer; faster than ISO queue | Internal IRP; no auction | Negotiated; Georgia Power "large load" rider | TVA, Georgia Power (SO), Alabama Power (SO) | Atlanta metro, Huntsville AL, Memphis/Nashville |
| NYISO | NYC LCR 75.6%, Long Island 107.3% for 2025/26 ^[extracted] | Tight in J/K zones; constrained transmission to NYC | NYC capacity averaged $12-20/kW-month in 2025 ^[extracted] | Large-load IX studies for ≥10 MW @ ≥115kV ^[extracted] | Con Ed, National Grid, NYSEG; Constellation, Vistra | Limited new DC build; legacy interconnect zones |
| ISO-NE | DC load contained vs PJM/ERCOT | Capacity Auction Reform (CAR) for 2028/29 prompt-seasonal market ^[extracted] | Forward Capacity Market in transition | Limited LLT activity ^[inferred] | Eversource, National Grid, Avangrid; Vistra, Constellation | Negligible new hyperscaler clusters |

## PJM (Dominion, AEP, FirstEnergy, Exelon footprint)

PJM is the most acute case study in deliverability mismatch. The 2025/2026 BRA cleared at $269.92/MW-day RTO-wide, with Dominion (DOM) zone at $444.26/MW-day and BGE at $466.36/MW-day, roughly a 9-10x jump versus 2024/25's $28.92/MW-day ^[extracted]. The 2026/2027 BRA (announced July 2025) and 2027/2028 BRA (announced December 2025) both cleared at the FERC-approved cap of $329.17 and $333.44/MW-day UCAP respectively ^[extracted]. PJM's market monitor reported that data center load drove $6.5B (40%) of the $16.4B in 2027/28 BRA capacity costs ^[extracted].

The 2027/2028 BRA was "the first auction in which the entire RTO, including Fixed Resource Requirement areas, fell short of the reliability requirement" ^[extracted]. That is the binding fact: PJM is now structurally short capacity, and the cap is the only thing between current prices and uncapped scarcity rents.

**Northern Virginia (Dominion).** Loudoun County hosts ~199 operating data centers with another 117 in development; Loudoun + Prince William + Fairfax handle ~70% of global internet traffic ^[extracted]. Dominion reported ~40 GW in various stages of contracting as of December 2024, up from 21 GW in July 2024 ^[extracted], and plans to invest $50.1B in T&D and generation 2025-2029 ^[extracted]. Loudoun eliminated by-right data center development in March 2025; new builds need special-exception approval, with the Phase 2 zoning framework not expected to be adopted until December 2026 ^[extracted]. Prince William's Digital Gateway rezoning was halted by the Virginia Court of Appeals ^[extracted]. Net effect: Dominion has the contracts, but the permitting cycle for new ground-up builds in Loudoun has lengthened materially.

**AEP Ohio (Columbus).** PUCO adopted the AEP Ohio Data Center Tariff settlement on July 9, 2025, effective July 23, 2025 ^[extracted]. Customers above 25 MW must pay for at least 85% of subscribed monthly capacity for up to 12 years regardless of usage, with a four-year ramp, exit fees, and financial assurance ^[extracted]. The PUCO order also required AEP Ohio to end its moratorium on new data center service ^[extracted]. This is now the template other PJM utilities are negotiating against.

**FirstEnergy / Exelon (ComEd).** ComEd is navigating a capacity shortfall forecast for Northern Illinois by 2029 ^[extracted]. FirstEnergy's Mid-Atlantic territory benefits from the elevated DOM/BGE clears.

**Utilities/IPPs to watch:** Dominion (D), AEP (AEP), FirstEnergy (FE), Exelon (EXC); Constellation (CEG), Vistra (VST), Talen (TLN), NRG (NRG). Equipment via [[electrical-equipment-deep-dive]]: Dominion's $50B capex program is a multi-year tailwind for transformer and switchgear suppliers (Eaton, Hitachi Energy, Siemens Energy, Hubbell, Powell).

## ERCOT (Texas)

ERCOT is the highest-velocity but highest-rule-change region. As of November 2025, ERCOT was tracking ~226 GW of large-load interconnection requests, up from 63 GW in December 2024 — almost 300% growth in a year — with ~73% from data centers ^[extracted]. Between 2024 and 2025 ERCOT added ~23 GW of new generation, with another ~9 GW slated for early 2026 ^[extracted].

**Senate Bill 6 (signed June 20, 2025).** Loads ≥75 MW interconnected after December 31, 2025 must install equipment for remote disconnection during firm load-shed events ^[extracted]. Customers with on-site backup generation that can serve ≥50% of demand may be directed by ERCOT to deploy backup or curtail during emergency alerts ^[extracted]. ERCOT also stood up a voluntary Large Load Demand Management Service to procure curtailment from ≥75 MW loads ahead of emergencies ^[extracted].

**Batch Study process (December 2025).** ERCOT issued Market Notice M-A052125-02 implementing NPRR1234/PGRR115 effective December 15, 2025, grouping qualifying large loads into single studies and reserving transmission allocations ^[extracted]. ERCOT is working with McKinsey on a short/mid-term framework expected in early 2026 ^[extracted].

**Stargate Abilene.** OpenAI/Oracle/SoftBank's flagship Abilene campus is contracted at ~1.2 GW with 450,000 GB200 GPUs; first two buildings operational September 2025, remaining six expected by mid-2026 ^[extracted]. The Stargate II announcement adds 4.5 GW with Oracle plus a potential 600 MW Abilene expansion, bringing total Stargate capacity under development to >5 GW ^[extracted]. West Texas wind/gas oversupply and ETRZ-era transmission make Abilene one of the few U.S. sites where ~1+ GW campuses can connect on hyperscaler timelines.

**Utilities/IPPs to watch:** Oncor (private, Sempra-owned), CenterPoint (CNP), AEP Texas; Vistra (VST), NRG (NRG), Calpine (private/equity), Talen (TLN). Gas via [[second-order-beneficiaries-ranked]]: Energy Transfer (ET), Enterprise (EPD), Kinder Morgan (KMI), Targa (TRGP) — Permian gas is the marginal fuel for behind-the-meter and grid-connected campuses.

## MISO

MISO is the slowest-moving major queue. The 2022, 2023, and 2025 cycles have all been pushed back, and MISO declined stakeholder requests to pause the 2025 cycle to clear backlog ^[extracted]. The 2025 cycle now begins study in Q1 2026 ^[extracted]. The Illinois Resource Adequacy Study (December 15, 2025) flagged capacity shortfalls "as soon as 2029 in Northern Illinois and 2031 downstate, driven in part by the quickly increasing data center load" ^[extracted].

**Indiana / Illinois corridor.** Central Indiana (AEP I&M, Duke Indiana, NIPSCO) is attracting sub-1 GW DC announcements, and Illinois retains data-center sales-tax incentives even as ComEd's queue chokes ^[extracted]. Vistra's Indiana coal-and-gas fleet is the local IPP beneficiary if MISO scarcity prices firm.

**Utilities/IPPs to watch:** AEP (AEP), Ameren (AEE), NiSource/NIPSCO (NI), Exelon/ComEd (EXC), Entergy (ETR), Alliant (LNT); Vistra (VST). Note: AEP appears in both PJM and MISO because of its multi-zone footprint.

## SPP

SPP is the wildcard upside region. It has the most surplus relative to PJM/MISO/ERCOT, faster interconnection cycles, and is the fastest U.S. battery market with ~10.7 GW BESS expected by 2030, concentrated in Oklahoma (2.3 GW), Kansas (1.1 GW), Texas (0.6 GW) ^[extracted]. At least 18 data center projects are under construction or in approval in Oklahoma alone ^[extracted]. SPP does not run a PJM-style BRA, but its Resource Adequacy program is tightening.

**Utilities/IPPs to watch:** OGE Energy (OGE), Evergy (EVRG), AEP-PSO (AEP), Xcel SPS (XEL). SPP-region behind-the-meter and battery integration favors Bloom (BE), Solaris (SEI), and gas midstream like Williams (WMB) and Energy Transfer (ET) — see [[second-order-beneficiaries-ranked]].

## WECC — Arizona / Nevada / PNW

WECC is structurally fragmented: vertically integrated IOUs, BPA hydro, and federal/PUD jurisdictions. There is no organized capacity auction; deliverability is dictated by IRPs and bilateral PPAs.

**Arizona.** APS has contractually committed ~4.7 GW of new large-customer load over the next decade, two-thirds from data centers, with another ~10 GW+ of pending DC interconnection requests ^[extracted]. SRP signed a 10-year agreement supporting up to 1.2 GW of behind-the-meter power starting in 2026 with Energy Transfer ^[extracted]. Phoenix is becoming the most physically constrained western metro after Northern Virginia ^[inferred].

**Nevada.** NV Energy (Berkshire Hathaway Energy) serves growing Reno/Tahoe-Reno and Las Vegas DC clusters; deliverability gated by limited gas pipeline diversity into Nevada ^[inferred].

**Pacific Northwest.** PNW data center load could reach ~2,500 aMW by 2030 in base case and up to ~4,000 aMW in the high case ^[extracted]. The Northwest Power and Conservation Council aims to adopt its next 20-year plan by end of 2026 ^[extracted]. Hydro is firm but increasingly contracted; new DC builds in Quincy/Hillsboro/Prineville depend on BPA tier-2 service or new IOU/PUD generation.

**Utilities/IPPs to watch:** APS/Pinnacle West (PNW), NV Energy/BHE (private/BRK.B), TEP/UNS (Fortis); PacifiCorp (BRK.B), Portland General (POR), Puget Sound Energy (private/Macquarie), Idaho Power (IDA), Avista (AVA). Behind-the-meter gas/fuel cell exposure: Bloom (BE), Solaris (SEI), Caterpillar (CAT), Cummins (CMI).

## TVA / SOCO (Georgia Power, Tennessee Valley)

The Southeast is the fastest-cleared deliverability story because both TVA and Southern Company are vertically integrated single-buyer utilities. Decisions move at IRP cadence, not interconnection-queue cadence.

**TVA.** Data centers were 18% of TVA industrial load in 2025 and projected to double by 2030 ^[extracted]. TVA is pursuing 6.2 GW of new generation (including 3.7 GW under construction: 1.5 GW at Cumberland Fossil Plant gas conversion, 1.5 GW Kingston Energy Complex by 2027) ^[extracted]. TVA reversed its planned coal closures to maintain firm capacity ^[extracted]. Peak demand records hit 35,430 MW in January 2025 and 32,318 MW in August 2025 ^[extracted].

**Southern Company / Georgia Power.** Georgia Power's 2025 IRP, approved July 15, 2025, projects ~8,500 MW of load growth over six years, ~2,600 MW above the 2023 IRP Update ^[extracted]. The Georgia PSC adopted a December 19, 2025 agreement authorizing ~9,885 MW of new resources for the 2027/28-2030/31 window — about two-thirds gas, balance batteries and BESS-paired renewables ^[extracted]. GA Power's large-load pipeline reportedly shrank by ~6 GW in late 2025 as projects washed out ^[extracted], a useful early signal that queue ≠ deliverable.

**Utilities/IPPs to watch:** Southern Company (SO), TVA (federal, no equity); equipment beneficiaries: Eaton (ETN), GE Vernova (GEV), Mitsubishi (MHI), Siemens Energy (ENR.DE), Hitachi Energy. Atlanta-area cluster also pulls Quanta (PWR), MasTec (MTZ), Sterling Infrastructure (STRL) on transmission EPC.

## NYISO

NYISO is structurally tight in NYC (J) and Long Island (K) zones. The 2025/26 NYISO Reserve Margin is 24.4%, with NYC LCR at 75.6%, Long Island 107.3%, Lower Hudson Valley 86.9% ^[extracted]. NYC capacity averaged $12-20/kW-month in 2025 vs $2-6/kW-month statewide ^[extracted]. Data center load was the primary driver of an $7.2B (82.1%) increase in capacity-market revenues ^[extracted]. New large hyperscaler campuses in NYISO are limited by transmission into the city; most new DC announcements are upstate (Zone A-D) where capacity is cheaper but T&D into demand centers is congested.

## ISO-NE

ISO-NE is the smallest DC story. Capacity Auction Reform (CAR) is shifting the Forward Capacity Market to a prompt/seasonal structure starting CCP 2028/29 ^[extracted]. New England's gas-pipeline constraints, high retail rates, and limited siting make it a non-priority region for hyperscalers. Watch as a refresh/co-lo retrofit market, not a new-build market.

## FERC Order 2023 reform — actual progress

FERC Order 2023 (issued July 28, 2023) and Order 2023-A moved every U.S. ISO/RTO from serial first-come-first-served interconnection to "first ready, first served" cluster studies, with a 150-day cluster study window plus 45-day customer-request and 60-day customer-engagement periods, and per-business-day penalties for late studies ($1,000 cluster, $2,000 restudy/affected-system, $2,500 facilities) ^[extracted]. Implementation has been uneven: PJM, MISO, CAISO, and SPP have filed compliance tariffs, but MISO has pushed its 2022/2023/2025 cycles back repeatedly ^[extracted]. The practical effect through 2026 is that the queue reform reduces speculative entries (commercial-readiness bonds wash out paper projects) but does not materially shorten timelines for high-quality projects unless transmission upgrades are also funded — which is outside Order 2023's scope. The next regulatory layer to watch is FERC's emerging treatment of co-located large loads (behind-the-meter PPAs at existing nuclear plants such as the Talen-Amazon Susquehanna case), where FERC's March 2025 rejection of the amended ISA created a precedent that will shape how much of the buildout can actually go behind-the-meter without paying full transmission costs ^[ambiguous].

## Second-order signals to track in 2026

These are leading indicators that the regional ranking is shifting:

- **PJM CIFP / cap-and-floor renegotiation.** The current $329-333/MW-day cap was a negotiated settlement. If FERC accepts an uncapped or higher-cap framework for 2028/29 BRA, expect another step-change in capacity revenue for Constellation, Vistra, Talen, NRG. ^[inferred]
- **ERCOT scarcity test.** First major summer or winter scarcity event after December 15, 2025 SB 6 implementation will reveal how much ~75 MW+ load actually curtails on demand and whether ERCOT's controllable-load resource program can substitute for new firm generation. ^[inferred]
- **GA Power large-load attrition.** Quarterly Large Load Economic Development Reports filed with the Georgia PSC will quantify queue-to-deliverable conversion ratios; the December 2025 ~6 GW pipeline shrink is the first data point. ^[extracted]
- **Loudoun Phase 2 ordinance (Dec 2026).** Determines whether NoVA pipeline of 117 in-development data centers actually clears local approvals or pushes to Prince William, Fairfax, or out-of-state alternatives. ^[extracted]
- **TVA Cumberland and Kingston gas COD.** Both ~1.5 GW units coming online 2026-2027 are the most concrete near-term firm generation additions in the Southeast. ^[extracted]
- **MISO 2025-cycle cluster study output (mid-2026).** Will determine which Indiana/Illinois sites can actually be built before the 2029 capacity shortfall window. ^[extracted]
- **Behind-the-meter FERC rulings.** Any further FERC guidance on co-located load (post-Talen) directly affects whether CEG, VST, TLN nuclear sites can monetize via direct-tenant deals vs grid-connected sales. ^[ambiguous]

## Investability synthesis

Three takeaways for an investor underwriting the [[ai-data-center-buildout-investment-memo]] thesis at the regional level:

1. **The "easy" deliverable regions are the vertically integrated southeast (TVA, SOCO) and West Texas (ERCOT/Abilene).** They cleared the most public commitments to firm generation in 2025 and have the simplest regulatory paths. The names that benefit most directly are SO, GEV, ETN, HUBB, POWL on the equipment side and Vistra/NRG/Calpine on the merchant side in ERCOT.
2. **PJM is structurally bullish for capacity-paid generation but increasingly hostile to new ground-up DC siting in NoVA.** That dichotomy favors holders of existing dispatchable generation (CEG, VST, TLN) more than it favors new-build DC operators. Expect hyperscalers to push capital toward Columbus, Pittsburgh, and Indiana corridors rather than fight Loudoun/PWC zoning.
3. **SPP and the Pacific Northwest are the underrated optionality.** Surplus capacity, faster connect, lower headline rates. The risk is that demand-side hyperscaler interest remains modest because of fiber latency and labor, not power. Watch OGE, EVRG, POR, IDA for revaluation if a major hyperscaler announces a flagship campus in the Plains or Inland Northwest.

The investment lens reduces to: own the equipment OEMs and EPCs that capture the buildout regardless of region, overweight the IPPs and gas/midstream tied to the top-3 deliverable regions, and underweight DC operators with concentrated NoVA exposure unless they hold grandfathered substation rights.

## Where MW are actually deliverable (2026-2028, ~500 MW campuses)

Ranked by realistic ability to bring a new ~500 MW campus to firm power on a 24-36 month schedule:

| Rank | Region | Why it works | Key risk |
|---:|---|---|---|
| 1 | **ERCOT West Texas** (Abilene, Permian) | Stargate proof-of-concept; transmission headroom; gas + wind oversupply; SB 6 forces curtailability but does not block siting | SB 6 curtailment exposure during scarcity events |
| 2 | **SOCO (Georgia Power)** | Vertically integrated single-buyer; PSC approved 9,885 MW of new gen; Atlanta corridor active | Queue washout risk (6 GW shrink already observed) |
| 3 | **TVA** | Vertically integrated; 6.2 GW build out underway; Cumberland + Kingston gas online 2026-2027 | Federal governance, rate fairness pushback |
| 4 | **SPP (OK/KS)** | Surplus capacity; faster connect; battery + gas pipeline | Smaller transmission backbone; long-haul to demand centers |
| 5 | **PJM AEP Ohio (Columbus)** | DCT framework now exists; moratorium ended | 85%/12-year tariff lockup raises hurdle rate |
| 6 | **WECC Arizona (Phoenix)** | APS/SRP behind-the-meter gas deals; large bilateral pipeline | ~10 GW DC requests vs limited gas pipeline; water |
| 7 | **MISO Indiana** | Vistra coal-to-gas fleet; less crowded than PJM | 2025 queue cycle just starting; capacity gap by 2029 |
| 8 | **PJM Dominion (NoVA)** | Existing fiber, contracts, 40 GW backlog | Loudoun zoning rewrite; PWC court loss; Phase 2 not adopted until Dec 2026 |
| 9 | **PNW (PUDs / BPA)** | Cheap hydro tier-1 where available | Tier-2 pricing, transmission limits, PUD-level moratoria |
| 10 | **NYISO Upstate (Zone A-D)** | Lower capacity prices than J/K | Transmission to demand center; limited hyperscaler interest |
| 11 | **ISO-NE** | None significant for ground-up | Gas pipeline limits, high rates, siting |

## Public-company exposure by region

Cross-link [[ai-investment-public-company-scorecard]] for valuation context and [[neocloud-and-power-first-operator-diligence]] for tenant diligence.

| Region | Regulated utilities (T&D) | IPPs / merchant gen | Gas / midstream | Equipment & EPC tilt |
|---|---|---|---|---|
| PJM | Dominion (D), AEP (AEP), FirstEnergy (FE), Exelon (EXC), PPL (PPL) | Constellation (CEG), Vistra (VST), Talen (TLN), NRG (NRG) | EQT (EQT), Williams (WMB), Antero (AR) | Quanta (PWR), MYR (MYRG), MasTec (MTZ); transformers via [[electrical-equipment-deep-dive]] |
| ERCOT | Sempra/Oncor (SRE), CenterPoint (CNP), AEP Texas | Vistra (VST), NRG (NRG), Calpine (private) | Energy Transfer (ET), Enterprise (EPD), Kinder Morgan (KMI), Targa (TRGP) | Primoris (PRIM), MasTec (MTZ), Sterling (STRL) |
| MISO | AEP (AEP), Ameren (AEE), NiSource (NI), Entergy (ETR), Alliant (LNT), Exelon (EXC) | Vistra (VST), Constellation (CEG) | Williams (WMB), Energy Transfer (ET) | Quanta (PWR), Comfort Systems (FIX) |
| SPP | OGE (OGE), Evergy (EVRG), AEP (AEP), Xcel (XEL) | Limited public IPP exposure | Williams (WMB), ONEOK (OKE), Energy Transfer (ET) | Sterling (STRL), MYR (MYRG) |
| WECC AZ/NV | Pinnacle West/APS (PNW), Berkshire/NVE (BRK.B), Fortis/TEP (FTS) | Limited; bilateral PPA market | Energy Transfer (ET), Williams (WMB), Kinder Morgan (KMI) | Sterling (STRL), Quanta (PWR) |
| WECC PNW | PacifiCorp (BRK.B), Portland General (POR), Idaho Power (IDA), Avista (AVA), Puget (private) | Clearway (CWEN), NextEra (NEE) | Williams (WMB) | Quanta (PWR), MasTec (MTZ) |
| TVA / SOCO | Southern (SO); TVA (federal, no equity) | Limited merchant exposure in SOCO/TVA | Williams (WMB), Kinder Morgan (KMI), Enbridge (ENB) | GE Vernova (GEV), Eaton (ETN), Hubbell (HUBB), Powell (POWL); EPC Quanta (PWR), MasTec (MTZ), Comfort Systems (FIX) |
| NYISO | Con Edison (ED), National Grid (NGG), Avangrid (AGR) | Constellation (CEG), Vistra (VST) | Williams (WMB), Enbridge (ENB) | Limited new EPC opportunity |
| ISO-NE | Eversource (ES), National Grid (NGG), Avangrid (AGR) | Constellation (CEG), Vistra (VST) | Enbridge (ENB), Williams (WMB) | Limited |

The cleanest cross-region beneficiaries are the equipment OEMs (Eaton, GE Vernova, Hitachi Energy, Hubbell, Powell, Schneider) and EPCs (Quanta, MasTec, Comfort Systems, EMCOR, Sterling, Primoris) because they capture buildout regardless of which region clears first. Pipeline midstream — Energy Transfer, Williams, Kinder Morgan, EQT — are the natural second-order beneficiaries of any path that runs through gas turbines or behind-the-meter generation. See [[second-order-beneficiaries-ranked]] and [[hyperscaler-constraint-map]] for the demand-side mirror.

Tripwires that would invalidate the regional ranking above are in [[risk-tripwires-and-warning-indicators]]: notably (a) a PJM cap removal that uncorks scarcity prices and accelerates new-build economics, (b) ERCOT scarcity events that test SB 6 curtailability under emergency conditions, and (c) any state-level moratorium beyond Loudoun/Prince William that materially changes regional substitution.

## Open questions and gaps

The following are unresolved as of 2026-04-30 and should be revisited as data lands:

- **MISO 2025-cycle cluster study results.** Not yet published; the deliverable Indiana/Illinois MW count is the largest single unknown in the Midwest picture. ^[ambiguous]
- **PJM 2028/2029 BRA cap structure.** Stakeholder negotiations over whether to extend, raise, or remove the cap were not concluded as of April 2026. The outcome materially affects merchant generator revenue in DOM, BGE, and broader RTO zones. ^[ambiguous]
- **ERCOT scarcity test under SB 6.** No major scarcity event has yet stress-tested the post-December-2025 curtailability rules; first real data point likely summer 2026. ^[ambiguous]
- **FERC co-location precedent.** Beyond the Talen-Amazon Susquehanna case, additional co-location filings are pending; the eventual rule shapes whether ~5-10 GW of behind-the-meter nuclear/gas projects are economic. ^[ambiguous]
- **Georgia Power deliverable conversion.** The 6 GW pipeline shrink in late 2025 may continue, accelerate, or reverse; quarterly Large Load reports will clarify. ^[ambiguous]
- **PNW load-forecast revision.** The Northwest Power and Conservation Council's next 20-year plan (target adoption end-2026) will reset the high-case 4,000 aMW assumption. ^[ambiguous]
- **Local moratoria contagion.** Whether Loudoun-style by-right elimination spreads to Phoenix, Atlanta-suburbs, Columbus, or Chicago counties is the most important non-utility variable. ^[ambiguous]

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[hyperscaler-constraint-map]]
- [[electrical-equipment-deep-dive]]
- [[neocloud-and-power-first-operator-diligence]]
- [[second-order-beneficiaries-ranked]]
- [[risk-tripwires-and-warning-indicators]]
- [[situational-awareness-ai-infrastructure-portfolio]]
