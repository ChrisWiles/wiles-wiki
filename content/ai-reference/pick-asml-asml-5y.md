---
title: "[Pick] ASML (ASML) — 5-year hold"
category: ai-reference
summary: Analyst-grade dossier on ASML Holding as a 5-year hold. EUV monopoly, High-NA ramp 2026-2030, FY26 €36-40B revenue guide, FY30 base case €55-70B, conviction high.
tags:
  - ai
  - investing
  - semiconductors
  - supply-chain
  - infrastructure
sources:
  - ASML Q1 2026 financial results press release (asml.com, 2026-04-16)
  - ASML Q4 2025 financial results and FY2025 annual report (asml.com)
  - ASML Investor Day November 2025 deck and transcript
  - ASML Q1, Q2, Q3, Q4 2025 earnings call transcripts (Seeking Alpha)
  - SemiAnalysis on EUV / High-NA EUV (2025-2026)
  - TSMC Q1 2026 earnings call (capex guide ~$42B, A14 / A10 roadmap)
  - Samsung Foundry capex guidance Q1 2026
  - Intel Foundry update and 18A / 14A roadmap commentary (2025-2026)
  - SK hynix Q1 2026 results (HBM4 ramp commentary)
  - Bernstein, Morgan Stanley, Goldman Sachs semicap notes (sell-side via Seeking Alpha)
  - TrendForce: "ASML raises 2026 sales outlook to €36B-€40B on memory and logic client demand" (2026-04-15)
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

> Recommendation: **LONG, 5-year hold, conviction HIGH**.
> Reference price: **~€720 / ~$795 ADR** as of 2026-04-30.^[extracted from ASML IR + ADR pricing context, Q1 2026 print]
> Horizon: **2026-04 → 2031-04**.
> This is investment research, not financial advice. Position sizing and tax considerations are personal — see the bear case and position-sizing sections before acting.

This page sits inside the AI-buildout investment series. See [[ai-data-center-buildout-investment-memo]] for the parent thesis, [[semiconductor-supply-chain-deep-dive]] for the surrounding deep stack, [[ai-investment-public-company-scorecard]] for cross-name comparison, and [[analyst-picks-master-list]] for the full picks roster.

## 1. Header and one-line thesis

ASML is the only firm on Earth that ships extreme-ultraviolet (EUV) lithography systems. Every leading-edge logic node from 7nm onward and every advanced-memory node from HBM3E forward depends on those tools. The company's revenue compounds with two engines: (1) leading-edge wafer-fab capex, which has structurally re-rated higher because of AI accelerator volumes at TSMC, Samsung, and Intel Foundry, and (2) installed-base service, which compounds at high-teens margin off a fleet that is now worth more than €120B at replacement cost.^[inferred]

The 5-year setup is unusually clean. FY26 is already covered by a €36-40B revenue guide.^[extracted, ASML Q1 2026 release] FY27-FY30 add a High-NA EUV ramp at TSMC (A14 / A10), Samsung (SF1.4), and Intel (14A / 10A) on top of a NXE:3800/4000/4200 throughput cycle. Service compounds underneath. Capital allocation is shareholder-friendly (large buyback, growing dividend). At 27-28x forward earnings the stock is not cheap, but the duration of the moat and the tail of the High-NA decade justify a premium to KLA / AMAT / LRCX.

## 2. Thesis in five points

1. **EUV monopoly is structural.** No competitor has shipped a single EUV tool in 20 years of trying. NXE:3800E sells for ~€220M; EXE:5200 High-NA for ~€380M.^[extracted from ASML pricing commentary] Replicating the supply chain (Carl Zeiss SMT optics, Trumpf laser, ~5,000 suppliers) is a >10-year, >€20B undertaking. No state actor has come close.
2. **High-NA EUV ramp is the next decade.** First production tools shipped to Intel (2024) and TSMC (2025). 2026 is the calibration year; 2027-2030 is volume. Each High-NA tool is ~1.7x the ASP of a low-NA EUV. By 2030, ASML guides High-NA to be a meaningful share of EUV system revenue.^[inferred from Investor Day 2025 long-range plan]
3. **Service revenue compounds.** Installed Base Management (IBM) revenue runs ~€7-8B annually (FY25) and grows with the installed fleet. Mix-shifts toward service raise gross margin and dampen cyclicality.^[extracted from FY25 segment disclosure]
4. **Capital allocation is shareholder-friendly.** ASML has authorized multiple multi-billion-euro buybacks; the current authorization is ~€12B through 2027.^[extracted, Q4 2025 release] Net cash balance sheet (~€10B) gives optionality on a downturn.
5. **EPS doubles in the base case.** From ~€21 FY25 actual, base case lands at €40+ FY30 — a ~14% EPS CAGR — driven by revenue growth (8-10%), gross-margin expansion (51% → 54-55%), and ~3% annual share count reduction.

## 3. Business overview

ASML reports two segments: Net system sales and Installed Base Management (service + upgrades + field options).

### Product lines

| Product line | What it does | Key models | ASP | FY25 mix |
|---|---|---|---|---|
| EUV (low-NA) | 13.5nm lithography for leading-edge logic + advanced memory | NXE:3800E, NXE:4000F | €200-230M | ~45% of system sales |
| High-NA EUV | Next-gen 13.5nm, 0.55 NA, finer pitch, single-pass | EXE:5200, EXE:5400 (in dev) | €380M | ~5-8% of system sales |
| DUV immersion | 193nm immersion ArF for trailing/middle nodes | NXT:2100i, NXT:2150i | €80-95M | ~30% of system sales |
| DUV dry / KrF / i-line | 248nm + i-line for mature nodes | XT/NXT family | €15-50M | ~5% of system sales |
| Metrology + Inspection | HMI e-beam, YieldStar optical | eP5/eP6, YieldStar 1700 | €5-25M | ~5% of system sales |
| Installed Base Mgmt | Service, upgrades, field options on fleet | n/a | n/a | ~€7-8B (~25-28% of revenue) |

### Geography (FY25 actual)

China revenue normalized to ~25-28% in FY25 from ~45-49% peak in FY24, as the early-2024 export-control Dutch / US restrictions bit and as Chinese fab pre-buying ran off.^[extracted, FY25 disclosure] South Korea jumped to ~45% share of system sales in early 2026 on memory + Samsung Foundry tool-pull.^[extracted, TrendForce Apr 2026] Taiwan ~20-25%, US ~15%, EMEA + Japan single digits.

### Customer concentration

- **TSMC: ~35-40%** of system sales. Sole High-NA customer at production volume in 2026; A14 / A10 demand ramps from FY27.
- **Samsung: ~20%** including foundry + memory. SF1.4 ramp + HBM4 logic die.
- **Intel Foundry: ~12-15%**. First High-NA shipped to D1X Oregon (2024). 14A node anchored on High-NA.
- **SK hynix: ~10-12%**. EUV layers per HBM die rising with HBM4 / HBM4E.
- **Micron + others: ~10-15%**. Micron added EUV at 1-gamma DRAM. China names (SMIC, Hua Hong) at ~25% of total revenue but DUV-only post-export-control.

## 4. AI buildout exposure

The AI accelerator wafer plan is the single biggest swing factor in ASML's FY26-FY30 model.

- **Leading-edge logic**: TSMC N3 / N2 / A16 / A14 / A10 wafers carry 14-25 EUV layers and 5-7 High-NA layers at the leading edge. A 2nm wafer absorbs ~2.5x the EUV-equivalent litho cost of a 5nm wafer.^[inferred from SemiAnalysis tool counts]
- **HBM**: SK hynix HBM4 logic die (1c-class DRAM) uses 5+ EUV layers; HBM4E adds layers. Each AI accelerator-package contains 8-12 HBM stacks of 12-16 dies. See [[semiconductor-supply-chain-deep-dive]] for HBM allocation detail.
- **AI accelerator volume to ASML revenue**: a rough back-of-envelope — if total leading-edge AI accelerator wafer demand grows from ~3.5M wafers FY25 to ~9-12M wafers by FY30, and each wafer carries ~€5-8K of incremental EUV-tool depreciation through TSMC's amortized capex, ASML captures ~€18-25B annual run-rate from AI alone by FY30, on top of foundation logic + memory.^[inferred, very rough]
- **Custom ASIC** (AVGO, MRVL, GOOG TPU, MSFT MAIA, etc.) is additive, not substitutive — every ASIC still uses TSMC N3 / N2 / A16 wafers. See [[pick-broadcom-avgo-5y]] for the ASIC angle.
- **Reasoning-class scale-up**: long-context, agentic, and reasoning workloads consume more compute per token. That re-prices the value of every leading-edge wafer, which re-prices the incremental EUV layer.

## 5. Demand drivers

### Order book and FY26 guide

- **FY26 revenue guide: €36-40B**, midpoint €38B, vs. FY25 actual ~€33B.^[extracted from ASML Q1 2026 release; raised from prior €34-38B] Implied FY26 growth ~12-15%.
- **Q1 2026 net bookings**: ~€8B reported, of which ~€3B was EUV. Backlog at end of Q1 2026: ~€39-41B, including the FY26 already-shipping book.^[extracted]
- **2026 pricing/mix**: gross margin guided to 51-53%; full-year operating margin at midpoint guide implies €11-13B operating income.
- **Service**: IBM revenue guided to grow ~mid-single-digits in FY26.

### Customer capex announcements (calendar 2026)

| Customer | FY26 capex (announced) | EUV / High-NA implication |
|---|---|---|
| TSMC | ~$42B (raised from $38B at year start) | Most goes to N2 + A14 fab equip; first volume High-NA pulls |
| Samsung | ~$45-50B total, of which ~$25-30B foundry/memory equipment | SF2 / SF1.4 buildout; HBM4 lines |
| Intel Foundry | ~$18-20B | 18A volume + 14A High-NA tools at D1X Oregon |
| SK hynix | ~$25B | HBM4 logic-die EUV layers, M15X expansion |
| Micron | ~$18-22B | 1-gamma DRAM EUV transition |

If all five hit guide, leading-edge equipment spend in calendar 2026 is ~$160-170B. ASML's wallet share of EUV / High-NA tools inside that bucket is ~20-22% of the equipment budget at leading edge.

### Long-term roadmap orders

- **TSMC A14 (1.4nm)** scheduled for risk-production 2H27, volume 2028. ~10 High-NA layers per wafer at maturity. Pre-buy of EXE:5200 / EXE:5400 visible in 2025-2026 order flow.
- **TSMC A10 (1.0nm)** scheduled for 2030. High-NA central; some discussion of Hyper-NA (0.7+ NA) but that's post-2030.
- **Samsung SF1.4** target 2027 risk, 2028 volume. Samsung is ASML's second-biggest High-NA customer.
- **Intel 14A** with PowerDirect + High-NA targeted 2027-2028.

### EUV layer counts by node (the volume math)

The litho TAM is best understood as wafers × EUV-layers-per-wafer × ASP-per-tool / tool throughput. Key node counts:

| Node | Foundry | EUV layers | High-NA layers | Notes |
|---|---|---|---|---|
| N7 / N7+ | TSMC | 4-7 | 0 | First production EUV node, 2019 |
| N5 / N4 | TSMC | 14-15 | 0 | AI accelerators FY22-FY24 (H100) |
| N3 / N3E / N3P | TSMC | 18-20 | 0 | Blackwell B100/B200, MI300X |
| N2 / N2P | TSMC | 22-25 | 0 (low-NA only) | Volume 2025-2026, Rubin / B300 |
| A16 | TSMC | 22-25 | 1-2 | Backside power delivery; risk 2026 |
| A14 | TSMC | 18-22 | 5-7 | Risk 2027, volume 2028 |
| A10 | TSMC | 14-18 | 8-12 | 2030 |
| 18A | Intel | 16-18 | 0-1 | RibbonFET + PowerVia; volume 2025-2026 |
| 14A | Intel | ~14 | 4-6 | First Intel node anchored on High-NA |
| SF2 | Samsung | ~18 | 0-1 | Memory + foundry |
| SF1.4 | Samsung | ~16 | 4-6 | Volume 2028 |
| 1c DRAM | Micron / SK / Samsung | 4-6 | 0 | HBM4 logic die uses these |

The pattern: EUV layer count rises through N3 / N2 then plateaus, but High-NA layers replace ~3-4 low-NA double-patterning steps each. The shift to High-NA is a productivity story — fewer total exposures, higher ASP per exposure, better dimension control.

## 6. Supply / capacity

### Manufacturing footprint

- **Veldhoven (NL)**: principal EUV / High-NA assembly site. Major 2024-2026 capacity expansion bringing NXE / EXE annual output to ~90 EUV systems by 2027.^[extracted, Investor Day 2024-2025]
- **Wilton (CT, US)**: DUV stages and parts, plus Twinscan modules.
- **Linkou (TW), San Diego, Veldhoven cleanroom expansions**: HMI metrology + service depots near customers.
- **Berlin / Dresden via Trumpf, Oberkochen via Carl Zeiss SMT**: long-cycle optics + laser supply.

### Tool throughput improvements

- **NXE:3800E**: ~220 wafers per hour (wph) at high availability.
- **NXE:4000F** (shipping 2025-2026): ~230-240 wph, better dose stability.
- **NXE:4200** (target 2027): ~250 wph; >95% lifetime availability target. Each wph point at NXE level is worth ~$0.25M/year incremental revenue per fab.^[inferred]
- **EXE:5200** (High-NA): ~185 wph at intro, ramping toward 220 wph by 2027.
- **EXE:5400** (target 2027-2028): targeted at >220 wph plus better overlay/dose for production HVM.

### Component supply

- **Carl Zeiss SMT** is the bottleneck. SMT supplies the EUV optics module — mirrors with sub-atomic-scale figure tolerance. Zeiss's Oberkochen plant is the second-most-strategic facility in the litho stack after Veldhoven itself. Zeiss has been expanding through 2025-2027.
- **Trumpf** supplies the CO2 drive-laser; 30+ kW operating regimes for next-gen sources are in qualification.
- **5,000+ suppliers**: ASML manages this with two-source and dual-source policies for any single-supplier component.

A capacity-throughput summary: ASML can ship ~70-90 EUV / High-NA systems and ~350+ DUV systems annually by 2027 — a doubling of EUV output vs. 2022.

### High-NA shipment cadence

| Year | EXE:5000 (R&D) | EXE:5200 production | EXE:5400 production | Cumulative HVM tools |
|---|---|---|---|---|
| 2024 | 2 (Intel D1X) | 0 | 0 | 0 |
| 2025 | 2 (TSMC, lab Velhoven) | 1 (Intel) | 0 | 1 |
| 2026 | 0 | 4-5 | 0 | 5-6 |
| 2027 | 0 | 8-10 | 1-2 | 14-18 |
| 2028 | 0 | 8-10 | 4-6 | 26-34 |
| 2029 | 0 | 6-8 | 8-12 | 40-54 |
| 2030 | 0 | 4-6 | 12-18 | 56-78 |

At ~€380M-€420M ASP, that High-NA shipment plan is a ~€20-30B cumulative system-revenue contribution between 2026 and 2030, layered on top of an NXE:3800/4000/4200 base of ~€60-75B over the same window.

### DUV — the under-discussed compounder

DUV systems are mature but very profitable, and DUV demand stays robust because:

1. **Trailing-edge build-out continues** — automotive, industrial MCU, RF, CMOS image sensors all use 90nm-28nm DUV-only nodes.
2. **China DUV demand structurally elevated** as long as Beijing pushes domestic substitution at trailing nodes; only top-of-line NXT:2100i+ tools are export-restricted.
3. **Multi-patterning still needed** at 5nm/3nm even alongside EUV — every leading-edge logic wafer gets dozens of DUV exposures plus the EUV layers.

DUV ships ~350+ tools/year; total revenue is ~€11-13B annually with stable mid-30s gross margin. It's a more cyclical business than EUV but provides a working-capital and service base.

## 7. Financial model — FY26 to FY30

All figures are euro-denominated. FY = calendar year (ASML reports Dec year-end). Diluted EPS is presented before preferred treatments — ADRs (1:1) trade in USD on Nasdaq.

### Bear / Base / Bull, FY26-FY30

| Metric | FY26 (guide / our) | FY28 Bear | FY28 Base | FY28 Bull | FY30 Bear | FY30 Base | FY30 Bull |
|---|---|---|---|---|---|---|---|
| Revenue (€B) | 38 | 41 | 50 | 56 | 45 | 62 | 75 |
| Gross margin | 52% | 50% | 53% | 55% | 50% | 54% | 56% |
| Operating margin | 33% | 30% | 34% | 36% | 30% | 35% | 38% |
| Operating income (€B) | 12.5 | 12.3 | 17.0 | 20.2 | 13.5 | 21.7 | 28.5 |
| Tax rate | 16% | 17% | 16% | 16% | 17% | 16% | 16% |
| Net income (€B) | ~10.5 | 10.2 | 14.3 | 17.0 | 11.2 | 18.2 | 23.9 |
| Diluted shares (M) | 390 | 380 | 375 | 370 | 360 | 350 | 340 |
| EPS (€) | 27 | 27 | 38 | 46 | 31 | 52 | 70 |
| FCF (€B) | 9-10 | 9 | 13 | 16 | 10 | 17 | 22 |

### Bridge from FY25 to FY30 base

- FY25 revenue ~€33B → FY30 base €62B is ~14% CAGR.
- Of that, ~7-8 pts is EUV / High-NA volume growth, ~3-4 pts is service compounding, ~3 pts is High-NA ASP mix shift.
- Gross margin 51% → 54% via High-NA mix, service mix, and field-option attach.
- Buyback adds ~3% / year to EPS via share count reduction (~390M → ~350M).
- FY30 base EPS €52 vs FY25 ~€21 → 2.5x earnings; that's the "EPS doubling" thesis with margin to spare.

### What drives the bear case

Bear assumes High-NA push-out by 12-18 months at multiple customers, China DUV revenue settling at ~10% (vs. ~25% normalized), gross margin compression from product-mix, and the leading-edge cycle taking a 2027-2028 air pocket if hyperscaler capex rolls.

### What drives the bull case

Bull assumes High-NA reaches volume HVM at three customers (TSMC, Samsung, Intel) by FY28, EXE:5400 ships earlier than guide, China resumes pre-buying ahead of new Dutch export rules, and AI accelerator wafer demand exceeds the 9-12M wafer base case.

### Service revenue model in detail

Installed Base Management (IBM) is the under-modeled engine. ASML's installed EUV fleet at end-FY25 is ~280 systems. Each EUV system pays ~€10-14M / year of service + upgrades (rough industry estimate) over its 12-15 year life. Add DUV (~6,000 systems installed) at ~€0.5-1.0M / system / year, and IBM is a ~€7-9B FY26 business growing 5-8% as the fleet expands.

Critical points:
- **Margin profile**: IBM gross margin ~50-55%, similar to systems but more stable across the cycle.
- **Cyclicality dampener**: System revenue can drop 20% in a down year; IBM rarely declines. As IBM mix rises from ~25% of revenue today toward ~30-32% by 2030, ASML's earnings cyclicality compresses.
- **Field options + upgrades**: NXE:3800E owners can upgrade to NXE:4000F-equivalent throughput via field option packages priced at ~€20-40M each. These are pure margin.
- **High-NA service**: Each EXE:5200 will pay ~€20-30M / year in service over its life — almost double a low-NA tool. As the High-NA fleet builds 2027-2030, IBM revenue compounds disproportionately.

### Capital allocation

- **Buyback**: ~€12B authorization through 2027.^[extracted Q4 2025] At ~€720, that retires ~16M shares or ~4% of float per year.
- **Dividend**: Growing; FY25 ~€6.40 / share, ~1% yield. Policy is to grow with earnings.
- **M&A**: Tuck-ins only (HMI in 2016 was the last meaningful one; cymer for source). Management has been disciplined.
- **Cash**: Net cash ~€10B; could fund another buyback authorization or stress capital through a downturn.

## 8. Valuation

### DCF inputs

- **Revenue CAGR FY26-FY30**: 8% bear / 10-11% base / 14% bull.
- **Terminal growth**: 4% (above GDP; reflects continued semis intensity rising).
- **WACC**: 8.0-8.5% — beta ~1.15, cost of equity ~9%, modest debt cost.
- **Terminal multiple cross-check**: 22-26x earnings, 18-22x EBITDA, 25-30x FCF.
- **Tax rate**: 16% (Dutch corporate + R&D box, IP regime).

Running a 10-year explicit DCF on the base case:

- Years 1-5 cash-flow average ~€14B → discounted ~€55B.
- Terminal value at year 10 (FY35 normalized FCF ~€22B) at 4% terminal growth, 8.25% WACC = ~€500B; discounted to today ~€225B.
- Equity value: ~€280B + €10B net cash = ~€290B.
- Per share at ~370M weighted: **~€780 fair value base case**.

### Bear and bull DCFs

- **Bear DCF**: ~€520-560 per share. Revenue CAGR 6%, terminal multiple 20x.
- **Bull DCF**: ~€1,050-1,150 per share. Revenue CAGR 14%, gross margin to 56%, terminal 26x.

### Peer multiple cross-check

| Name | FY26 EV/Sales | FY26 P/E | Why ASML deserves a premium |
|---|---|---|---|
| ASML | ~7.5x | ~27x | Sole-source EUV; service compounder; secular ramp |
| KLA (KLAC) | ~7x | ~24x | Process control monopoly but smaller TAM |
| Applied Materials (AMAT) | ~4.5x | ~18x | More cyclical, more exposed to trailing-node memory |
| Lam Research (LRCX) | ~5x | ~20x | Etch + deposition, no monopoly equivalent to EUV |
| Tokyo Electron | ~4x | ~17x | Coater/developer + etch, JP discount |

ASML deserves a 25-30% premium to AMAT / LRCX on monopoly + service-mix grounds. That gets us to ~26-29x forward earnings, supporting €700-820 today and a 5-year price target around **€1,000-1,200 base** (~50-65% above today, ~10% IRR + buyback + dividend ~12-13% total return base).

### Fair-value range

- **Today fair value**: €700-820 (€780 midpoint, in-line with current ~€720 → modest upside).
- **5-year base case price target**: €1,050-1,200, ~50-65% upside, ~10-13% IRR including ~1% dividend.
- **5-year bull**: €1,500-1,800, ~110-150% upside.
- **5-year bear**: €600-700, flat to -10%.

### Sensitivity grid — 2030 EPS × multiple

| 2030 EPS (€) | 20x | 24x | 28x | 32x |
|---|---|---|---|---|
| 31 (bear) | 620 | 744 | 868 | 992 |
| 42 | 840 | 1,008 | 1,176 | 1,344 |
| 52 (base) | 1,040 | 1,248 | 1,456 | 1,664 |
| 60 | 1,200 | 1,440 | 1,680 | 1,920 |
| 70 (bull) | 1,400 | 1,680 | 1,960 | 2,240 |

Highlighted base path: €52 EPS × 24x ≈ €1,250 — squarely in the base 5-year price target range. The bigger swing factor is the multiple — at 20x ASML stops being expensive and screens cheap on FCF / monopoly grounds.

### Why ASML deserves a premium to KLAC

KLA also has near-monopoly economics in process control. The reason ASML deserves a 3-5 turn premium:

1. **Higher-ASP, longer-cycle product**. EUV/High-NA is sold against fab construction; KLA's optical inspection is bought through equipment cycles.
2. **Service mix disproportionate to fleet age**. EUV needs more service per dollar of system because of source maintenance, mirror cleans, etc.
3. **Larger TAM trajectory**. KLA's TAM grows ~5-7% / year long-term; ASML's grows ~8-12% with EUV/High-NA layer count.
4. **Lower customer concentration**. KLA depends on TSMC ~25%; ASML's big four (TSMC, Samsung, Intel, SK) gives some diversification.

## 9. Catalyst calendar

| Date (approx) | Event | What to watch |
|---|---|---|
| 2026-07-16 | Q2 2026 results | EUV bookings, China mix, FY26 guide tightening, High-NA shipment count |
| 2026-09 | SEMICON West / TSMC OIP | A14 customer adoption signals |
| 2026-10-15 | Q3 2026 results | Initial FY27 commentary, EXE:5400 timing |
| 2026-11 | ASML Investor Day (typical) | Long-range model refresh: 2030 revenue range, gross-margin trajectory |
| 2027-01-21 | Q4 2026 + FY26 results | FY27 revenue guide; updated CMD model; buyback continuation |
| 2027-04 | Q1 2027 results | First read on FY27 cycle and High-NA volume |
| Ongoing | TSMC quarterly capex updates | Direct read-through to ASML order book |
| Ongoing | Dutch / US export-control updates | China downside or upside |

### What to read on each print

- **Bookings line**: ASML stopped pre-announcing quarterly bookings in 2024 to reduce volatility. Net bookings disclosed quarterly; EUV vs DUV split critical.
- **Backlog**: snapshot at quarter-end. Watch the absolute number and the average tool ASP embedded.
- **China revenue %**: indicator of export-control fallout. ~25-30% is normalized; <15% suggests new restrictions; >35% suggests pre-buying ahead of restrictions.
- **High-NA tool count shipped**: cited explicitly in releases. 2026 base case is 4-5; bull is 6-7.
- **Gross margin guidance for next quarter**: pricing power tell. >52% is a buy signal.
- **Service revenue growth**: should compound mid-single digits even in down years.

## 10. Bear case

The bear case is non-trivial. Key risks, ranked by impact:

1. **Geopolitics: US/China escalation and Dutch export-control tightening.** A new Dutch government has been more permissive about restricting NXT:2100i and below. A scenario where China revenue falls from ~25% to ~10% of total would knock ~€4-5B off revenue and ~€1.5B off operating income before any service offset. Counter: ASML's service base in China continues regardless, and lost system revenue gets re-allocated to leading-edge customers who are capacity-constrained.
2. **High-NA ramp slip.** EUV took 8 years longer than planned (1997 first patents → 2017 HVM at TSMC N7). High-NA could similarly slip if mask, resist, or pellicle ecosystems lag. A 12-month slip pushes ~€3-4B of FY27-FY28 revenue right.
3. **Chiplet / advanced packaging cannibalization.** If chiplet partitioning + 3D stacking lets customers do more with N3 instead of advancing to N2 / A14, EUV-layer growth slows. Counter: every chiplet still wants the leading-edge SoC/compute die at A14.
4. **TSMC overcapacity at 2nm.** If TSMC over-builds N2 in 2026-2027 against AI demand that softens, FY28 fab equipment orders take an air pocket. Counter: AI demand has been undersupplied at every node so far.
5. **Macro semi cycle.** ASML is less cyclical than peers but not acyclical. A broad memory/foundry downturn in 2027-2028 would dampen DUV bookings and trim margin.
6. **Multiple compression.** The stock trades at a structural premium. If the 10Y rises 200bps or AI sentiment cools, a 27x multiple could compress to 20-22x — a 20-25% headwind even if earnings hit base case.
7. **Single-supplier disruption.** A long Carl Zeiss SMT or Trumpf outage (fire, supply-chain shock) would hit shipments. Counter: ASML maintains buffer inventory and Zeiss has parallel manufacturing.
8. **Customer concentration.** TSMC ~40%. A capex pause at TSMC alone reprices the stock 10-15% in a quarter.

### Key debates the Street is having

| Debate | Bull view | Bear view | Our take |
|---|---|---|---|
| Will High-NA volume hit 2027? | Intel and TSMC have working tools; calibration is on track | Mask + pellicle ecosystem is years behind | High likelihood of 2H27 risk; HVM 2H28. Ramp likely lumpy through 2027 |
| Is China revenue floored or still falling? | South Korea pickup more than offsets; FY26 guide raised | New Dutch restrictions in dev; another leg down possible | Floor near current 25-28% mix unless explicit new rules |
| Can margins reach 55%+? | High-NA mix + service compounding gets there by 2028 | DUV mix shift down hurts; competitive pricing in DUV | 53-54% by FY28 base; 55% requires bull-case Service mix |
| Is the multiple sustainable? | Monopoly + secular ramp justifies premium | Rate sensitivity + 27x is rich vs SOX | Base case multiple compresses 1-2 turns; offset by EPS growth |
| Will Hyper-NA arrive by 2032? | Yes; 0.7+ NA in dev, customers planning | No; physics gets harder, costs spiral | Possibly delayed to 2033-2034. Not material to 5y thesis |

## 11. Position sizing

- **Beta**: ~1.15-1.30. Higher than market in semis cycles, lower than pure-cyclical peers like AMAT.
- **Volatility**: 30-day realized typically 25-35%. Earnings prints can swing 5-10% on bookings detail.
- **Dividend yield**: ~1.0-1.2%; growing.
- **Buyback yield**: ~3% / year at current pace.
- **FX**: Reports in EUR; ADR holders take USD/EUR risk. Operations are largely EUR-cost / USD-revenue, which is a tailwind if dollar strengthens.
- **Pairing**: ASML pairs naturally with [[pick-tsmc-tsm-5y|TSMC]] (the customer) and [[pick-broadcom-avgo-5y|AVGO]] (the demand-pull). A "leading-edge stack" basket of TSM + ASML + AVGO + MU captures the AI wafer story end-to-end. See [[ai-investment-public-company-scorecard]] and [[situational-awareness-ai-infrastructure-portfolio]].
- **Sizing**: For a 5-year holder with conviction, a 4-7% portfolio weight is defensible; the stock has tail risk from China/geopolitics that argues against >10% concentration.
- **Entry approach**: Today (~€720) is fair value, not a screaming bargain. Scaling in at €650 / €600 / €550 levels (10-20% pullbacks) maximizes IRR; alternatively, just buy in two tranches across two earnings prints.

### Cross-portfolio scorecard fit

In the [[ai-investment-public-company-scorecard]] framework:

- **Bottleneck owned**: EUV / High-NA lithography (single-source).
- **AI exposure**: ~55-65% of revenue traceable to AI accelerator + HBM end demand by FY27.^[inferred]
- **Backlog visibility**: 12-15 months out (highest in semicap).
- **Multiple**: 27-28x forward — premium to peers, justified by monopoly + secular ramp.
- **Leverage**: Net cash, capital-light service business.
- **Customer concentration**: Top 4 = ~85% (high but stable).
- **Estimate-revision direction**: Up. FY26 guide raised in April; consensus FY27/28 numbers drifting higher post-Investor Day.

### Tax + reporting notes

- ASML reports in EUR; ADR holders take FX risk. Many US holders prefer the local Euronext line ASML.AS for liquidity in size.
- Dutch dividend withholding (15%) applies; US holders can typically reclaim half via the treaty.
- Capital gains in a 5-year hold horizon should hit long-term treatment in any normal jurisdiction.

## 12. Sources

- ASML Q1 2026 financial results press release and call transcript (asml.com, 2026-04-16)
- ASML Q4 2025 results / FY2025 annual report (asml.com)
- ASML Q1, Q2, Q3 2025 transcripts and Investor Day November 2025
- ASML Investor Relations site (financial calendar, capital-allocation framework)
- TrendForce: "ASML raises 2026 sales outlook to €36B-€40B on memory and logic client demand; South Korea share hits 45%" (2026-04-15)
- SemiAnalysis: EUV / High-NA articles (Patel, 2025-2026)
- TSMC Q1 2026 earnings call (capex guide, A14 / A10 roadmap)
- Samsung, Intel Foundry, SK hynix, Micron Q1 2026 earnings releases
- Bernstein / Morgan Stanley / Goldman Sachs semicap notes via Seeking Alpha (Q1 2026 cycle)
- Carl Zeiss SMT and Trumpf annual reports (supply-chain corroboration)
- Cross-references inside this wiki: [[semiconductor-supply-chain-deep-dive]], [[ai-data-center-buildout-investment-memo]], [[ai-investment-valuation-models]]

## 13. Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[ai-investment-valuation-models]]
- [[semiconductor-supply-chain-deep-dive]]
- [[hyperscaler-constraint-map]]
- [[analyst-picks-master-list]]
- [[pick-tsmc-tsm-5y]]
- [[pick-broadcom-avgo-5y]]
- [[pick-micron-mu]]

## 14. One-line summary

ASML is the only seller of EUV; AI demand is layering High-NA on top of an already-tight low-NA cycle; FY26 €36-40B guide is raised and FY30 base case is €55-70B revenue / €52 EPS; 5-year base price target €1,050-1,200 (~10-13% IRR including buyback + dividend); main risk is Dutch / US export-control escalation against China. Long, 5-year hold, conviction high.
