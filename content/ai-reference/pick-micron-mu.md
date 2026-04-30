---
title: "Pick: Micron Technology (MU) — Long, 12-Month, High Conviction"
slug: pick-micron-mu
date: 2026-04-30
tags: [ai, investing, semiconductors, supply-chain, infrastructure]
---

# Pick: Micron Technology (MU) — Long, 12-Month, High Conviction

## Header

- **Ticker:** NASDAQ: MU
- **Current price:** ~$519.20^[extracted; intraday quote 2026-04-30]
- **52-week range:** $73.50 – $531.36^[extracted]
- **Market cap:** ~$585B^[extracted]
- **Recommendation:** **LONG** — 12-month time horizon
- **Conviction:** **HIGH** (memory cycle and HBM allocation visibility unusually strong)
- **As of:** 2026-04-30
- **Disclaimer:** Personal research notes for Chris Wiles. Not investment advice. Author may hold or trade MU at any time. Memory is a deeply cyclical industry — fair value here is anchored on a through-cycle estimate that is highly sensitive to HBM pricing and yield assumptions, both of which have wide error bars beyond FY26. FY27+ figures are largely `^[inferred]`.

---

## 1. Investment Thesis (5 bullets)

1. **HBM3E supply is fully booked through CY2026 and pricing/volume is locked.** Per the Q2 FY26 call (March 2026), Micron has "completed agreements on price and volume for its entire calendar 2026 HBM supply, including industry-leading HBM4." Micron can meet only ~50–66% of core-customer HBM demand into 2027 per TrendForce. This converts a normally cyclical product into a contracted-revenue stream for the next four quarters.
2. **HBM4 ramp is the FY27 swing factor.** 12-Hi 36 GB HBM4 began volume shipments Q1 CY2026 (Q2 FY26), aligned with Nvidia Vera Rubin. Micron is qualified at Nvidia for HBM4 alongside SK hynix; Samsung is also approved but has yield/capacity constraints. Micron's industry-leading >11 Gbps speed is a real differentiator and supports premium pricing into 2H 2026.
3. **NAND is structurally repaired post-WD/SanDisk separation.** WD spun out SanDisk Feb 2025 and fully liquidated its remaining stake Feb 2026. Combined with disciplined capex from all four NAND players, the market shifted from 2024 oversupply to 2026 shortage — NAND ASPs and gross margins have inflected positively and Micron's exit from low-margin consumer storage frees bits for AI-DC SSD demand.
4. **Cloud Memory BU is now the engine.** $7.7B Q2 FY26 revenue (≈32% of group), nearly doubled YoY, with HBM + high-capacity DIMMs + high-density data-center SSD. Through-cycle EBITDA is being repriced higher because HBM gross margins are 2–3x commodity DRAM and a growing share of the mix.
5. **Through-cycle EPS power has stepped up.** FY26 consensus EPS ~$59 (range $37–$68); FY27 consensus ~$100 (range $54–$150). Even discounting peak cycle by 30–40%, mid-cycle EPS power of $40–55 and a 10–14x cycle-blended multiple gets to a fair value materially above today's price under base-case assumptions, but the reverse is also true under a hard cycle break.

---

## 2. Business Overview

### 2.1 Legacy reportable segments (FY24–early FY25)

Micron operated four reportable segments under the prior structure:

- **Compute & Networking (CNBU)** — server/desktop/notebook/graphics DRAM, HBM. Largest segment.
- **Mobile (MBU)** — smartphone DRAM/MCP.
- **Embedded (EBU)** — auto, industrial, consumer.
- **Storage (SBU)** — SSDs and component NAND.

### 2.2 New market-segment-based reorganization (effective early Q4 FY25)

Micron announced in mid-2025 a reorganization into four market-segment-aligned business units. Reporting under the new structure began in Q4 FY25 and is fully reflected in the Q1 and Q2 FY26 results.

| BU | Q2 FY26 revenue | YoY | Notes |
|----|----------------:|----:|-------|
| Cloud Memory (CMBU) | $7.7B | ~+100% | HBM + high-capacity DDR5/LPDDR5X for hyperscalers + AI-DC SSD |
| Core Data Center (CDCBU) | $5.7B | strong | OEM server DRAM/SSD (Dell, HPE, Lenovo, Supermicro) |
| Mobile & Client (MCBU) | $7.7B | mid-teens | Smartphone, PC, gaming |
| Auto & Embedded (AEBU) | $2.7B | flat-to-mid | Auto, industrial, infra-edge |
| **Total** | **$23.86B** | **+196% YoY** | Q2 FY26 record^[Press release, March 2026] |

Group gross margin Q2 FY26 ~75% (non-GAAP); Q3 FY26 guide ~81% on $33.5B ± $0.75B revenue and EPS $19.15.

### 2.3 Geographic and manufacturing footprint

- ~70%+ of wafer manufacturing in Asia-Pacific: Taiwan (Taichung — DRAM, HBM packaging), Singapore (NAND + advanced packaging), Japan (Hiroshima — leading-edge DRAM/HBM), and a smaller China presence.
- US footprint expanding via CHIPS Act: Boise/Idaho (ID1 fab + R&D, HBM advanced packaging), New York (Clay — multi-fab campus), Virginia (Manassas, legacy + planned HBM packaging).
- Distribution skew: revenue is recognized globally but heavily indexed to US-listed hyperscalers (AWS, Microsoft, Google, Meta, Oracle) and Nvidia AI systems consumed worldwide.

---

## 3. AI Buildout Exposure

- **Cloud Memory BU is essentially a pure AI-DC bet.** Q2 FY26 CMBU = $7.7B / $23.86B = **~32% of revenue**, growing ~100% YoY. Within CMBU:
  - HBM (HBM3E 8-Hi/12-Hi, ramping HBM4 12-Hi 36 GB) — primary swing factor
  - High-capacity DDR5 RDIMMs (96 GB, 128 GB, 256 GB) for AI inference servers
  - LPDDR5X for AI training (Grace, MI3xx, custom ASICs use LPDDR-on-package)
  - Data-center SSDs (E1.S, E3.S NVMe, 60 TB+ QLC)
- **HBM is the largest single swing factor.** Industry HBM revenue 2026 estimated >$45B^[inferred from TrendForce/SemiAnalysis]; Micron share ~24% per TrendForce → ~$10–11B HBM revenue for Micron in CY2026.
- **Core Data Center BU is also majority-AI-adjacent**: enterprise OEM servers carry DDR5 RDIMM + DC SSD; gen-on-gen capacity-per-socket is rising as AI inference workloads colonize OEM rack-mount servers.
- **Combined AI-DC exposure (CMBU + AI-attributed share of CDCBU):** roughly **45–55% of Micron revenue** is direct or first-degree AI-DC `^[inferred]`.
- **Micron's own framing** (Q2 FY26 call): "AI is driving structural demand for memory across HBM, high-capacity DRAM, and high-density NAND" — and "data center is the largest end market" for Micron in FY26 for the first time in the company's history.

---

## 4. Demand Drivers

### 4.1 HBM customer concentration

- **Nvidia** — primary HBM customer for Micron. Vera Rubin (R100/R200 family) consumes 12-Hi HBM4. Blackwell Ultra B300 still consumes HBM3E 12-Hi through CY2026.
- **AMD** — secondary; MI3xx/MI4xx series. AMD has historically allocated more share to Samsung but has multi-sourced from Micron and SK hynix.
- **Custom ASIC** — Google TPU v6/v7, AWS Trainium2/3, Meta MTIA v2/v3 — growing share of HBM TAM, broadly multi-sourced.
- **Micron HBM market share:** ~24% in 2026 (TrendForce), behind SK hynix (~43%) and Samsung (~33%). Up from <5% three years prior.

### 4.2 HBM4 ramp cadence

- Q1 CY2026: volume shipments of HBM4 12-Hi 36 GB began (Vera Rubin program). Speed >11 Gbps — industry-leading.
- 2H CY2026: HBM4 ramp accelerates; Micron expects HBM4 revenue mix to rise meaningfully but HBM3E remains majority of HBM revenue through CY2026 (TrendForce: HBM3E ~⅔ of HBM shipments in 2026).
- CY2027: HBM4 becomes majority of HBM revenue^[inferred]; HBM4E sampling expected late 2026 / early 2027.
- **Capacity reality**: even with full FY26 capex deployment, supply meets only ~50–66% of stated customer demand → contract pricing held flat or up through 2026 with limited downside.

### 4.3 Management commentary on HBM revenue

- Micron has guided HBM revenue to a multi-billion run-rate quarterly. Annualized FY26 HBM revenue tracks toward **$10–12B** (vs. <$1B FY24, ~$3–4B FY25).^[inferred from segment build-up]
- Mehrotra (CEO) has framed HBM as a "multi-tens-of-billions market" by 2027–28 with Micron targeting share consistent with its overall DRAM share (~20–25%).

### 4.4 NAND demand

- ASPs up double-digits Q/Q in 1H CY2026 after the 2024 trough.
- Drivers: AI-DC SSD adoption (60–122 TB QLC tier, replacing nearline HDDs in some hyperscale fleets), enterprise SSD upgrade cycle, and disciplined supply.
- Smartphone NAND content per device flat but unit demand recovering modestly.
- Risk: Samsung and YMTC-driven oversupply remains the durable bear case for NAND beyond CY2026.

### 4.5 TrendForce / DigiTimes capacity utilization

- DRAM industry utilization at >95% through CY2026; HBM-converted wafers consuming ~23% of total DRAM bit allocation industry-wide in 2026, rising toward ~30% in 2027.^[TrendForce]
- NAND industry utilization recovered to ~85–90% from 2024 lows of <70%.

---

## 5. Supply / Capacity

### 5.1 Existing wafer fabs

- **Taichung, Taiwan (Fabs 11/16)** — leading-edge DRAM (1β, 1γ), majority of Micron's DRAM bit output. Also primary HBM stacking/back-end.
- **Hiroshima, Japan (Fab 15)** — leading-edge DRAM, EUV migration for 1γ.
- **Singapore (Fab 10X, Fab 7)** — leading-edge NAND (>200-layer), advanced packaging.
- **Boise, Idaho** — R&D fab + ID1 (under construction); HBM advanced packaging on-shore.
- **Manassas, Virginia** — legacy/auto-grade DRAM + planned HBM packaging extension.
- **Xi'an, China** — back-end packaging (small relative to total).

### 5.2 CHIPS Act-funded expansion

- **$6.4B direct CHIPS funding** (announced Dec 2024). Plus investment tax credits and state incentives.
- Total announced US investment over time: up to **$200B** through ~2040 across Idaho + New York + Virginia.
- **Idaho ID1**: wafer output 2H CY2027, customer qual thereafter. ~600,000 sq ft cleanroom — comparable in scale to the largest Korean DRAM fabs.
- **Idaho ID2** (announced June 2025): now slated to come online before the New York fab; CHIPS Act reallocation accelerated this.
- **New York (Clay)**: multi-fab campus, first fab now slated post-Idaho ID2; total cleanroom planned to be ~2.4M sq ft over time^[inferred].
- **HBM packaging onshoring**: Micron will add HBM packaging in Virginia after Idaho DRAM wafer output ramps — not a 2026/2027 catalyst, but real for 2028+.

### 5.3 Capex trajectory

- FY25: ~$13.8B
- FY26 guide raised to **>$25B** (from prior $20B and earlier $18B) — a 25%+ step-up.
- FY27: likely >$25B `^[inferred]` as ID1 ramps.
- Capex headwind compresses near-term FCF (FY26 FCF likely sub-$5B, possibly negative in some quarters of build-out)^[inferred] but is supportive of through-cycle DRAM/HBM bit growth.

### 5.4 HBM capacity share of total DRAM

- 2024: ~5% of DRAM wafers HBM-converted
- 2025: ~12–15%
- **2026: ~23%** (TrendForce industry estimate)
- 2027: ~28–32% `^[inferred]`
- For Micron specifically, HBM bit share of its DRAM output is rising at a similar slope; this is the dominant lever on through-cycle gross margin.

### 5.5 NAND fab discipline

- Micron has paused legacy NAND node investment, moving aggressively to leading-edge (G9 / 232L+ / 276L) and reducing wafer starts in some configurations to support pricing.
- Industry NAND wafer additions in 2026 expected sub-supply-growth pace (~mid-teens bit growth vs. prior 30%+ years).

---

## 6. Financial Model Summary

**Note:** Micron's fiscal year ends in late August. FY2026 = roughly Sep 2025 – Aug 2026.

### 6.1 Recent reported financials

| Metric | FY24 | FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 guide |
|--------|-----:|-----:|--------:|--------:|--------------:|
| Revenue ($B) | 25.1 | 37.4 | ~17.0 | 23.86 | 33.5 ± 0.75 |
| Non-GAAP GM% | mid-20s | ~39.8 | ~60s | ~75 | ~81 |
| Non-GAAP EPS | small loss/breakeven | sharply positive | strong | record | $19.15 ± 0.40 |

FY25 group gross margin 39.8%; operating margin 26.1%. Group revenue +49% YoY in FY25.

### 6.2 Bear / Base / Bull (FY26–FY30)

All figures `^[inferred]` for FY27+; bear/bull explicitly mark cycle assumptions.

#### FY2026 (Sep 2025 – Aug 2026)

| Scenario | Revenue | GM% | EBITDA | EPS | FCF |
|----------|--------:|----:|-------:|----:|----:|
| Bear | $90B | 65% | $46B | $42 | $7B |
| **Base** | **$103B** | **72%** | **$60B** | **$59** | **$15B** |
| Bull | $112B | 76% | $70B | $68 | $22B |

(Q1 + Q2 actual + Q3 guide already roughly $74B; H2 FY26 implied ~$30B / quarter at midpoint.)

Consensus FY26 EPS midpoint: ~$59 (range $37–$68 per analyst surveys).

#### FY2027 — peak-cycle year `^[inferred, ambiguous]`

| Scenario | Revenue | GM% | EBITDA | EPS | FCF |
|----------|--------:|----:|-------:|----:|----:|
| Bear (early HBM rolls) | $85B | 50% | $34B | $32 | $5B |
| **Base** | **$120B** | **70%** | **$70B** | **$95** | **$25B** |
| Bull (HBM4 sustains, NAND tight) | $145B | 78% | $95B | $135 | $40B |

Consensus FY27 EPS: ~$100 midpoint (range $54–$150) — extraordinarily wide, reflecting cycle uncertainty.

#### FY2028–FY2030 — through-cycle bridge `^[heavily inferred]`

- Through-cycle DRAM/NAND revenue: $50–60B (legacy memory baseline, mid-cycle pricing)
- Through-cycle HBM revenue (FY29+): $20–30B at structurally higher GM
- Through-cycle group GM: 50–55% (vs. legacy 30–35%)
- Through-cycle EPS: **$40–55**
- This is the anchor for fair-value math below.

### 6.3 Balance sheet snapshot

- Net debt: ~$5–7B `^[ambiguous; will update post-Q3 FY26 10-Q]` — modest given the scale of capex underway
- Liquidity: $10–12B cash + revolver
- Investment-grade rating; recent upgrade trajectory

---

## 7. Valuation Framework

### 7.1 Through-cycle EBITDA × multiple

**Step 1 — Through-cycle EBITDA build:**

| Block | Revenue | GM% | EBITDA margin | EBITDA |
|-------|--------:|----:|--------------:|-------:|
| Commodity DRAM (mid-cycle) | $30B | 35% | 25% | $7.5B |
| Commodity NAND (mid-cycle) | $18B | 25% | 18% | $3.2B |
| HBM (through-cycle, FY28+) | $25B | 60% | 50% | $12.5B |
| Embedded / auto / mobile premium | $12B | 35% | 25% | $3.0B |
| **Group through-cycle** | **$85B** | **~45%** | **~30%** | **~$26B** |

**Step 2 — Multiple:**

- Korean memory peers (SK hynix, Samsung memory carve-out): historically 5–7x EV/EBITDA at trough, 3–4x at peak; structurally re-rating because HBM is durable spec-driven business
- Apply blended **6.5x EV/EBITDA** through-cycle, with HBM premium pushing toward 7–8x for the HBM block

**Step 3 — Sum of parts (alternative):**

| Block | EBITDA | Multiple | EV |
|-------|-------:|---------:|---:|
| Commodity DRAM | $7.5B | 5x | $37.5B |
| Commodity NAND | $3.2B | 4x | $12.8B |
| HBM | $12.5B | 9x | $112.5B |
| Embedded/auto premium | $3.0B | 8x | $24.0B |
| **Total EV** | **$26.2B** | — | **$186.8B** |

**Step 4 — Subtract net debt:** ~$6B → equity value ~$181B

**Step 5 — Per-share fair value:** ~1.13B shares diluted → **~$160/share through-cycle**

### 7.2 Cycle-peak overlay (12-month price target)

The market is currently paying for *peak-cycle* earnings, not through-cycle. The right framing for a 12-month horizon is:

- FY26 base-case EPS $59 × 12x peak P/E = **$708**
- FY26 bear EPS $42 × 9x = **$378**
- FY26 bull EPS $68 × 14x = **$952**
- FY27 base EPS $95 × 8x mid-cycle = **$760**
- FY27 bear EPS $32 × 8x = **$256**
- FY27 bull EPS $135 × 10x = **$1,350**

Blending FY26 + FY27 (because the market typically prices on forward 12–18 months of EPS), and weighting bear/base/bull 25/50/25:

- **12-month base-case fair value: ~$650–$725**
- **12-month range (bear → bull): ~$400 → ~$1,000**
- **Through-cycle anchor (downside floor in a hard cycle break): ~$160**

**Implied upside from $519 (current):** roughly **+25% to +40% base case**, with substantially fatter right tail than left tail given booked HBM contracts.

### 7.3 Sensitivity to HBM cycle assumptions

The valuation is **dominated** by HBM through-cycle revenue, GM, and multiple. Sensitivity ranges:

- Each $5B change in 2027 HBM revenue → ~$15–20/share equity value
- Each 500 bps GM change in HBM block → ~$10/share
- Each 1.0x multiple change on HBM → ~$10–12/share

**This is highly sensitive to HBM cycle assumptions — that is the entire point of owning MU here.**

---

## 8. Catalyst Calendar

### 8.1 Earnings

| Quarter | Approx. report date | What to watch |
|---------|--------------------|---------------|
| Q3 FY26 | ~late June 2026 | Confirm $33.5B / 81% GM guide; HBM4 ramp commentary; any FY27 HBM bookings |
| Q4 FY26 | ~late Sept 2026 | Full-year FY26 print; FY27 capex guide; HBM4 share gain at Nvidia |
| Q1 FY27 | ~mid Dec 2026 | FY27 demand outlook; HBM4E sampling status |
| Q2 FY27 | ~mid Mar 2027 | First read on FY27 cycle; CY27 HBM contract early signals |

### 8.2 Industry / customer catalysts

- **Nvidia GTC (Spring + Fall 2026)** — Vera Rubin (R100) commercial availability commentary; HBM4 supplier acknowledgments
- **Nvidia quarterly earnings** — units/HBM stack pull-through inferences
- **AMD events** (Computex June 2026, AMD Advancing AI fall 2026) — MI4xx HBM4 supplier disclosures
- **SK hynix and Samsung quarterly results** — HBM market share commentary, HBM4 yield disclosures
- **TrendForce HBM industry reports** — quarterly contract pricing updates (key: any sign of early roll)
- **CHIPS Act milestone disclosures** — Idaho ID1 first wafer milestone (target 2H CY27)
- **Investor day** — Micron has historically held an investor day every 18–24 months; next likely fall 2026 `^[inferred]`

### 8.3 Macro / political

- US presidential transition / AI export control rule changes (China DRAM exposure)
- Korea-US trade dynamics affecting SK hynix and Samsung
- Datacenter power constraints capping AI buildout pace (cross-reference [[hyperscaler-constraint-map]])

---

## 9. Bear Case

The bear case for MU at >$500/share is real and worth taking seriously:

1. **HBM contract pricing rolls earlier than expected.** TrendForce showing -10%+ Q/Q in HBM contract pricing would change the slope of FY27 EPS dramatically. Trigger: any December-2026 contract reset that prints flat-to-down vs. expectations.
2. **HBM4 yield/qualification issues at Nvidia.** Micron's HBM4 has qualified, but if 12-Hi yields underperform vs. SK hynix at scale, Nvidia reallocates volume. Trigger: any 2H CY26 share-loss data point in TrendForce monthly tracker.
3. **Samsung enters Nvidia HBM4 supply at full scale.** Samsung passed Nvidia HBM4 qualification in Q4 2025 at 11.7 Gbps. If Samsung's 1c DRAM yields recover from ~60% toward 80%+ and capacity scales, the three-way HBM market eases pricing for both SK hynix and Micron. Trigger: Samsung 2H 2026 capacity disclosures.
4. **NAND oversupply re-emerges.** YMTC, SK hynix Solidigm, Samsung NAND, and Kioxia all raising capex; if SSD demand softens at all, NAND ASPs roll quickly. Trigger: SanDisk/Kioxia ASP decline acceleration.
5. **Macro recession kills cloud capex.** Even hyperscalers with locked AI capex commitments could pause/rephase. Trigger: any of the Mag-7 cutting CY27 capex guides or pulling forward absorption.
6. **CHIPS Act delays / political risk.** New administration could renegotiate or delay disbursements; export control changes could hit China/Asia DRAM revenue. Trigger: explicit DOC actions on Micron grants.
7. **The stock has already moved.** 52-week range $73.50 → $531. A lot of the cycle is priced in. Mean reversion of multiple alone could clip 25–35% from current levels even if EPS holds.
8. **Customer concentration.** Nvidia is single-largest customer indirectly; any Nvidia volume miss propagates through Micron's HBM book.

---

## 10. Position-Sizing Notes

- **Cyclical mega-cap** — market cap ~$585B, no longer a "mid-cap" in any meaningful sense. Liquid; index-eligible.
- **Beta ~1.4–1.6** vs. SPX historically; correlation with SK hynix (KRX: 000660) and Samsung (KRX: 005930) memory carve-out is very high (>0.7).
- **Memory cycle exposure means timing matters far more than fundamentals.** A great company at the wrong point in the cycle prints losses; a mediocre company at peak prints record EPS. The current setup is favorable but the cycle inflection is the dominant risk.
- **Suggested sizing framework** (personal — calibrate to portfolio):
  - Core position: 3–5% of risk-asset portfolio for 12-month thesis
  - Trim discipline: scale down 50% on any TrendForce print showing HBM contract pricing -5%+ Q/Q for two consecutive months
  - Hard stop: through-cycle EBITDA framework breaks if HBM TAM growth sub-15% Y/Y for two consecutive years
- **Hedges to consider**: paired short SK hynix ADRs or Samsung KRX, or long-dated puts at -25%, to isolate the Micron-specific share-gain story vs. industry beta.
- **Tax**: long-term cap gains treatment requires holding past 12 months. Short-term traders may prefer expressing this view through Q3 FY26 / Q4 FY26 earnings call options.

---

## 11. Sources

### 11.1 Company / SEC filings

- Micron FY2025 10-K (filed Sep–Oct 2025): https://investors.micron.com/financial-information/sec-filings
- Micron Q1 FY2026 10-Q (filed Dec 18, 2025): https://investors.micron.com/static-files/502c03ac-dd06-4c88-9441-02ebfe6ff6fa
- Micron Q2 FY2026 press release (March 2026): https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-results-second-quarter-fiscal-2026
- Micron Q1 FY2026 prepared remarks: https://investors.micron.com/static-files/088991c5-a249-4f66-a0a6-258d9b66f3f9
- Micron Q4 FY2025 prepared remarks: https://investors.micron.com/static-files/5ea95475-639b-4cfc-91fd-b9b4a2bb5e63
- Reorganization announcement: https://www.nasdaq.com/articles/micron-technology-inc-announces-market-segment-based-reorganization-enhance-ai-driven

### 11.2 TrendForce / industry research

- TrendForce: "Micron Hikes CapEx to $20B with 2026 HBM Supply Fully Booked; HBM4 Ramps 2Q26": https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/
- TrendForce: 2026 HBM Outlook: https://www.trendforce.com/research/download/RP260105YP3
- TrendForce: HBM Industry Analysis 1Q26: https://www.trendforce.com/research/download/RP260204DA3
- TrendForce: SK hynix 2026 outlook: https://www.trendforce.com/news/2026/01/05/news-sk-hynix-2026-outlook-hbm3e-remains-mainstream-hbm4-dual-strategy-amid-triple-market-headwinds/
- TrendForce: Samsung/SK hynix Vera Rubin HBM4: https://www.trendforce.com/news/2026/03/09/news-samsung-sk%E2%80%AFhynix-reportedly-tapped-as-nvidia-rubin-hbm4-suppliers-shipments-could-start-in-march/
- TrendForce: Nvidia HBM4 spec relaxation: https://www.trendforce.com/news/2026/02/13/news-nvidia-may-relax-hbm4-specs-as-samsung-and-sk-hynix-reportedly-face-capacity-yield-limits/

### 11.3 Sell-side / news

- Futurum Group Q2 FY26 analysis: https://futurumgroup.com/insights/micron-q2-fy-2026-earnings-driven-by-ai-led-memory-demand/
- Tech-Insider Q2 FY26 analysis: https://tech-insider.org/micron-q2-2026-earnings-ai-memory-market/
- 24/7 Wall St: post-Q2 FY26 stock action: https://247wallst.com/investing/2026/03/19/micron-slips-4-nvidias-hbm-supplier-just-posted-record-results-so-why-is-it-falling/
- Korea Herald: Nvidia 16-layer HBM stakes: https://www.koreaherald.com/article/10645471
- KED Global: Samsung 1c DRAM yields: https://www.kedglobal.com/korean-chipmakers/newsView/ked202512030011
- Tweaktown: 16-Hi HBM4 supplier competition: https://www.tweaktown.com/news/109495/sk-hynix-samsung-and-micron-fighting-for-nvidia-supply-contracts-for-new-16-hi-hbm4-orders/index.html
- Tom's Hardware: US fab projects: https://www.tomshardware.com/pc-components/dram/micron-details-new-u-s-fab-projects-idaho-fab-1-comes-online-in-2h-2027-new-york-fabs-come-later-hbm-assembly-in-the-u-s
- BoiseDev: second Boise fab: https://boisedev.com/news/2025/06/12/micron-boise-second/
- StockTitan FY25 10-K summary: https://www.stocktitan.net/sec-filings/MU/10-k-micron-technology-inc-files-annual-report-a879767daea7.html
- MarketBeat / Tipranks consensus EPS: https://stockanalysis.com/stocks/mu/forecast/
- WD/SanDisk separation: https://markets.financialcontent.com/stocks/article/marketminute-2026-2-18-western-digital-cuts-final-ties-with-sandisk-31-billion-exit-sends-shares-tumbling
- Network World: Micron exits consumer memory: https://www.networkworld.com/article/4102592/short-memory-supply-forces-micron-to-abandon-consumer-market-prioritize-enterprise.html

### 11.4 Government / regulatory

- NIST Micron Idaho CHIPS detail: https://www.nist.gov/chips/micron-idaho-boise
- Micron US expansion page: https://www.micron.com/us-expansion/id

### 11.5 Quote sources

- Yahoo Finance (price): https://finance.yahoo.com/quote/MU/
- StockAnalysis (history): https://stockanalysis.com/stocks/mu/history/

---

## 12. Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[ai-investment-valuation-models]]
- [[semiconductor-supply-chain-deep-dive]]
- [[hyperscaler-constraint-map]]
- [[risk-tripwires-and-warning-indicators]]
- [[analyst-picks-master-list]]

---

## Appendix A — Key open questions / gaps for next update

- Confirm exact FY25 segment revenue in legacy schema and the restated splits in new schema (need full 10-K read).
- Pull the exact Q2 FY26 HBM revenue dollar figure from the prepared remarks (currently using CMBU $7.7B as upper bound; HBM is a subset).
- Update net debt and net cash from Q2 FY26 10-Q when filed.
- Refine HBM share-gain trajectory once SK hynix Q1 CY26 commentary is read in full.
- Confirm whether Micron has disclosed CY2027 HBM bookings (vs. just CY2026 fully booked).
- Validate sensitivity ranges against Wells Fargo / Morgan Stanley / Citi memory team published models — note these are paywalled and were not directly retrieved.

## Appendix B — Tripwires (links to [[risk-tripwires-and-warning-indicators]])

- HBM contract pricing -5% Q/Q for two consecutive months → trim 50%
- TrendForce showing Samsung HBM4 share at Nvidia >25% → reassess thesis #2
- Hyperscaler capex guide cut >10% → reassess demand stack
- Micron pre-announces or guides FY27 below current consensus → trim entire position
