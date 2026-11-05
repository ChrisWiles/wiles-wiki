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
  - https://www.fool.com/investing/2026/08/03/microsoft-and-amazon-won-the-ai-spending-week/
  - https://www.datacenterdynamics.com (Moody's hyperscaler capex forecasts marked up toward $1T by 2027)
  - https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/
  - https://www.trendforce.com/news/2025/12/18/news-micron-hikes-capex-to-20b-with-2026-hbm-supply-fully-booked-hbm4-ramps-2q26/
  - https://trendforce.com (HBM Industry Analysis 3Q26, 2026-08-05)
  - https://www.trendforce.com/news/2025/12/08/news-tsmcs-cowos-l-s-reportedly-fully-booked-osat-partners-step-up-with-ases-cowop-in-focus/
  - https://trendforce.com (TSMC CoWoS supply-demand gap narrowing from 20% to 10% by end-2026, 2026-06-15)
  - https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/
  - https://www.cisa.gov/sites/default/files/2024-06/DRAFT_NIAC_Addressing%20the%20Critical%20Shortage%20of%20Power%20Transformers%20to%20Ensure%20Reliability%20of%20the%20U.S.%20Grid_Report_06052024_508c.pdf
  - https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-hits-100-gw-as-prices-rise/818332/
  - https://www.utilitydive.com/news/ge-vernova-in-9b-deal-to-buy-high-voltage-manufacturer-as-gas-turbine-orde/873223/
  - https://www.sec.gov/Archives/edgar/data/0001996810/000199681026000162/gevpressrelease3q26.htm
  - https://www.ferc.gov/news-events/news/ferc-directs-nations-largest-grid-operator-create-new-rules-embrace-innovation-and
  - https://www.utilitydive.com/news/ferc-doe-data-center-interconnection-pjm-backstop-auction/817804/
  - https://wtop.com/virginia/2026/08/scc-orders-dominion-to-develop-tariff-to-assign-more-transmission-costs-to-data-centers/
  - https://www.bloomberg.com/news/articles/2026-04-09/coreweave-tapping-junk-debt-market-after-meta-ai-computing-deal
  - https://roic.ai (AI debt fears surge as tech default insurance hits record highs, 2026-10-15)
  - https://roic.ai (CoreWeave CDS narrows to lowest in over a week but credit stress persists, 2026-10-27)
  - https://cryptobriefing.com (CoreWeave's debt stress tests private credit's AI financing boom, Oct 2026)
  - https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2026
  - https://www.geekwire.com/2026/microsoft-tops-wall-street-expectations-reports-accelerating-azure-growth-and-37b-ai-run-rate/
  - https://www.tomshardware.com/tech-industry/artificial-intelligence/openais-massive-stargate-data-center-canceled-as-firm-cant-reach-terms-with-oracle-operator-struggles-with-reliability-issues-meta-said-to-be-interested-in-snatching-excess-capacity
  - https://www.fool.com/investing/2026/04/02/applied-digital-borrowed-2-billion-crwv-debt/
  - https://lavx.hu (Musk's Colossus 1 repurposed for Anthropic inference as xAI pivots to Colossus 2, May 2026)
  - https://technobezz.com (OpenAI's Stargate data center project stalls amid partner disputes)
created: 2026-04-30
updated: 2026-11-05
provenance:
  extracted: 0.5
  inferred: 0.35
  ambiguous: 0.15
---

This is investment research, not financial advice. It is a companion to [[ai-data-center-buildout-investment-memo]] and converts the qualitative risk section of that memo into pre-committed, monitorable tripwires.

## Framing

Every thesis needs falsifiers. The AI buildout thesis depends on four conditions holding simultaneously:

1. Hyperscalers continue to spend at or above current capex run-rates.
2. Accelerator, HBM, and advanced packaging scarcity persists.
3. Power, transformer, and electrical gear stay constrained on multi-year backlogs.
4. Inference economics improve gradually rather than collapsing faster than capacity gets absorbed.

Each of those is observable. The point of this page is to define, in advance, what level of what indicator forces a change in view, so that re-underwriting happens on data rather than on narrative or sentiment.

Each tripwire below has six fields: what to monitor, where to find it, current reading as of 2026-11-05, threshold for caution (start trimming exposure or rotating within buckets), threshold for thesis breakage (re-underwrite the bucket), and the trade response (which buckets are at risk first). Use the master table as a dashboard. Use the per-tripwire sections to interpret a flip.

The defaults assume the [[ai-data-center-buildout-investment-memo]] base case of a 50-100 GW AI capacity build over coming years and the supply-chain shape captured in [[ai-data-center-supply-chain-bottlenecks]]. If the base case shifts, the thresholds need to be re-set, not the framework.

## Master tripwire table

| # | Indicator | Source | Current reading (2026-11-05) | Caution | Breakage | Status | First buckets at risk |
|---:|---|---|---|---|---|---|---|
| 1 | Combined hyperscaler capex YoY | MSFT, AMZN, GOOGL, META, ORCL filings | FY2026 combined capex now tracking $805-828B, above the original $690B guide; 2027 projections toward $1.0-1.1T ^[extracted] | <20% YoY | Two consecutive QoQ declines | **GREEN — strengthening** | Accelerators, electrical, power gen |
| 2 | HBM contract pricing QoQ | TrendForce, DRAMeXchange, Micron/SKH decks | TrendForce reversed its 2026 oversupply call; slight HBM3E ASP increase through 2026, HBM4 logic-die prices up ~40-50% for 2027 contracts; Micron 75%+ of FY2027 HBM supply already committed ^[extracted] | -10% QoQ | -25% QoQ | **GREEN** | Memory (MU, SKH, Samsung) |
| 3 | TSMC CoWoS expansion | TSMC quarterly + SemiAnalysis | Exit-2026 target raised to 120-140k wpm (from 120-130k); supply-demand gap narrowing from ~20% to ~10% by year-end ^[extracted] | TSMC slows expansion plan | TSMC cuts CoWoS capex guide | **GREEN — on/ahead of plan** | Accelerators, optics, ABF |
| 4 | LPT lead time | Wood Mackenzie, utility 10-Ks | GSU and LPT lead times surpassed 160 weeks (up from ~128-144 wks in April) ^[extracted, moderate corroboration] | Drop to 80 wks | Drop to 60 wks | **GREEN — strengthening** | Electrical equipment, EPC |
| 5 | Gas turbine slot reservations | GEV, SIE, MHI disclosures | GEV gas equipment under contract 122 GW (from 116 GW), 130+ GW guided YE'26; slot reservations fell 63→58 GW as they convert to firm orders; quarterly backlog growth decelerated to +6 GW vs. double-digit GW/qtr in 1H'26, with mgmt guiding 2027 order growth "solid… but not at the H1 2026 pace" ^[extracted] | Backlog flattens 2 quarters | Slot prices retreat | **CAUTION-WATCH** — one quarter of deceleration, not yet the two-consecutive-quarter trigger | Power gen, fuel-cell, gensets |
| 6 | Large-load tariff / moratoria count | FERC, SEPA, state PUCs | FERC's PJM co-location proceeding advanced through Jan/Feb, Apr, and Jun 2026 compliance/rehearing orders; FERC also accepted an Expedited Interconnection Track and Model Tariff Order to speed DC interconnection. Virginia SCC separately ordered (Aug'26) a new tariff assigning transmission costs directly to data centers plus a 25MW+ minimum-demand-charge class from Jan'27. No confirmed count of ISOs adopting restrictive LLTs beyond the prior 60+ SEPA-tracked filings ^[extracted]/^[ambiguous — current SEPA count not confirmed] | 3+ ISOs adopt LLT in 12 mo | National moratorium proposal advances | **GREEN** — regulatory friction continuing but trending toward cost-allocation resolution, not outright restriction; Dominion/AEP developments are a mixed signal worth tracking regionally | Power-first sites, neoclouds |
| 7 | Neocloud credit spreads | TRACE, CRWV/APLD bonds, CDS | CoreWeave's 5y CDS spiked to 1,000-1,194 bps in mid-October 2026 (implying ~60%+ 5yr default probability), up sharply from the already-elevated ~452bps reading in June 2026; unsecured bonds traded distressed below 80c with 15-16% yields; move described as +33% in a week, +177% YoY. Applied Digital bonds also fell (94.5, ~8.44% yield) with an estimated further $8B secured-debt need flagged. Contagion showed up in Oracle CDS (record 288bps) and drift in NVDA/META/AMZN/GOOGL CDS ^[extracted, multiple corroborating outlets] | +200 bps in a quarter | +400 bps or new issue fails | **BREACH** — spreads widened far beyond the quarterly breakage threshold | Neoclouds, GPU lessors |
| 8 | AI revenue per deployed GPU | MSFT AI ARR, OAI ARR, hyperscaler disclosures | MSFT fiscal Q1'27 (Sept quarter) beat with Azure +48% YoY vs. 45% guided; Microsoft Cloud $63.9B (+30%). A current MSFT AI run-rate figure could not be independently reconfirmed this cycle (last confirmed: $37B, +123% YoY, April 2026) ^[extracted]/^[ambiguous] | Sequential decline | Two quarters of decline | **GREEN — strengthening** | Accelerators, hyperscaler equity |
| 9 | Inference cost decline | Provider price sheets, Artificial Analysis | Claude Opus pricing flat at $5/$25 per Mtok from the Opus 4.5 cut through Opus 5 (through Jul'26); one unverified single-source report of a further ~20% cut to $4/$20 for Opus 5.5 (Oct'26) ^[ambiguous] | >10x tokens/$ in 12 mo | >20x in 12 mo without volume offset | **GREEN** — well inside the caution band; cost curve decelerating, not accelerating | Accelerators (vendor revenue), neoclouds |
| 10 | NVDA data-center revenue QoQ | NVDA quarterly | $89.0B in Q2 FY2027 (reported 2026-08-26), +18% QoQ, +117% YoY; Q3 FY2027 guide ~$108B ±2% implies continued sequential growth ^[extracted] | Flat QoQ | Sequential decline | **GREEN — strengthening** | Accelerators, optics, memory |
| 11 | Hyperscaler capex mix shift | Earnings calls, capex disclosures | Commentary continues to describe Microsoft as "supply-constrained through 2026" even at $190B+ capex — i.e. demand-constrained, not cutting training spend; explicit Q3 2026 earnings-call language on the training-vs-inference split could not be independently confirmed this cycle ^[extracted]/^[ambiguous] | Explicit guidance shift | Two cloud hyperscalers cut training capex YoY | **GREEN** — no explicit shift or training-capex cut found at any of the four hyperscalers | Training-tilted names, HBM |
| 12 | Cluster announcement slips | Stargate, xAI, Anthropic, Meta press | The Oracle/OpenAI 600 MW Abilene cancellation (April 2026) remains the most recent confirmed flagship slip. xAI's Colossus 1 reportedly hit a "mixed-architecture flaw" blocking large-scale training runs, leading xAI to lease/repurpose Colossus 1 to Anthropic for inference while shifting its own training to the homogeneous Colossus 2 — a partial slip, but capacity was re-leased rather than lost, and Meta is reported (single-source, unverified) to be stepping into some excess Abilene capacity ^[extracted, moderately corroborated]/^[ambiguous] | One major slip | Two hyperscalers slip in 6 mo | **CAUTION-WATCH** — a second, partial slip counted, short of the two-slips-in-6-months bar | Power-first sites, neoclouds |

Indicators 1, 8, and 10 are demand-side falsifiers. Indicators 2, 3, 4, and 5 are supply-side scarcity confirmations. Indicators 6, 7, and 12 are execution and financing risk. Indicators 9 and 11 are economics and mix shifts. A coherent re-underwriting requires at least one signal from two different categories — a demand-side flip alone is sentiment; a supply-side flip alone is mean reversion; the combination is structural.

**This cycle's net read**: indicator #7 (neocloud credit spreads) has breached. Per the framework's own interaction rule below, #7 flipping while #1, #4, #5, and #10 stay green/strengthening is exactly the "neocloud-only failure mode" the page anticipates — trim neoclouds and GPU lessors specifically; do not trim power-gen or electrical on this signal alone. Indicators #5 and #12 are flagged caution-watch pending next quarter's prints, not yet full breaches. No other indicator has moved adversely since the April reading, and five (#1, #4, #8, #10, plus directionally #2 and #3) have strengthened.

Cross-tripwire interactions worth pre-flagging:

- **Indicator 1 flipping with indicator 10 in the same quarter** is the most powerful combined signal. If combined hyperscaler capex decelerates and NVDA data-center revenue declines QoQ together, treat that as a thesis-level event regardless of any other green readings.
- **Indicator 7 flipping while indicator 5 stays green** is the cleanest "neocloud-only" failure mode. Hyperscalers continue building, but private operators lose access to capital. Trim neoclouds and GPU lessors; do not trim power-gen or electrical. **This is the live pattern as of this refresh**: #7 has breached, #5 is only caution-watch, and #1/#4/#10 are green-to-strengthening.
- **Indicator 9 flipping with indicator 8 holding** is the benign case: cheaper inference is driving more usage. Add to inference-tilted exposures rather than trimming.
- **Indicator 4 flipping with indicator 5 holding** is the most likely electrical-specific reversion. The grid catches up faster than power generation does, because LPT capacity is more reproducible than turbine capacity.

## 1. Combined hyperscaler capex YoY growth

- **What to monitor**: trailing-four-quarter combined capex of MSFT + AMZN + GOOGL + META + ORCL, plus forward guidance commentary and capex-to-revenue ratios at each name.
- **Where**: each company's 10-Q capex line, segment commentary, analyst day decks, and CreditSights / Janus Henderson aggregate trackers.
- **Current reading (2026-10-28)**: FY2026 combined capex for the Big Five now tracking $805-828B (Microsoft ~$175B, Amazon ~$220B, Alphabet $195-205B, Meta $130-145B, Oracle ~$70B net / $90-95B gross) — above the original $690B guide from April. Morgan Stanley and Moody's are projecting $1.0-1.1T combined for 2027 ^[extracted]. Microsoft's fiscal Q1'27 (Sept quarter) beat with Azure +48% YoY vs. 45% guided ^[extracted].
- **Caution**: combined YoY growth slowing below 20%, or capex-to-sales pulling back at any single hyperscaler by more than 500 bps in a quarter.
- **Breakage**: two consecutive quarters of QoQ decline in combined capex with corroborating earnings language ("digesting capacity," "rebalancing," "extending useful life").
- **Trade response**: no change this cycle — this indicator strengthened. This remains the single most important top-of-funnel signal; a future break here would re-rate accelerators, HBM, electrical, and power gen simultaneously.

## 2. HBM contract pricing direction

- **What to monitor**: HBM3E and HBM4 contract pricing trajectory and whether suppliers signal mid-contract resets, plus server DRAM spot and contract spreads as a leading indicator.
- **Where**: TrendForce, DRAMeXchange, primary investor decks from Micron, SK hynix, Samsung, and earnings call commentary on customer mix.
- **Current reading (through Q3 2026)**: TrendForce reversed its earlier 2026 oversupply call and now expects a slight HBM3E ASP increase through 2026, with HBM4 logic-die prices up roughly 40-50% for 2027 contract negotiations. Micron reports 75%+ of its FY2027 HBM supply already committed ^[extracted]. SK hynix posted a record Q3 2026 operating margin of 79.7%, up from 76.3% the prior quarter ^[extracted]. Some October 2026 spot-price and week-over-week figures circulating are uncorroborated secondary-aggregator claims ^[ambiguous].
- **Caution**: -10% QoQ on the HBM3E contract index, or any major supplier discloses unfilled HBM4 capacity.
- **Breakage** (memory thesis specifically): -25% QoQ, signaling structural HBM tightness has flipped to commodity DRAM dynamics.
- **Trade response**: no change — pricing power intact and, if anything, strengthening into 2027 contract negotiations. Watch for hyperscaler language about "rebalancing memory commitments" or pulling forward HBM4 in lieu of HBM3E.

## 3. CoWoS capacity utilization

- **What to monitor**: TSMC's disclosed CoWoS wafer/month exit targets and reported utilization, ASE / Amkor advanced packaging commentary, and any signal that NVDA is shifting allocation between CoWoS-S, CoWoS-L, CoWoS-P, or to OSAT alternatives like ASE CoWoP.
- **Where**: TSMC quarterly call and capex disclosure, SemiAnalysis, TrendForce, ASE earnings, Bernstein and Goldman semi notes.
- **Current reading (mid-2026)**: TSMC's exit-2026 capacity estimate has been raised to 120-140k wafers/month, above the original 120-130k target entering the year, and TrendForce reports the CoWoS supply-demand gap narrowing from ~20% to ~10% by year-end as capacity catches up to demand ^[extracted]. No slowdown in TSMC's expansion plan was found this cycle.
- **Caution**: TSMC slows the planned CoWoS expansion path or pushes the 140k target into 2027.
- **Breakage**: TSMC cuts CoWoS capex guidance, or reports utilization below 90% on the expanded capacity, or a major customer relinquishes allocation.
- **Trade response**: no change — expansion is on or ahead of plan, which is a mildly positive signal for accelerator overbuild risk and neutral-to-positive for the packaging supply chain (ASE, Amkor, SUMCO, Shin-Etsu).

## 4. Transformer lead times

- **What to monitor**: lead times on large power transformers (LPTs) and generator step-up units (GSUs), the spread between U.S.-built and imported lead times, and grain-oriented electrical steel (GOES) pricing.
- **Where**: Wood Mackenzie quarterly surveys, T&D World, utility 10-Ks, NIAC large transformer reports, DOE LPT resilience report, EEI member commentary.
- **Current reading (Q1-Q3 2026 reporting)**: GSU lead times surpassed 160 weeks and LPT lead times are also cited at 160+ weeks, up from ~128 weeks (LPT) and ~144 weeks (GSU) in the April reading ^[extracted, moderate corroboration]. This moves further away from the caution/breakage thresholds, which trigger on lead times shortening.
- **Caution**: LPT lead times falling below 80 weeks (reverting toward 2019 norms), or two consecutive Wood Mac surveys showing sequential improvement.
- **Breakage** (electrical thesis): LPT lead times below 60 weeks; transformer scarcity is normalizing and pricing power evaporates.
- **Trade response**: no change — scarcity has extended further, not eased. This remains the cleanest electrical-bucket-specific signal; a future reversal would hit Eaton, Hubbell, Powell, and GOES exposure first.

## 5. Gas turbine slot reservations

- **What to monitor**: GE Vernova, Siemens Energy, and Mitsubishi Power gas turbine backlog in GW, slot reservation count, reservation-to-firm-order conversion rate, and any commentary on slot pricing.
- **Where**: GEV, SIE, MHI quarterly results, investor day disclosures, Utility Dive and Reuters reporting on individual large orders.
- **Current reading (2026-10-28, GEV Q3 2026 8-K)**: GEV's gas equipment under contract rose to 122 GW (from 116 GW), with 130+ GW guided by year-end 2026; slot reservations specifically fell from 63 GW to 58 GW as reservations convert into firm orders ^[extracted]. However, the quarterly net add (+6 GW) was notably smaller than the double-digit GW increases earlier in 2026, and management guided 2027 order growth "solid… but not at the H1 2026 pace" ^[extracted]. GEV also agreed to a $9B acquisition of Trench Group (high-voltage/transformer manufacturer) this quarter.
- **Caution**: backlog flattens for two consecutive quarters or slot reservation prices retreat from current premium levels.
- **Breakage**: any of GEV, SIE, MHI guides backlog down, or slot reservation prices decline in two consecutive quarters, or a major hyperscaler reverses a previously announced turbine order.
- **Trade response**: **moved to caution-watch this cycle** — one quarter of deceleration is not yet the two-consecutive-quarter trigger, but it is the first soft data point in this indicator since tracking began. Watch the Q4 2026 print closely; if backlog growth flattens again, treat it as the caution threshold being met. Gas turbine softening would hit power-gen first (GEV, SIE, MHI), then bleed into engines (CAT, CMI), fuel cells (BE), and modular gas (Solaris).

## 6. Utility moratoria and large-load tariff outcomes

- **What to monitor**: count of states or utilities adopting restrictive large-load tariffs (LLTs), FERC actions on co-location and large-load interconnection, and any state-level moratoria on data center construction.
- **Where**: FERC orders, SEPA large-load tracker, state PUC dockets, ISO filings (PJM, ERCOT, MISO, SPP, ISO-NE, NYISO, CAISO), Utility Dive and Engineering News-Record reporting.
- **Current reading (through mid/late 2026)**: FERC's PJM co-location proceeding progressed through a January/February 2026 compliance filing, an April 2026 partial accept/reject order, and a June 2026 rehearing order requiring further PJM tariff revisions; FERC separately accepted an Expedited Interconnection Track and a Model Tariff Order aimed at speeding data-center interconnection ^[extracted]. Virginia's SCC ordered Dominion (August 2026) to develop a tariff directly assigning transmission costs to data centers and large loads, plus a new minimum-demand-charge rate class for 25MW+ customers effective January 2027 — a regional tightening, but one that allocates cost rather than restricting connections outright. AEP, by contrast, reversed its prior load-forecast cut and raised incremental contracted load guidance sharply to 63-69 GW by 2030/31. No confirmed updated count of ISOs adopting restrictive LLTs beyond the prior 60+ SEPA-tracked filings could be obtained this cycle ^[ambiguous].
- **Caution**: 3+ ISOs adopting restrictive LLTs within 12 months, or any single tariff that materially shifts cost-allocation onto large-load customers.
- **Breakage**: a federal moratorium proposal advancing in Congress, or two of the top three data-center states (Virginia, Texas, Georgia) imposing build pauses, or FERC denying co-location at scale.
- **Trade response**: no change in overall band — regulatory friction continues but is trending toward cost-allocation and interconnection-speed resolution rather than outright restriction. The Dominion/AEP divergence (one tightening cost allocation, the other sharply raising its load forecast) suggests a regional re-rating is underway rather than a thesis-wide one; cross-reference [[us-power-region-deep-dive]].

## 7. Neocloud credit spreads

- **What to monitor**: option-adjusted spreads on CRWV, APLD, and CORZ bonds versus comparable Treasuries, CDS where available, and equity-implied volatility and preferred yields as proxies. Watch primary-market reception on each new issue.
- **Where**: TRACE, MarketAxess, Bloomberg, S&P, Moody's, equity options markets, Cbonds, BondbloX.
- **Current reading (mid-October 2026)**: CoreWeave's 5-year CDS spread spiked to 1,000-1,194 bps — implying a roughly 60%+ five-year default probability — up sharply from an already-elevated ~452 bps reading in June 2026. CRWV's unsecured bonds traded distressed below 80 cents on the dollar with yields of 15-16%; the move was described in multiple outlets as +33% in a single week and +177% year-over-year. Applied Digital's bonds also fell (94.5, ~8.44% yield), with analysts flagging a further ~$8B secured-debt need and a "supply overhang." The stress showed visible contagion: Oracle's CDS hit a record 288 bps, and CDS on NVDA, META, AMZN, and GOOGL drifted up as well ^[extracted, multiple corroborating outlets]. Separately, CoreWeave's planned acquisition of Core Scientific was terminated by shareholder vote this quarter — a structural setback for the neocloud's consolidation strategy, though not itself a credit event.
- **Caution**: spreads widen 200 bps in a quarter, or a primary issuance prices at the wide end of guidance with order-book reduction.
- **Breakage**: spreads widen 400 bps in a quarter, or any neocloud fails to clear a primary issuance, or a covenant breach is disclosed.
- **Trade response**: **BREACHED this cycle** — the single most significant tripwire move since April. Financing risk has concentrated in pure-play GPU lessors first, exactly as the framework anticipated. CRWV, APLD, and CORZ (now CRWV's sole remaining HPC customer post-merger-termination) should be treated as elevated-risk; APLD has already moved to de-risk by restructuring its CRWV leases onto a higher-rated subsidiary with a springing parent guarantee. Hyperscalers continue to absorb workloads without financing stress, and the broader thesis (indicators #1, #4, #5, #10) remains green-to-strengthening — this reads as the "neocloud-only failure mode" described in the cross-tripwire interactions above, not a thesis-wide break. Diligence template lives in [[neocloud-and-power-first-operator-diligence]].

## 8. AI revenue per deployed GPU

- **What to monitor**: hyperscaler AI revenue divided by a rough estimate of installed accelerator base, or the change in AI ARR per dollar of cumulative AI capex. Track OpenAI, Anthropic, and xAI ARR as model-layer proxies.
- **Where**: Microsoft AI run-rate disclosure, Google Cloud AI commentary, Meta GenAI revenue color, OpenAI ARR leaks via The Information, SemiAnalysis installed-GPU estimates.
- **Current reading**: Microsoft's fiscal Q1'27 (September quarter, reported 2026-10-28) beat expectations with Azure growth of +48% YoY versus 45% guided, and Microsoft Cloud revenue of $63.9B (+30%) ^[extracted]. A current, specific MSFT AI run-rate figure could not be independently reconfirmed this cycle — the last confirmed figure remains $37B (+123% YoY) from the April 2026 reading ^[ambiguous].
- **Caution**: AI ARR growth decelerates below capex growth for two consecutive quarters at any of MSFT, GOOGL, META.
- **Breakage**: outright sequential decline in AI ARR at any hyperscaler, or hyperscalers begin disclosing accelerated depreciation on AI fleet.
- **Trade response**: no change — Azure's beat is consistent with continued demand absorption, not deceleration. Recommend confirming an updated AI run-rate figure directly from the next Microsoft earnings call before the next refresh.

## 9. Inference cost decline curve

- **What to monitor**: tokens-per-dollar trajectory for frontier and frontier-minus-one models across providers, the spread between flagship and discount-tier pricing, and the cadence of price cuts.
- **Where**: Artificial Analysis, provider price sheets (OpenAI, Anthropic, Google, DeepSeek), vendor earnings call commentary on token volumes.
- **Current reading**: Claude Opus pricing held flat at $5/$25 per Mtok from the Opus 4.5 cut (~Oct 2025) through the Opus 5 transition (~Jul 2026) — a pause in the cost-decline cadence relative to the April reading's framing of continuous cuts. One unverified single-source report cites a further ~20% cut to $4/$20 for an "Opus 5.5" around October 2026 ^[ambiguous]. No evidence was found of a >10x year-over-year tokens-per-dollar move since April.
- **Caution**: tokens/$ improving more than 10x year over year (good for usage but increases pressure on vendor revenue per GPU).
- **Breakage**: tokens/$ improving more than 20x year over year without commensurate volume growth, indicating vendor revenue compression rather than usage expansion.
- **Trade response**: no change — well inside the caution band. If anything the pricing pause (vs. continuous cuts) is a mild positive for vendor revenue per GPU; read together with #8, which shows continued AI ARR growth.

## 10. NVDA data-center revenue trajectory

- **What to monitor**: NVIDIA data-center segment revenue quarterly, the split between compute and networking, and any commentary on visibility, allocation, or sell-through to second-tier customers.
- **Where**: NVDA quarterly press release, CFO commentary, supplemental financials, conference call.
- **Current reading (2026-08-26, Q2 FY2027)**: $89.0B in data-center revenue, +18% QoQ and +117% YoY, up from $39.1B at the April 2026 reading (Q1 FY2026) — a near-tripling over the intervening quarters. Q3 FY2027 guide of approximately $108B ±2% implies continued sequential growth ^[extracted].
- **Caution**: flat QoQ for two consecutive quarters absent disclosed export-control headwinds.
- **Breakage**: an outright sequential decline in data-center revenue not attributable to a one-time export item, or a guide-down on the next quarter beyond known export effects.
- **Trade response**: no change — this remains the cleanest single-stock proxy for the entire thesis, and it strengthened materially this cycle even as NVDA's forward P/E compressed from ~30x to ~17x (see [[ai-investment-public-company-scorecard]]). That divergence — fundamentals accelerating while the multiple compresses — is itself worth monitoring as a sentiment indicator distinct from the tripwire.

## 11. Hyperscaler capex mix shifting from infrastructure to inference

- **What to monitor**: the qualitative split between training-cluster capex and inference-fleet capex in earnings call language, and any explicit shift toward shorter useful-life inference accelerators (custom ASICs, lower-spec GPUs). Watch useful-life assumption changes for AI assets in 10-Qs.
- **Where**: hyperscaler earnings calls, capital allocation commentary, ASIC announcements (Trainium, TPU, Maia, MTIA), 10-Q footnotes.
- **Current reading**: commentary continues to describe Microsoft as "supply-constrained through 2026" even at $190B+ capex, implying demand still exceeds available infrastructure rather than hyperscalers rotating away from training capex. Explicit Q3 2026 earnings-call language specifically addressing the training-vs-inference capex split could not be independently confirmed this cycle ^[ambiguous]. Custom ASIC programs at AMZN (Trainium) and GOOGL (TPU) continue ramping, and AMD disclosed a deal with Anthropic for up to 2GW of MI450 capacity, consistent with continued infrastructure investment rather than a pullback ^[inferred].
- **Caution**: an explicit guidance shift at one of the four cloud hyperscalers toward "more inference, less training" with a numerical mix attached, or a useful-life extension on AI assets.
- **Breakage**: two of the four explicitly cut training-cluster capex year over year, or any hyperscaler discloses sub-leasing surplus training capacity.
- **Trade response**: no change — no explicit shift or training-capex cut found at any of the four hyperscalers this cycle.

## 12. AI training cluster size announcements

- **What to monitor**: announced cluster sizes and schedules for Stargate, xAI Colossus, Anthropic compute commitments, and Meta's GW-scale builds. Track cancellations, deferrals, downsizing, and operator changes.
- **Where**: company press releases, OpenAI / Oracle filings, satellite imagery analysis via SemiAnalysis, Tom's Hardware reporting, DCD, FERC interconnection queue updates.
- **Current reading**: the Oracle/OpenAI 600 MW Abilene expansion cancellation (March 2026) remains the most recently confirmed flagship-cluster slip, with the broader 4.5 GW agreement still intact per the April reading. Since then, xAI's Colossus 1 reportedly hit a "mixed-architecture flaw" that blocked its own large-scale training runs; xAI responded by leasing/repurposing Colossus 1 to Anthropic for inference workloads while shifting its own training to the newer, homogeneous Colossus 2 ^[extracted, moderately corroborated]. Meta is separately reported (single, unverified source) to be stepping in to use some of the excess Abilene capacity rather than it going unused ^[ambiguous]. No second outright cancellation of a previously committed multi-GW build was found.
- **Caution**: one major hyperscaler slip on a flagship cluster within a quarter, or any new "umbrella term" framing that suggests previously firm commitments are flexible.
- **Breakage**: two hyperscalers slip flagship clusters within six months, or any hyperscaler publicly cancels a previously committed multi-GW build, or a frontier lab pivots from owned capacity to fully leased.
- **Trade response**: **moved to caution-watch** — the Colossus 1 architecture issue is arguably a second, partial slip within the six-month window, but capacity was re-leased to another lab (Anthropic) rather than lost or left idle, which is a materially softer outcome than the breakage criterion contemplates. Continue monitoring; if a second outright cancellation (not a repurposing) occurs within six months of Abilene, treat the breakage threshold as met. Cross-reference [[neocloud-and-power-first-operator-diligence]] when a cluster slip lands.

## How to use this page

- **Rebuild as a one-page dashboard** with twelve cells, one per tripwire, color-coded green / yellow / red against the caution and breakage thresholds in the master table. Update each cell with the date of the latest reading and the source link.
- **Review monthly** for slow-moving signals (capex, transformer lead times, moratoria) and at each earnings cycle for company-specific signals (NVDA, MSFT, GEV, MU).
- **Require multiple flips before re-allocating**. At least two tripwires red, or one red plus three yellows, drawn from different categories (demand / supply / financing / economics). Single-tripwire breaks are noise more often than signal in a market this momentum-driven; the value of a pre-committed framework is exactly to resist the pressure to react to one-off prints. **As of this refresh, only one tripwire (#7) is red and it sits in a single category (financing), with two others (#5, #12) at caution-watch** — this does not yet meet the multi-signal re-allocation bar, but #7's magnitude (a clean breach, not a near-miss) warrants trimming the specific names it points at (CRWV, APLD, CORZ) even without a broader re-allocation.
- **Log each review** with the date, readings, and any decision taken, so the framework can be audited against subsequent outcomes. Pre-commitment without a log degrades into post-hoc rationalization.
- **Sequence trims by bucket sensitivity**, from earliest to latest re-rating on a thesis break: neoclouds and GPU lessors first, then accelerators and HBM, then optics and ABF, then power-first operators, then electrical equipment, and finally power generation. Use that order to sequence trims regardless of which tripwire flipped.
- **Re-set thresholds** if the underlying base case changes. Thresholds calibrated to a 50-100 GW build are too lax for a 30 GW base case and too tight for a 200 GW base case.

## Anti-tripwires (signals that strengthen the thesis)

Symmetry matters. Pre-commit to up-sizing exposure on the following confirmations, on the same monthly cadence:

- **Combined hyperscaler capex revised up mid-year** at two or more of MSFT / GOOGL / META / AMZN / ORCL. **Fired this cycle**: FY2026 combined capex tracking $805-828B vs. the original $690B guide, with 2027 projections toward $1.0-1.1T.
- **HBM4 contract pricing prints above the reported ~50% premium to HBM3E**, or HBM5 sampling timeline pulled in. **Partially fired**: HBM4 logic-die prices reported up ~40-50% for 2027 contracts, near the threshold.
- **TSMC raises CoWoS exit-2026 target above 130k wpm**, or files an additional advanced-packaging fab. **Fired this cycle**: exit-2026 target raised to 120-140k wpm.
- **LPT lead times extend further beyond 128 weeks**, or a major OEM (HD Hyundai, Hitachi, Siemens Energy T&D, GE Prolec) sells out a new line at announcement. **Fired this cycle**: GSU/LPT lead times now cited above 160 weeks.
- **Gas turbine slot reservations sell out beyond 2030** at GEV, or SIE / MHI book multi-year frame agreements with hyperscalers. **Mixed this cycle**: backlog hit a record $197B (scorecard) / 122 GW gas equipment, but net slot-reservation adds decelerated sharply — see indicator #5's caution-watch status.
- **FERC affirms broad co-location rights** in the June 2026 ruling without restrictive caveats. **Partially fired**: FERC accepted an Expedited Interconnection Track and Model Tariff Order, though full co-location affirmation without caveats was not independently confirmed this cycle.
- **NVDA data-center revenue prints above guide** with backlog disclosure or visibility extension. **Fired this cycle**: $89.0B vs. continued sequential growth, plus ~$500B in disclosed cumulative AI chip bookings.
- **Hyperscalers extend useful-life assumptions** on AI assets only modestly while raising capex (suggests demand absorbs depreciation extensions). No new disclosure found this cycle either way.

When two anti-tripwires fire together with no live tripwire flips, the framework supports adding to the most-constrained bucket on that read (memory if HBM, electrical if LPT, power gen if turbines). **This cycle, five-plus anti-tripwires fired (capex, CoWoS, LPT, NVDA, partially HBM4/FERC) alongside one live breach (#7, neocloud credit) and two caution-watches (#5, #12)** — the appropriate read is to add to electrical and memory on the anti-tripwire strength while trimming specifically the neocloud/GPU-lessor names flagged by #7, not a thesis-wide move in either direction.

The asymmetry to respect: thesis-breakage signals tend to be lumpy and discrete (a single quarterly print), while strengthening signals tend to be incremental and continuous. Apply more weight to a single broken tripwire than to any one anti-tripwire, but require the multi-signal rule before acting in either direction.

A second asymmetry: thresholds are set against company filings and trade-press readings, which are themselves lagging by weeks to a quarter. The CDS, equity-implied vol, and bond-spread signals in indicator #7 tend to lead the rest by one to two months, which is why financing risk is the canary even though it is not the largest exposure. **This played out exactly as described this cycle** — CRWV's CDS and bond market reacted well ahead of any confirmed operational deterioration at the company, and well ahead of any softening in the demand-side indicators (#1, #8, #10). When neocloud spreads widen materially without an obvious idiosyncratic cause, raise the surveillance frequency on the other eleven tripwires from monthly to weekly — **this is now in effect following the #7 breach**.

## Region and sector cross-references

- Power region cuts: see [[us-power-region-deep-dive]] for ERCOT vs PJM vs MISO sensitivity to indicators #4, #5, and #6.
- Electrical bucket detail: see [[electrical-equipment-deep-dive]] for transformer, switchgear, and busway exposure to indicator #4.
- Semis stack: see [[semiconductor-supply-chain-deep-dive]] for HBM, CoWoS, and ABF substrate exposure to indicators #2, #3, and #10.
- Optics and interconnect: see [[optics-and-interconnect-deep-dive]] for the networking lag relative to indicator #10.
- Public-name scoring: see [[ai-investment-public-company-scorecard]] for the per-name exposure used to translate a tripwire flip into specific trims — CRWV, APLD, and CORZ rows there now carry the indicator #7 breach directly.
- Hyperscaler-specific exposure mapping: see [[hyperscaler-constraint-map]] for which hyperscaler is most exposed to each indicator (e.g. ORCL most exposed to indicator #1 via capex-to-sales, MSFT most exposed to indicator #8 via AI ARR disclosure).
- Neocloud and power-first operator diligence template: see [[neocloud-and-power-first-operator-diligence]] for the underwriting questions to revisit now that indicator #7 has breached and #12 is caution-watch.

A final note on discipline: the value of pre-committing thresholds is forfeited the moment any single threshold gets adjusted in response to a near-miss. If a reading lands inside the caution band, the response is more frequent monitoring, not threshold relaxation. The thresholds here can be revised on a quarterly cadence with a written rationale, and not otherwise. No thresholds were changed in this refresh — only readings and statuses were updated.

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
