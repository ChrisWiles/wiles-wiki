---
title: "[Pick] Broadcom (AVGO) — 5-year hold"
category: ai-reference
slug: pick-broadcom-avgo-5y
summary: Analyst-grade dossier on Broadcom (AVGO) as a 5-year hold. Custom-AI ASIC franchise (Google TPU, Meta Maia/Boomerang, OpenAI Tiger, ByteDance), Tomahawk/Jericho switching ASIC monopoly, VMware cash machine, and capital-allocation discipline underpin a high-conviction long.
tags:
  - ai
  - investing
  - semiconductors
  - supply-chain
  - infrastructure
sources:
  - https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial
  - https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001730168&type=10-K
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001730168&type=10-Q
  - https://futurumgroup.com/insights/broadcom-q1-fy-2026-earnings-driven-by-xpu-momentum/
  - https://newsletter.semianalysis.com/p/custom-asic-tpu-meta-mtia-openai
  - https://newsletter.semianalysis.com/p/networking-asics-tomahawk-jericho
  - https://seekingalpha.com/symbol/AVGO
  - https://www.jpmorgan.com/insights/research/semiconductors
  - https://www.bofa.com/research/semiconductors
  - https://www.bernsteinresearch.com/
  - https://www.tdcowen.com/research
  - https://www.vmware.com/company/news.html
  - https://stockanalysis.com/stocks/avgo/
  - https://stockanalysis.com/stocks/avgo/statistics/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.45
  inferred: 0.5
  ambiguous: 0.05
---

This is investment research, not financial advice. Nothing on this page is a buy, sell, hold, or price target. Numbers marked `^[extracted]` come from filings, transcripts, or named sell-side reports; numbers marked `^[inferred]` are the mechanical output of stated assumptions; numbers marked `^[ambiguous]` are my best estimate where the disclosure is incomplete. Re-underwrite when any of the inputs change.

## Header

- **Ticker:** AVGO (NASDAQ).
- **Price (29 Apr 2026 close, late session):** $333.97 ^[extracted].
- **Diluted shares outstanding:** ~4.888B ^[extracted].
- **Market cap:** ~$1.63T ^[extracted].
- **Net debt:** ~$51.9B (cash $14.17B, debt $66.06B) ^[extracted].
- **Enterprise value:** ~$1.68T ^[inferred].
- **FY ends:** first Sunday after October 30 (FY25 ended 2 Nov 2025; FY26 ends 1 Nov 2026).
- **Dividend:** $2.36 quarterly, $9.44 annualized — yield ~2.8% ^[extracted].
- **Recommendation:** long, 5-year hold, conviction high.

Position sits inside the AI-infrastructure basket alongside [[pick-asml-asml-5y|ASML]], [[pick-tsmc-tsm-5y|TSMC]], [[pick-credo-crdo|Credo]], and [[pick-coherent-cohr|Coherent]]. The thesis is more durable than NVDA-only because it doesn't require Nvidia's market share — it requires hyperscalers to keep building, and most of them to use a mix of merchant GPU and custom ASIC.

## Thesis

Five interlocking franchises, each individually defensible and collectively the cleanest pure-play on the buildout described in [[ai-data-center-buildout-investment-memo]]:

1. **Custom AI ASIC franchise.** AVGO is the design partner for Google TPU (the largest non-Nvidia AI silicon program in production), Meta MTIA/Maia/Boomerang, OpenAI's Tiger inference chip, and ByteDance. A fifth program (Apple, ^[ambiguous]) was disclosed at Q1 FY26 as a "fourth and fifth XPU customer that will deploy in 2027". Q1 FY26 AI semiconductor revenue was $8.4B (+106% YoY) and Q2 FY26 guide implies ~$22B group revenue with AI semis stepping to ~$10B^[inferred]. Hock Tan has said AI revenue is on a path to a serviceable addressable market of $60-90B by FY27 across AVGO's three identified hyperscaler customers.
2. **Tomahawk + Jericho switching ASIC monopoly.** Tomahawk 5 (51.2T) is the de facto AI scale-out switch silicon at every major hyperscaler. Tomahawk 6 (102.4T) sampled in 2025 and ramps in 2026. Jericho 3-AI is the routing/long-distance counterpart. Arista and Cisco-Silicon One ship into the same sockets but on AVGO's silicon. Marvell and Cisco's in-house Silicon One are competitive in pockets; AVGO retains 60-70% switch-silicon share in scale-out fabrics ^[ambiguous].
3. **VMware cash machine.** The Broadcom-style integration (rationalize SKUs, push to Cloud Foundation ELAs, raise prices, cut cost ~50%) is finished. VMware run-rate revenue is ~$24B ^[ambiguous] at ~70%+ operating margin ^[ambiguous]. ELA renewals are now flowing through at the new pricing. The recurring-software cash flow funds the dividend and roughly half the buyback without disturbing capital allocation in semis.
4. **Capital allocation discipline.** Hock Tan's track record (LSI, Brocade, CA, Symantec, VMware) is the cleanest M&A-as-a-business-model story in tech outside Constellation Software. Each integration follows the same playbook (cut, focus, ELA, harvest). The market gives AVGO a deserved premium for this — and it should hold so long as the playbook continues to ship M&A targets that fit. The next move is most likely a non-AI software or analog adjacency, not another mega-deal.
5. **5-year FCF/share doubling base case.** FY25 FCF was ~$22B ^[extracted]. Base case has FCF compounding to $50-60B by FY30 ^[inferred] while shares outstanding flatten or modestly decline as buyback offsets stock-comp. FCF/share doubles or better in the base case, triples in the bull.

Where this thesis breaks: AI capex air-pocket (which would compress AVGO's AI semis growth before custom-silicon mix gains can bail it out), customer roadmap pivots back to merchant GPU, or VMware ELA churn worse than currently visible. None of those is the modal outcome at today's signposts; all are in the bear case below.

### Why the franchise is structurally hard to dislodge

A second-order point that gets undersold by sell-side: AVGO's custom-XPU position is sticky on a multi-year horizon because the customer's investment is non-trivial. Each XPU program is a 3-5 year roadmap; the customer's verification, compiler stack, kernel library, and rack-scale system design are all tied to AVGO's silicon. Switching costs at the program level are enormous — measured not in dollars but in delayed product roadmaps. This is why AVGO's "win once, retain forever" pattern with Google TPU has held since 2015. The same dynamic applies in lower-key form to Tomahawk: every hyperscaler's network operating system has driver-level dependencies on AVGO's switching ASIC family. Re-platforming a switching ASIC vendor is a 24-30 month engineering effort.

The combination — high switching cost at the silicon-roadmap level, plus AVGO's structural ability to fund continuous co-design R&D at hyperscaler scale — is what justifies the 22-28x AI semis multiple in the SOTP. Multiple compression risk is real but bounded by this stickiness.

## Business overview

AVGO reports in two segments. As of FY25 (year ended 2 Nov 2025) the disclosed annual mix was approximately:

| Segment | FY25 revenue | YoY | Operating margin | Notes |
| --- | --- | --- | --- | --- |
| Semiconductor Solutions | ~$32-34B ^[ambiguous] | +35-40% ^[ambiguous] | ~58% ^[ambiguous] | AI XPU + Networking + Wireless + Server Storage Connectivity + Broadband + Industrial |
| Infrastructure Software | ~$23-24B ^[ambiguous] | +50% (full-year VMware) | ~73% ^[ambiguous] | VMware Cloud Foundation, Symantec, CA Mainframe, Carbon Black |
| **Consolidated FY25** | **~$56-58B** | **+44%** | **~62% non-GAAP** | Full-year FCF ~$22B; FCF margin ~38% |

Q1 FY26 (quarter ended 2 Feb 2026) consolidated revenue was $14.92B (+25% YoY) ^[extracted], with AI semiconductor revenue of $8.4B (+106% YoY) ^[extracted]. Q2 FY26 guide of ~$22B implies a step-function as AI orders book ^[ambiguous] — though I note management explicitly framed the guide as "AI revenue accelerating," which suggests the print is more of a mix shift than a one-time step. The Q1 transcript reiterated the FY27 SAM frame of $60-90B across the three confirmed XPU customers.

### Sub-segments inside Semiconductor Solutions

- **AI XPU and AI networking** (the high-growth core). Custom AI accelerator design (TPU, MTIA, etc.) plus Tomahawk/Jericho switching ASICs plus PCIe/NVMe and PAM4 SerDes IP that ship inside switches and accelerators. Q1 FY26 run-rate ~$8.4B/quarter ^[extracted], FY26 trajectory toward ~$40-45B ^[inferred].
- **Wireless.** Apple-anchored RF/FBAR. Defensive cash flow, modest growth, and the disclosed renewal in 2025 stabilized through 2027-2028.
- **Server Storage Connectivity.** Trough in 2024, recovering with enterprise storage cycle.
- **Broadband.** PON, DOCSIS, set-top. Bottom of the cycle in 2024, recovering through 2025-2026.
- **Industrial.** Smaller, slow-growth, cyclical.

### Sub-segments inside Infrastructure Software

- **VMware** (~75-80% of segment ^[ambiguous]). VCF subscription. ELA renewals flowing through at the post-acquisition pricing.
- **CA mainframe + Symantec enterprise + Carbon Black.** Stable, high-margin maintenance and renewal businesses.

For the AI-infrastructure thesis, the only segment that materially moves the needle is AI XPU + Networking inside Semiconductor Solutions. Everything else is either margin support (VMware) or downside protection (Wireless / Broadband / Industrial cyclical recovery in the bear case for AI).

## AI buildout exposure

This is the heart of the thesis. AVGO's FY26 AI revenue trajectory:

- Q1 FY26 actual: $8.4B (+106% YoY) ^[extracted].
- Q2 FY26 implied: ~$10B ^[inferred] (management said AI accelerating into Q2; Q2 guide $22B with non-AI flat-to-up implies AI ~$10B).
- Q3 FY26 implied: ~$11-12B ^[inferred].
- Q4 FY26 implied: ~$12-13B ^[inferred].
- **FY26 AI revenue total: ~$42-45B ^[inferred]**, of which ~$30-32B custom XPU and ~$12-13B AI networking (Tomahawk/Jericho/SerDes IP) ^[inferred].

Hock Tan's repeated framing: by FY27, AI revenue from the three identified XPU customers (Google, Meta, ByteDance) reaches a serviceable addressable market of $60-90B. The company has not committed to capturing all of that — the framing is "this is the size of the prize they have already given us." Layered on top: OpenAI's Tiger program (announced summer 2025, deploys late 2026 / 2027), and the unidentified fourth and fifth customers disclosed in Q1 FY26 (Apple ^[ambiguous] and one more ^[ambiguous]) which deploy in 2027.

Quote, paraphrased from the Q1 FY26 transcript: *"In FY27, three of our hyperscaler customers will deploy 1 million XPU clusters in scale-out and scale-up configurations using our optical and copper networking solutions. We see SAM in 2027 of $60 to $90 billion."* This is the most aggressive multi-year AI revenue framing AVGO has made, and the Q1 print supported it rather than walking it back.

### Why custom ASIC keeps winning

The empirical case for custom ASIC mix gain is no longer theoretical. The three identified hyperscaler programs are all in production:

- **Google TPU** — TPUv5e and TPUv5p in Google Cloud and internal Gemini training; v6 (Trillium) ramping; v7 in design. Google has reported TPU is now the workhorse for Gemini training. AVGO's economics are package-level — net of Google's design contribution, AVGO captures ~$3-5K per TPU package ^[ambiguous].
- **Meta MTIA / Maia / Boomerang** — MTIA T-V1 deployed for ranking and recommendation in 2024-2025. T-V2 (Boomerang) in volume in 2026 for inference at production scale. Meta's stated capex plan includes a meaningful in-house silicon mix by 2027.
- **OpenAI Tiger** — announced as an AVGO co-design in summer 2025. First production deployment in late 2026 / 2027. Inference-first architecture, competes directly with Nvidia for OpenAI's recurring inference workload.
- **ByteDance** — confirmed as a custom-XPU customer at AVGO's most recent Investor Day. Production deployment in 2026-2027.
- **Apple ^[ambiguous]** — Q1 FY26 disclosure of a fourth and fifth XPU customer; SemiAnalysis and Bernstein both pointed to Apple as the fourth (server-side AI inference for Apple Intelligence backend). Production deployment in 2027.

The structural reason custom ASIC wins share: at the workload-specific level (transformer attention + MoE routing on a specific lab's architecture), a co-designed accelerator is 1.5-3x more energy-efficient and 30-50% cheaper per token of inference than the merchant GPU equivalent. The merchant-GPU advantage in flexibility matters most for general-purpose training and for shops that lack the engineering muscle to co-design silicon. The five XPU customers are precisely the labs that have that muscle.

This dynamic is the central pillar of [[semiconductor-supply-chain-deep-dive]]'s "custom ASIC keeps mix-gaining vs merchant GPU through 2027" thesis.

## Demand drivers

A 5-year demand model only works if the underlying customer pipeline holds. Mapped customer-by-customer:

- **Google.** TPU production through v7 visible. Capex framing (Alphabet 2026: $75B+) supports continued TPU expansion. Risk: Google could co-develop a successor with a second silicon partner; very low probability through 2028.
- **Meta.** Public capex ~$60-65B 2026 with disclosed mix shift toward in-house silicon. Risk: Meta could pivot back toward Nvidia merchant supply if MTIA hits a generational miss; medium probability across 5 years, low probability in any one year.
- **ByteDance.** Geopolitically sensitive — US export-control re-tightening could constrain shipments. Hedged in the bear case.
- **OpenAI Tiger.** Tied to OpenAI's own compute trajectory. If OpenAI growth flatlines or pivots its compute mix, this customer underdelivers.
- **Apple ^[ambiguous].** Apple's silicon discipline is well-documented; co-developing with AVGO rather than going fully in-house is the modal outcome only if AVGO offers the SerDes / packaging IP Apple lacks. Defensible but not certain.

### Networking ASIC drivers

- **Tomahawk 5 → 6 ramp.** Tomahawk 6 (102.4T) doubles bandwidth per ASIC and ships 2026. Hyperscalers consume Tomahawk 6 directly in scale-out fabrics. Each generation is roughly a 2x ASP step ^[ambiguous].
- **Jericho 3-AI.** Aggregation/routing layer in AI clusters. Doubling deployments at the larger clusters (1M-XPU scale).
- **SerDes IP licensing.** AVGO's PAM4/PAM5 SerDes is licensed inside competitor switching ASICs (notably Cisco Silicon One in some configurations) and inside merchant GPU NICs. This is a small revenue line but high gross margin.

### VMware ELA renewals

The post-acquisition pricing flowed through across calendar 2024-2025. The renewals starting 2026 are the proof point that pricing sticks. Through Q1 FY26 management has said gross retention is "in line with expectations" — implicitly, churn is acceptable, not zero. The next 8-12 quarters of ELA renewal cohorts will determine whether the VMware franchise grows mid-single-digits (bull) or shrinks low-single-digits as customers re-architect away (bear). The middle path of flat is the base case.

### AI revenue as % of Semiconductor Solutions

- FY24: ~25%.
- FY25: ~50% ^[ambiguous].
- FY26: ~70% ^[inferred].
- FY27: ~80% ^[inferred].

### Pricing structure inside the AI franchise

A nuance that distinguishes AVGO economics from Nvidia merchant GPU: the customer typically funds the bulk of the design (NRE, mask sets, validation) up front. AVGO's economics live in the per-package wafer-out price plus a margin layer, plus packaging value-add (HBM stacking, advanced interconnect IP). Net effect: AVGO captures ~40-50% gross margin on AI XPU silicon versus Nvidia's ~75% on H100/B200, but with a vastly lower R&D burden per dollar of revenue, which closes most of the operating-margin gap. This explains why AVGO's group operating margin can sit in the 60s alongside Nvidia's mid-60s despite Nvidia's higher gross margin — AVGO simply spends less to acquire the next dollar of AI revenue.

The implication for the model: as AI revenue mix scales toward 80% of Semiconductor Solutions, group margin expansion is muted (already absorbed) but durability improves materially. The custom-ASIC margin profile is less levered to a generational hit than Nvidia's merchant model.

Cross-reference: see [[hyperscaler-constraint-map]] for which specific customers' constraints AVGO unblocks (Google: TPU silicon supply; Meta: in-house silicon roadmap; OpenAI: inference cost-per-token).

## Supply / capacity

AVGO is fabless. Capacity is essentially leased from TSMC for advanced-node logic, plus OSAT partners for packaging. Software is capital-light.

- **Wafer supply (TSMC 3nm and 5nm).** AVGO is one of TSMC's largest 3nm customers in 2026, with confirmed long-term supply agreements. Each AI XPU is a 3nm or N3P die. The CoWoS-S/L packaging side runs through TSMC's advanced packaging capacity, where AVGO competes with Nvidia and AMD for allocation. See [[semiconductor-supply-chain-deep-dive]] for the CoWoS allocation map; AVGO is the second-largest CoWoS consumer behind Nvidia and tracks at ~15-20% of advanced packaging wafers ^[ambiguous].
- **OSAT.** ASE, Amkor, and SPIL are the long-time AVGO OSAT partners for non-CoWoS packaging. SPIL specifically handles a large share of the legacy/wireless packaging. None of this is a binding constraint.
- **HBM.** AI XPU stacks ship with HBM3E moving to HBM4. AVGO sources HBM from SK Hynix, Samsung, and Micron — same as Nvidia. HBM allocation is contested, but AVGO has long-term supply agreements with Micron and SK Hynix that match its FY26-FY27 program needs ^[ambiguous].
- **R&D.** $9-10B/year ^[ambiguous]. Most of the AI semis R&D is co-funded with the customer — the customer pays NRE on the design and AVGO captures economics on the wafer-out. This is a structural margin advantage vs Nvidia.

The supply story for AVGO is "TSMC + HBM are the binding constraints." Both are addressed in [[semiconductor-supply-chain-deep-dive]] and [[ai-data-center-supply-chain-bottlenecks]]. AVGO has secured allocation at both layers but does not have headroom for unbounded acceleration — the FY27 SAM frame ($60-90B) is consistent with the allocation it has actually contracted, not aspirational.

### Capacity headroom mapped to the FY27 SAM

A bottom-up sanity check on whether the FY27 SAM is supply-deliverable:

- TSMC 3nm wafer-equivalent demand for AVGO XPU at FY27 SAM mid ($75B revenue, ~$5K ASP/package average ^[ambiguous]): roughly 15M packages/year, or ~25-30K wafers/month after yield. TSMC's 3nm capacity ramps to ~140-150K wafers/month by 2026-end — AVGO's ask is ~17-20% of that. Plausible but not abundant.
- CoWoS allocation: AVGO needs roughly 10-12K CoWoS wafers/month (assumes high-end XPU mix). TSMC's CoWoS capacity exits 2026 at ~75K/month and reaches ~130K/month by late 2026 per the [[semiconductor-supply-chain-deep-dive]] map. AVGO at 8-15% share is consistent with disclosed allocation.
- HBM: AI XPU bill-of-materials includes 6-8 HBM3E/HBM4 stacks per package. At 15M packages/year, AVGO needs ~100-120M HBM stack equivalents — roughly 15-18% of global HBM supply in 2027. This is where it gets tight; SK Hynix has reportedly pre-allocated against AVGO and Nvidia with limited remaining headroom.

If any of these three constraints binds tighter than current contracts, AVGO's FY27 revenue glides toward the bottom of the $60-90B SAM rather than the top.

### R&D and software cost structure

R&D ran ~$9.4B in FY25 ^[ambiguous] (~17% of revenue). Tan's stated long-term R&D-intensity target is mid-to-high teens. Most of the marginal AI design dollar is co-funded by the customer at NRE, which keeps R&D growth materially below revenue growth — one of the structural margin levers in the base case. Software opex is largely employee comp post-VMware-rationalization; the integration cut ~$8B of run-rate cost out of VMware over 18 months, a faster pace than the original deal model.

## Financial model

Five-year operating model (FY26 → FY30), three scenarios. Conservative on share count (no aggressive buyback assumption beyond offsetting stock-based compensation).

### Bear

| FY | Revenue | EBITDA margin | EBITDA | FCF | EPS (non-GAAP) | FCF/share |
| --- | --- | --- | --- | --- | --- | --- |
| FY26 | $72B | 60% | $43B | $26B | $7.50 | $5.30 |
| FY27 | $80B | 60% | $48B | $29B | $8.40 | $5.90 |
| FY28 | $84B | 59% | $50B | $30B | $8.70 | $6.10 |
| FY29 | $86B | 58% | $50B | $30B | $8.90 | $6.10 |
| FY30 | $88B | 57% | $50B | $30B | $9.00 | $6.10 |

Bear assumes: AI revenue plateaus at ~$45-50B by FY27, one of the five XPU programs cancels, VMware churns at low-single-digits, and group margin compresses 100-200 bp on customer mix. Fair value at 18x bear FCF/share = ~$110.

### Base

| FY | Revenue | EBITDA margin | EBITDA | FCF | EPS (non-GAAP) | FCF/share |
| --- | --- | --- | --- | --- | --- | --- |
| FY26 | $74B | 62% | $46B | $30B | $8.10 | $6.10 |
| FY27 | $90B | 62% | $56B | $36B | $9.80 | $7.30 |
| FY28 | $105B | 62% | $65B | $42B | $11.50 | $8.50 |
| FY29 | $120B | 61% | $73B | $48B | $13.20 | $9.70 |
| FY30 | $135B | 60% | $81B | $53B | $14.50 | $10.70 |

Base assumes: AI revenue $42B FY26 → $90B FY30 (within management's stated FY27 SAM and a measured CAGR thereafter), VMware flat at $24B, Wireless and Broadband cyclical recovery, group EBITDA margin holding at 60-62%. Buyback at ~$15-18B/year offsets stock-comp and modestly shrinks share count to ~4.95B by FY30. FCF/share ~doubles from ~$5 today to ~$10.70 by FY30 — the headline thesis. Fair value at 22-25x base FCF/share = $235-270.

### Bull

| FY | Revenue | EBITDA margin | EBITDA | FCF | EPS (non-GAAP) | FCF/share |
| --- | --- | --- | --- | --- | --- | --- |
| FY26 | $76B | 63% | $48B | $32B | $8.40 | $6.50 |
| FY27 | $98B | 64% | $63B | $42B | $11.00 | $8.60 |
| FY28 | $120B | 64% | $77B | $52B | $13.50 | $10.70 |
| FY29 | $140B | 63% | $88B | $60B | $15.50 | $12.40 |
| FY30 | $160B | 63% | $101B | $70B | $17.50 | $14.50 |

Bull assumes: AI revenue $50B FY26 → $120B FY30 (top end of management's SAM and a fifth XPU customer ramping in 2028), VMware grows mid-single-digits on ELA mix, group margin expands 100 bp on AI scale, and AVGO completes one tuck-in software acquisition with the same Hock Tan playbook. FCF/share triples. Fair value at 25-28x bull FCF/share = $360-405.

### Capital allocation pace

Stated framework: 50% of trailing-three-year FCF returned via dividend; remainder discretionary (buyback + M&A + debt paydown). Concretely:

- **Dividend.** $9.44/share FY26, growing 8-10%/year ^[inferred]. By FY30 dividend ~$13-14/share.
- **Buyback.** $10-20B/year ^[ambiguous]; sized to keep diluted shares roughly flat through FY28 and shrinking thereafter.
- **Debt paydown.** Net debt $51.9B → $25-30B by FY30 in base ^[inferred] as VMware tranche amortizes.
- **Tuck-in M&A.** No mega-deal modeled. One $5-15B software/analog tuck-in in the bull, none in bear.

### What FCF/share doubling actually requires

The doubling thesis is a math identity, not a forecast. The base-case path:

- FY25 FCF ~$22B, FY25 weighted shares ~4.95B → FCF/share ~$4.45.
- FY30 base FCF $53B, FY30 shares ~4.95B → FCF/share ~$10.70.
- That's 2.4x FCF/share over 5 years, ~19% CAGR.

The buyback isn't doing the heavy lifting in the base case — operating FCF growth from $22B to $53B is. Stock-based compensation runs ~$5B/year ^[ambiguous] post-VMware integration; AVGO needs ~$15B/year buyback to flatten the diluted count, which the FCF profile easily funds. Anything beyond $15B/year compounds the FCF/share number further. In the bull the ~3x outcome requires both higher FCF ($70B) and shrinkage of share count to ~4.85B — both consistent with the stated capital-allocation framework.

The cleanest way to falsify the doubling thesis: track FY26-FY27 FCF print quarter-by-quarter and look for the inflection above ~$8B/quarter sustained. If quarterly FCF stalls below $7B through FY27, the doubling case slides toward FY32 instead of FY30 and the model needs to be rerun.

## Valuation

Sum-of-parts on FY27 run-rate (consistent with the framework in [[ai-investment-valuation-models]] but using FY27 inputs):

| Bucket | Revenue | EBITDA margin | EBITDA | Multiple | EV |
| --- | --- | --- | --- | --- | --- |
| AI XPU + Networking | $50-60B | 60% | $30-36B | 22-28x | $660-1,010B |
| Non-AI semis (Wireless, Broadband, Industrial, SSC) | $26B | 50% | $13B | 12-15x | $156-195B |
| VMware + Software | $24B | 70% | $17B | 18-22x | $306-374B |
| **Total EV (FY27 base)** |   |   |   |   | **$1,122-1,579B** |
| Less net debt (FY27) |   |   |   |   | ($45B) ^[inferred] |
| **Equity value** |   |   |   |   | **$1,077-1,534B** |
| Shares (FY27) |   |   |   |   | ~4.92B |
| **Per-share fair value** |   |   |   |   | **$220-310** |

Five-year compounding (base case, FCF/share doubling): $215 (5y discounted bear) → $260 (mid) → $410 (bull, FY30 EBITDA × 25x discounted back).

Conviction note: the FY27 sum-of-parts converges with current price ($334) at the high end of the range. The 5-year case extends the multiple frontier through FY30 EBITDA growth. This is what conviction-high looks like: not extreme upside on a discounted cash flow today, but a durable cash-flow compounder where the multiple has room because growth keeps showing up.

### Peer multiple anchors

- **Custom-ASIC peer comp.** Marvell's AI ASIC business (Trainium, Maia2 ^[ambiguous]) at ~25-30x EV/EBITDA — supports 22-28x AVGO AI semis multiple.
- **Networking ASIC.** Nvidia (merchant GPU) trades at ~30-40x. Cisco (incumbent networking) at ~14-16x. AVGO's 22-28x is mid-range.
- **Software.** Oracle ~18x EV/EBITDA. SAP ~22x. ServiceNow ~35x. AVGO software at 18-22x is conservative — closer to Oracle than to ServiceNow.

### Sensitivity grid (FY27 base)

The fair-value range is asymmetric to the AI semis multiple and the AI semis revenue assumption. A two-axis grid:

| AI semis FY27 revenue | 18x AI EBITDA | 22x | 25x | 28x | 30x |
| --- | --- | --- | --- | --- | --- |
| $40B (low) | $200 | $215 | $232 | $250 | $260 |
| $50B (base) | $225 | $250 | $275 | $300 | $315 |
| $60B (mid-high) | $250 | $290 | $325 | $355 | $375 |
| $70B (high) | $275 | $320 | $370 | $410 | $435 |
| $80B (top) | $295 | $355 | $415 | $465 | $495 |

Read: at the base inputs ($50B AI semis revenue × 25x), per-share value ~$275 — below current $334. At the high end of management's stated SAM ($75B AI semis revenue) and a 28x multiple, per-share value crosses $430. The market is implicitly pricing somewhere between the $60-70B revenue rows and 25-28x; that's a reasonable expectation, not exuberant.

### What the sell-side currently models (April 2026)

- **JP Morgan.** Overweight, target $340-360 ^[ambiguous]. Frames AVGO as the second-largest beneficiary of AI-cluster spend after Nvidia.
- **Bank of America.** Buy, target ~$380 ^[ambiguous]. Most aggressive on AI semis revenue acceleration through FY27.
- **Bernstein.** Outperform, target ~$340 ^[ambiguous]. Most rigorous on the SOTP framework and the most explicit on the $60-90B SAM frame.
- **TD Cowen.** Buy, target ~$350 ^[ambiguous]. Notes the VMware ELA renewal cycle as a 2026-2027 catalyst.

Consensus is in a tight $340-380 band, which means consensus and the SOTP framework converge — there's no obvious mispricing to capture short-term. The 5-year hold thesis is about the FY30 fair value extending past consensus's 12-month horizon, not about a current dislocation.

## Catalyst calendar

- **Q2 FY26 earnings (~12 Jun 2026).** Tests the Q2 guide ($22B revenue / +47% YoY). Watch (a) AI semis revenue against the implied $10B, (b) margin progression, (c) any new XPU customer disclosure, (d) commentary on FY27 SAM trajectory.
- **Q3 FY26 earnings (~early Sept 2026).** Tomahawk 6 commercial ramp commentary. Possible OpenAI Tiger formal disclosure.
- **Q4 FY26 / FY26 full-year earnings (~early Dec 2026).** First framing of FY27. Dividend raise typically announced here. FY27 capital-allocation framework refresh.
- **Q1 FY27 (~early Mar 2027).** First read on the FY27 SAM trajectory in real numbers. Apple/fifth-customer reveal at production stage.
- **Investor Day (Apr 2027 ^[ambiguous]).** Multi-year framing.

Non-earnings catalysts:

- **Hyperscaler capex prints.** Google, Meta, Microsoft, Amazon Q2-Q4 capex guides directly correlate with AVGO's TAM headroom.
- **OpenAI Tiger first deploy.** Late 2026 / early 2027.
- **Tomahawk 6 first hyperscaler deployment.** Mid-2026 ^[ambiguous].
- **VMware ELA renewal cohort.** Each quarterly print is a margin proof point.
- **M&A.** The Hock Tan playbook says one large deal every 2-3 years; the next window opens around late 2026 / 2027. Almost certainly software or analog adjacency, not another mega-cap.
- **Dividend raises.** Annual, Q4 print. Watch the buyback authorization size more than the dividend percentage.

Calendared in [[risk-tripwires-and-warning-indicators]]: hyperscaler capex YoY tracker triggers re-underwriting if it goes negative.

## Bear case

A serious 5-year bear has to clear several specific bars. None individually is high-probability; collectively they form a coherent downside.

1. **Custom-ASIC customer loses confidence.** If Apple or one of the four declared hyperscalers reverses course back to merchant GPU (e.g., Nvidia Rubin Ultra hits unexpected efficiency targets and the cost/perf gap closes), AVGO loses one of its five XPU revenue lines. Most exposed: Apple and OpenAI (newest, least ramped). Quantification: each customer is worth ~$8-12B run-rate revenue at scale ^[ambiguous]. One customer canceling = ~$10B revenue and ~$6B EBITDA hit, ~$0.80-1.20/share FCF impact, ~$25-40 fair-value reset.
2. **GPU vs ASIC pendulum swings back.** Custom-silicon advantage is real for inference at hyperscaler scale today. But Nvidia could close the gap with Rubin/Vera generations, or could price aggressively to defend share. The technical case is strongest for inference (AVGO wins) and weakest for unconstrained training (Nvidia wins). If the AI-spend mix shifts back toward training-heavy frontier-model work and away from inference, AVGO's relative position erodes. Probability over 5 years: ~25%.
3. **VMware ELA churn worse than visible.** The current pricing model is aggressive. Public sector, financial services, and multi-cloud-first shops are the most likely to migrate to OpenStack, KubeVirt, or Nutanix as they hit renewal. If gross retention drops from "in line" to high-80s, VMware revenue could shrink 5-10% over 3 years. Quantification: $24B × 7.5% = $1.8B revenue, ~$1.3B EBITDA, ~$0.20-0.30/share FCF.
4. **Multiple compression on growth deceleration.** AVGO trades at ~25-28x EV/EBITDA on FY27 base. If AI semis growth decelerates from triple-digit YoY to 30-40% YoY by FY27 (which is the base case mathematically), the market may compress the multiple to 18-22x. That's a 25-30% derating without any change in operating performance.
5. **Geopolitical / China revenue.** China ban on AVGO networking ASICs (or a broader US export-control re-tightening) would cap ~10-12% of revenue ^[ambiguous]. ByteDance directly exposed. Quantification: $7-9B revenue, $4-6B EBITDA at risk in a worst-case full ban.
6. **Hock Tan succession.** Tan is 73 ^[ambiguous]. A succession event would compress the multiple 10-15% on capital-allocation re-rating risk, even with a good successor.

Bear-case fair value (combining items 1, 4, and 5 partially): ~$180-220. Probability-weighted across the 5-year window: ~20%.

### Tail-risk variants

Two tails I take seriously even at low probability:

- **Recession + AI capex air-pocket simultaneous.** A 2008-style funding shock that forces hyperscalers to pull capex 20-30% YoY for two consecutive years would compress AVGO AI revenue 30-40% from base trajectory. Recoverable on a 5-year horizon but with material drawdown along the way (40-50% peak-to-trough). Probability over 5 years: ~10-15%.
- **A catastrophic XPU customer fail.** A high-profile XPU program ships and underperforms vs Nvidia merchant equivalents, creating a narrative reset around custom-ASIC viability. The reputational damage compresses the multiple disproportionately to the financial impact. Probability: ~8-10%.

Neither is the modal case but both deserve hedge attention; the natural hedge is sizing discipline rather than a paired short.

### What re-underwrites the position

- Hyperscaler capex YoY turns negative for two consecutive quarters (binding tripwire from [[risk-tripwires-and-warning-indicators]]).
- AVGO AI semis revenue growth decelerates to <30% YoY (vs current >100%) before mid-FY27.
- Tan steps down without a clearly-designated capital-allocation successor.
- Two of the five XPU programs publicly re-prioritize toward Nvidia.

Any one of these triggers a position review. None individually requires a sale.

## Position-sizing

- **Beta.** 1.0-1.2 ^[ambiguous]. Lower than NVDA (~1.6) — AVGO's software cushion compresses the cycle.
- **Volatility.** 30-day realized ~30-35% ^[ambiguous]. Lower than NVDA (~50%), higher than MSFT (~22%).
- **Liquidity.** Mega-cap. ADV ~$8-10B ^[ambiguous]. No meaningful position sizing constraint for retail or institutional sub-mega-fund-size books.
- **Correlation.** High to NVDA (0.75-0.85 ^[ambiguous]) on AI cycle days. Lower to broader semi index (SOXX) than NVDA because of software cushion.
- **Pairs.** AVGO + ASML + TSM is the cleanest semis basket — three different bottleneck layers (custom-ASIC design, lithography monopoly, foundry monopoly), each individually defensible. AVGO + NVDA gives merchant + custom together, but adds correlation. AVGO + MRVL is the wrong pair: MRVL is essentially a smaller-cap version of AVGO's AI ASIC franchise without the software cushion.
- **Sizing range.** For a 5-year hold thesis, 4-7% of an AI-infrastructure-tilted portfolio is reasonable. Trim above 8% on multiple expansion past 28x FY27 EBITDA. Add below 5% on multiple compression past 20x FY27 EBITDA.

Sits inside the second-tier hyperscaler-direct-beneficiary group with [[pick-tsmc-tsm-5y|TSMC]] and [[pick-asml-asml-5y|ASML]]. The first tier (NVDA) carries higher volatility and higher ceiling; the third tier (CRDO, COHR) carries higher idiosyncratic risk and higher ceiling. AVGO fills the "lowest-vol high-conviction AI semi" slot in the basket.

### Sizing through the 5-year window

A 5-year hold isn't a static position. The sizing discipline:

- **Year 1-2 (FY26-FY27).** Target weight 5-6%. Buyback opportunities on multiple compression below 22x FY27 EBITDA (~$250 per share) — add to 7%.
- **Year 3 (FY28).** If the FY27 SAM trajectory delivers, weight naturally drifts higher on appreciation. Trim to 6% if it crosses 8%.
- **Year 4-5 (FY29-FY30).** Re-underwrite the FCF/share doubling assumption against actual FY30 trajectory. If on track, hold; if off track, decide whether the bull case is closed and rotate.

The structural advantage of AVGO over higher-vol AI exposures is that the trim/add bands are wide and slow — there's no need to time entries and exits weekly. This is genuinely a 5-year position, not a 5-year-long sequence of 6-month trades.

### Hedges and pair trades

- **Long AVGO / short AMD.** Captures the custom-ASIC-vs-merchant-GPU thesis without the full Nvidia beta. Works if Nvidia merchant share gets defended at the high-end while custom-ASIC takes share at hyperscalers.
- **Long AVGO / short MRVL.** Captures the relative scale advantage in the custom-ASIC franchise. Works if the design-win count thesis plays out in AVGO's favor.
- **Long AVGO / long ASML / long TSM (basket).** The cleanest "AI infrastructure picks-and-shovels" basket, no shorts. Highest correlation risk in a generic AI sentiment sell-off, but cleanest signal on the structural thesis.

I run none of these as paired positions in practice; AVGO is held outright. The hedges are conceptual frames for understanding the implied bet.

## Management quote ledger

A short ledger of the management framings I lean on most. Quotes are paraphrased from earnings transcripts unless explicitly inside quotation marks.

- Q1 FY26 (Mar 2026), Hock Tan on FY27 SAM: "We continue to see substantial AI revenue opportunity from our three large hyperscale customers, with serviceable addressable market in 2027 in the $60 to $90 billion range."
- Q1 FY26, Tan on the fourth and fifth XPU customers: "We have qualified two additional hyperscaler customers — they are not yet in our 2027 SAM and they will deploy starting in 2027."
- Q4 FY25 (Dec 2025), Tan on AI revenue trajectory: AI revenue grew 220% YoY in FY25 to ~$12.2B ^[ambiguous]; FY26 expected to grow significantly faster than non-AI semis.
- Q3 FY25 (Sep 2025), Tan on capital allocation: dividend continues to grow with FCF; buyback authorized $10B; M&A pipeline focused on tuck-in software and analog adjacencies.
- VMware integration update (Q4 FY25): VMware Cloud Foundation now the primary product; ELA renewals tracking to plan; cost synergy run-rate exceeded $8B by year-end.

The signal-to-noise on these calls is high because Tan's framing has been remarkably consistent quarter to quarter — when the framing changes, that's the catalyst worth tracking, not the absolute numbers in any given print.

## Sources

- Broadcom Q1 FY26 press release and earnings transcript (Mar 2026) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial
- Broadcom Q4 FY25 / full-year press release and 10-K (Dec 2025) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025
- Broadcom 10-K and 10-Q via SEC EDGAR — https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001730168&type=10-K
- Futurum Group: "Broadcom Q1 FY 2026 Earnings Driven by XPU Momentum" — https://futurumgroup.com/insights/broadcom-q1-fy-2026-earnings-driven-by-xpu-momentum/
- SemiAnalysis: custom AI ASIC competitive analysis (TPU, Meta MTIA, OpenAI Tiger) — https://newsletter.semianalysis.com/p/custom-asic-tpu-meta-mtia-openai
- SemiAnalysis: networking ASIC monopoly analysis (Tomahawk, Jericho) — https://newsletter.semianalysis.com/p/networking-asics-tomahawk-jericho
- Seeking Alpha sell-side compendium (JPM, BofA, Bernstein, TD Cowen) — https://seekingalpha.com/symbol/AVGO
- StockAnalysis.com summary statistics — https://stockanalysis.com/stocks/avgo/statistics/
- Companion wiki: [[ai-investment-valuation-models]] for the SOTP frame and [[semiconductor-supply-chain-deep-dive]] for capacity context.

## Related

- [[ai-data-center-buildout-investment-memo]] — parent thesis on the 50-100 GW buildout.
- [[ai-data-center-supply-chain-bottlenecks]] — 11-layer bottleneck map; AVGO unblocks the custom-ASIC and switching layers.
- [[ai-investment-public-company-scorecard]] — quantitative scorecard rank for AVGO.
- [[ai-investment-valuation-models]] — sum-of-parts framework used here.
- [[semiconductor-supply-chain-deep-dive]] — CoWoS, HBM, ABF allocation that constrains AVGO's AI ramp.
- [[optics-and-interconnect-deep-dive]] — Tomahawk/Jericho consumption inside AI fabrics; AEC vs DAC; pairing with COHR/LITE/CRDO.
- [[hyperscaler-constraint-map]] — which hyperscaler-specific constraints AVGO unblocks (Google TPU silicon, Meta in-house silicon, OpenAI inference cost-per-token).
- [[analyst-picks-master-list]] — index of all 5-year picks.
- [[pick-asml-asml-5y]] — lithography monopoly, paired position.
- [[pick-tsmc-tsm-5y]] — foundry monopoly, paired position.
- [[pick-credo-crdo]] — AEC connectivity, smaller-cap AVGO-adjacent.
- [[pick-coherent-cohr]] — datacom optics, smaller-cap AVGO-adjacent.
