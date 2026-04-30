---
title: Optics and interconnect deep dive
category: ai-reference
summary: Investor-facing technical breakdown of the AI data center interconnect stack, where pricing power lives, and per-company exposure across optics, DSPs, copper, and switching.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - semiconductors
sources:
  - https://futurumgroup.com/insights/coherent-q2-fy-2026-ai-datacenter-demand-lifts-revenue-and-margins/
  - https://www.fool.com/earnings/call-transcripts/2026/02/04/coherent-cohr-q2-2026-earnings-call-transcript/
  - https://www.coherent.com/news/press-releases/worlds-first-6-inch-inp-scalable-wafer-fabs-paving-the-way-for-the-next-generation-of-lasers-for-ai-transceivers-and-6g-wireless-networks
  - https://www.fool.com/earnings/call-transcripts/2026/02/03/lumentum-lite-q2-2026-earnings-call-transcript/
  - https://www.semiconductor-today.com/news_items/2026/feb/lumentum-090226.shtml
  - https://www.fool.com/earnings/call-transcripts/2026/02/02/fabrinet-fn-q2-2026-earnings-call-transcript/
  - https://investors.credosemi.com/news-events/news/news-details/2025/Credo-Technology-Group-Holding-Ltd-Reports-Second-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx
  - https://credosemi.com/products/zeroflapaec/
  - https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial
  - https://investors.arista.com/Communications/Press-Releases-and-Events/Press-Release-Detail/2026/Arista-Networks-Inc--Reports-Fourth-Quarter-and-Year-End-2025-Financial-Results/default.aspx
  - https://investor.marvell.com/news-events/press-releases/detail/1011/marvell-technology-inc-reports-fourth-quarter-and-fiscal-year-2026-financial-results
  - https://www.stocktitan.net/news/APH/amphenol-reports-record-first-quarter-2026-r4mx2vq4utal.html
  - https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories
  - https://newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling
  - https://www.lightcounting.com/newsletter/en/september-2025-ethernet-optics-328
  - https://www.fool.com/earnings/call-transcripts/2026/04/30/amphenol-aph-q1-2026-earnings-transcript/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

This is investment research, not financial advice. The thesis here is narrower than the broader [[ai-data-center-buildout-investment-memo]]: optics and interconnect are the *second-derivative* AI play. GPU shipments set the demand floor, but the speed of the optics roadmap, the location of the EML choke point, and the durability of copper all decide which networking companies compound and which trade like cyclical hardware.

## Framing

A multi-GW AI cluster is a networking system that happens to contain accelerators. Three networks scale very differently with cluster size:

- **Intra-rack scale-up**: NVLink / proprietary fabrics (e.g., NVL72) interconnect 36-72 GPUs per rack with copper. Every accelerator generation roughly doubles aggregate bandwidth, but distance stays inside one rack, so passive copper still works.^[extracted]
- **Scale-up extension across racks**: as scale-up domains grow past one rack (NVL576-class architectures), passive copper hits reach limits and the question becomes AECs vs early scale-up optics. Nvidia's GB200 NVL72 uses over 5,000 copper NVLink cables per rack.^[extracted]
- **Scale-out**: leaf/spine and rail-optimized fabrics across the cluster. This is the optics market — 800G today, 1.6T arriving in volume in 2026, and it scales roughly with the number of GPUs squared in the worst case (all-to-all collectives).

Bandwidth per GPU is the simple driver: a Blackwell-class GPU pulls roughly 800 Gbps of scale-out bandwidth, an Rubin/Vera-class GPU pulls 1.6 Tbps, and the count of transceivers per accelerator stays in the 1-2x range across generations.^[inferred] So shipments roughly track GPU shipments, but ASP per port doubles each generation.

Three implications for the investor: (1) optics-revenue dollars compound faster than GPU unit volume because ASP per port keeps doubling; (2) the binding constraints rotate generation-to-generation — at 800G the choke is 100G EMLs and DSP ramp; at 1.6T it's 200G EMLs, 200G/lane SerDes, and 1.6T module qualification; at 3.2T it's almost certainly CPO and CW lasers; (3) which company holds margin power moves up the stack each cycle as commoditization compresses the prior generation.

## Interconnect taxonomy

| Type | Reach | Cost / Gbps | Power / Gbps | Where it wins |
|---|---|---|---|---|
| Passive DAC (copper) | <2-3 m at 800G, <1.5 m at 1.6T^[inferred] | Lowest | ~0 W (passive) | Inside-rack scale-up; NVLink spine |
| Active copper cable (ACC / LPO-copper) | ~3-4 m at 800G | Low | <2 pJ/bit^[inferred] | Edge of rack, top-of-rack to server |
| AEC (active electrical cable) | Up to 7 m at 800G; 9 m demonstrated^[extracted] | Mid | ~3-5 pJ/bit^[inferred] | Inter-rack copper at 800G/1.6T, replacing short optics |
| AOC (active optical cable) | <30 m typical | Mid-high | Optics-class | Legacy use; losing share to AEC and pluggable |
| Pluggable optics 800G-DR/FR | 500 m - 2 km | High | ~10-15 pJ/bit^[inferred] | Scale-out leaf/spine, today's volume sweet spot |
| Pluggable optics 1.6T-DR/FR | 500 m - 2 km | Highest at launch | ~12-18 pJ/bit^[inferred] | Scale-out for Rubin-era GPUs in 2026-2027 |
| LPO (linear-drive pluggable) | Same as 800G optics | Lower | ~30-40% lower than DSP module^[inferred] | Power-constrained 800G short-reach |
| Co-packaged optics (CPO) | Switch-attached | High up-front | 3.5x lower than pluggables (Nvidia claim)^[extracted] | High-radix scale-out switches at 102.4T+ |

The economic story: passive DAC stays free as long as reach allows, AECs take the in-rack and short inter-rack market, and DSP-driven pluggables hold the bulk of revenue dollars at 800G/1.6T. CPO is the long-tail structural threat to pluggables but small as a share of 2026-2027 revenue.

Where margin actually lives across the stack:

- **Lasers and EMLs (upstream)**: gross margins in the 50-60% range under tight supply.^[inferred] Pricing power is currently the strongest in the chain because of capacity scarcity.
- **DSPs**: high-50s to low-60s gross margin (semiconductor-class), durable due to duopoly structure.^[inferred]
- **Modules / pluggable transceivers**: 30-40% gross margin (Coherent's blended Datacom is in this band).^[extracted] Margin is highly mix-dependent — early 1.6T at the high end, mature 800G compressing.
- **AECs**: 60-65% gross margin at Credo, atypical for "cable" because of the embedded retimer IP.^[extracted]
- **Switching ASICs**: high-60s gross margin at Broadcom AI mix.^[inferred]
- **Switch systems (Arista)**: low-60s gross margin, falling slightly as cloud titan mix rises.^[extracted]
- **Connectors and cable assemblies**: high-30s to low-40s gross margin at Amphenol.^[inferred]

The pattern: the further you sit from the GPU socket on the bill of materials, the lower the gross margin, with two exceptions — DSPs and AECs — where IP density compensates for being a "cable" or "chip in a module."

## 800G vs 1.6T transition

LightCounting's most recent forecast has 800G shipments at ~49M units and 1.6T at ~22M units globally in 2026, with a multi-million-unit supply-demand gap most acute on 1.6T.^[extracted] AI-network optics revenue (transceivers + LPO + CPO) is forecast to roughly double from $5B in 2024 to $10B in 2026.^[extracted]

The DSP transition matters more than the SKU change:

- 800G generation = 100G/lane PAM4 electrical, eight lanes (8x100G).
- 1.6T generation = 200G/lane PAM4 electrical, eight lanes (8x200G). New DSP, new EMLs (200G EMLs), new CDR design.

Coherent on its FQ2'26 call put 800G + 1.6T book-to-bill above 4x in Datacom and called out 1.6T module gross margin *higher* than 800G because of higher ASP in the early ramp and the cost advantage of its 6-inch InP wafers.^[extracted] Lumentum saw EML demand outpace supply by ~30% and 200G devices already at ~10% of laser-chip revenue versus 5% of unit volume — early ASP uplift.^[extracted] Nvidia is forecast to be >60% of 1.6T module demand in 2026.^[extracted]

What changes for the supply chain:

- **DSP makers**: must ship 200G/lane silicon at production yields. Today, Marvell and Broadcom have working silicon; Credo is later for the 1.6T module DSP socket but defends the AEC adjacency.^[inferred]
- **EML suppliers**: 200G EMLs need higher modulation bandwidth than 100G EMLs and yield is materially lower out of the gate. This is *the* upstream choke.
- **Module integrators (Fabrinet, Innolight, Eoptolink)**: must qualify new optical engines, which compresses go-live to a handful of vendors and concentrates share in 2026.

## DSP roadmap

| Vendor | 800G DSP | 1.6T DSP | LPO / linear posture | Notes |
|---|---|---|---|---|
| Marvell | Shipping (Spica / Ara) | Volume production H2 FY26^[extracted] | Yes | Custom-ASIC arm gives Marvell a co-sell hook with hyperscalers |
| Broadcom | Shipping (Sian, Trident) | Sampling / shipping (Sian 2 / Taurus) | Yes (LPO reference designs) | Tomahawk integration drives switch + DSP attach |
| Credo | Shipping (DOVE/Seagull line) | In development; AECs and DSPs share SerDes IP | Strong on linear retimers | Wins via copper + low-power, not module-DSP TAM |
| Maxlinear | Niche 800G PAM4 DSP | Limited 1.6T positioning^[ambiguous] | Yes | Smaller share, telco-leaning |
| Semtech | Active in 100G/lane PMD | Less visible at 1.6T^[ambiguous] | Yes | Repositioned around CopperEdge AECs |

Marvell and Broadcom are the realistic 1.6T DSP duopoly heading into 2026-2027. Credo's investment thesis is not "win the DSP socket" — it's "monetize copper for one more generation and ride retimer/optical-DSP/AEC IP into adjacent sockets" (ZeroFlap AEC, ALCs, OmniConnect, ZeroFlap optics line).^[extracted]

LPO (linear-drive pluggable optics) is the under-discussed wildcard. LPO removes the DSP from the module, dropping module power 30-40% but limiting reach and putting more burden on the host SerDes. If LPO captures meaningful 800G short-reach share, DSP TAM compresses without the module integrators losing share — Marvell and Broadcom take the hit, Coherent/Lumentum/Fabrinet are mostly neutral. Evidence so far suggests LPO stays niche at 800G and very limited at 1.6T because reach margins and inter-vendor interop break down at 200G/lane.^[inferred]

## EML and laser supply

EMLs (electro-absorption modulated lasers) on InP wafers are the upstream choke point in the 800G/1.6T transition. Two reasons: (1) capacity is concentrated across Coherent, Lumentum, Sumitomo, and Mitsubishi Electric, with the Japanese houses long on 100G EMLs but slower to scale 200G;^[inferred] (2) 200G EML yields step down materially versus 100G.

Coherent has the most aggressive InP capacity expansion: 6-inch InP fabs in Sherman, Texas and Tarfala, Sweden, with a third site in Zurich, Switzerland announced at OFC March 2026, targeting roughly 2x internal InP capacity over the next year. A 6-inch wafer yields >4x as many chips as 3-inch at <50% the cost.^[extracted] Coherent management has pointed to 1.6T module gross margins as *higher* than 800G partly because of this wafer-scale advantage.^[extracted]

Lumentum is supply-constrained: EML demand is ~30% above supply, all incremental capacity is under long-term agreements, and the company is shipping record EML volumes led by 100G with 200G ramping.^[extracted] Sumitomo and Mitsubishi sit on the rest of the merchant supply pool; their disclosure is thinner but Japanese trade press points to capacity additions.^[ambiguous]

Investor read: EML is the part of the optics stack that most resembles HBM — concentrated supply, multi-year capacity commitments, pricing power that flows up. Coherent and Lumentum are the cleanest public proxies.

Three things break the EML thesis: (1) silicon photonics displaces EML faster than expected in 1.6T, shifting volume to silicon foundry processes (TSMC COUPE) where Coherent and Lumentum capture only the CW laser; (2) Japanese suppliers (Sumitomo Electric, Mitsubishi Electric) accelerate 200G EML capacity additions, eroding pricing power; (3) hyperscaler dual-sourcing forces ASP discipline once supply catches demand. None of these look likely in 2026 based on current disclosures, but watch FY27 EML pricing commentary as the leading indicator.

## Silicon photonics vs pluggables

Silicon photonics (SiPh) integrates modulators and waveguides on a CMOS-compatible silicon process, shifting the laser source to an external CW laser. The cost / scale-out story:

- Intel sold its silicon photonics business to Jabil in 2024; Jabil is now an OEM.
- Coherent runs SiPh internally and ships 800G SiPh-based DR8 in volume. LightCounting's 2026 mix has 1.6T at ~30% EML / 70% SiPh, the inverse of 800G's 50/50 split.^[extracted]
- Cisco's SiPh effort feeds its Silicon One ASIC franchise but is mostly captive.
- TSMC's COUPE silicon photonics process becomes the foundry path for CPO at 200G/lane and 400G/lane.

The investor question is whether SiPh ramps fast enough at 1.6T to compress EML pricing power. Today's evidence says no for 2026 — EML demand is still outrunning supply — but 1.6T mix shifting toward SiPh means the CW laser becomes the new constrained part, and that's also Coherent + Lumentum upstream.

CPO timeline reality check:

- Nvidia Quantum-X Photonics (InfiniBand): commercial availability early 2026.^[extracted]
- Nvidia Spectrum-X Photonics (Ethernet): H2 2026.^[extracted]
- Broadcom Tomahawk 6 (102.4T) supports both pluggable and CPO variants; Bailly / Taurus DSP families targeted at CPO.
- TSMC COUPE foundry-served CPO: 2026-2027 ramp.

CPO at scale-out is real in 2026 but small as a share of dollar revenue (low single-digit % of optics market in 2026, scaling to ~10% by 2028).^[inferred] Pluggable optics keep the bulk of revenue through at least 2028.

The CPO bear case for pluggables-only suppliers: power constraints at 3.2T per port and beyond force CPO adoption faster than the consensus 2028 timeline, especially in scale-up where reach is short and laser-count economics favor centralization. The CPO bull case for upstream laser suppliers: CPO does not eliminate lasers — it just moves them off the module and onto external CW laser packages, which still require InP wafers and EML/DFB processes Coherent and Lumentum already own. Net upstream laser revenue per port arguably *increases* under CPO because integrated optics drive higher port radix and more channels per switch.^[inferred]

## Active electrical cables (AECs) vs DACs

Passive DACs are free until physics says no. At 800G the practical reach is roughly 2-3 m for passive copper. At 1.6T it's tighter still — perhaps 1-1.5 m. Above that, you need either an AEC (small DSP / retimer baked into the cable) or optics.

Credo's pitch: AECs replace DACs at 1-7 m, replace AOCs above ~3 m, and beat short-reach optics on cost and reliability. ZeroFlap AECs are deployed in xAI Colossus alongside Nvidia Spectrum-X.^[extracted] Credo disclosed a fifth hyperscaler customer in FQ3'26, with three customers each >10% of revenue.^[extracted] Q3 FY26 revenue was $407M, up 201% YoY; FY26 guide implies >85% growth.^[extracted]

Amphenol and Molex (TE Connectivity, Bel Fuse adjacent) are the connector / cable-assembly beneficiaries — copper attach grows even when optics grow because GPU port count grows. Amphenol's IT Datacom segment was 41% of Q1 2026 sales and grew 99% YoY, with virtually all sequential growth attributable to AI.^[extracted] Book-to-bill 1.24x.^[extracted]

The structural debate: how long does copper keep winning? Two views:

1. **Copper persists** because every generation of GPU also doubles the rack-density target, so reach requirements stay roughly constant in meters even as bandwidth doubles. Nvidia explicitly designs NVL72 around in-rack copper, not optics, and is pushing AECs at the rack edge.^[extracted]
2. **Copper compresses** because 200G/lane SerDes already strain copper channel loss. By 224G/lane (next gen), passive copper inside the rack may not survive without architectural redesign.^[inferred]

Either way, AECs and AOCs/optics gain share *together* against passive DACs — that's the consensus path. Credo, Amphenol, Molex, and TE win in parallel with Coherent/Lumentum/Fabrinet.

Watch the rack-architecture decisions: a hyperscaler that adopts an Nvidia NVL72 / NVL576 rack inherits a copper-heavy bill of materials; one that builds rail-optimized Ethernet pods with Tomahawk-6 leaves on top of GPU servers leans more on optics. The ratio of AEC dollars to optics dollars per cluster swings on this design choice, not on the underlying transceiver shipment forecast.

## Switching ASICs

| Vendor | Current flagship | AI cluster role | System buyers |
|---|---|---|---|
| Broadcom | Tomahawk 6 (102.4T), Jericho 3-AI | Top-of-rack, leaf/spine, scale-out | Arista, Cisco, Dell, hyperscaler whitebox |
| Nvidia | Spectrum-X (Ethernet), Quantum-X (InfiniBand), NVLink Switch | Vertically integrated GPU + switch | Nvidia direct |
| Marvell | Teralynx (5/10/12.8T) + custom-ASIC arm | Hyperscaler custom switching ASICs | AWS, Microsoft (Maia), Google ^[ambiguous] |
| Cisco | Silicon One (G200 / G400) | Captive Cisco systems | Cisco systems only |

Broadcom's Q1 FY26 AI revenue was $8.4B, 106% YoY; AI networking grew 60% YoY and is one-third of AI revenue, expected to rise to ~40% in Q2 FY26. AI customer count expanded to six XPU customers. AI revenue visibility >$100B in 2027.^[extracted] This is the cleanest "merchant silicon for AI fabrics" exposure.

Arista, Cisco, and Juniper (now HPE) are the system-integrator tier sitting on top of Broadcom + Nvidia silicon. Arista is the highest-quality AI exposure in this group — 2025 revenue $9.0B (+28.6% YoY); Q4'25 cloud + AI titans (primarily Microsoft and Meta) 48% of revenue; 2026 AI centers revenue target raised to $3.25B (from $2.75B); 2026 total revenue guide $11.25B (+25%).^[extracted] 1.6T migration "imminent" with co-designed AI rack systems expected during 2026.^[extracted]

## Coherent (COHR)

FY26 Q2: revenue $1.7B (+17.5% YoY); Datacenter & Communications $1.2B (+33.6% YoY); non-GAAP gross margin 39%, with management reiterating a >42% long-term target.^[extracted] AI/datacom is the dominant growth driver — the segment book-to-bill is above 4x. 800G volume plus 1.6T early ramp; management said 1.6T module gross margin *exceeds* 800G because of higher ASPs and 6-inch InP cost advantage.^[extracted]

Strategic asset: 6-inch InP wafer fabs (Sherman TX, Tarfala SE, Zurich CH under construction) are unique at scale among western suppliers and convert directly into EML/CW laser cost advantage.^[extracted] Customer concentration is heavy on the top three or four hyperscalers and Nvidia for both pluggables and CPO laser supply.^[inferred]

Watch items: gross margin trajectory toward the 42-44% target, InP capacity execution, share inside Nvidia's CPO ramp (Quantum-X, Spectrum-X), and the speed of the laser/transceiver split (more laser sales = potentially better margin mix as CPO ramps).

## Lumentum (LITE)

FQ2'26: revenue $665.5M (+65% YoY); record EML and cloud transceiver shipments. EML demand outpaces supply by ~30%; all incremental capacity covered by long-term agreements.^[extracted] FQ3'26 guide $780-830M (+85% YoY at midpoint). Cloud transceiver revenue grew $50M sequentially; 200G EMLs ~5% of unit volume but ~10% of laser-chip revenue.^[extracted]

Mix story: cloud + EMLs > legacy telecom. Gross margin still inferior to Coherent but accreting as datacom mix rises. Big risk: Lumentum is supply-constrained, not demand-constrained, so the swing factor is its own capacity adds (CW laser integration in late 2026) and how fast Coherent's 6-inch InP fabs displace them on share.

## Fabrinet (FN)

FQ2'26: revenue $1.13B (+36% YoY); Optical Communications $833M (+29% YoY); within optical, Datacom $278M (-7% YoY but +2% QoQ) and DCI Modules $142M (+42% YoY).^[extracted] Non-Optical (HPC programs — Nvidia-related) $86M (+61% YoY), management guiding past $150M/quarter near-term.^[extracted]

Fabrinet is the contract manufacturer for high-mix optical assemblies — Cisco, Ciena, Coherent, Nvidia, Lumentum all show up. The pure-play character is double-edged: when 800G shipped through Fabrinet was 30%+ YoY, the stock re-rated; when 1.6T moves first through new FAB-9 capacity at higher ASPs but compressed unit growth, there's a transition gap. The Q2 datacom -7% YoY number reflects a customer-mix reset (Nvidia bringing more silicon-photonics work in-house through other partners).^[inferred] HPC line growth is the offset.

## Credo (CRDO)

FQ3'26: revenue $407M (+201% YoY); FQ4'26 guide $425-435M, gross margin 64-66%.^[extracted] AECs are the bread-and-butter; three hyperscaler customers each >10% of revenue, fifth hyperscaler in qualification. Microsoft and Amazon have not been formally disclosed as named AEC customers, but circumstantial evidence (xAI Colossus + ZeroFlap, hyperscaler concentration patterns) points to all four US hyperscalers in some combination.^[ambiguous]

Strategic posture: monetize copper at 800G/1.6T; expand TAM through ZeroFlap optics, ALCs, OmniConnect.^[extracted] The risk is that AEC TAM is bounded by reach physics — when 224G/lane SerDes lands, the AEC reach window narrows, optics encroaches, and Credo must have proven its optical-DSP and OmniConnect franchises by then. Through 2027, copper is still a winning strategy and Credo's gross margins (mid-60s) are atypical for "cable" exposure — that's the IP premium.

## Ciena (CIEN)

FQ1'26: revenue $1.43B (+33% YoY); direct cloud-provider revenue +76% YoY, 42% of total revenue.^[extracted] WaveLogic 6 Extreme (1.6T per wavelength) added 18 customers in the quarter for a total of 90.^[extracted] FY26 guide raised to $5.9-6.3B.

Ciena is the long-haul/DCI optical play, not the intra-DC transceiver play. The thesis is that AI workloads shift the long-haul mix away from telco toward cloud (now 42% of revenue) and require coherent 1.6T/wavelength systems that are more software-differentiated than pluggables. Risk: cloud-direct revenue is concentrated and lumpy; the same hyperscalers can shift share between Ciena, Cisco/Acacia (now Cisco), and Infinera (now Nokia).

## Broadcom (AVGO)

FQ1'26: total revenue $19.3B (+29% YoY); semis $12.5B (+52% YoY); AI semis $8.4B (+106% YoY).^[extracted] AI customer count six XPU customers. AI networking 60% YoY and ~one-third of AI revenue, accelerating to ~40% in Q2 FY26. Long-term: AI revenue visibility >$100B in 2027.^[extracted]

Three franchises stack: (1) custom XPU silicon for Google TPU, Meta MTIA, ByteDance, OpenAI, plus newer wins; (2) Tomahawk 6 / Jericho 3-AI switching silicon — the merchant network silicon layer; (3) DSPs for optics. The triple-threat means Broadcom captures AI dollars whether the bottleneck is accelerator, fabric, or optics. Pricing power is structurally durable because each franchise has 1-2 viable competitors at most. Customer concentration risk centers on Google and a small number of XPU customers.^[inferred]

## Arista (ANET)

2025 revenue $9.0B (+28.6% YoY); Q4'25 revenue $2.488B (+28.9% YoY); Q4'25 gross margin 63.4% (slightly down YoY due to cloud/AI titan mix); Q1'26 guide $2.6B; FY26 revenue guide $11.25B (+25%); 2026 AI centers revenue target raised to $3.25B (from $2.75B).^[extracted] Cloud + AI titans (Microsoft and Meta historically) 48% of FY25 revenue.^[extracted] 1.6T migration "imminent."

Arista is the cleanest scale-out Ethernet system play. Risk is hyperscaler insourcing (Microsoft Azure switching custom whitebox path, Meta MTIA fabric) and Nvidia Spectrum-X taking Ethernet share where Arista historically won unopposed. Defenses: EOS software franchise, breadth across cloud/enterprise, and the design-win cycle on 800G/1.6T systems based on Tomahawk 6.

## Amphenol (APH)

Q1'26: revenue $7.62B (+58% YoY); orders $9.4B (+78% YoY); book-to-bill 1.24x; non-GAAP EPS $1.06 (+68% YoY); Q2'26 guide $8.1-8.2B.^[extracted] IT Datacom 41% of sales, grew 99% YoY, virtually all sequential growth from AI.^[extracted] CommScope acquisition closed; building-connectivity adds enterprise share.

The thesis is connector and cable-assembly attach to AI server and switch port count. Amphenol is the cleanest "more ports, regardless of optics vs copper mix" play. Diversification (defense, industrial, mobile networks) provides downside cushion. Risk is that AEC and optics integrators (Credo, Coherent, Fabrinet) capture a higher share of the BOM dollar value over time, leaving Amphenol with the connector shell.

## Marvell (MRVL)

FY26: revenue $8.195B (+42% YoY); Q4'26 revenue $2.219B; non-GAAP FY26 EPS $2.84 (+81% YoY).^[extracted] Custom-ASIC AI revenue scaled to ~$1.5B in FY26 (Amazon Trainium 2.5, Microsoft Maia DSPs).^[extracted] 1.6T optical DSPs in volume production H2 FY26.^[extracted] Silicon photonics + CXL switching round out the franchise.

Two-engine model: custom AI ASICs for hyperscalers + 1.6T optical DSPs. The custom-ASIC line is the fastest-growing, but customer concentration is unusually high (top 2-3 hyperscalers). Optical DSP is the more durable franchise — Marvell + Broadcom is a duopoly heading into 1.6T and 224G/lane. Risk: hyperscaler ASIC programs can re-source between Marvell and Broadcom (Microsoft is rumored to have multi-vendored Maia DSP work);^[ambiguous] design-cycle losses are large dollar swings.

Marvell's optical DSP and silicon-photonics positioning sits at the rare intersection of "duopoly part" and "fast-growing TAM" — the most attractive of any of the company's segments — but custom ASIC dominates the headlines because of dollar size. Investors should track segment disclosure for optical DSP versus custom-ASIC mix; if optical DSP gross margin is meaningfully above corporate average, that's the durable franchise to underwrite.

## What's priced in

Two-tier valuation pattern as of late April 2026 ^[inferred]:

- **Premium tier (AVGO, ANET, CRDO)**: trade as compounding software-like franchises. AVGO and ANET have re-rated on durable pricing power; CRDO trades on hyper-growth (>200% recent) and TAM expansion narratives. The market is paying for IP moat and customer concentration upside.
- **Cyclical tier (COHR, LITE, FN)**: trade closer to mid-cycle hardware multiples despite Datacom-segment book-to-bill in the 2-4x range. The market is discounting (a) the EML supply-demand gap closing as Coherent and Lumentum add capacity, (b) 1.6T ASP compression once volumes mature, and (c) CPO partial cannibalization of pluggable revenue late decade.
- **Hybrid (MRVL, APH, CIEN)**: Marvell prices in custom-ASIC durability but is exposed to hyperscaler re-sourcing; Amphenol prices in book-to-bill momentum but limited terminal-margin upside; Ciena prices the cloud mix shift but with telco overhang.

Edge cases worth monitoring: (1) if Coherent's 6-inch InP capacity ramp is faster than expected, the gross-margin re-rating at COHR could close the multiple gap with AVGO meaningfully; (2) if Nvidia CPO ramps faster than the H2'26 plan, pluggable optics shipments compress and FN/COHR/LITE de-rate; (3) if Microsoft custom ASICs cannibalize Marvell DSP sockets, MRVL re-rates toward APH-like multiples.

Practical portfolio construction observations: a barbell of (AVGO + ANET) plus (COHR + LITE) captures both the high-multiple compounding tier and the supply-constrained upstream laser tier with low correlation between the two pairs' dominant risk factors. Adding CRDO captures the copper-extension narrative through 2027 with optionality on the optical-DSP and OmniConnect TAM expansions; adding APH captures the connector-and-cable beneficiary trade with low single-name risk. Skip overlap: holding both ANET and AVGO is the same fabric trade twice, and holding both COHR and LITE is mostly the same EML trade with different operational risk. Concentration discipline matters more than breadth in this space because the underlying drivers (1.6T ramp, EML supply, CPO timing) are correlated across most of the names.

Cross-check the broader scorecard in [[ai-investment-public-company-scorecard]] and the constraint stack in [[hyperscaler-constraint-map]] for portfolio-level positioning.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[hyperscaler-constraint-map]]
- [[semiconductor-supply-chain-deep-dive]]
- [[risk-tripwires-and-warning-indicators]]
