---
title: "[Pick] Taiwan Semiconductor (TSM) — 5-year hold"
slug: pick-tsmc-tsm-5y
category: ai-reference
summary: Long, 5-year hold on Taiwan Semiconductor (TSM ADR). Conviction high (tied with ASML for highest in the semis basket). Leading-edge foundry monopoly, CoWoS scarcity, 2nm ramp, and multi-decade capex visibility, framed against an explicit Taiwan geopolitical discount.
tags:
  - ai
  - investing
  - semiconductors
  - supply-chain
  - infrastructure
sources:
  - https://investor.tsmc.com/english/quarterly-results/2026/q1
  - https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-04/3eaf7a9b1f4b3f2c2db20bcd3f1a14a9b3eaf7a9/TSMC%201Q26%20Transcript.pdf
  - https://www.tsmc.com/english/dedicatedFoundry/manufacturing/fab21
  - https://www.tsmc.com/english/news-events/3038
  - https://www.semianalysis.com/p/cowos-capacity-2026-tsmc-ase-amkor
  - https://www.semianalysis.com/p/tsmc-n2-ramp-2026-pricing-customers
  - https://seekingalpha.com/symbol/TSM/analysis
  - https://www.bernsteinresearch.com/brweb/Research/coverage/asia-semiconductors-tsmc
  - https://www.morganstanley.com/ideas/asia-semiconductors-2026-outlook
  - https://www.gs.com/insights/pages/asia-semis-2026-tsmc-update.html
  - https://www.trendforce.com/news/2025/01/cowos-capacity-2025-2026
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.45
  inferred: 0.45
  ambiguous: 0.10
---

> This is investment research, not financial advice. Numbers are as of 2026-04-30 ± a few weeks and will move with prints, guidance updates, geopolitics, and tape action. Cells marked `n/d` are not disclosed at the granularity required; `n/a` means the metric is not meaningful for this name. Taiwan Semiconductor is a Taiwan-domiciled company with a US ADR (TSM); the analysis below treats the ADR as the investable instrument for a US household account. The Taiwan geopolitical discount is real and modeled explicitly — do not size this as if it were a US mega-cap.

## Header

- Ticker: **TSM** (NYSE ADR; 1 ADR = 5 common shares; TWSE: 2330)
- Price (as of 2026-04-30, intraday): ~$245 ^[extracted]
- 52-week range: ~$165 — ~$265 ^[inferred]
- Market cap: ~$1.27T (ADR-implied) ^[inferred]
- NTM P/E: ~22x ^[inferred]
- 5-yr median P/E: ~19x ^[inferred]
- FY26E revenue: $94-100B (USD-translated) ^[inferred from TSMC 1Q26 guide]
- FY26E gross margin: 56-58% ^[extracted from TSMC 1Q26 guidance: 1Q26 GM 58.2%, FY26 long-term GM target ≥53%]
- FY26E EPS (ADR equivalent): ~$11.00-11.50 ^[inferred]
- Position-sizing cap (this basket): **5% maximum**, see [position sizing](#position-sizing).

> **Recommendation:** Long, 5-year hold. **Conviction: high** — tied with [[pick-asml-asml-5y\|ASML]] for the highest conviction in the semiconductor basket and one of the two anchor positions in the AI infrastructure portfolio (the other being [[pick-broadcom-avgo-5y\|Broadcom]] for the ASIC angle).

## Thesis (one paragraph, then bullets)

TSMC is the only foundry that can produce leading-edge logic at the volume, yield, and design-enablement quality that the AI accelerator complex requires. Every Nvidia GPU, every AMD MI300/MI400, every Broadcom-built Google TPU and Meta MTIA, every Marvell-built Trainium, every Apple SoC, and every Qualcomm flagship at ≤5nm is fabricated by TSMC. That is not "market share" — it is a structural monopoly on a node-by-node basis, with Samsung Foundry and Intel Foundry both at least one full generation behind on yield and PPA at the 2nm/A16 horizon. The five-year setup is unusually clean: (1) the CoWoS advanced-packaging line is the binding constraint of the entire AI buildout and TSMC is taking that capacity from ~75 KWPM exiting 2025 to ~125-130 KWPM exiting 2026 to a 160-200+ KWPM target by 2027 ^[extracted/inferred]; (2) the 2nm node ramps in 2H 2026 with Apple as anchor and Nvidia / AMD / Broadcom / MediaTek committed for 2027 product cycles; (3) leading-edge ASP is rising via wafer-pricing increases that customers are absorbing because there is no alternative; (4) Arizona, Japan, and Germany fabs progressively de-concentrate the geographic footprint, which both reduces the geopolitical tail and pulls in US-government goodwill; and (5) gross margin has structurally re-rated above the historical 50-53% band into 55-58%+ on mix shift to N3/N2 and is converging to the Investor-Day "long-term ≥53%" being a floor, not a ceiling.

- **Leading-edge wafer monopoly** — >90% of >5nm AI accelerator volume runs through TSMC ^[inferred]; Samsung 3GAE has yield issues, Intel 18A is shipping but not at AI-scale.
- **CoWoS scarcity** — 75 KWPM (2025) → 125-130 KWPM (2026) → 160-200 (2027 target) ^[extracted]. Every advanced AI accelerator package transits this line.
- **2nm ramp** — Risk production 2H25, volume 2026, Apple anchor, Nvidia/AMD/Broadcom committed 2027 ^[extracted from 1Q26 call].
- **Multi-decade capex visibility** — $42-44B 2026 capex range guided ^[extracted]; ~70% on leading-edge wafer, ~10-20% on advanced packaging.
- **Geographic de-concentration** — Arizona (Fab 21 phases 1/2/3), Kumamoto (JASM 1/2), Dresden (ESMC) reduce the "all-eggs-in-Hsinchu" risk over the 5-year window.
- **Pricing power** — 2026 wafer-pricing actions across N3/N4 absorbed without share loss; CoWoS pricing up double digits ^[extracted from sell-side].
- **Margin floor moving up** — long-term GM ≥53% guide intact, but FY26 GM running 56-58% ^[extracted]; the 53% target now reads as a Taiwan-dollar appreciation backstop, not an aspiration.

## Business overview

TSMC reports as a single-segment dedicated foundry. It does not design or sell its own ICs (other than tiny exceptions) — the entire value capture comes from manufacturing wafers under customer designs and offering an integrated package of process technology, IP libraries, EDA enablement, and back-end packaging.

### Revenue mix (FY25 actual / 1Q26 trend)

By technology node (% of wafer revenue, 1Q26 ^[extracted from earnings call]):

| Node | 1Q26 mix | Trend | AI/HPC relevance |
|---|---|---|---|
| 3nm (N3, N3E, N3P, N3X) | ~26% | rising | Apple A19/A20, Nvidia Blackwell Ultra/Rubin some tiles, AMD MI400, Qualcomm flagship |
| 5nm (N5, N4, N4P, N4X) | ~32% | flat-to-down as 3nm cannibalizes | Nvidia H100/H200/B200/B300, AMD MI300/MI325, custom ASICs |
| 7nm (N7, N6) | ~13% | declining | mid-range mobile, networking |
| 16/12nm | ~7% | declining | mature analog, some networking |
| 28nm and older | ~22% | flat | specialty, automotive, IoT |
| **3nm + 5nm combined** | **~58%** | **rising** | **AI/HPC core** |

By platform (1Q26):

- **HPC / AI**: ~57% of revenue ^[extracted] — the dominant segment; was 51% in 2024 and 46% in 2023.
- **Smartphone**: ~28% of revenue
- **IoT**: ~5%
- **Automotive**: ~5%
- **DCE & other**: ~5%

The platform mix tells the entire story: HPC overtook smartphone as the largest segment in 2024 and is on track to be ~60-65% by 2027 ^[inferred]. The Apple-Nvidia rotation in customer concentration is well underway.

### Top customers (5-year-relevant)

| Customer | Est. % of TSMC revenue (2025) | 5-yr trajectory | Node mix |
|---|---|---|---|
| Apple | ~25% ^[inferred] | flat-to-down (% terms; $ growing) | N3, N2 anchor |
| Nvidia | ~20% ^[inferred, was ~12% in 2024] | rising fast | N4 (Hopper), N3 (Blackwell), N2 (Rubin gen 2) |
| AMD | ~7% ^[inferred] | rising | N5/N4/N3, MI400 on N2 |
| Qualcomm | ~7% ^[inferred] | flat | N3 |
| Broadcom | ~7% ^[inferred] | rising | N3/N2 (Google TPU, Meta MTIA, ARM custom) |
| MediaTek | ~5% ^[inferred] | flat | N4/N3 |
| Marvell | ~3% ^[inferred] | rising | N3/N2 (Trainium, Microsoft Maia ASIC) |
| Intel (foundry customer for some tiles) | ~2% ^[inferred] | rising slowly | N3 GPU/IO tiles |
| Sony, NXP, Texas Instruments, MediaTek mature, others | balance | mixed | mature nodes |

Top-3 (Apple + Nvidia + AMD) ≈ 50%+ of revenue. Top-5 ≈ 65%. Customer concentration is high but the customers are themselves the strongest names in their categories — concentration with Apple and Nvidia is closer to "diversification by Tier-1" than "concentration by chance."

### Geographic footprint (5-year evolution)

| Site | Status | Nodes | Capacity exit 2030 (target) | Comment |
|---|---|---|---|---|
| Hsinchu (Taiwan) | Operational | N7 down to N2 | mature | HQ, R&D core, 2nm pilot |
| Tainan (Taiwan) | Operational | N5/N4/N3, N2 ramping | leading-edge core | Fab 18 phases 1-8; 2nm phase 9-10 |
| Kaohsiung (Taiwan) | Ramping | N2, A16 | second 2nm site | Phases coming online 2026-2028 |
| Chiayi (Taiwan) | Ramping | Advanced packaging (CoWoS) | AP6/AP7 — world's largest | Critical for CoWoS-L scaling |
| Arizona Fab 21 (US) | Phase 1 in production (N4); Phase 2 ramping (N3); Phase 3 announced (N2/A16) | N4 → N2 | ~10% of leading-edge total ^[inferred] | Apple, Nvidia, AMD already booked |
| Kumamoto JASM 1 (Japan) | Operational | 28/22/16/12nm | Sony / Denso anchor | Specialty, automotive |
| JASM 2 (Japan) | Construction; production 2027 | 7/6nm | Specialty / automotive | |
| Dresden ESMC (Germany) | Construction; production 2027/2028 | 28/22/16/12nm | Auto / industrial | JV with Bosch, Infineon, NXP |

By 2028-2029, ~10-15% of leading-edge wafer output will sit outside Taiwan ^[inferred]. By 2030+ the trajectory plausibly reaches 20-25% if the announced Arizona expansion phases all complete on schedule. This matters for the geopolitical-discount calculus: every additional GW of US/Japan/Germany capacity reduces the binary catastrophe scenario.

## AI buildout exposure

The cleanest way to state TSMC's AI exposure: **every AI accelerator that ships in volume in 2026 is fabricated at TSMC.** Specifically:

| Accelerator | Vendor | Node | Package | TSMC?  |
|---|---|---|---|---|
| H100 / H200 | Nvidia | N4 | CoWoS-S | yes |
| B100 / B200 / GB200 / B300 | Nvidia | N4P/N3 dual | CoWoS-L | yes |
| Rubin (R100, GR200) | Nvidia | N3P → N2 | CoWoS-L | yes |
| MI300 / MI325 / MI355 | AMD | N5/N6 chiplets | CoWoS-S/L, SoIC base | yes |
| MI400 | AMD | N3/N2 | CoWoS-L | yes |
| TPU v5p / v6 / v7 (Trillium / Ironwood) | Google (Broadcom-built) | N5/N3 | CoWoS-L variant | yes |
| MTIA v2 / v3 | Meta (Broadcom-built) | N5/N3 | CoWoS variant | yes |
| Trainium 2 / 3 | AWS (Marvell-built / Alchip-built) | N5/N3 | CoWoS-S/L | yes |
| Maia 100 / 200 | Microsoft (Marvell-built) | N5/N3 | CoWoS variant | yes |
| Gaudi 3 | Intel | N5 | CoWoS-S | yes (Intel pays TSMC for foundry + CoWoS) |
| Athena (rumored OpenAI ASIC) | OpenAI / Broadcom | N3 | CoWoS-L | yes ^[inferred] |

Implication: there is no AI accelerator demand scenario in 2026-2028 that does not flow through TSMC wafer + CoWoS. AMD-vs-Nvidia, ASIC-vs-merchant, training-vs-inference, US-vs-China — all of these mix shifts move which node and which packaging line, not whether TSMC gets paid.

**HPC/AI segment quantification:**

- 1Q26 HPC platform revenue: ~57% of total revenue ^[extracted]
- 1Q26 absolute HPC revenue: ~$15-16B (~$60B+ annualized run-rate from HPC alone)
- 5-year base case: HPC reaches 65%+ of revenue by 2030 on absolute growth, even as smartphone $ also grow modestly ^[inferred]
- The "AI multiplier" inside HPC (vs traditional CPU/datacenter) is the real driver — datacenter compute spend is rotating from x86 server CPU into accelerators and the wafer per dollar is much higher

## Demand drivers

### 1. Capex trajectory

TSMC's own capex is the single most-watched leading indicator for the entire AI semiconductor stack:

| Year | Capex ($B) | Comment |
|---|---|---|
| 2022 | 36.3 | post-COVID peak |
| 2023 | 30.4 | digestion |
| 2024 | 30.0 | trough |
| 2025 | ~38-42 | guided up mid-year, came in ~40 ^[extracted] |
| 2026 | **42-44** ^[extracted from 1Q26 guidance] | record |
| 2027 | 45-50 ^[inferred] | implied by Chiayi AP7 + Arizona phase 3 + Tainan F18 P9-10 |
| 2028+ | declining? ^[inferred] | only if 2nm/A16 ramp completes; A14 brings the next leg |

Mix within capex:

- ~70% leading-edge wafer (N3, N2, A16)
- 10-20% advanced packaging (CoWoS, SoIC) — this is the share that has been rising
- balance on mature nodes, specialty, R&D facilities

### 2. Node mix shift to leading-edge

Leading-edge (N5/N3/N2) ASP is materially higher than mature, and gross margin on N3 is now above corporate average ^[extracted from sell-side and corroborated by GM trajectory]. Each year of mix shift adds margin and revenue per wafer simultaneously.

### 3. CoWoS capacity expansion

This is the most-watched single supply-line in the AI complex. Trajectory (end-of-year monthly run-rate, all CoWoS variants combined):

| Year | KWPM | Source / status |
|---|---|---|
| 2022 | ~10 | pre-AI boom |
| 2024 | ~35 | post-Hopper ramp |
| 2025 | ~75 | TrendForce Jan 2025; TSMC Q3'25 confirmed sold-out ^[extracted] |
| 2026 | 125-130 | TSMC 1Q26 call ^[extracted] |
| 2027 | 160-200 (target) | implied by Chiayi AP6/AP7 phasing ^[inferred] |
| 2028 | 200+ | aspirational, requires AP7 full phasing |

CoWoS-L is the binding sub-variant for Blackwell-class and beyond ([[ai-data-center-supply-chain-bottlenecks]] explains why). TSMC has guided "fully booked through 2026 and into 2027" on CoWoS as recently as the 1Q26 call ^[extracted].

### 4. 2nm utilization

- Risk production: late 2025 ✓ (achieved)
- Volume production: 2H 2026 (on track per 1Q26 call) ^[extracted]
- Anchor customer: Apple A20 series (iPhone 18 Pro, fall 2026 launch) ^[inferred]
- Second wave: Nvidia Rubin successor, AMD MI400 series, MediaTek flagship — 2027 ^[extracted from sell-side and customer commentary]
- Pricing: ASP per N2 wafer reportedly ~$30-35K vs ~$20-25K for N3 ^[inferred; sell-side range]
- Yield: ramping faster than N3 did at equivalent stage ^[extracted from 1Q26 management commentary]

### 5. Customer capex commentary

Cross-checking from customer side:

- **Nvidia**: Datacenter revenue $35.6B in Q4 FY26 (~91% of total) ^[extracted]; allocations forward-booked; explicitly stated "supply-constrained" through 2026.
- **AMD**: $15B 2026 DC GPU forecast (vs $5B 2024) ^[extracted].
- **Apple**: AI features driving iPhone 18 cycle; M5/M6 series silicon tied to N3/N2 ramp.
- **Hyperscalers**: Combined $400B+ capex 2026 across MSFT/META/GOOG/AMZN/ORCL ^[extracted from consensus]. Roughly 40-50% of that is silicon, of which ~70%+ flows through TSMC wafer + CoWoS.

## Supply / capacity

### Taiwan (the core)

- **Hsinchu**: HQ, R&D, advanced node R&D, smaller-volume leading-edge runs, 2nm pilot lines.
- **Tainan F18**: The single most important fab cluster in the world. Phases 1-8 produce N5/N4/N3 in volume. Phases 9-10 are 2nm. This is where ~40% of leading-edge wafer-out lives.
- **Kaohsiung**: Second 2nm site; ramping 2026-2028. Provides the geographic redundancy for 2nm that Tainan lacked for N5/N3.
- **Chiayi (AP6, AP7)**: Advanced packaging campus. AP6 phases 1-3 ramp 2026; AP7 phases 1-4 ramp 2027-2028. By 2028 this is the largest advanced-packaging cluster in the world.

### Arizona Fab 21

- **Phase 1**: N4 in volume production since late 2024; running ahead of original yield plan ^[extracted]. Apple, AMD, Nvidia first customers.
- **Phase 2**: N3, ramp 2026-2027. Apple, Nvidia.
- **Phase 3**: N2 / A16 announced (April 2025 announcement), construction underway, production target 2028 ^[extracted].
- **Total AZ leading-edge target by 2030**: ~10% of TSMC global leading-edge wafer ^[inferred from announced phases].
- **CHIPS Act funding**: $6.6B direct + $5B loans + 25% investment tax credit on the qualifying capex ^[extracted].
- **Critical issue**: Advanced packaging (CoWoS) is **not** in Arizona at scale — AZ wafers ship back to Taiwan or to Amkor for CoWoS, which somewhat dilutes the "secure US supply" narrative until packaging localization advances.

### Japan (JASM)

- **Kumamoto JASM 1**: 28/22/16/12nm. Sony image sensors and Denso automotive are anchors. Production since late 2024.
- **JASM 2**: 7/6nm announced; production 2027. Strong Japanese government subsidy support.

### Germany (ESMC Dresden)

- **JV with Bosch, Infineon, NXP** for 28/22/16/12nm.
- **Production 2027-2028**.
- **EU Chips Act funding** (~€5B subsidy on €11B project).
- **Significance**: Auto / industrial, not AI directly. But it diversifies political risk and ties EU permanently to TSMC service.

### Service-depth moat

The non-fab moat is often under-appreciated:

- **PDK and IP libraries** — multi-year customer co-design lock-in. A customer cannot move a 3nm design to Samsung without redoing the design at the layout level.
- **Yield engineering** — TSMC routinely beats Samsung by 10-20 percentage points on equivalent-generation yield in the first year of a node ^[inferred].
- **Design enablement** — EDA partners (Synopsys, Cadence) optimize tools for TSMC PDKs first.
- **Capacity-allocation discipline** — TSMC explicitly does not compete with its customers (no first-party silicon), which is why hyperscalers route ASIC builds through Broadcom/Marvell/Alchip/MediaTek rather than directly threatening Intel-style integration.

## Financial model — Bear / Base / Bull (FY26-FY30)

All figures are in USD using NT$32 ≈ $1 ^[inferred]. ADR EPS estimates use 5 common shares per ADR.

### Bear case (terminal value: ~$170-200/ADR, ~30% downside)

Assumptions: AI capex digestion in 2027-2028, 2nm yield slips 6-9 months, Samsung Foundry takes 15% of Apple flagship by 2028, China invades Taiwan probability priced higher. Wafer pricing flat from 2027.

| FY | Revenue ($B) | GM | OpM | EPS (ADR) | FCF ($B) |
|---|---|---|---|---|---|
| 26E | 92 | 55% | 41% | 10.50 | 22 |
| 27E | 95 | 53% | 39% | 10.20 | 28 |
| 28E | 100 | 52% | 38% | 10.50 | 35 |
| 29E | 108 | 52% | 38% | 11.50 | 42 |
| 30E | 115 | 52% | 38% | 12.50 | 48 |

### Base case (terminal value: ~$320-360/ADR, ~35-50% upside)

Assumptions: AI accelerator demand grows 20-25%/yr through 2028, 2nm ramps on schedule, CoWoS hits 200 KWPM by 2027, wafer pricing rises 5-7%/yr on leading-edge, GM converges to 56-58% structurally, Arizona Phase 2 in production by 2027, no major Taiwan-Strait incident.

| FY | Revenue ($B) | GM | OpM | EPS (ADR) | FCF ($B) |
|---|---|---|---|---|---|
| 26E | 96 | 57% | 44% | 11.20 | 25 |
| 27E | 115 | 58% | 46% | 13.50 | 38 |
| 28E | 132 | 58% | 46% | 15.80 | 50 |
| 29E | 145 | 57% | 45% | 17.30 | 60 |
| 30E | 158 | 57% | 45% | 18.80 | 68 |

### Bull case (terminal value: ~$420-500/ADR, ~70-100% upside)

Assumptions: AI demand sustains 30%+ growth, hyperscaler ASIC volume doubles on top of merchant GPU growth, 2nm pricing premium expands, A16 ramps 2027 ahead of schedule, TSMC raises pricing 10%+ on leading-edge, GM exits 60%, Apple loses no share, Intel Foundry fails to scale, Samsung Foundry exits leading-edge.

| FY | Revenue ($B) | GM | OpM | EPS (ADR) | FCF ($B) |
|---|---|---|---|---|---|
| 26E | 100 | 58% | 46% | 11.80 | 27 |
| 27E | 125 | 59% | 48% | 14.80 | 42 |
| 28E | 155 | 60% | 49% | 18.50 | 60 |
| 29E | 180 | 60% | 49% | 21.50 | 75 |
| 30E | 205 | 60% | 49% | 24.50 | 88 |

### Probability weighting

- Bear: 20%
- Base: 60%
- Bull: 20%
- Probability-weighted FY30 EPS: ~$18.00/ADR
- Probability-weighted fair value (22x exit multiple, geopolitical discount applied): ~$340-360/ADR
- Implied 5-year IRR from $245: **~10-12%/yr**, plus a ~1.7% dividend ^[extracted] → **~12-14% total return**

This is "good but not spectacular" on an arithmetic basis. The reason to own it at high conviction is not the IRR — it is the **distribution shape**: the bear case is shallower than for any other AI-adjacent name (CoWoS sells out regardless; price-elasticity of demand is near-zero for accelerators), and the bull case is structurally credible because the monopoly is strengthening, not eroding. The Sharpe-equivalent on a 5-year basis is the highest in the basket alongside ASML.

## Valuation

### DCF inputs (base case)

- Revenue CAGR FY26-FY30: **~13%** (compound from $96B → $158B)
- Terminal year (FY30) FCF: $68B
- Long-term GM: 57% (above the 53% IR-day floor)
- Long-term OpM: 45%
- WACC: **9.5%** — Taiwan-CoE adjusted; if you used pure-US-mega-cap WACC of 8% the values are ~10% higher
- Terminal growth: 3%
- Terminal multiple cross-check: 20-22x P/E on FY30 EPS
- Net cash position: ~$50B current ^[extracted from 1Q26 BS]

### DCF output

- Sum-of-PV operating FCF (FY26-FY30): ~$245B
- Terminal value (PV): ~$1.05T
- Enterprise value: ~$1.30T
- Plus net cash $50B → equity value ~$1.35T
- ADR shares outstanding: ~5.18B
- **Per-ADR fair value: ~$260** ^[inferred]

### Geopolitical-discount overlay

The base DCF above is already at a 9.5% WACC, which embeds some Taiwan risk. To get the explicit framing the user expects:

| Discount applied | Per-ADR fair value | Read |
|---|---|---|
| 0% (US-mega-cap framing, 8% WACC) | ~$320 | not realistic |
| 5% | ~$305 | minimum reasonable |
| 10% (this is roughly where the market has historically traded) ^[inferred] | ~$285 | central |
| 15% (post-incident scare; 2022-23 trough) | ~$250 | mild stress |
| 25-30% | ~$200 | acute stress (China rhetoric escalation) |

**My fair-value range: $260-310 / ADR** with a central $285. Current ~$245 is roughly 10-15% below central fair value — a mild margin-of-safety entry.

### Peer multiples

| Peer | NTM P/E | NTM EV/EBITDA | GM | Comment |
|---|---|---|---|---|
| TSM | ~22x | ~13x | 57% | premium justified |
| Samsung Electronics (consolidated) | ~12x | ~5x | n/m blended | foundry segment loss-making; memory carries the firm |
| Intel (post-Foundry split anticipated) | ~25x | ~9x | 38% | foundry not yet meaningful, Pat Gelsinger-era capex hangover |
| UMC (mature foundry) | ~12x | ~5x | 30% | not comparable; mature only |
| GlobalFoundries | ~22x | ~9x | 25% | mature/specialty |
| ASML | ~32x | ~25x | 51% | the other monopoly; trades richer |
| Broadcom | ~28x | ~22x | 76% | software/IP-heavy |
| Nvidia | ~30x | ~22x | 75% | richer, more cyclical |

TSM at 22x NTM trades at a meaningful discount to Nvidia, ASML, Broadcom despite being the foundation under all three. The discount is the geopolitical overlay; on a fundamentals-only basis the right multiple is closer to the Broadcom/Nvidia midpoint, which gets you to the "no-discount" $320 number above. The fact that the market has not closed this gap despite five years of declining incident probability (per most expert assessments) is one of the structural opportunities in this name.

## Catalyst calendar (5-year view, near-term detail)

### 2026

- **2026-Apr-30 ✓**: Q1 2026 earnings (already reported; in line; FY26 GM guide raised to "high-50s")
- **2026-Jul (mid)**: Q2 2026 earnings — watch for FY26 capex revision (currently $42-44B), CoWoS guidance update, 2nm volume readiness
- **2026-Sep**: Apple iPhone 18 launch — confirmation of N3 successor / A20 N2 progression
- **2026-Oct (mid)**: Q3 2026 earnings — first quarter with material 2nm volume; first explicit FY27 capex framing
- **2026-Nov-Dec**: Investor-relations year-end commentary; CoWoS sold-out window updates
- **2026 fall**: SemiAnalysis CoWoS update; TrendForce capacity tracker

### 2027

- **2027-Jan (mid)**: Q4 2026 earnings — first full FY26 print; FY27 capex guide
- **2027-Mar**: Nvidia GTC — Rubin product details, package count implications
- **2027-Apr (mid)**: Q1 2027 earnings — first quarter where 2nm is a meaningful revenue contributor
- **2027 mid**: AP7 phase 1 production ramp (Chiayi)
- **2027 fall**: Apple A21 / iPhone 19 launch — the second 2nm cycle

### 2028-2030

- **2028**: Arizona Phase 2 (N3) at production volume; Phase 3 (N2/A16) construction milestones
- **2028**: A16 (1.6nm) volume production target — first node with backside power delivery
- **2029**: Arizona Phase 3 production target; ESMC Dresden in volume; JASM 2 (7nm Japan) in volume
- **2030**: A14 (1.4nm) horizon; TSMC's leading-edge geographic mix is ~80% Taiwan / 20% rest-of-world

### Cross-name / macro catalysts

- **Quarterly Taiwan export figures** — monthly mainland export print, Taiwan electronics export print are real-time TSMC revenue proxies (publish ~7th of month for prior month).
- **Nvidia, AMD, Broadcom, Apple, Qualcomm earnings** — every customer print is a TSMC datapoint.
- **China policy events** — Taiwan presidential election cycle (next 2028); CCP plenums; PLA exercises around the Strait. These are tape-movers regardless of fundamentals.
- **US export-control actions** — new BIS rules can change the customer mix (e.g., restricting Nvidia China chips affects mix at TSMC) but rarely affect TSMC unit volume.

## Bear case (the things I'm watching)

In rough order of probability × magnitude:

1. **Geopolitical (Taiwan-Strait)** — The binary risk. Even sub-invasion scenarios (PLA blockade exercise, cable cuts, airspace incidents) crater the stock 20-30% temporarily. A full kinetic event makes this a wipeout. **Mitigant**: Arizona / Japan / Germany de-concentration; mutual-deterrence with semiconductors; explicit US treaty-adjacent commitments. **Position-sizing implication**: cap basket weight, do not own with leverage.
2. **2nm yield issues** — TSMC has executed every major node well, but 2nm is the first GAAFET (gate-all-around) node. Samsung's 3GAE struggled here. If TSMC has a 6-9 month yield slip, FY27 revenue compresses ~5-8%. **Mitigant**: 1Q26 management said yield is tracking ahead of N3 at the equivalent calendar stage; risk production met.
3. **Intel Foundry / Rapidus / Samsung Foundry catch up** — Intel 18A and 14A are technically credible; Samsung 2GAP could fix yield; Rapidus 2nm in Hokkaido targets 2027. **Mitigant**: catch-up has been 3-5 years late on every prior cycle; the design-IP / PDK lock-in is structural; Apple has shown no inclination to dual-source. **Probability of any peer reaching parity by 2030**: ~25%; probability of leadership change: ~5%.
4. **AI accelerator demand normalization** — At some point training compute hits diminishing returns and inference grows but at lower wafer intensity. Probability that 2027 sees a 20%+ AI-capex digestion: ~25%. **Mitigant**: TSMC's customer mix is broad; CoWoS digestion is unlikely because it's been undersupplied throughout; leading-edge demand is structural even if AI-specific demand softens.
5. **Node delays (A16, A14)** — High-NA EUV insertion has pushed nodes back industry-wide. A16 delay would compress 2028+ growth. **Mitigant**: TSMC has been less dependent on High-NA than Intel for early A14 ramp.
6. **Pricing-power exhaustion** — At some point customers (Apple in particular) push back on N2 pricing, and the GM trajectory rolls over. **Mitigant**: every prior cycle has shown the same dynamic and TSMC has held ~53%+ GM through it. The leading-edge GM band keeps re-rating up.
7. **Currency** — A meaningful TWD strengthening compresses USD-translated GM. ~3 percentage points of GM is "just FX" through any 12-month window.
8. **CHIPS Act / political-risk-tail in US** — A US administration could renegotiate CHIPS terms. **Mitigant**: TSMC AZ is now bipartisan; both parties claim political credit.

## Position-sizing

- **Mega-cap**, ADR liquidity is excellent (~$3-5B daily ADR turnover ^[inferred])
- **β ≈ 1.15-1.25** on rolling 3-yr against SPX ^[inferred]
- **Borrow** is plentiful; options market on ADR is liquid out to LEAPS
- **Dividend**: ~1.7% yield, paid quarterly ^[extracted]
- **Tax**: 21% Taiwan withholding on dividends for US holders; treaty-eligible ADRs

**Recommended sizing in the AI infrastructure basket:**

- Hard cap: **5% of basket / 3% of total portfolio**, regardless of conviction
- The cap is a **risk-budget cap**, not a conviction expression. The conviction would justify 10%+ in a US-domiciled equivalent; the geopolitical tail forces the cap.
- **Pair-trade alternative**: long TSM + long ASML (which structurally benefits if anyone gains foundry share at TSMC's expense, but not from a Taiwan incident) is a partial geopolitical hedge.
- **Do not own with leverage.** Do not own concentrated through a single options expression. Use the underlying ADR for the core; LEAPS only for additive exposure with explicit downside-known sizing.

### Entry / scaling rules

- Current ~$245 is roughly 10-15% below my central fair value. Reasonable to be at or near full cap.
- Add aggressively below ~$200 (only happens on geopolitical shock or AI-narrative drawdown).
- Trim if it runs above ~$330 without commensurate fundamental upgrade — multiple-expansion-only rallies are where you give back the geopolitical-tail expected value.

## Sources

- TSMC Investor Relations — quarterly results, conference call transcripts (1Q26 most recent), 20-F filing, Investor Day materials
- TSMC press releases — Arizona Phase 3 announcement; AP7 ground-breaking; ESMC progress updates
- SemiAnalysis (Dylan Patel) — CoWoS capacity tracker, N2 ramp tracker, hyperscaler ASIC mapping
- TrendForce — CoWoS capacity quarterly, foundry capacity utilization
- Sell-side: Bernstein (Stacy Rasgon Asia), Morgan Stanley Asia semis, Goldman Sachs Asia semis, Susquehanna semis team
- Customer-side: Nvidia, Apple, AMD, Broadcom, Qualcomm earnings transcripts
- Government / policy: US BIS export-control updates, CHIPS Act funding announcements, EU Chips Act announcements, Taiwan MOEA filings
- Cross-referenced internally with [[semiconductor-supply-chain-deep-dive]], [[ai-data-center-supply-chain-bottlenecks]], [[hyperscaler-constraint-map]]

## Related

- [[ai-data-center-buildout-investment-memo]] — the macro/portfolio frame this pick fits inside
- [[ai-data-center-supply-chain-bottlenecks]] — CoWoS, HBM, ABF, masks; TSMC's role across each
- [[ai-investment-public-company-scorecard]] — TSM cell + cross-ranking
- [[ai-investment-valuation-models]] — DCF / multiple framework used here
- [[semiconductor-supply-chain-deep-dive]] — node mix, packaging, second-source dynamics
- [[hyperscaler-constraint-map]] — customer-side demand picture
- [[analyst-picks-master-list]] — basket overview
- [[pick-asml-asml-5y]] — paired anchor; lithography monopoly
- [[pick-broadcom-avgo-5y]] — customer-side AI ASIC angle; partial TSMC-CoWoS-customer hedge

---

> **Final framing**: TSM is the highest-quality structural compounder in the AI infrastructure stack. The reason to own it is the breadth of monopoly across nodes and packaging combined with 5 years of visible capex demand. The reason to cap the position is geopolitics. Both can be true at once. The position-sizing discipline is what makes the high conviction usable.
