---
title: AI investment valuation models
category: ai-reference
summary: Per-name research valuation frameworks (sum-of-parts NAV, DCF, backlog-multiple, replacement value) for the highest-conviction AI buildout names.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - supply-chain
sources:
  - https://finance.yahoo.com/quote/ETN/
  - https://stockanalysis.com/stocks/etn/statistics/
  - https://www.gevernova.com/news/press-releases/ge-vernova-reports-first-quarter-2026-financial
  - https://investors.vertiv.com/news/default.aspx
  - https://www.fool.com/earnings/call-transcripts/2026/04/22/vertiv-vrt-q1-2026-earnings-transcript/
  - https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-first-quarter-fiscal-year-2026-financial
  - https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-results-second-quarter-fiscal-2026
  - https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q1-fy-2026.html
  - https://stockanalysis.com/stocks/cohr/
  - https://stockanalysis.com/stocks/lite/
  - https://investors.credosemi.com/news-events/news/news-details/2025/Credo-Technology-Group-Holding-Ltd-Reports-Second-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx
  - https://investors.quantaservices.com/
  - https://www.tikr.com/blog/comfort-systems-stock-climbs-47-in-2026-as-data-center-demand-drives-record-11-94-billion-backlog
  - https://stockanalysis.com/stocks/crwv/
  - https://www.stocktitan.net/sec-filings/CLF/10-q-cleveland-cliffs-inc-quarterly-earnings-report-106203e067f2.html
  - https://stockanalysis.com/stocks/ceg/
  - https://stockanalysis.com/stocks/powl/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.4
  inferred: 0.5
  ambiguous: 0.1
---

This is investment research, not financial advice. Nothing on this page is a buy, sell, hold, or price target. Each section below shows what a structured valuation framework outputs given disclosed inputs and stated assumptions. The fair-value ranges are the mechanical result of those frameworks, not Chris's view of where any stock should trade. Every input is sourced where possible and marked `^[ambiguous]` where it is not.

The companion pages — [[ai-investment-public-company-scorecard]] for ranked exposure, [[ai-data-center-buildout-investment-memo]] for thesis, [[ai-data-center-supply-chain-bottlenecks]] for the supply chain map — provide the qualitative context. This page is the bottom-up complement: pick a methodology that fits each business, list the inputs, run the math, and surface the assumption that would flip the conclusion.

## Methodology cheat sheet

**Sum-of-parts NAV.** Apply a peer-group EBITDA multiple to each segment's last-twelve-months or run-rate EBITDA, sum, subtract net debt, divide by diluted shares. Best fit when segments are heterogeneous (Aerospace vs Vehicle vs Electrical) or when one segment trades at a structurally higher multiple than the corporate average. Sensitivities: which peer set defines each multiple, whether you use trailing or forward EBITDA, and whether you give credit for backlog above and beyond the EBITDA already baked in.

**DCF.** Project ~5-7 years of revenue and operating margin, terminal-year EBITDA times a terminal multiple (or Gordon-growth on free cash flow), discount at WACC. Best fit for businesses with stable cash flows and a credible long runway (Vertiv, Credo, Broadcom semis). Sensitivities: terminal margin, discount rate, terminal multiple, and the implicit assumption that AI capex doesn't air-pocket. Most of DCF value typically lives in the terminal — be explicit about that.

**Backlog × through-cycle margin × multiple.** For project businesses, backlog is the most reliable forward indicator. Convert backlog to revenue assuming a burn rate, apply through-cycle EBITDA margin, multiply by a peer multiple. Best fit for Quanta, Comfort Systems, Powell, and the EPC/contractor names. Sensitivities: burn rate, margin compression risk if a project mix turns adverse, and whether the cycle peaks before backlog converts.

**Replacement value / contracted-NAV.** Sum the depreciated replacement cost of the asset base (GPU fleet, nuclear units, power plants) plus NPV of contracted revenue, subtract net debt. Best fit for asset-heavy operators where book value diverges sharply from earnings (CoreWeave, Constellation). Sensitivities: discount rate on long-dated cash flows, residual value assumptions on GPUs (notoriously aggressive), and contract counterparty risk.

The numbers below mix these methods deliberately: every name gets the framework that fits its disclosure, not a uniform DCF.

## Eaton (ETN) — sum-of-parts NAV

Methodology: sum-of-parts. Five segments: Electrical Americas, Electrical Global, Aerospace, Vehicle, eMobility. Electrical Americas warrants a premium multiple given data-center backlog dynamics; Aerospace trades at aerospace peers; Vehicle and eMobility deserve cyclical/growth multiples respectively.

Inputs (FY2025 close):
- Total revenue ~$25B, total adjusted EBITDA ~$6.45B ^[extracted].
- Electrical Americas backlog $13.2B, Q4 2025 segment margin 29.8% ^[extracted].
- Shares outstanding ~388M ^[extracted]. Net debt ~$9.9B ^[extracted].
- Current price (2026-04-28): $406.01 ^[extracted].

Segment EBITDA estimate (research split, ^[inferred] from disclosed margins applied to estimated segment revenue):
- Electrical Americas: ~$3.0-3.3B EBITDA at ~28-30% margin.
- Electrical Global: ~$1.0-1.2B EBITDA at ~18-20% margin.
- Aerospace: ~$0.8-0.9B EBITDA at ~24% margin.
- Vehicle: ~$0.4B EBITDA, eMobility: small loss.

Multiples (peer set: Schneider, Hubbell, ABB for Electrical; HEICO, TDG for Aerospace; Cummins for Vehicle):
- Electrical Americas: 22-26x EBITDA (data-center premium).
- Electrical Global: 15-18x.
- Aerospace: 18-22x.
- Vehicle/eMobility: 8-10x blended.

Calculation: sum of segment EVs ~$95-115B, less net debt $9.9B, divide by 388M shares.

Fair-value range: **$220-275 per share** (low/mid/high $220 / $245 / $275, ^[inferred]).

Implied vs current $406: framework outputs a meaningful discount to current. The street is paying for accelerating Electrical Americas margin and backlog conversion above the multiples used here. Sensitivity: every additional turn of multiple on the Electrical Americas $3B EBITDA adds roughly $8/share. If the segment runs at $4B EBITDA on the data-center mix shift and earns 28x, the framework output crosses $400.

Key sensitivity: the Electrical Americas EBITDA run-rate by 2027-2028. If hyperscaler orderbooks pull through-cycle EBITDA toward $5B in that segment alone, the bottom-up math closes the gap to the current price.

See [[electrical-equipment-deep-dive]] for the segment thesis and peer set.

## Powell Industries (POWL) — backlog × margin × multiple

Methodology: backlog-driven multiple framework. Powell is a single-segment electrical business; the cleanest valuation is backlog × through-cycle margin × peer multiple, plus net cash.

Inputs:
- Record backlog $1.60B, book-to-bill 1.7x, Q1 FY26 orders $439M ^[extracted].
- Cash ~$500.8M, minimal debt ^[extracted].
- Shares outstanding (post 3-for-1 split, April 2026): ~36M (market cap ~$9.24B / $258 price) ^[extracted].
- Current price (2026-04-30): $258.00 ^[extracted].

Calculation:
- Burn $1.60B backlog over ~18-24 months at ~15-17% EBITDA margin (recent peak was higher; through-cycle is lower) → ~$240-270M run-rate EBITDA.
- Apply 18-26x EBITDA (peer set: Hubbell premium, Eaton Electrical Americas implied multiple): EV $4.3-7.0B.
- Add net cash $500M, divide by ~36M shares.

Fair-value range: **$135-210 per share** (low $135 / mid $170 / high $210, ^[inferred]).

Implied vs current $258: framework output sits below current. Powell's recent multiple expansion (data-center megaproject narrative, LNG continuation) is doing the work the framework treats as a sensitivity.

Key sensitivity: durability of >$400M quarterly orders. If POWL holds book-to-bill above 1.3x for another four quarters, through-cycle EBITDA settles above the framework's mid. If LNG cools and data-center share doesn't compensate, the through-cycle multiple compresses to the low-end and the framework's fair-value bottom anchors.

See [[electrical-equipment-deep-dive]] and [[hyperscaler-constraint-map]] for backlog interpretation.

## GE Vernova (GEV) — sum-of-parts NAV

Methodology: sum-of-parts. Three segments — Power, Wind, Electrification — with structurally different multiples.

Inputs:
- 2026 revenue guide $44.5-45.5B, adjusted EBITDA margin 12-14%, FCF $6.5-7.5B ^[extracted].
- Backlog $163B (incl. Prolec) ^[extracted].
- Shares outstanding 268.7M ^[extracted].
- Cash $10.2B; minimal long-term debt → net cash position ~$9-10B ^[extracted].
- Current price (2026-04-30): $1,069.44 ^[extracted].

Segment-level (^[inferred] EBITDA splits applied to disclosed margin range):
- Power (gas, nuclear, hydro): ~$3.0-3.5B EBITDA at ~16-18% margin on ~$19B revenue.
- Electrification: ~$1.8-2.2B EBITDA at ~15-18% margin on ~$12B revenue, growing fastest.
- Wind: ~$0.3-0.6B EBITDA at low single-digit margin (Gamesa-style cyclical recovery, but better than Siemens) on ~$11B revenue.

Multiples (peers: Siemens Energy GS, Mitsubishi Heavy for Power; Eaton/Hubbell for Electrification; Vestas/Nordex for Wind):
- Power: 16-22x (turbine scarcity premium).
- Electrification: 22-28x (data-center mix).
- Wind: 8-12x.

Calculation: segment EV sum $115-160B, plus net cash $10B, divide by 268.7M shares.

Fair-value range: **$465-635 per share** (low $465 / mid $545 / high $635, ^[inferred]).

Implied vs current $1,069: substantial gap. The market is underwriting Power EBITDA toward $5-6B by 2028 and Electrification toward $3-4B, both at premium multiples. The framework here is anchored to the 2026 guide. If you flex Power EBITDA to $5B at 22x and Electrification to $3.5B at 26x, the framework crosses $700-750 — still below market, suggesting the street is also pricing a 2030+ run-rate.

Key sensitivity: gas turbine lead-time premium durability. If gas turbine backlog stays multi-year, Power earns peak-cycle margins for longer and the multiple holds. If hyperscalers shift faster to behind-the-meter nuclear or solar/storage, Power normalizes earlier.

See [[electrical-equipment-deep-dive]] and [[us-power-region-deep-dive]].

## Siemens Energy (ENR.DE) — sum-of-parts NAV

Methodology: sum-of-parts. Four segments: Gas Services, Grid Technologies, Transformation of Industry, Siemens Gamesa (Wind). Gamesa is the swing factor — historically a value destroyer, now turning.

Inputs:
- FY26 raised guide: Gas Services revenue +16-18%, profit margin 14-16%; Grid Technologies revenue +25-27%, profit margin 18-20% ^[extracted].
- Trailing EBITDA €4.37B, forward consensus ~€6.3B ^[extracted].
- Current price (2026-04-30): €175.26 ^[extracted].
- Share count and net debt as of latest filing ^[ambiguous] — Siemens Energy's pension and Gamesa-related warranty provisions complicate "net debt"; published statutory net debt understates economic obligations and analysts dispute the right adjustment.

Calculation (using forward EBITDA €6.3B, segment-weighted):
- Gas Services ~€2.5B at 16-20x = €40-50B.
- Grid Technologies ~€2.5B at 22-28x = €55-70B (data-center grid premium).
- TI ~€0.8B at 12-15x = €10-12B.
- Gamesa ~€0.3-0.5B at 8-10x = €3-5B (option value, large discount to peer).

Sum EV €108-137B, less ^[ambiguous] economic net debt (€5-10B range), divide by ~830M shares.

Fair-value range: **€124-153 per share** (low €124 / mid €138 / high €153, ^[ambiguous] given net-debt and Gamesa-warranty uncertainty).

Implied vs current €175: framework output below current. Market is paying for further Grid Technologies multiple expansion and a clean Gamesa.

Key sensitivity: Gamesa warranty/quality cost run-rate. The framework treats Gamesa as ~breakeven option value; if it slips back to material losses, the negative drag on group EBITDA forces the multiple of the rest to do more work.

See [[electrical-equipment-deep-dive]].

## Vertiv (VRT) — DCF with margin expansion

Methodology: DCF on the AI/DC infrastructure thesis. Vertiv has clean disclosure, growing organically at 20%+, and consensus expects margin expansion.

Inputs:
- FY26 guide: revenue $13.5-14.0B, adjusted operating margin 23.3%, EPS $6.30-6.40 ^[extracted].
- Q1 FY26: revenue $2.65B (+30% YoY), adjusted EBITDA $578M (21.8% margin) ^[extracted].
- Shares outstanding ~384M ^[extracted].
- Net debt ^[ambiguous] — recent filings indicate net debt approximately $2.5-3B but precise Q1 2026 figure not pulled here.
- Current price: $305.03 (2026-04-28) ^[extracted].

DCF assumptions:
- Revenue: $14B (2026) → ~25% growth in 2027 → tapering to 12% by 2030 → 6% terminal.
- EBITDA margin: 23% → 26% by 2029 (operating leverage on liquid cooling, rack-level power, services mix).
- 2030E EBITDA: ~$7.5-8.5B.
- Discount rate: 9.5% WACC.
- Terminal multiple: 18-22x EBITDA (peer: data-center infrastructure premium).

Calculation: PV of explicit-period FCF + PV of terminal value, less net debt, divide by 384M shares.

Fair-value range: **$220-310 per share** (low $220 / mid $265 / high $310, ^[inferred]).

Implied vs current $305: framework upper bound near current. The market is pricing Vertiv at the high end of this DCF, which requires hitting the 26% terminal margin and the 22x terminal multiple.

Key sensitivity: terminal margin. Every 100 bps of terminal EBITDA margin moves fair value by roughly $25-30/share. If liquid cooling commoditizes, terminal margin sits at 22-23% and the framework's mid drops to ~$230. If services and software mix lifts margin to 28%, framework crosses $350.

See [[ai-data-center-supply-chain-bottlenecks]] and [[hyperscaler-constraint-map]].

## Micron (MU) — through-cycle EBITDA + HBM premium

Methodology: through-cycle EBITDA with an HBM premium overlay. Memory is cyclical; valuation collapses if you use peak EBITDA at peak multiple.

Inputs:
- FY2026 consensus revenue ~$109B (^[extracted] — this is the upgraded sell-side number; treat as upper bound).
- Q2 FY26 revenue $23.86B ^[extracted].
- HBM TAM trajectory: ~$35B (2025) → ~$54.6B (2026) → ~$100B (2028) ^[extracted].
- Current price (2026-04-26): $506.99 (52-week high) ^[extracted]. Price as of late April 2026: ~$485-507 ^[ambiguous].
- Shares outstanding ~1.12B ^[ambiguous] (consensus figure; verify against 10-Q).
- Net debt ~$5-7B ^[ambiguous] — Micron raised debt to fund HBM capex.

Calculation:
- Through-cycle EBITDA (50/50 weight of peak ~$45B and trough ~$5-8B): ~$25-27B.
- Peak EBITDA on FY26 run-rate (^[inferred] from $109B revenue at ~40% margin): ~$43B.
- HBM-only contribution: ~$12-15B EBITDA at premium multiples (15-20x because contracted) = $200-300B segment EV.
- Commodity DRAM/NAND through-cycle: ~$10-12B EBITDA at 6-8x = $60-95B segment EV.

Sum: $260-395B EV, less net debt, divide by ~1.12B shares.

Fair-value range: **$225-345 per share** (low $225 / mid $285 / high $345 on through-cycle framework, ^[inferred]). On peak-of-cycle EBITDA at peak multiples, the math crosses $500 — the current quote is a peak-on-peak number.

Implied vs current ~$500: through-cycle framework outputs deep discount; peak framework agrees with current. Which framework you trust is the entire investment debate.

Key sensitivity: HBM contracts. Micron has stated calendar 2026 HBM is sold out at agreed prices. If the same holds for 2027, the "premium" portion compounds and the through-cycle framework should be reweighted toward peak. If HBM4/HBM4E supply normalizes by mid-2027, peak EBITDA reverts and the through-cycle math binds.

See [[semiconductor-supply-chain-deep-dive]].

## Coherent (COHR) — sum-of-parts NAV

Methodology: sum-of-parts. Three segments: Networking (datacom optics), Materials, Lasers. Networking carries the AI/DC premium.

Inputs:
- Datacenter business +36% YoY, +14% QoQ ^[extracted].
- Latest reported quarter: revenue +22% YoY excluding A&D divestiture ^[extracted].
- Current price (2026-04-30): $314.50 ^[extracted].
- Shares, net debt ^[ambiguous] — pending Q3 FY26 release on May 6, 2026; using last-disclosed figures of ~155M shares and net debt ~$4.5B, both `^[ambiguous]` until refreshed.

Calculation (^[inferred] segment EBITDA splits):
- Networking: ~$0.9-1.1B EBITDA on ~$3.5B revenue → 22-28x = $20-30B.
- Materials: ~$0.4-0.5B EBITDA → 12-16x = $5-8B.
- Lasers: ~$0.3-0.4B EBITDA → 10-14x = $3-6B.

Sum EV $28-44B, less net debt ~$4.5B, divide by ~155M shares.

Fair-value range: **$150-255 per share** (low $150 / mid $200 / high $255, ^[ambiguous] pending share/debt refresh).

Implied vs current $314: framework output below current. Market is pricing further Networking margin expansion plus a higher multiple as 1.6T transceivers ramp.

Key sensitivity: 800G/1.6T transceiver share retention vs new entrants (Lumentum, Eoptolink, Innolight). Coherent must hold gross margin even as volume scales. Plus debt paydown trajectory.

See [[optics-and-interconnect-deep-dive]].

## Lumentum (LITE) — sum-of-parts NAV

Methodology: sum-of-parts. Cloud & Networking, Telecom, Industrial. Cloud & Networking is now >60% of revenue and growing 65%+ YoY.

Inputs:
- Q2 FY26 revenue $665.5M (+65.5% YoY); Q3 FY26 guide $780-830M (+85% YoY) ^[extracted].
- Optical Circuit Switch backlog >$400M ^[extracted].
- Current price (2026-04-30): $887.00 ^[extracted].
- Market cap $61.28B → shares ~69M ^[extracted].
- Net debt ^[ambiguous] — Lumentum carries convertible debt; treat $1.5-2B net as a placeholder.

Calculation (^[inferred]):
- Cloud & Networking: $2.0-2.2B run-rate revenue × ~20% EBITDA margin = $400-450M EBITDA × 28-35x (datacom optics premium) = $11-16B segment EV.
- Telecom: $0.7-0.8B revenue × ~15% margin = ~$110M EBITDA × 12-15x = $1.3-1.7B.
- Industrial/3D sensing: $0.4B revenue × ~10% margin = $40M EBITDA × 10x = $0.4B.

Sum EV $13-18B, less net debt ~$1.5-2B, divide by 69M shares.

Fair-value range: **$165-235 per share** (low $165 / mid $200 / high $235, ^[ambiguous] given debt placeholder).

Implied vs current $887: framework output is dramatically below market. The market is pricing Cloud & Networking EBITDA toward $1B+ with a 35-45x multiple — i.e., assuming OCS plus 1.6T plus EML laser dominance for several years.

Key sensitivity: OCS adoption rate inside hyperscaler fabrics. If Google/Meta/AWS standardize on Lumentum OCS at scale, the segment math triples and the framework output approaches market. If OCS stalls in pilot, the framework binds.

See [[optics-and-interconnect-deep-dive]].

## Credo Technology (CRDO) — DCF on AEC/PCIe/DSP

Methodology: DCF. Credo's revenue is exploding off a small base; sum-of-parts is too granular. DCF lets you make explicit assumptions about saturation and competition.

Inputs:
- Q3 FY26 revenue $407M (+201% YoY); TTM revenue $1.07B (+226%) ^[extracted].
- Current price (2026-04-29): $173.66 ^[extracted].
- Shares outstanding ~175M ^[ambiguous] (estimate; refresh from latest 10-Q).
- Net cash position (no significant debt) ^[ambiguous].

DCF assumptions:
- FY27 revenue: ~$2.0-2.4B (continued AEC + PCIe retimer + DSP ramp).
- FY28 revenue: ~$3.0-3.5B.
- FY30 revenue: ~$4.5-5.5B (assuming AEC TAM hits $4B by 2028 and Credo holds 50%+ share, plus PCIe/DSP).
- Operating margin: 25% (FY27) → 32% (FY30) as opex leverages.
- 2030E EBITDA: ~$1.5-1.8B.
- Discount rate: 11% (higher reflecting customer concentration and competitive intensity from Astera, Marvell).
- Terminal multiple: 22-28x EBITDA.

Calculation: PV of period + terminal, divide by 175M shares.

Fair-value range: **$135-215 per share** (low $135 / mid $175 / high $215, ^[inferred]).

Implied vs current $174: framework mid roughly aligns with current price.

Key sensitivity: AEC competitive intensity. If Astera scales AEC and PCIe retimers cut Credo's share to 35-40% and pricing compresses 20%, FY30 EBITDA drops to $1.2B and fair-value mid moves to ~$130. If Credo extends into optical DSP at scale, fair-value high crosses $250.

See [[optics-and-interconnect-deep-dive]] and [[semiconductor-supply-chain-deep-dive]].

## Broadcom (AVGO) — sum-of-parts: Semis + VMware

Methodology: sum-of-parts. Semiconductor Solutions (AI XPU + Networking + Wireless + Industrial) and Infrastructure Software (VMware + legacy CA/Symantec). The two segments deserve different multiples.

Inputs:
- TTM revenue ~$68.3B ^[extracted].
- Q1 FY26 AI revenue $8.4B (+106% YoY); Q2 FY26 guide ~$22B revenue (+47% YoY) ^[extracted].
- Shares outstanding 4.888B ^[extracted].
- Cash $14.17B, debt $66.06B, net debt ~$51.9B ^[extracted].
- Current price (late April 2026): $333.97 ^[extracted].

Calculation (^[inferred]):
- AI XPU + AI networking: ~$45-55B run-rate revenue by FY27 at ~60% operating margin → ~$28-33B EBITDA × 22-28x (custom-silicon scarcity premium) = $620-925B segment EV.
- Non-AI semis (Wireless, Broadband, Industrial): ~$28B revenue at ~50% margin → ~$14B EBITDA × 12-15x = $170-210B.
- VMware + Software: ~$24B revenue at ~70% operating margin → ~$17B EBITDA × 18-22x = $305-375B.

Sum EV $1,095-1,510B, less net debt $52B, divide by 4.888B shares.

Fair-value range: **$215-300 per share** (low $215 / mid $260 / high $300 on this framework, ^[inferred]).

Implied vs current $334: framework outputs a discount unless you (a) push AI semis revenue toward the $80B run-rate that some bulls model, or (b) apply a 30x+ multiple to AI semis EBITDA. With $80B AI semis revenue at 60% margin and 25x, the framework crosses $400.

Key sensitivity: ASIC vs Nvidia merchant GPU mix. The bull case requires ASICs taking a structural share at multiple hyperscalers. If two of the four confirmed hyperscaler customers reduce ASIC orders (cost or roadmap), AI semis EBITDA stalls and the framework binds at the mid.

See [[semiconductor-supply-chain-deep-dive]].

## Quanta Services (PWR) — backlog × through-cycle margin

Methodology: backlog × through-cycle margin × peer multiple. Quanta is essentially a long-duration utility EPC business with a data-center growth overlay.

Inputs:
- Backlog $48.5B (record) ^[extracted].
- Current price (April 2026): ~$628-639 ^[extracted].
- Shares outstanding ~146M ^[ambiguous] (latest 10-K estimate).
- Net debt ^[ambiguous] — increased post-Cupertino/M&A; estimate $4-5B.

Calculation:
- Burn $48.5B backlog over ~30 months at ~10-11% adjusted EBITDA margin → ~$5.5-6.5B run-rate EBITDA.
- Peer multiples (MasTec, EMCOR, Dycom): 14-20x.
- Apply blended 16-19x: EV $90-125B.
- Less net debt $4-5B; divide by 146M shares.

Fair-value range: **$580-820 per share** (low $580 / mid $700 / high $820, ^[inferred]).

Implied vs current $628: framework mid above current; the framework supports ~10-30% upside if backlog burns at the through-cycle margin and the multiple holds.

Key sensitivity: utility customer concentration plus margin discipline as labor costs run hot. Quanta's moat is a unionized skilled-labor pipeline; pricing power depends on its retention, not just backlog.

See [[us-power-region-deep-dive]] and [[electrical-equipment-deep-dive]].

## Comfort Systems (FIX) — backlog × margin × multiple

Methodology: backlog × margin × multiple. FIX is the cleanest data-center mechanical/electrical pure-play disclosure: 56% of revenue from advanced technology (predominantly data centers).

Inputs:
- Record backlog $12.45B (^[extracted]; previously cited $11.94B); $5.3B higher YoY same-store.
- Q1 2026 revenue $2.87B (+56% YoY), EPS $10.51 (vs $4.75 prior year, $6.81 consensus) ^[extracted].
- 56% of revenue from advanced technology / data centers ^[extracted].
- Current price (April 2026): ~$1,796 ^[extracted].
- Shares outstanding ~35M ^[ambiguous].
- Net cash position (low debt) ^[ambiguous].

Calculation:
- Burn $12.45B backlog over ~18-24 months at ~12-14% EBITDA margin (above historical because of mix) → ~$1.4-1.7B run-rate EBITDA.
- Multiple: 22-30x (data-center mix premium vs IES, Limbach, EMCOR peer set; FIX has earned the premium).
- EV $30-50B, plus net cash, divide by 35M shares.

Fair-value range: **$870-1,450 per share** (low $870 / mid $1,150 / high $1,450, ^[inferred]).

Implied vs current $1,796: framework output below current. The market is pricing margin expansion above 14% (FIX has hit it on mix, but it requires the data-center share to keep climbing) plus a 30x+ multiple — i.e., near-software valuations on a mechanical contractor.

Key sensitivity: durability of the 56% advanced-tech mix and whether the cycle peaks before backlog burns. If data-center share holds at 56-65% and EBITDA settles at 14-15% margin, the framework's high becomes the mid. If the cycle peaks before backlog converts, EBITDA reverts to historical 8-9% and the framework collapses.

See [[ai-data-center-supply-chain-bottlenecks]].

## CoreWeave (CRWV) — contracted MSA NPV + GPU fleet replacement value

Methodology: contracted-NAV plus replacement value, less debt. CoreWeave is uninvestable on traditional EBITDA multiples (negative reported earnings, massive depreciation); the only serious framework is contracted revenue NPV plus depreciated replacement value of the GPU fleet.

Inputs:
- TTM revenue $5.13B; FY26 guide $12-13B (~140% YoY) ^[extracted].
- Contracted backlog $66B ^[extracted].
- Total debt $29.82B; D/E ratio 8.94x ^[extracted].
- Current price: $113.90; market cap $62.62B ^[extracted].
- Shares outstanding ~550M ^[inferred] from market cap and price.

Calculation:
- NPV of contracted MSAs: $66B nominal over ~5-7 years, ~70% gross margin, ~50% EBITDA margin (after opex) → ~$33B undiscounted EBITDA. Discount at 12% (reflecting customer concentration: OpenAI/Microsoft/Meta) over a 6-year average duration: ~$22-25B PV.
- GPU fleet replacement value: estimated 350-450k Hopper/Blackwell GPU equivalents at a depreciated replacement cost of ~$25-35B ^[ambiguous].
- Real estate / lease obligations: net of long-term lease liabilities ^[ambiguous].
- Sum NAV: $47-60B.
- Less debt $29.82B, divide by 550M shares.

Fair-value range: **$30-55 per share** (low $30 / mid $42 / high $55, ^[ambiguous]).

Implied vs current $114: framework output deeply below current. Market is pricing rapid contracted-backlog growth beyond $66B, GPU residual values above the framework's depreciated replacement assumption, and the ability to refinance the $30B debt stack at lower rates.

Key sensitivity: GPU residual value and contract counterparty stickiness. If Microsoft/OpenAI renew contracts at higher pricing as Blackwell scales, NPV rises. If a customer consolidates training in their own data centers, contracts churn and the debt stack becomes existential.

See [[neocloud-and-power-first-operator-diligence]] and [[risk-tripwires-and-warning-indicators]].

## Constellation Energy (CEG) — nuclear PPA NPV + merchant + new builds

Methodology: NPV of contracted nuclear PPAs + merchant power option value + small new-build/SMR option value, less debt. Calpine acquisition (closed Jan 2026) adds gas and geothermal.

Inputs:
- Owns the largest U.S. nuclear fleet (~22 GW pre-Calpine).
- Calpine acquisition closed January 2026 for $16.4B; adds ~27 GW gas, geothermal, and battery ^[extracted].
- Calpine signed a 380 MW agreement with CyrusOne; total CyrusOne relationship >1,100 MW ^[extracted].
- Nuclear PTC floor: $40-43.75/MWh inflation-adjusted ^[extracted].
- Current price (2026-04-30): $297.00 ^[extracted].
- Shares outstanding ~315M ^[ambiguous].
- Net debt post-Calpine: ~$25-30B ^[ambiguous].

Calculation:
- Nuclear contracted/PTC-floor NAV: 22 GW × 8,000 hours × $50-65/MWh average realized × 30% margin × 15-25 year duration, discounted at 7%: ~$50-70B PV ^[inferred].
- Calpine gas + geothermal NAV: ~$25-35B PV (discounted, accounting for fuel and dispatch risk) ^[inferred].
- Hyperscaler-PPA premium (Microsoft TMI, Meta, Google contracts above merchant): incremental ~$10-20B option value ^[inferred].
- Sum: $85-125B EV.
- Less net debt $25-30B, divide by 315M shares.

Fair-value range: **$190-300 per share** (low $190 / mid $245 / high $300, ^[ambiguous]).

Implied vs current $297: framework high near current. Bull case (more hyperscaler PPAs at $80-100/MWh, SMR new-build optionality) pushes above range.

Key sensitivity: PPA pricing on the next tranche of hyperscaler contracts. If new contracts re-rate to $90-110/MWh (consistent with TMI restart pricing), nuclear NAV expands materially. If political pressure caps PPA pricing, the framework binds.

See [[us-power-region-deep-dive]] and [[hyperscaler-constraint-map]].

## Cleveland-Cliffs (CLF) — sum-of-parts including GOES premium

Methodology: sum-of-parts. Carbon steel commodity business + auto exposure + GOES electrical-steel premium. CLF is the sole U.S. domestic GOES producer — that segment merits a different multiple.

Inputs:
- Q1 2026 revenue $4.92B; Q1 GAAP net loss $229M; adjusted loss $0.40/share ^[extracted].
- Long-term debt $7.763B; cash $45M; net debt ~$7.72B ^[extracted].
- Shares outstanding 570.4M ^[extracted].
- Current price (2026-04-28): $9.76 → ~$10.22 ^[extracted].
- DOE awarded $19M for "electric steel" plant expansion (Butler) ^[extracted].

Calculation:
- Carbon steel + auto: through-cycle EBITDA ~$1.5-2.5B at 5-7x (peer: NUE, STLD, X), but apply higher discount for auto cycle exposure → $7.5-15B EV.
- GOES (grain-oriented electrical steel): estimated $300-500M revenue, ~25-35% EBITDA margin given monopoly pricing on data-center transformer steel → $80-150M EBITDA × 12-15x (specialty alloy multiple) = $1.0-2.2B segment EV.
- NOES (non-oriented): ~$200-400M EBITDA contribution, 8-10x → $1.6-4.0B.

Sum EV $10-21B, less net debt $7.72B, divide by 570.4M shares.

Fair-value range: **$4-22 per share** (low $4 / mid $13 / high $22, ^[ambiguous] given wide cyclical EBITDA range and uncertain GOES segment disclosure).

Implied vs current ~$10: framework's range straddles current. CLF is the rare name where the bottom-up math suggests the market is pricing fairly — within a wide cyclical band.

Key sensitivity: GOES pricing power and capacity expansion. If transformer-steel demand from data-center/grid buildout sustains $1,500+/ton premium pricing for 3+ years and Butler scales, the GOES segment alone is worth $3-5B and lifts fair-value mid materially. If imports re-enter under tariff exemptions, the premium evaporates.

See [[electrical-equipment-deep-dive]] and [[us-power-region-deep-dive]].

## Cross-cutting observations

**Where multiple expansion is doing the heavy lifting.** ETN, GEV, FIX, AVGO, LITE all show framework outputs meaningfully below market on conservative through-cycle inputs. In every case the gap closes only if you (a) push EBITDA toward 2027-2028 run-rate, and (b) hold a premium multiple at or above peer-group highs. That's a defensible thesis for the businesses with the strongest scarcity (gas turbines for GEV, switchgear for ETN, datacom optics for LITE) but it stacks two assumptions in series. Read the gap as "what the market is implicitly betting on", not as a mispricing claim.

**Where the framework agrees with market.** Vertiv, Credo, Constellation, Cleveland-Cliffs all sit roughly in or near the framework's range at current prices. These are the names where bottom-up NAV and street consensus align — meaning the marginal investor agrees with the disclosed-input math. Disagreements would have to come from a different view of the inputs (e.g., terminal margin for VRT, GOES pricing for CLF, PPA pricing for CEG).

**Where the spread between street consensus and bottom-up NAV is widest.** CRWV is the extreme: framework outputs $30-55, market $114. Even with aggressive contracted-NAV and replacement-value assumptions, you cannot close the gap without modeling >$120B of contracted backlog in 24 months and zero refinancing risk. LITE is the second-widest: framework $165-235, market $887 — explained only by extraordinary OCS adoption assumptions. AVGO is wide but defensible: $215-300 framework vs $334 market closes if AI semis revenue runs at $80B+ run-rate.

**Where balance-sheet assumptions matter most.** CRWV (debt is the entire question), Siemens Energy (Gamesa warranty provisions and pension obligations beyond statutory net debt), Constellation (Calpine-deal debt and post-deal cap structure), and Coherent (deleveraging trajectory). For each, the share count or net debt input drives more variance than the multiple choice.

**The peer-multiple debate.** Three names — ETN Electrical Americas, FIX, POWL — collectively force the question of whether data-center exposed contractors and electrical equipment makers should trade at industrial multiples (12-18x), at IT-services multiples (22-28x), or at software multiples (30x+). The frameworks above use the middle band. The bull case is that the buildout is durable enough that the upper band is right; the bear case is that one cycle softening pulls them back to the lower band.

## Methodology limits

**Stale consensus inputs.** Several names report on different fiscal calendars; the inputs above mix latest-quarter actuals with FY26 guidance. For Coherent and Lumentum, key disclosures (May 2026 prints) post-date this page. Refresh inputs after each quarter.

**Cyclical-trough vs through-cycle EBITDA.** For Micron, Cleveland-Cliffs, and partly Powell, the choice between trough EBITDA, peak EBITDA, and through-cycle EBITDA materially changes the answer. The frameworks above lean toward through-cycle except where contracts (Micron HBM 2026 sold-out) justify reweighting toward peak. Be transparent about which weight you choose.

**ASIC vs Nvidia merchant mix risk in AVGO.** The Broadcom framework gives substantial credit to AI semis growing past $50-60B revenue. That requires multiple hyperscaler ASIC programs running concurrently. If even one program de-prioritizes ASIC in favor of Nvidia merchant supply, AVGO's framework binds 20%+ below current.

**Neocloud terminal value.** CoreWeave's contracted-NAV framework rests on assumptions about contract renewal pricing, GPU residual values, and refinancing capacity. All three are unobservable on a 5-7 year horizon. The framework's range is genuinely wide; treat it as a directional sanity check, not a target.

**Multiple stacking.** Several frameworks (LITE, FIX, AVGO) require both above-trend EBITDA and above-peer multiples to hit the high end. Stacking two optimistic assumptions in series materially reduces the probability the framework hits its high — even if each assumption is individually plausible.

**Non-EBITDA distortions.** Eaton's pension and Cleveland-Cliffs' legacy retiree obligations, Siemens Energy's Gamesa warranties, and Constellation's nuclear decommissioning trusts are all real economic claims that trade off against the EBITDA the frameworks credit. Sophisticated bottom-up work would adjust for these; this page does not, and so should be read as a directional framework.

**No DCF on cyclicals.** The page deliberately avoids DCF on Micron, CLF, and similar cyclicals because terminal-margin assumptions in cyclical businesses are typically the modeler's prior in disguise. Sum-of-parts with explicit through-cycle EBITDA is more honest — at the cost of being less precise.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[electrical-equipment-deep-dive]]
- [[semiconductor-supply-chain-deep-dive]]
- [[optics-and-interconnect-deep-dive]]
- [[neocloud-and-power-first-operator-diligence]]
- [[second-order-beneficiaries-ranked]]
- [[hyperscaler-constraint-map]]
- [[us-power-region-deep-dive]]
- [[risk-tripwires-and-warning-indicators]]
