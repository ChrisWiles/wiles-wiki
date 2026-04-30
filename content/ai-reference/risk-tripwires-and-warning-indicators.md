---
title: Risk tripwires and warning indicators for the AI buildout thesis
category: ai-reference
summary: Quantified, monitorable tripwires that convert qualitative AI buildout risks into pre-committed re-underwriting triggers across capex, memory, packaging, power, and credit.
tags:
  - ai
  - investing
  - risk-analysis
  - infrastructure
  - supply-chain
sources:
  - https://know.creditsights.com/insights/technology-hyperscaler-capex-2026-estimates/
  - https://introl.com/blog/hyperscaler-capex-690-billion-microsoft-azure-power-bottleneck-2026
  - https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html
  - https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/
  - https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/
  - https://www.trendforce.com/news/2025/12/08/news-tsmcs-cowos-l-s-reportedly-fully-booked-osat-partners-step-up-with-ases-cowop-in-focus/
  - https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/
  - https://www.cisa.gov/sites/default/files/2024-06/DRAFT_NIAC_Addressing%20the%20Critical%20Shortage%20of%20Power%20Transformers%20to%20Ensure%20Reliability%20of%20the%20U.S.%20Grid_Report_06052024_508c.pdf
  - https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-hits-100-gw-as-prices-rise/818332/
  - https://www.gevernova.com/news/press-releases/ge-vernova-reports-first-quarter-2026-financial
  - https://www.ferc.gov/news-events/news/ferc-directs-nations-largest-grid-operator-create-new-rules-embrace-innovation-and
  - https://www.utilitydive.com/news/ferc-doe-data-center-interconnection-pjm-backstop-auction/817804/
  - https://www.bloomberg.com/news/articles/2026-04-09/coreweave-tapping-junk-debt-market-after-meta-ai-computing-deal
  - https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2026
  - https://www.geekwire.com/2026/microsoft-tops-wall-street-expectations-reports-accelerating-azure-growth-and-37b-ai-run-rate/
  - https://www.tomshardware.com/tech-industry/artificial-intelligence/openais-massive-stargate-data-center-canceled-as-firm-cant-reach-terms-with-oracle-operator-struggles-with-reliability-issues-meta-said-to-be-interested-in-snatching-excess-capacity
  - https://www.fool.com/investing/2026/04/02/applied-digital-borrowed-2-billion-crwv-debt/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
---

This is investment research, not financial advice. It is a companion to [[ai-data-center-buildout-investment-memo]] and converts the qualitative risk section of that memo into pre-committed, monitorable tripwires.

## Framing

Every thesis needs falsifiers. The AI buildout thesis depends on four conditions holding simultaneously:

1. Hyperscalers continue to spend at or above current capex run-rates.
2. Accelerator, HBM, and advanced packaging scarcity persists.
3. Power, transformer, and electrical gear stay constrained on multi-year backlogs.
4. Inference economics improve gradually rather than collapsing faster than capacity gets absorbed.

Each of those is observable. The point of this page is to define, in advance, what level of what indicator forces a change in view, so that re-underwriting happens on data rather than on narrative or sentiment.

Each tripwire below has six fields: what to monitor, where to find it, current reading as of 2026-04-30, threshold for caution (start trimming exposure or rotating within buckets), threshold for thesis breakage (re-underwrite the bucket), and the trade response (which buckets are at risk first). Use the master table as a dashboard. Use the per-tripwire sections to interpret a flip.

The defaults assume the [[ai-data-center-buildout-investment-memo]] base case of a 50-100 GW AI capacity build over coming years and the supply-chain shape captured in [[ai-data-center-supply-chain-bottlenecks]]. If the base case shifts, the thresholds need to be re-set, not the framework.

## Master tripwire table

| # | Indicator | Source | Current reading (2026-04-30) | Caution | Breakage | First buckets at risk |
|---:|---|---|---|---|---|---|
| 1 | Combined hyperscaler capex YoY | MSFT, AMZN, GOOGL, META, ORCL filings | ~$690B 2026 guide, +36% YoY ^[extracted] | <20% YoY | Two consecutive QoQ declines | Accelerators, electrical, power gen |
| 2 | HBM contract pricing QoQ | TrendForce, DRAMeXchange, Micron/SKH decks | HBM3E +20% for CY26, fully booked ^[extracted] | -10% QoQ | -25% QoQ | Memory (MU, SKH, Samsung) |
| 3 | TSMC CoWoS expansion | TSMC quarterly + SemiAnalysis | Targeting 120-130k wpm exit 2026 from ~75-80k ^[extracted] | TSMC slows expansion plan | TSMC cuts CoWoS capex guide | Accelerators, optics, ABF |
| 4 | LPT lead time | Wood Mackenzie, utility 10-Ks | ~128 wks LPT, ~144 wks GSU ^[extracted] | Drop to 80 wks | Drop to 60 wks | Electrical equipment, EPC |
| 5 | Gas turbine slot reservations | GEV, SIE, MHI disclosures | GEV backlog 100 GW Q1 26, sold out to 2030 ^[extracted] | Backlog flattens 2 quarters | Slot prices retreat | Power gen, fuel-cell, gensets |
| 6 | Large-load tariff / moratoria count | FERC, SEPA, state PUCs | 60+ LLT proposals tracked by SEPA ^[extracted] | 3+ ISOs adopt LLT in 12 mo | National moratorium proposal advances | Power-first sites, neoclouds |
| 7 | Neocloud credit spreads | TRACE, CRWV/APLD bonds, CDS | CRWV 9.75% 2031 priced Apr 26; CDS doubled since Oct 25 ^[extracted] | +200 bps in a quarter | +400 bps or new issue fails | Neoclouds, GPU lessors |
| 8 | AI revenue per deployed GPU | MSFT AI ARR, OAI ARR, hyperscaler disclosures | MSFT $37B AI run rate, +123% YoY ^[extracted] | Sequential decline | Two quarters of decline | Accelerators, hyperscaler equity |
| 9 | Inference cost decline | Provider price sheets, Artificial Analysis | GPT-4-class ~$0.40/Mtok vs $20 in late 22 ^[extracted] | >10x tokens/$ in 12 mo | >20x in 12 mo without volume offset | Accelerators (vendor revenue), neoclouds |
| 10 | NVDA data-center revenue QoQ | NVDA quarterly | $39.1B Q1 FY26, +10% QoQ, +73% YoY ^[extracted] | Flat QoQ | Sequential decline | Accelerators, optics, memory |
| 11 | Hyperscaler capex mix shift | Earnings calls, capex disclosures | Mix tilting toward inference but training still funded ^[inferred] | Explicit guidance shift | Two hyperscalers cut training capex | Training-tilted names, HBM |
| 12 | Cluster announcement slips | Stargate, xAI, Anthropic, Meta press | Stargate Abilene 600 MW expansion scrapped Mar 26 ^[extracted] | One major slip | Two hyperscalers slip in 6 mo | Power-first sites, neoclouds |

Indicators 1, 8, and 10 are demand-side falsifiers. Indicators 2, 3, 4, and 5 are supply-side scarcity confirmations. Indicators 6, 7, and 12 are execution and financing risk. Indicators 9 and 11 are economics and mix shifts. A coherent re-underwriting requires at least one signal from two different categories — a demand-side flip alone is sentiment; a supply-side flip alone is mean reversion; the combination is structural.

Cross-tripwire interactions worth pre-flagging:

- **Indicator 1 flipping with indicator 10 in the same quarter** is the most powerful combined signal. If combined hyperscaler capex decelerates and NVDA data-center revenue declines QoQ together, treat that as a thesis-level event regardless of any other green readings.
- **Indicator 7 flipping while indicator 5 stays green** is the cleanest "neocloud-only" failure mode. Hyperscalers continue building, but private operators lose access to capital. Trim neoclouds and GPU lessors; do not trim power-gen or electrical.
- **Indicator 9 flipping with indicator 8 holding** is the benign case: cheaper inference is driving more usage. Add to inference-tilted exposures rather than trimming.
- **Indicator 4 flipping with indicator 5 holding** is the most likely electrical-specific reversion. The grid catches up faster than power generation does, because LPT capacity is more reproducible than turbine capacity.

## 1. Combined hyperscaler capex YoY growth

- **What to monitor**: trailing-four-quarter combined capex of MSFT + AMZN + GOOGL + META + ORCL, plus forward guidance commentary and capex-to-revenue ratios at each name.
- **Where**: each company's 10-Q capex line, segment commentary, analyst day decks, and CreditSights / Janus Henderson aggregate trackers.
- **Current reading (2026-04-30)**: 2026 consensus around $690B combined, roughly +36% YoY over 2025 and the third consecutive year of >60% growth on some estimates ^[extracted]. AI infrastructure is roughly 75% of the total ^[extracted]. Capex-to-sales sits near 86% at Oracle, 54% Meta, 47% Microsoft, 46% Google, 25% Amazon ^[extracted].
- **Caution**: combined YoY growth slowing below 20%, or capex-to-sales pulling back at any single hyperscaler by more than 500 bps in a quarter.
- **Breakage**: two consecutive quarters of QoQ decline in combined capex with corroborating earnings language ("digesting capacity," "rebalancing," "extending useful life").
- **Trade response**: this is the single most important top-of-funnel signal. A break here re-rates accelerators, HBM, electrical, and power gen simultaneously. Trim accelerators first because they have the most multiple to lose; electrical and power gen lag by one to two quarters because their backlogs cushion near-term revenue.

## 2. HBM contract pricing direction

- **What to monitor**: HBM3E and HBM4 contract pricing trajectory and whether suppliers signal mid-contract resets, plus server DRAM spot and contract spreads as a leading indicator.
- **Where**: TrendForce, DRAMeXchange, primary investor decks from Micron, SK hynix, Samsung, and earnings call commentary on customer mix.
- **Current reading (2026-04-30)**: Samsung and SK hynix raised HBM3E prices ~20% for CY26; Micron's CY26 HBM is fully booked including HBM4; HBM4 carries a reported ~50% premium to HBM3E on Nvidia deals ^[extracted]. Server DRAM contracts reportedly priced 60-70% higher in early 2026 ^[extracted]. SK hynix Q1 26 operating margin hit 72% ^[extracted].
- **Caution**: -10% QoQ on the HBM3E contract index, or any major supplier discloses unfilled HBM4 capacity.
- **Breakage** (memory thesis specifically): -25% QoQ, signaling structural HBM tightness has flipped to commodity DRAM dynamics.
- **Trade response**: a memory-specific break does not necessarily break the broader thesis. Rotate from MU / SKH / Samsung into electrical and power buckets, which are less sensitive to the memory cycle. Watch for hyperscaler language about "rebalancing memory commitments" or pulling forward HBM4 in lieu of HBM3E.

## 3. CoWoS capacity utilization

- **What to monitor**: TSMC's disclosed CoWoS wafer/month exit targets and reported utilization, ASE / Amkor advanced packaging commentary, and any signal that NVDA is shifting allocation between CoWoS-S, CoWoS-L, CoWoS-P, or to OSAT alternatives like ASE CoWoP.
- **Where**: TSMC quarterly call and capex disclosure, SemiAnalysis, TrendForce, ASE earnings, Bernstein and Goldman semi notes.
- **Current reading (2026-04-30)**: TSMC targeting 120-130k CoWoS wafers/month exit 2026 from approximately 75-80k entering the year; CoWoS-L/S reportedly fully booked, with NVDA holding >60% of capacity ^[extracted]. OSAT partners are stepping up via CoWoP and other variants ^[extracted].
- **Caution**: TSMC slows the planned CoWoS expansion path or pushes the 130k target into 2027.
- **Breakage**: TSMC cuts CoWoS capex guidance, or reports utilization below 90% on the expanded capacity, or a major customer relinquishes allocation.
- **Trade response**: a slowdown without a utilization break is a positive sign for accelerators (less risk of overbuild) but neutral-to-negative for the packaging supply chain. A utilization break is unambiguously bad for accelerators, optics, and ABF substrate. ASE and Amkor are the clearest packaging proxies; SUMCO and Shin-Etsu the substrate proxies.

## 4. Transformer lead times

- **What to monitor**: lead times on large power transformers (LPTs) and generator step-up units (GSUs), the spread between U.S.-built and imported lead times, and grain-oriented electrical steel (GOES) pricing.
- **Where**: Wood Mackenzie quarterly surveys, T&D World, utility 10-Ks, NIAC large transformer reports, DOE LPT resilience report, EEI member commentary.
- **Current reading (2026-04-30)**: LPT lead times averaging ~128 weeks and GSU lead times ~144 weeks per Wood Mackenzie 2Q25 survey, versus a pre-2020 baseline closer to 50-80 weeks ^[extracted]. Power Magazine projects 2026 demand will exceed 2024 by 21% for LPTs and 16% for GSUs ^[extracted].
- **Caution**: LPT lead times falling below 80 weeks (reverting toward 2019 norms), or two consecutive Wood Mac surveys showing sequential improvement.
- **Breakage** (electrical thesis): LPT lead times below 60 weeks; transformer scarcity is normalizing and pricing power evaporates.
- **Trade response**: this is the cleanest electrical-bucket-specific signal. Trim Eaton, Hubbell, Powell, and GOES exposure first; transformer OEM margins compress fastest when backlog visibility shrinks. MV switchgear and PDU names are second-order and lag by one to two quarters.

## 5. Gas turbine slot reservations

- **What to monitor**: GE Vernova, Siemens Energy, and Mitsubishi Power gas turbine backlog in GW, slot reservation count, reservation-to-firm-order conversion rate, and any commentary on slot pricing.
- **Where**: GEV, SIE, MHI quarterly results, investor day disclosures, Utility Dive and Reuters reporting on individual large orders.
- **Current reading (2026-04-30)**: GEV backlog reached 100 GW in Q1 2026, up from 83 GW at end-2025, with management guiding 110+ GW by year-end and slots sold through 2030 ^[extracted]. GEV is targeting 20 GW annualized production by mid-2026, with stretch capacity to 24 GW by mid-2028 ^[extracted]. Q1 26 orders were +71%, backlog $163B ^[extracted].
- **Caution**: backlog flattens for two consecutive quarters or slot reservation prices retreat from current premium levels.
- **Breakage**: any of GEV, SIE, MHI guides backlog down, or slot reservation prices decline in two consecutive quarters, or a major hyperscaler reverses a previously announced turbine order.
- **Trade response**: gas turbine softening hits power-gen first (GEV, SIE, MHI), then bleeds into engines (CAT, CMI), fuel cells (BE), and modular gas (Solaris). Power-first site valuations also compress because their scarcity premium relies on the same time-to-power problem.

## 6. Utility moratoria and large-load tariff outcomes

- **What to monitor**: count of states or utilities adopting restrictive large-load tariffs (LLTs), FERC actions on co-location and large-load interconnection, and any state-level moratoria on data center construction.
- **Where**: FERC orders, SEPA large-load tracker, state PUC dockets, ISO filings (PJM, ERCOT, MISO, SPP, ISO-NE, NYISO, CAISO), Utility Dive and Engineering News-Record reporting.
- **Current reading (2026-04-30)**: SEPA tracking 60+ large-load tariff filings ^[extracted]. FERC ordered PJM in December 2025 to develop co-location rules with PJM tariff filings due by January 17, 2026 and informational reports through February 16, 2026 ^[extracted]. FERC plans to act on DOE's broader large-load interconnection reforms in June 2026 ^[extracted].
- **Caution**: 3+ ISOs adopting restrictive LLTs within 12 months, or any single tariff that materially shifts cost-allocation onto large-load customers.
- **Breakage**: a federal moratorium proposal advancing in Congress, or two of the top three data-center states (Virginia, Texas, Georgia) imposing build pauses, or FERC denying co-location at scale.
- **Trade response**: regional re-rating. Power-first operators in restricted regions (PJM zone) compress; operators in permissive regions (ERCOT West, MISO South, SPP) re-rate up. Hyperscalers with diversified site portfolios outperform pure-play neoclouds. Cross-reference [[us-power-region-deep-dive]] for region weights.

## 7. Neocloud credit spreads

- **What to monitor**: option-adjusted spreads on CRWV, APLD, and CORZ bonds versus comparable Treasuries, CDS where available, and equity-implied volatility and preferred yields as proxies. Watch primary-market reception on each new issue.
- **Where**: TRACE, MarketAxess, Bloomberg, S&P, Moody's, equity options markets, Cbonds, BondbloX.
- **Current reading (2026-04-30)**: CoreWeave priced $1.75B of senior notes at 9.75% in October 2025 and added $1B more in April 2026; the existing 9.25% 2030 note carries a Z-spread of roughly 538 bps ^[extracted]. CRWV CDS more than doubled from October 2025 to early 2026 ^[extracted]. APLD added $2.15B at 6.75% backed by an Oracle lease ^[extracted]. S&P maintains B+ on CRWV with positive outlook ^[extracted]. CRWV total debt approximately $21B, APLD approximately $5B ^[extracted].
- **Caution**: spreads widen 200 bps in a quarter, or a primary issuance prices at the wide end of guidance with order-book reduction.
- **Breakage**: spreads widen 400 bps in a quarter, or any neocloud fails to clear a primary issuance, or a covenant breach is disclosed.
- **Trade response**: financing risk concentrates in pure-play GPU lessors first. A break here means CRWV, APLD, and second-tier neoclouds get re-priced; hyperscalers absorb workloads at distressed prices and the second-order beneficiaries thesis [[second-order-beneficiaries-ranked]] gets a temporary headwind. Diligence template lives in [[neocloud-and-power-first-operator-diligence]].

## 8. AI revenue per deployed GPU

- **What to monitor**: hyperscaler AI revenue divided by a rough estimate of installed accelerator base, or the change in AI ARR per dollar of cumulative AI capex. Track OpenAI, Anthropic, and xAI ARR as model-layer proxies.
- **Where**: Microsoft AI run-rate disclosure, Google Cloud AI commentary, Meta GenAI revenue color, OpenAI ARR leaks via The Information, SemiAnalysis installed-GPU estimates.
- **Current reading (2026-04-30)**: Microsoft reported a $37B annualized AI run rate at FYQ3 26, +123% YoY, with $190B 2026 capex guide ^[extracted]. ARR per cumulative AI capex dollar is the better ratio and is roughly stable to slightly compressing ^[inferred]. Azure growth around 40% supported by AI workloads exceeding capacity ^[extracted].
- **Caution**: AI ARR growth decelerates below capex growth for two consecutive quarters at any of MSFT, GOOGL, META.
- **Breakage**: outright sequential decline in AI ARR at any hyperscaler, or hyperscalers begin disclosing accelerated depreciation on AI fleet.
- **Trade response**: this is the demand-side falsifier. A break here means inference economics are softening and accelerator unit demand follows. Trim accelerators and hyperscaler equity; rotate to second-order beneficiaries that are paid regardless of utilization (electrical, gas turbines, transformers).

## 9. Inference cost decline curve

- **What to monitor**: tokens-per-dollar trajectory for frontier and frontier-minus-one models across providers, the spread between flagship and discount-tier pricing, and the cadence of price cuts.
- **Where**: Artificial Analysis, provider price sheets (OpenAI, Anthropic, Google, DeepSeek), vendor earnings call commentary on token volumes.
- **Current reading (2026-04-30)**: GPT-4-class capability available at roughly $0.40/Mtok versus $20/Mtok in late 2022, a ~50x decline in roughly three years ^[extracted]. Claude Opus 4.7 starts at $5/$25 input/output per Mtok; GPT-5.2 input at $1.75/Mtok; GPT-5 nano at $0.05/$0.40 ^[extracted]. Anthropic dropped Opus pricing 67% with the Opus 4.5 transition ^[extracted].
- **Caution**: tokens/$ improving more than 10x year over year (good for usage but increases pressure on vendor revenue per GPU).
- **Breakage**: tokens/$ improving more than 20x year over year without commensurate volume growth, indicating vendor revenue compression rather than usage expansion.
- **Trade response**: ambiguous. Falling inference cost expands usage and is good for the buildout overall, but is bad for vendor revenue per GPU. The trade is to rotate from GPU sellers to tokens-consumed beneficiaries (application-layer, data, observability, energy per token) when this tripwire flips. The signal is most useful read together with #8 (ARR per capex dollar).

## 10. NVDA data-center revenue trajectory

- **What to monitor**: NVIDIA data-center segment revenue quarterly, the split between compute and networking, and any commentary on visibility, allocation, or sell-through to second-tier customers.
- **Where**: NVDA quarterly press release, CFO commentary, supplemental financials, conference call.
- **Current reading (2026-04-30)**: $39.1B in Q1 FY26, +10% QoQ and +73% YoY, with $34.2B compute and $5.0B networking ^[extracted]. Q2 FY26 guide of $45B inclusive of approximately $8B H20 export-control headwind ^[extracted]. A $4.5B H20 inventory and purchase-obligation charge was taken in Q1 ^[extracted].
- **Caution**: flat QoQ for two consecutive quarters absent disclosed export-control headwinds.
- **Breakage**: an outright sequential decline in data-center revenue not attributable to a one-time export item, or a guide-down on the next quarter beyond known export effects.
- **Trade response**: this is the cleanest single-stock proxy for the entire thesis. A break here is a peak signal for accelerators, HBM, optics, and ABF substrate. The electrical and power buckets lag but follow within two to four quarters. Networking and optics names (ANET, CIEN, COHR, FN) move with the networking segment specifically.

## 11. Hyperscaler capex mix shifting from infrastructure to inference

- **What to monitor**: the qualitative split between training-cluster capex and inference-fleet capex in earnings call language, and any explicit shift toward shorter useful-life inference accelerators (custom ASICs, lower-spec GPUs). Watch useful-life assumption changes for AI assets in 10-Qs.
- **Where**: hyperscaler earnings calls, capital allocation commentary, ASIC announcements (Trainium, TPU, Maia, MTIA), 10-Q footnotes.
- **Current reading (2026-04-30)**: language still skews toward training and frontier-model infrastructure but inference-fleet capex is growing faster off a smaller base ^[inferred]. Custom ASIC programs at AMZN and GOOGL continue ramping; META MTIA generations continue to expand ^[inferred].
- **Caution**: an explicit guidance shift at one of the four cloud hyperscalers toward "more inference, less training" with a numerical mix attached, or a useful-life extension on AI assets.
- **Breakage**: two of the four explicitly cut training-cluster capex year over year, or any hyperscaler discloses sub-leasing surplus training capacity.
- **Trade response**: training-tilted exposures (HBM, NVL72, leading-edge networking) compress first; inference-tilted exposures (custom ASICs, lower-power CPUs, edge accelerators) hold up. Memory is the most exposed bucket because training is HBM-intensive in a way inference is not. Optics tilt mixed: training drives NVL72 inter-rack, inference is more pluggable.

## 12. AI training cluster size announcements

- **What to monitor**: announced cluster sizes and schedules for Stargate, xAI Colossus, Anthropic compute commitments, and Meta's GW-scale builds. Track cancellations, deferrals, downsizing, and operator changes.
- **Where**: company press releases, OpenAI / Oracle filings, satellite imagery analysis via SemiAnalysis, Tom's Hardware reporting, DCD, FERC interconnection queue updates.
- **Current reading (2026-04-30)**: Oracle and OpenAI scrapped a 600 MW Abilene expansion in March 2026, although the broader 4.5 GW agreement remains intact ^[extracted]. OpenAI is moving toward a leased-capacity model and using "Stargate" as an umbrella term ^[extracted]. xAI Colossus 2 satellite imagery suggests approximately 350 MW of cooling capacity versus 1 GW public claims ^[extracted]. Crusoe / Oracle reliability incidents (winter cooling outages) reported in early 2026 ^[extracted].
- **Caution**: one major hyperscaler slip on a flagship cluster within a quarter, or any new "umbrella term" framing that suggests previously firm commitments are flexible.
- **Breakage**: two hyperscalers slip flagship clusters within six months, or any hyperscaler publicly cancels a previously committed multi-GW build, or a frontier lab pivots from owned capacity to fully leased.
- **Trade response**: power-first operators with the affected hyperscaler as anchor tenant compress hardest, then neoclouds dependent on that hyperscaler's offtake. Diversified power-gen exposure holds up better than site-specific exposure. Cross-reference [[neocloud-and-power-first-operator-diligence]] when a cluster slip lands.

## How to use this page

- **Rebuild as a one-page dashboard** with twelve cells, one per tripwire, color-coded green / yellow / red against the caution and breakage thresholds in the master table. Update each cell with the date of the latest reading and the source link.
- **Review monthly** for slow-moving signals (capex, transformer lead times, moratoria) and at each earnings cycle for company-specific signals (NVDA, MSFT, GEV, MU).
- **Require multiple flips before re-allocating**. At least two tripwires red, or one red plus three yellows, drawn from different categories (demand / supply / financing / economics). Single-tripwire breaks are noise more often than signal in a market this momentum-driven; the value of a pre-committed framework is exactly to resist the pressure to react to one-off prints.
- **Log each review** with the date, readings, and any decision taken, so the framework can be audited against subsequent outcomes. Pre-commitment without a log degrades into post-hoc rationalization.
- **Sequence trims by bucket sensitivity**, from earliest to latest re-rating on a thesis break: neoclouds and GPU lessors first, then accelerators and HBM, then optics and ABF, then power-first operators, then electrical equipment, and finally power generation. Use that order to sequence trims regardless of which tripwire flipped.
- **Re-set thresholds** if the underlying base case changes. Thresholds calibrated to a 50-100 GW build are too lax for a 30 GW base case and too tight for a 200 GW base case.

## Anti-tripwires (signals that strengthen the thesis)

Symmetry matters. Pre-commit to up-sizing exposure on the following confirmations, on the same monthly cadence:

- **Combined hyperscaler capex revised up mid-year** at two or more of MSFT / GOOGL / META / AMZN / ORCL.
- **HBM4 contract pricing prints above the reported ~50% premium to HBM3E**, or HBM5 sampling timeline pulled in.
- **TSMC raises CoWoS exit-2026 target above 130k wpm**, or files an additional advanced-packaging fab.
- **LPT lead times extend further beyond 128 weeks**, or a major OEM (HD Hyundai, Hitachi, Siemens Energy T&D, GE Prolec) sells out a new line at announcement.
- **Gas turbine slot reservations sell out beyond 2030** at GEV, or SIE / MHI book multi-year frame agreements with hyperscalers.
- **FERC affirms broad co-location rights** in the June 2026 ruling without restrictive caveats.
- **NVDA data-center revenue prints above guide** with backlog disclosure or visibility extension.
- **Hyperscalers extend useful-life assumptions** on AI assets only modestly while raising capex (suggests demand absorbs depreciation extensions).

When two anti-tripwires fire together with no live tripwire flips, the framework supports adding to the most-constrained bucket on that read (memory if HBM, electrical if LPT, power gen if turbines).

The asymmetry to respect: thesis-breakage signals tend to be lumpy and discrete (a single quarterly print), while strengthening signals tend to be incremental and continuous. Apply more weight to a single broken tripwire than to any one anti-tripwire, but require the multi-signal rule before acting in either direction.

A second asymmetry: thresholds are set against company filings and trade-press readings, which are themselves lagging by weeks to a quarter. The CDS, equity-implied vol, and bond-spread signals in indicator #7 tend to lead the rest by one to two months, which is why financing risk is the canary even though it is not the largest exposure. When neocloud spreads widen materially without an obvious idiosyncratic cause, raise the surveillance frequency on the other eleven tripwires from monthly to weekly.

## Region and sector cross-references

- Power region cuts: see [[us-power-region-deep-dive]] for ERCOT vs PJM vs MISO sensitivity to indicators #4, #5, and #6.
- Electrical bucket detail: see [[electrical-equipment-deep-dive]] for transformer, switchgear, and busway exposure to indicator #4.
- Semis stack: see [[semiconductor-supply-chain-deep-dive]] for HBM, CoWoS, and ABF substrate exposure to indicators #2, #3, and #10.
- Optics and interconnect: see [[optics-and-interconnect-deep-dive]] for the networking lag relative to indicator #10.
- Public-name scoring: see [[ai-investment-public-company-scorecard]] for the per-name exposure used to translate a tripwire flip into specific trims.
- Hyperscaler-specific exposure mapping: see [[hyperscaler-constraint-map]] for which hyperscaler is most exposed to each indicator (e.g. ORCL most exposed to indicator #1 via capex-to-sales, MSFT most exposed to indicator #8 via AI ARR disclosure).
- Neocloud and power-first operator diligence template: see [[neocloud-and-power-first-operator-diligence]] for the underwriting questions to revisit when indicators #6, #7, or #12 flip.

A final note on discipline: the value of pre-committing thresholds is forfeited the moment any single threshold gets adjusted in response to a near-miss. If a reading lands inside the caution band, the response is more frequent monitoring, not threshold relaxation. The thresholds here can be revised on a quarterly cadence with a written rationale, and not otherwise.

One operational suggestion: pair each tripwire to a single named owner — even in a one-person research workflow, owning the read forces accountability for surfacing it on time.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[hyperscaler-constraint-map]]
- [[us-power-region-deep-dive]]
- [[electrical-equipment-deep-dive]]
- [[semiconductor-supply-chain-deep-dive]]
- [[optics-and-interconnect-deep-dive]]
- [[neocloud-and-power-first-operator-diligence]]
- [[second-order-beneficiaries-ranked]]
