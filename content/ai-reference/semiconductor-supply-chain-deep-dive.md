---
title: Semiconductor supply chain deep dive
category: ai-reference
summary: One-layer-deeper map of the advanced packaging, HBM, ABF, photomask, ATE, and TIM bottlenecks behind AI accelerators, and what it implies for 2026-2027 capacity.
tags:
  - ai
  - investing
  - semiconductors
  - supply-chain
  - infrastructure
sources:
  - https://www.trendforce.com/news/2025/01/02/news-tsmc-set-to-expand-cowos-capacity-to-record-75000-wafers-in-2025-doubling-2024-output/
  - https://www.trendforce.com/news/2025/12/08/news-tsmcs-cowos-l-s-reportedly-fully-booked-osat-partners-step-up-with-ases-cowop-in-focus/
  - https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-tsmc-to-quadruple-advanced-packaging-capacity-reaching-130000-cowos-wafers-monthly-by-late-2026
  - https://newsletter.semianalysis.com/p/ai-capacity-constraints-cowos-and
  - https://newsletter.semianalysis.com/p/scaling-the-memory-wall-the-rise-and-roadmap-of-hbm
  - https://news.skhynix.com/q1-2026-business-results/
  - https://www.kedglobal.com/earnings/newsView/ked202604230001
  - https://www.trendforce.com/news/2026/01/28/news-sk-hynix-reportedly-to-supply-about-two-thirds-of-nvidia-hbm4-samsung-targets-early-delivery/
  - https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-results-second-quarter-fiscal-2026
  - https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/
  - https://www.asml.com/en/news/press-releases/2026/q1-2026-financial-results
  - https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results
  - https://www.trendforce.com/news/2026/04/15/news-asml-raises-2026-sales-outlook-to-e36b-e40b-on-memory-and-logic-client-demand-south-korea-share-hits-45/
  - https://www.globenewswire.com/news-release/2026/04/23/3279584/0/en/BE-Semiconductor-Industries-N-V-Announces-Q1-26-Results.html
  - https://www.digitimes.com/news/a20260204PD227/ibiden-expansion-capacity-production-plant.html
  - https://www.digitimes.com/news/a20251218PD207/abf-substrate-packaging-expansion-ai-gpu-capacity.html
  - https://investors.teradyne.com/news-events/press-releases/detail/440/teradyne-reports-first-quarter-2026-results
  - https://futurumgroup.com/insights/broadcom-q1-fy-2026-earnings-driven-by-xpu-momentum/
  - https://www.ainvest.com/news/marvell-q2-2026-earnings-preview-focus-ai-asic-growth-trainium-4-orders-2508/
  - https://www.tbpndigest.com/story/2026-02-03/dylan-patel-on-space-data-centers-the-tsmc-bottleneck-returning-in-2027-and-why-openai-is-fine
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

This is investment research, not financial advice. The claim is that the popular framing of an "AI GPU shortage" is mis-located. The binding constraint is not Nvidia wafer starts at TSMC N4/N3, which can flex. It is the stack underneath: CoWoS advanced packaging, HBM memory, ABF substrates, photomasks, ATE testers, and a handful of exotic materials. Those are operated by far fewer firms, on longer lead-time tools, with capacity adds measured in 18-30 months, not quarters.

Dylan Patel's working thesis is that the binding constraint moved from semiconductors (2023) to power and data centers (2024-2025) and swings back to semiconductors by 2027 because TSMC, the memory big three, and advanced packaging cannot flex at the rate hyperscalers can sign power deals.^[inferred] The question this page tries to answer for an investor: is that thesis underwritten by current capacity adds across the deep stack, or is it already priced into the obvious names (TSMC, ASML, Micron, Nvidia)?

See [[ai-data-center-buildout-investment-memo]] for the broader 50-100 GW thesis, [[ai-data-center-supply-chain-bottlenecks]] for the wider bottleneck map, and [[hyperscaler-constraint-map]] for cluster-level constraint sequencing.

## Advanced-packaging stack

Advanced packaging is dominated by TSMC, with ASE and Amkor as outsourced backstops. CoWoS (Chip-on-Wafer-on-Substrate) is the umbrella, but the variants matter:

| Variant | What it is | Used for | Capacity owner |
|---|---|---|---|
| CoWoS-S | Silicon interposer, the original 2.5D process | H100, H200, AMD MI300/MI325 | TSMC |
| CoWoS-L | Local silicon interconnect (LSI) bridges in an RDL fan-out, larger reticle area | Blackwell B200/GB200, Rubin (R100), large hyperscaler ASICs | TSMC primary |
| CoWoS-R | RDL-only fan-out, lower-cost variant | Smaller AI/HPC, networking | TSMC, ASE CoWoP analogue |
| SoIC | 3D stacking via face-to-face / face-to-back hybrid bonding | AMD MI300 base tile, future logic-on-logic | TSMC |
| InFO (variants) | Fan-out wafer-level packaging | Apple, mobile, some networking | TSMC |

CoWoS-L is the real 2026 chokepoint because Blackwell, Rubin, and most large custom ASICs (TPU v6/v7, Trainium 3, MTIA v3, Maia 3) target it. As of December 2025 trade press, TSMC's CoWoS-L and CoWoS-S lines were reported "fully booked" through 2026, which is why ASE's CoWoP and Amkor are being qualified as overflow.^[extracted]

Annual TSMC CoWoS capacity trajectory (monthly wafer-equivalent, all variants combined, end-of-year run-rate):

| Year | TSMC CoWoS KWPM | Notes |
|---|---:|---|
| 2024 | ~35 | TrendForce, doubled from ~15 in 2023^[extracted] |
| 2025 | ~75 | TrendForce Jan 2025; TSMC Q3 2025 call confirmed sold-out^[extracted] |
| 2026 | ~125-130 | Domestic Taiwan analyst consensus, revised up ~14% in early 2026^[extracted] |
| 2027 | 160-200 (target) | Implied by Chiayi AP7 phasing; not yet TSMC-confirmed^[inferred] |

CEO C.C. Wei: "Our CoWoS capacity is very tight and remains sold out through 2025 and into 2026."^[extracted] Chiayi (AP6/AP7) is positioned to be the world's largest advanced packaging hub with phases through 2027. ~10-20% of TSMC 2025 capex is going to advanced packaging and test, vs leading-edge wafer.^[extracted]

Nvidia is the anchor tenant, reportedly absorbing >60% of CoWoS capacity in 2025 and 2026.^[extracted] The remaining ~40% is split between AMD, Broadcom-led custom ASICs, Marvell-led custom ASICs, AWS Trainium, and a long tail.

**Why CoWoS-L is the real constraint, not wafer starts.** A B200 die pair with 8 HBM3E stacks consumes roughly 3.3 reticle-equivalents of CoWoS-L interposer area. Rubin (R100) is expected to push package size further, with HBM4 16-high stacks. Each step up in interposer reticle count compresses how many full packages fit on a 12" carrier wafer, so "wafers per month" understates the effective shortfall. Bridging this requires either (a) more CoWoS-L lines (TSMC's path), (b) substituting CoWoS-R or fan-out variants (yield/perf tradeoff), or (c) qualifying ASE CoWoP and Amkor S-SWIFT as second-source. All three are happening, but (b) and (c) are first-time-at-scale for AI accelerators and carry a yield ramp.^[inferred]

**Bridge capacity (OSAT subcontractors).**

| OSAT | AP capability | 2026 status |
|---|---|---|
| ASE | CoWoP (proprietary fan-out analogue), TCB | Qualifying with TSMC and end customers as overflow^[extracted] |
| Amkor | S-SWIFT, S-Connect | Long-standing AMD partner; Vietnam expansion |
| SPIL | Sub of ASE | Backstop |
| Powertech | Memory packaging | HBM-adjacent

## HBM allocation

HBM is the most concentrated bottleneck in the entire AI stack. Three suppliers:

| Vendor | 2026 HBM share (est.) | Position |
|---|---:|---|
| SK hynix | ~57% | Nvidia primary; HBM4 lead^[extracted] |
| Micron | ~24% | HBM3E 12-high shipping; HBM4 ramp Q2 FY26^[extracted] |
| Samsung | ~33% (declining mix vs HBM4) | HBM4 finally qualified to Nvidia early 2026 after a multi-quarter gap^[extracted] |

(The shares above sum >100% because they straddle HBM3E vs HBM4 and reflect different report bases; SK hynix dominates HBM4 specifically.)^[ambiguous]

**HBM3E to HBM4 transition.** HBM3E (8-high and 12-high stacks) is the GB200/GB300 generation. HBM4 is the Rubin (R100) generation, with 12-high in 2026 and 16-high pushing through 2026-2027.

**Allocation dynamics.**

- SK hynix: confirmed all 2026 HBM capacity sold out as of Q1 2026; HBM4 demand exceeds three-year supply; HBM4E samples in 2H 2026, mass production 2027.^[extracted] Reported to take ~two-thirds of Nvidia HBM4 in 2026.^[extracted]
- Micron: Q2 FY26 (Feb 2026 quarter) revenue $23.86B, Cloud Memory Business Unit (where HBM sits) $7.7B, +163% y/y. 2026 HBM supply fully booked. Capex hiked to $20B. Mass shipping HBM4 36GB 12-high at GTC 2026.^[extracted] Annualized HBM revenue run-rate implied >$30B by exit FY26 if Q3 guide ($33.5B total, gross margin ~81%) holds; the user-supplied "$25B HBM rev FY26" target appears conservative vs current run rate.^[ambiguous]
- Samsung: HBM4 12-high finally shipping to Nvidia for Rubin in Q1 2026, ~one year behind SK hynix samples. Triple-capacity pledge in 2026. HBM4E unveiled at GTC 2026.^[extracted]

**Pricing.** Contract HBM pricing rose through 2025 and into 2026 alongside DRAM tightness. SK hynix Q1 2026 operating margin hit 72%, Samsung memory ~70%; both reflect HBM mix and a broader DRAM/NAND price cycle running concurrently.^[extracted] Spot DRAM has been pulled along by HBM-driven wafer cannibalization (HBM consumes ~3x the DRAM die area per gigabit vs commodity DDR5).^[inferred]

**Implication.** The HBM cartel is the hardest supplier set to disintermediate. There is no fourth player. New fabs take 3+ years. If HBM4E and HBM5 stay tight into 2027, Patel's "semis as the binding 2027 constraint" thesis runs through HBM more than through TSMC wafers.

**Why HBM is the structural choke.** HBM is not a separable commodity. It is a logic-base-die plus a stack of DRAM dies, all bonded through TSVs (and increasingly hybrid bonded), with the logic base co-designed with the accelerator. That couples HBM capacity to the accelerator vendor's design schedule. A new HBM line is a new DRAM fab plus stacking and TSV capacity plus base-die packaging plus accelerator-vendor co-qualification. SK Group Chairman Chey Tae-won's reported view that the wafer shortage persists until 2030 is a statement about this coupling, not about commodity DRAM.^[extracted]

**Hybrid bonding context.** SoIC and HBM hybrid bonding both use copper-to-copper direct bonding (no microbumps), enabling sub-micron pitch and lower thermal resistance. AMD MI300 already uses SoIC for the base-tile-to-stacked-CCD interface. For HBM, the move is from thermo-compression bonding (TCB) to hybrid bonding. The transition is not strictly required for HBM4 but is widely expected for HBM4E / HBM5. If hybrid bonding becomes the default for HBM4E, BESI and ASMPT capacity becomes a binding constraint on memory output, not just packaging output.^[inferred]

## ABF substrates and photomasks

**ABF (Ajinomoto Build-up Film) substrates** — the carrier under every CoWoS module. Top five (Unimicron, Ibiden, AT&S, Nan Ya PCB, Shinko) hold ~74% global share.^[extracted]

| Vendor | 2026 stance |
|---|---|
| Ibiden (JP) | JPY 500B (~$3.3B) three-year invest plan from FY26; Gifu expansion at 50% by Mar 2026^[extracted] |
| Shinko Electric (JP) | Tax-pivoting under JIC-led take-private; HBM-grade FC-BGA exposure |
| Unimicron (TW) | Guangfu plant pulled forward for AI GPUs; Yangmei flipped from EMIB to CoWoS support^[extracted] |
| AT&S (AT) | High-end FC-BGA in Leoben/Kulim; Intel/AMD-skewed |
| Nan Ya PCB (TW) | Volume tier, less AI-leveraged |

The substrate cycle inverted from 2022-2023 oversupply (PC/handset hangover) to 2025-2026 undersupply (high-layer-count AI substrates). The constraint is not panel area; it is high-layer (>20-layer) FC-BGA with tight warpage tolerance. Ibiden is closest to a pure-play.

**Photomasks.** EUV mask blanks, multi-beam mask writers, and pellicle supply. Toppan (via Tekscend), Dai Nippon Printing (DNP), and Photronics are the merchant trio; Intel, TSMC, Samsung run captive masks. Shin-Etsu's $545M Gunma EUV blank line lands 2026, easing High-NA blank tightness.^[extracted] DNP committed $280M to a high-NA EUV blank line. Photronics expanded Xiamen 18%.^[extracted] None of these are AI-pure-plays, but mask supply is a real adder to N2 / A16 / A14 lead time.

## Advanced-packaging equipment

| Vendor | Role | 2026 read |
|---|---|---|
| ASML | EUV (NXE:3800E), High-NA EUV (EXE:5000), DUV | 2026 net sales guide raised to €36-40B; Q1 2026 €8.8B revenue, €2.8B net income; China share normalizing to ~20%; up to 80 low-NA systems shippable in 2027^[extracted] |
| Applied Materials | Deposition, etch, hybrid bonding metrology, packaging tools | AGS and ICAPS exposed; advanced packaging segment growing |
| Lam Research | Etch, deposition, especially for HBM TSV and DRAM | HBM-driven memory WFE leverage |
| KLA | Process control, mask inspection, packaging metrology | Highest gross margin in WFE; packaging metrology a 2026 pull-through |
| Tokyo Electron | Coater/developer, etch, cleaning | Strong HBM and 3D NAND mix |
| BE Semiconductor (BESI) | Hybrid bonders, die-attach, flip-chip | Q1 2026 orders €269.7M record, hybrid bonder unit orders >2x sequential, scaling from ~15/mo (~180/yr) toward 250/yr; 3 memory customers now in HBM hybrid-bonding eval^[extracted] |
| ASMPT | Hybrid bonders (BESI's main competitor), TCB | HBM hybrid bonding qualification ramp 2026, mainstream 2027 |
| ASMI | ALD for high-aspect-ratio (HBM TSV, gate-all-around) | GAA at N2 / A16 a 2026-27 driver |
| Onto Innovation | Packaging inspection / metrology | AI packaging mix tailwind |

BESI is the cleanest pure-play on the hybrid-bonding transition. The catch: hybrid bonding for HBM is not yet mass-production. Three memory customers are evaluating; mainstream adoption is 2027.^[extracted] If HBM4E/HBM5 require hybrid bonding (vs continued TCB), BESI's ~15/mo run rate is ~10x undersized.

## ATE / testing

Test time per AI accelerator and per HBM stack has grown faster than unit volume, because (a) larger reticle / multi-die packages have more test vectors, (b) HBM stacks demand more KGD (known-good-die) and post-stack tests, and (c) yield economics force more burn-in and system-level test (SLT).

| Vendor | Position | 2026 read |
|---|---|---|
| Teradyne (TER) | SoC test ~50% share at high end; >50% HBM wafer-stack test share | Q1 2026 semi test $1.11B (SoC $882M, memory $203M); HBM testing ~10x DRAM intensity per stack^[extracted] |
| Advantest (ATEY/JP:6857) | ATE leader ~58-60% overall, dominant in Nvidia SoC | 2026 guide ~$9B SoC + ~$2-2.5B memory = ~$11.5B^[extracted] |
| Cohu | Handler / contactor consumables | Picks-up the volume |
| FormFactor | Probe cards (HBM and SoC) | HBM probe-card units rising faster than HBM units |

This is a rational duopoly. Both Teradyne and Advantest are AI-leveraged, but Advantest's exposure to Nvidia's flagship SoCs is more concentrated. Teradyne is the cleaner HBM derivative.

## Thermal interface and exotic materials

Higher TDP per package (B200 ~1000W, R100 expected higher) and higher rack density push thermal interface materials (TIMs) into a real bottleneck for cluster-level uptime. Public-market exposure is diffuse and embedded in larger materials companies:

| Vendor | Exposure | Notes |
|---|---|---|
| Honeywell (HON) | TIM portfolio (PCM, gap pads, greases) | Diversified industrial; AI not a reportable segment |
| Henkel (HEN3.DE) | Bergquist, Loctite TIM lines, advanced packaging encapsulants | Closer to a thematic vehicle in Europe |
| Indium Corporation | Solder TIMs, Heat-Spring, immersion-cooling-compatible TIMs | Private |
| Shin-Etsu Chemical (4063.JP) | Silicone TIM, photoresist, EUV pellicles, quartz | Multi-bottleneck exposure (TIM + photomask blanks + photoresist) |
| Resonac (4004.JP) | CMP slurries, packaging materials, copper foils | Underrated AI-packaging-materials proxy |
| DuPont (DD) | Photoresist, CMP, packaging | Mixed segment exposure |
| Entegris (ENTG) | Process chemicals, advanced filtration | Volume-leveraged to wafer + packaging starts |

The non-Asian listed names that move on AI thermal/material headlines are mostly Honeywell and Henkel, but neither is a clean read-through. Shin-Etsu and Resonac are the cleaner Japanese exposures, but require ADR/foreign-broker access.

**Why TIM matters at the cluster level.** A 1000W package shedding heat into a cold-plate at 50C requires a TIM with sub-0.05 C-cm2/W resistance and bond-line stability across thermal cycles. TIM pump-out and dry-out are two of the more common cluster reliability failures at hyperscale. Rack-level uptime degrades the unit economics of a GW cluster faster than headline accelerator yield does. This is why hyperscalers are co-developing PCM and metallic TIMs with Honeywell, Henkel, Indium, and Shin-Etsu directly, not buying off-shelf.^[inferred]

**Process-control note.** KLA's mask-inspection toolset is the gating asset for High-NA EUV mask qualification. Any High-NA delay flows through KLA backlog before it shows up in TSMC or Samsung wafer-out. KLA gross margins (~60%) are the highest in WFE for a reason: the inspection tools have no real second source.^[inferred]

## Custom-ASIC impact

Hyperscaler custom silicon is shifting demand inside the TSMC/HBM stack rather than reducing it. The same nodes (N3, N3P, N2 forthcoming) and the same CoWoS-L lines are used. The mix shift matters for pricing power, not aggregate capacity.

| Program | Designer | Customer | 2026 status |
|---|---|---|---|
| TPU v6/v7 | Broadcom | Google | Q1 FY26 Broadcom AI rev $8.4B (+106% y/y); Q2 guide $10.7B (+140% y/y); Tan: line of sight to >$100B AI rev FY27^[extracted] |
| MTIA v3 | Broadcom | Meta | "Multiple gigawatts" of XPUs from 2027^[extracted] |
| OpenAI custom | Broadcom | OpenAI | First custom chip targeting 2027 deployment^[extracted] |
| Anthropic TPU partnership | Broadcom (TPU sourced via Google) | Anthropic | 1 GW of TPUs in 2026, scaling to 3 GW in 2027^[extracted] |
| Trainium 3 | Marvell | AWS | 3nm; Q2 FY26 ramp; Marvell custom AI ASIC >$2B FY27^[extracted] |
| Maia 3 | Marvell | Microsoft | 3nm; 2H 2026 ramp^[extracted] |
| Axion | (in-house Arm CPU) | Google | Volume modest |

**Net effect on the stack.** Custom ASICs do not relieve CoWoS-L or HBM. They re-allocate it. Broadcom's $8.4B AI quarter and Marvell's >$2B FY27 custom ASIC trajectory both consume the same packaging line as Nvidia. The notable beneficiary is the networking and PCIe/optics layer (see [[optics-and-interconnect-deep-dive]]) because hyperscaler training fabrics increasingly use Broadcom Tomahawk / Jericho switching, custom NICs, and co-packaged optics. The notable loser, on the margin, is Nvidia's networking attach (NVLink/NVSwitch + Spectrum-X) inside hyperscalers that build their own scale-out fabric.

The ASIC trade is not "less Nvidia GPU." It is "same TSMC + HBM, different label, different attach economics."

## What looks priced-in vs not

This is a working hypothesis, not a recommendation.

| Bucket | Names | Read |
|---|---|---|
| Likely priced-in | Nvidia, TSMC ADR (TSM), ASML, Broadcom (AVGO), Micron (MU) | Consensus owns the AI thesis. Re-rating from here requires earnings beats, not multiple expansion. ASML 2026 guide raise is already in.^[inferred] |
| Mid-priced | SK hynix (KR:000660), Samsung (KR:005930), AMAT, LRCX, KLAC, TEL (Tokyo Electron) | AI-aware but tempered by memory cycle skepticism, China WFE exposure, or cyclical optics. SK hynix at 72% margin re-prices the memory cycle if HBM mix sustains.^[inferred] |
| Less priced-in | BE Semiconductor (BESI), Advantest (ATEY), Teradyne (TER), Ibiden (4062.JP), Shinko (6967.JP), Unimicron (TW:3037), ASMPT | Hybrid bonding, HBM/SoC test, and ABF substrates are real bottlenecks but require ADR/foreign-broker access or have lower analyst coverage.^[inferred] |
| Optionality | Resonac, Shin-Etsu, Onto Innovation, FormFactor, Cohu, Photronics | Materials, metrology, probe cards, photomasks. Multi-step removed from the AI narrative.^[inferred] |

The Patel "2027 binding constraint" thesis is most cleanly expressed via HBM (SK hynix, Micron) + hybrid bonding (BESI) + HBM test (Teradyne) + ABF (Ibiden), not via Nvidia or even TSMC. If you already own TSM and AVGO, the differentiated additions are BESI, Advantest, Teradyne, Ibiden, and SK hynix.

## Cluster-level read-through

What does this stack imply for an actual GW-class cluster build?

- A 1 GW training cluster running ~1.5M GB200-equivalent accelerators (placeholder math) needs ~12M HBM3E stacks at current 8-stack-per-package configuration. That is roughly a full year of one HBM vendor's 2026 capacity, dedicated.^[inferred]
- The same cluster needs ~500K CoWoS-L wafer-equivalents over its build window, which is on the order of 5-7 months of TSMC's end-2026 130 KWPM run-rate, dedicated.^[inferred]
- ATE test capacity scales sub-linearly (test-time per stack rises but tester unit growth is bounded by Teradyne+Advantest combined ~$11.5B 2026 SoC+memory output).^[extracted]
- Hybrid-bonder capacity (BESI + ASMPT) is the single smallest input by unit count and the most easily disrupted.

The composite read is that even one named hyperscaler 1 GW deployment in 2026-2027 saturates a meaningful fraction of every layer at once. A 50-100 GW cumulative buildout (the [[ai-data-center-buildout-investment-memo]] scenario) is not deliverable on the current capacity trajectory without a step-up in either HBM, CoWoS, or both.

## Tripwires worth tracking

These are the specific data points that would either confirm or break the "semis-binds-2027" view. Cross-reference [[risk-tripwires-and-warning-indicators]].

- TSMC quarterly call language on CoWoS sold-out window. Currently "through 2026"; watch for "through 2027" or for first softening.
- SK hynix and Micron HBM bookings commentary; both currently say 2026 fully booked. First sign of slack is the tell.
- BESI hybrid-bonder unit orders sequential. Q1 2026 was a record. Sustained >60 units/quarter for two quarters validates HBM hybrid bonding at scale.
- Samsung HBM4 qualification at Nvidia for full Rubin volume (vs current Q1 2026 partial). Ends the duopoly tightness if it comes through.
- Ibiden / Unimicron quarterly capacity utilization above 90% on high-layer FC-BGA.
- Advantest and Teradyne 2027 backlog commentary; current 2026 guides assume strong AI but not panic.
- China memory (CXMT) yield improvement on DDR5 / LPDDR5X as a leading indicator for any HBM-equivalent.
- Hyperscaler 2027 capex guidance (Q4 2026 reporting season). If aggregate 2027 capex prints flat to up 20%, the demand side underwrites the bottleneck. Down-sloping capex breaks the trade.

## Risks to the thesis

- HBM4 yields ramp faster than expected at all three vendors, and the bottleneck reverts toward CoWoS-L and substrates.
- TSMC's Chiayi AP7 phases come in ahead of schedule and CoWoS-L stops being the binding constraint by mid-2027.
- Hyperscaler model efficiency (sparsity, KV-cache compression, distillation, mixture-of-experts) reduces HBM bytes-per-FLOP demand.
- Hybrid bonding for HBM stalls in qualification and the industry stays on TCB for HBM4E, capping BESI's near-term unit ramp.
- China memory (CXMT, YMTC) ships AI-grade HBM-equivalent product faster than expected, breaking the cartel pricing.
- Macro / capex cycle reversal: if hyperscaler 2027 capex guidance comes in flat or down, the entire stack de-rates regardless of unit shortage.
- Geopolitics: Taiwan, EUV export controls, Korea-China memory rules.
- TSMC pricing power: aggressive 2026 wafer and CoWoS price increases pull margin from accelerator vendors and could reroute customer mix.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[hyperscaler-constraint-map]]
- [[optics-and-interconnect-deep-dive]]
- [[risk-tripwires-and-warning-indicators]]
