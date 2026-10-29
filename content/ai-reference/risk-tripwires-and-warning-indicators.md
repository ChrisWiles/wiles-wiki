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
updated: 2026-08-05
provenance:
  extracted: 0.65
  inferred: 0.25
  ambiguous: 0.1
---

This is investment research, not financial advice. It is a companion to [[ai-data-center-buildout-investment-memo]] and converts the qualitative risk section of that memo into pre-committed, monitorable tripwires.

## Framing

Every thesis needs falsifiers. The AI buildout thesis depends on four conditions holding simultaneously:

1. Hyperscalers continue to spend at or above current capex run-rates.
2. Accelerator, HBM, and advanced packaging scarcity persists.
3. Power, transformer, and electrical gear stay constrained on multi-year backlogs.
4. Inference economics improve gradually rather than collapsing faster than capacity gets absorbed.

Each of those is observable. The point of this page is to define, in advance, what level of what indicator forces a change in view, so that re-underwriting happens on data rather than on narrative or sentiment.

Each tripwire below has six fields: what to monitor, where to find it, current reading as of 2026-08-05, threshold for caution (start trimming exposure or rotating within buckets), threshold for thesis breakage (re-underwrite the bucket), and the trade response (which buckets are at risk first). Use the master table as a dashboard. Use the per-tripwire sections to interpret a flip.

The defaults assume the [[ai-data-center-buildout-investment-memo]] base case of a 50-100 GW AI capacity build over coming years and the supply-chain shape captured in [[ai-data-center-supply-chain-bottlenecks]]. If the base case shifts, the thresholds need to be re-set, not the framework.

## Master tripwire table

| # | Indicator | Source | Current reading (2026-08-05) | Caution | Breakage | Status | First buckets at risk |
|---:|---|---|---|---|---|---|---|
| 1 | Combined hyperscaler capex YoY | MSFT, AMZN, GOOGL, META, ORCL filings | 2026 guide raised to $725B+, ~+77% YoY over 2025; every major hyperscaler raised FY26/FY27 capex guidance again this cycle ^[extracted] | <20% YoY | Two consecutive QoQ declines | 🟢 Green (strengthened) | Accelerators, electrical, power gen |
| 2 | HBM contract pricing QoQ | TrendForce, DRAMeXchange, Micron/SKH decks | CY26 HBM (incl. HBM4) fully booked at Micron; SK hynix HBM4 share 50-55%; 2027 mix forecast ~55% HBM4/45% HBM3E, no pricing rollback reported ^[extracted] | -10% QoQ | -25% QoQ | 🟢 Green | Memory (MU, SKH, Samsung) |
| 3 | TSMC CoWoS expansion | TSMC quarterly + SemiAnalysis | TSMC reaffirmed 125-130k wpm exit-2026 target, raised FY26 capex to $60-64B (from $52-56B) plus new $100B Arizona investment; CEO says demand still outstrips supply ^[extracted] | TSMC slows expansion plan | TSMC cuts CoWoS capex guide | 🟢 Green (strengthened) | Accelerators, optics, ABF |
| 4 | LPT lead time | Wood Mackenzie, utility 10-Ks | Still ~128 wks LPT / ~144 wks GSU (no updated WoodMac survey found; adjacent switchgear lead times lengthening further, >60wks) ^[extracted, dated to prior survey] | Drop to 80 wks | Drop to 60 wks | 🟢 Green | Electrical equipment, EPC |
| 5 | Gas turbine slot reservations | GEV, SIE, MHI disclosures | GEV backlog 116 GW Q2'26 (up from 100GW Q1'26), guiding ≥125GW by YE26; Siemens Energy backlog €162bn record; no slot-price retreat anywhere ^[extracted] | Backlog flattens 2 quarters | Slot prices retreat | 🟢 Green (strengthened) | Power gen, fuel-cell, gensets |
| 6 | Large-load tariff / moratoria count | FERC, SEPA, state PUCs | 23 states have approved ≥1 large-load tariff (7 more pending); NY issued Executive Order 62 (7/14/26), first-in-nation statewide DC moratorium; FERC/PJM co-location process still unresolved | 3+ ISOs adopt LLT in 12 mo | National moratorium proposal advances | 🟡 Caution | Power-first sites, neoclouds |
| 7 | Neocloud credit spreads | TRACE, CRWV/APLD bonds, CDS | CRWV 5yr CDS widened from ~452bps (early Jul low) to ~855bps by 7/29/26 (~50% implied 5yr default probability); a CRWV-linked leveraged loan had to widen pricing 125bps to clear (8/3/26) ^[extracted] | +200 bps in a quarter | +400 bps or new issue fails | 🔴 Breakage | Neoclouds, GPU lessors |
| 8 | AI revenue per deployed GPU | MSFT AI ARR, OAI ARR, hyperscaler disclosures | MSFT's $37B AI run-rate KPI (from Q3 FY26) was not refreshed in the Q4 FY26 print (7/29/26); Azure grew 43% YoY and FY26 Azure revenue exceeded $100B (+41%) on other metrics ^[extracted]/^[ambiguous] (KPI now stale) | Sequential decline | Two quarters of decline | 🟢 Green (by absence of decline; KPI stale) | Accelerators, hyperscaler equity |
| 9 | Inference cost decline | Provider price sheets, Artificial Analysis | OpenAI cut GPT-5.6 "Luna" pricing 80% (7/30/26) to $0.20/$1.20 per Mtok; flagship tiers (Sol, Claude Opus 5) held price; trajectory approaching but not confirming a clean >10x/12mo move at a fixed capability tier ^[extracted]/^[ambiguous] | >10x tokens/$ in 12 mo | >20x in 12 mo without volume offset | 🟡 Borderline caution | Accelerators (vendor revenue), neoclouds |
| 10 | NVDA data-center revenue QoQ | NVDA quarterly | $75.2B Q1 FY27 (reported 5/20/26), +21% QoQ/+92% YoY, record; Q2 FY27 guide implies continued sequential growth; Q2 FY27 actuals not yet reported as of 8/5/26 (due late Aug) ^[extracted] | Flat QoQ | Sequential decline | 🟢 Green (accelerated) | Accelerators, optics, memory |
| 11 | Hyperscaler capex mix shift | Earnings calls, capex disclosures | No hyperscaler gave an explicit numerical training/inference split this cycle; Meta (7/29/26) floated compute-rental/cloud-style monetization qualitatively; all four hyperscalers raised, not cut, capex YoY ^[extracted] | Explicit guidance shift | Two hyperscalers cut training capex | 🟢 Green, bordering caution on narrative | Training-tilted names, HBM |
| 12 | Cluster announcement slips | Stargate, xAI, Anthropic, Meta press | Continued Stargate/Oracle-OpenAI friction (control disputes, reliability issues, reports of Meta circling excess capacity) since the Mar'26 Abilene scrap; xAI Colossus 2, Meta Prometheus/Hyperion, and Anthropic's TPU buildout all still on/ahead of schedule — no second hyperscaler slip confirmed ^[extracted]/^[inferred] | One major slip | Two hyperscalers slip in 6 mo | 🟡 Caution (extended) | Power-first sites, neoclouds |

**Status change since 2026-04-30**: 8 of 12 indicators remain green or strengthened (capex, HBM pricing, CoWoS, transformer lead times, gas turbines, NVDA data-center revenue, hyperscaler capex mix, and MSFT AI ARR by absence of a decline signal, though that KPI is now stale). **Indicator #7 (neocloud credit spreads) crossed into breakage** — CoreWeave's CDS spread widened roughly 400bps in about a month (late July 2026), well past the quarterly threshold. Two indicators sit in caution: **#6 (large-load tariffs/moratoria)**, on the back of 23 states adopting tariffs plus New York's first-in-nation statewide data-center moratorium (Executive Order 62, 7/14/26), and **#12 (cluster announcement slips)**, on continuing Stargate/Oracle-OpenAI friction. **#9 (inference cost curve)** is borderline caution on tier-dependent pricing data. Per the multi-signal rule below, one breakage plus two cautions from different categories (financing, execution/regulatory) is enough to warrant closer monitoring of neocloud and power-first exposure specifically — but not yet a broad thesis re-underwrite, since none of the demand-side falsifiers (#1, #8, #10) have flipped.

Indicators 1, 8, and 10 are demand-side falsifiers. Indicators 2, 3, 4, and 5 are supply-side scarcity confirmations. Indicators 6, 7, and 12 are execution and financing risk. Indicators 9 and 11 are economics and mix shifts. A coherent re-underwriting requires at least one signal from two different categories — a demand-side flip alone is sentiment; a supply-side flip alone is mean reversion; the combination is structural.

Cross-tripwire interactions worth pre-flagging:

- **Indicator 1 flipping with indicator 10 in the same quarter** is the most powerful combined signal. If combined hyperscaler capex decelerates and NVDA data-center revenue declines QoQ together, treat that as a thesis-level event regardless of any other green readings.
- **Indicator 7 flipping while indicator 5 stays green** is the cleanest "neocloud-only" failure mode. Hyperscalers continue building, but private operators lose access to capital. Trim neoclouds and GPU lessors; do not trim power-gen or electrical.
- **Indicator 9 flipping with indicator 8 holding** is the benign case: cheaper inference is driving more usage. Add to inference-tilted exposures rather than trimming.
- **Indicator 4 flipping with indicator 5 holding** is the most likely electrical-specific reversion. The grid catches up faster than power generation does, because LPT capacity is more reproducible than turbine capacity.

## 1. Combined hyperscaler capex YoY growth

- **What to monitor**: trailing-four-quarter combined capex of MSFT + AMZN + GOOGL + META + ORCL, plus forward guidance commentary and capex-to-revenue ratios at each name.
- **Where**: each company's 10-Q capex line, segment commentary, analyst day decks, and CreditSights / Janus Henderson aggregate trackers.
- **Current reading (2026-08-05)**: Q2 2026 earnings pushed combined 2026 capex guidance to $725B+, roughly +77% YoY over 2025 ^[extracted]. Updated FY26 guides: MSFT ~$175B (FY27 guide raised further to $255-260B), META $130-145B (narrowed up), GOOGL $195-205B (raised from $180-190B), AMZN ~$220B (raised) ^[extracted]. No hyperscaler has posted a QoQ capex decline; guidance keeps rising each quarter.
- **Caution**: combined YoY growth slowing below 20%, or capex-to-sales pulling back at any single hyperscaler by more than 500 bps in a quarter.
- **Breakage**: two consecutive quarters of QoQ decline in combined capex with corroborating earnings language ("digesting capacity," "rebalancing," "extending useful life").
- **Trade response**: this is the single most important top-of-funnel signal. A break here re-rates accelerators, HBM, electrical, and power gen simultaneously. Trim accelerators first because they have the most multiple to lose; electrical and power gen lag by one to two quarters because their backlogs cushion near-term revenue.

## 2. HBM contract pricing direction

- **What to monitor**: HBM3E and HBM4 contract pricing trajectory and whether suppliers signal mid-contract resets, plus server DRAM spot and contract spreads as a leading indicator.
- **Where**: TrendForce, DRAMeXchange, primary investor decks from Micron, SK hynix, Samsung, and earnings call commentary on customer mix.
- **Current reading (2026-08-05)**: Micron's CY26 HBM supply (including HBM4) is fully booked ^[extracted]. SK hynix retains 50-55% HBM4 share; 2027 mix forecast ~55% HBM4/45% HBM3E with no pricing rollback reported ^[extracted]. SK hynix Q2 26 operating margin hit a record 76%, and Micron's consolidated gross margin ran 74.9%→84.9% QoQ in fiscal Q3 — both consistent with continued HBM/DRAM tightness ^[extracted].
- **Caution**: -10% QoQ on the HBM3E contract index, or any major supplier discloses unfilled HBM4 capacity.
- **Breakage** (memory thesis specifically): -25% QoQ, signaling structural HBM tightness has flipped to commodity DRAM dynamics.
- **Trade response**: a memory-specific break does not necessarily break the broader thesis. Rotate from MU / SKH / Samsung into electrical and power buckets, which are less sensitive to the memory cycle. Watch for hyperscaler language about "rebalancing memory commitments" or pulling forward HBM4 in lieu of HBM3E.

## 3. CoWoS capacity utilization

- **What to monitor**: TSMC's disclosed CoWoS wafer/month exit targets and reported utilization, ASE / Amkor advanced packaging commentary, and any signal that NVDA is shifting allocation between CoWoS-S, CoWoS-L, CoWoS-P, or to OSAT alternatives like ASE CoWoP.
- **Where**: TSMC quarterly call and capex disclosure, SemiAnalysis, TrendForce, ASE earnings, Bernstein and Goldman semi notes.
- **Current reading (2026-08-05)**: TSMC's Q2 2026 earnings (mid-Jul) reaffirmed the 125-130k wpm exit-2026 CoWoS target and raised full-year 2026 capex to $60-64B (from $52-56B), plus a new $100B Arizona investment; CEO C.C. Wei said demand still outstrips supply and raised the full-year revenue growth outlook to >40% YoY ^[extracted].
- **Caution**: TSMC slows the planned CoWoS expansion path or pushes the 130k target into 2027.
- **Breakage**: TSMC cuts CoWoS capex guidance, or reports utilization below 90% on the expanded capacity, or a major customer relinquishes allocation.
- **Trade response**: a slowdown without a utilization break is a positive sign for accelerators (less risk of overbuild) but neutral-to-negative for the packaging supply chain. A utilization break is unambiguously bad for accelerators, optics, and ABF substrate. ASE and Amkor are the clearest packaging proxies; SUMCO and Shin-Etsu the substrate proxies.

## 4. Transformer lead times

- **What to monitor**: lead times on large power transformers (LPTs) and generator step-up units (GSUs), the spread between U.S.-built and imported lead times, and grain-oriented electrical steel (GOES) pricing.
- **Where**: Wood Mackenzie quarterly surveys, T&D World, utility 10-Ks, NIAC large transformer reports, DOE LPT resilience report, EEI member commentary.
- **Current reading (2026-08-05)**: No updated Wood Mackenzie survey found since April; the ~128-week LPT / ~144-week GSU figures are still being cited as current through mid-2026 trade coverage ^[extracted, dated to prior survey]. Adjacent grid equipment (switchgear) lead times are reported lengthening further, past 60 weeks (up from 44 weeks in late 2025) ^[extracted] — consistent with continued, not easing, scarcity.
- **Caution**: LPT lead times falling below 80 weeks (reverting toward 2019 norms), or two consecutive Wood Mac surveys showing sequential improvement.
- **Breakage** (electrical thesis): LPT lead times below 60 weeks; transformer scarcity is normalizing and pricing power evaporates.
- **Trade response**: this is the cleanest electrical-bucket-specific signal. Trim Eaton, Hubbell, Powell, and GOES exposure first; transformer OEM margins compress fastest when backlog visibility shrinks. MV switchgear and PDU names are second-order and lag by one to two quarters.

## 5. Gas turbine slot reservations

- **What to monitor**: GE Vernova, Siemens Energy, and Mitsubishi Power gas turbine backlog in GW, slot reservation count, reservation-to-firm-order conversion rate, and any commentary on slot pricing.
- **Where**: GEV, SIE, MHI quarterly results, investor day disclosures, Utility Dive and Reuters reporting on individual large orders.
- **Current reading (2026-08-05)**: GEV's gas turbine backlog rose to 116 GW in Q2 2026 (from 100 GW Q1'26), with organic orders +88% to $24.2B and guidance to ≥125 GW under contract by year-end ^[extracted]. Total company backlog reached $176B. Siemens Energy's Q3 FY2026 order backlog hit a record €162bn (up from €146bn Q1), with record Gas Services order intake ^[extracted]. No slot-price retreat reported at any of the three OEMs.
- **Caution**: backlog flattens for two consecutive quarters or slot reservation prices retreat from current premium levels.
- **Breakage**: any of GEV, SIE, MHI guides backlog down, or slot reservation prices decline in two consecutive quarters, or a major hyperscaler reverses a previously announced turbine order.
- **Trade response**: gas turbine softening hits power-gen first (GEV, SIE, MHI), then bleeds into engines (CAT, CMI), fuel cells (BE), and modular gas (Solaris). Power-first site valuations also compress because their scarcity premium relies on the same time-to-power problem.

## 6. Utility moratoria and large-load tariff outcomes

- **What to monitor**: count of states or utilities adopting restrictive large-load tariffs (LLTs), FERC actions on co-location and large-load interconnection, and any state-level moratoria on data center construction.
- **Where**: FERC orders, SEPA large-load tracker, state PUC dockets, ISO filings (PJM, ERCOT, MISO, SPP, ISO-NE, NYISO, CAISO), Utility Dive and Engineering News-Record reporting.
- **Current reading (2026-08-05)**: 23 states have approved at least one large-load tariff, with 7 more pending, including a 5-0 Pennsylvania PUC approval (4/30/26) ^[extracted]. New York Governor Hochul issued Executive Order 62 (7/14/26), the first-in-nation statewide data-center moratorium; Oklahoma's SB1488 proposes a state moratorium through Nov 2029 ^[extracted]. FERC's PJM co-location compliance process remains unresolved in stages (a 4/16/26 order partially accepted/rejected PJM's filing, with a further 30-day compliance filing ordered) — no national moratorium proposal is advancing.
- **Caution**: 3+ ISOs adopting restrictive LLTs within 12 months, or any single tariff that materially shifts cost-allocation onto large-load customers.
- **Breakage**: a federal moratorium proposal advancing in Congress, or two of the top three data-center states (Virginia, Texas, Georgia) imposing build pauses, or FERC denying co-location at scale.
- **Trade response**: regional re-rating. Power-first operators in restricted regions (PJM zone) compress; operators in permissive regions (ERCOT West, MISO South, SPP) re-rate up. Hyperscalers with diversified site portfolios outperform pure-play neoclouds. Cross-reference [[us-power-region-deep-dive]] for region weights.

## 7. Neocloud credit spreads

- **What to monitor**: option-adjusted spreads on CRWV, APLD, and CORZ bonds versus comparable Treasuries, CDS where available, and equity-implied volatility and preferred yields as proxies. Watch primary-market reception on each new issue.
- **Where**: TRACE, MarketAxess, Bloomberg, S&P, Moody's, equity options markets, Cbonds, BondbloX.
- **Current reading (2026-08-05)**: CoreWeave's 5-year CDS spread widened sharply from ~452bps (an early-July 2026 low) to ~855bps by 7/29/26 — implying roughly a 50% cumulative 5-year default probability — with the stock falling 9% the same day (Nebius fell 10% in sympathy) ^[extracted]. A CoreWeave-linked leveraged loan had to widen pricing by 125bps to clear as of 8/3/26 ^[extracted]. CRWV Q1'26 interest expense doubled to $536M and FCF was -$4.71B; total debt is now ~$35B. Applied Digital separately priced $1.59B of new notes at 7.00% (down from 10% in Nov 2025) — but that deal priced before the late-July CDS blowout, so it does not reflect the current stress.
- **Caution**: spreads widen 200 bps in a quarter, or a primary issuance prices at the wide end of guidance with order-book reduction.
- **Breakage**: spreads widen 400 bps in a quarter, or any neocloud fails to clear a primary issuance, or a covenant breach is disclosed.
- **Trade response**: this tripwire has now crossed into breakage — financing risk is live, not hypothetical. CRWV's CDS-implied ~50% 5-year default probability and the loan-spread flex on 8/3/26 mean the market is actively re-pricing pure-play GPU lessors; watch APLD and second-tier neoclouds for spread contagion even though APLD's most recent issuance (pre-blowout) still priced tighter than its prior deal. Per indicator #7 flipping while #5 (gas turbine backlog) stays green, this reads as the "neocloud-only" failure mode described above: trim neoclouds and GPU lessors, hold power-gen and electrical. Diligence template lives in [[neocloud-and-power-first-operator-diligence]]; see also the scorecard's CRWV/APLD/CORZ/WULF/HUT rows in [[ai-investment-public-company-scorecard]] for name-level detail.

## 8. AI revenue per deployed GPU

- **What to monitor**: hyperscaler AI revenue divided by a rough estimate of installed accelerator base, or the change in AI ARR per dollar of cumulative AI capex. Track OpenAI, Anthropic, and xAI ARR as model-layer proxies.
- **Where**: Microsoft AI run-rate disclosure, Google Cloud AI commentary, Meta GenAI revenue color, OpenAI ARR leaks via The Information, SemiAnalysis installed-GPU estimates.
- **Current reading (2026-08-05)**: Microsoft's $37B AI run-rate KPI (disclosed at FYQ3 26, ~Apr 29) was not refreshed with an updated number in the FYQ4 26 release (7/29/26) ^[extracted]/^[ambiguous] — the metric itself is now stale. Other Q4 metrics were strong: Azure grew 43% YoY and FY26 Azure revenue exceeded $100B (+41%) ^[extracted]. No sequential-decline signal exists on any disclosed metric, but confidence in this specific indicator is lower than in April given the KPI gap.
- **Caution**: AI ARR growth decelerates below capex growth for two consecutive quarters at any of MSFT, GOOGL, META.
- **Breakage**: outright sequential decline in AI ARR at any hyperscaler, or hyperscalers begin disclosing accelerated depreciation on AI fleet.
- **Trade response**: this is the demand-side falsifier. A break here means inference economics are softening and accelerator unit demand follows. Trim accelerators and hyperscaler equity; rotate to second-order beneficiaries that are paid regardless of utilization (electrical, gas turbines, transformers).

## 9. Inference cost decline curve

- **What to monitor**: tokens-per-dollar trajectory for frontier and frontier-minus-one models across providers, the spread between flagship and discount-tier pricing, and the cadence of price cuts.
- **Where**: Artificial Analysis, provider price sheets (OpenAI, Anthropic, Google, DeepSeek), vendor earnings call commentary on token volumes.
- **Current reading (2026-08-05)**: OpenAI cut GPT-5.6 "Luna" pricing 80% on 7/30/26 to $0.20/$1.20 per Mtok input/output (from its 7/9/26 launch price); its "Terra" tier was cut 20% to $2/$12 ^[extracted]. Flagship-tier pricing held roughly flat: Claude Opus 5 at $5/$25, OpenAI's "Sol" tier unchanged at $5/$30, Google's Gemini 3.1 Pro now the cheapest frontier-tier API at $2/$12 ^[extracted]. The mid-tier cut is a ~5x tokens-per-dollar move within three weeks, but the comparable flagship tier held price, so a clean >10x-in-12-months reading at a fixed capability tier is not yet confirmed ^[ambiguous].
- **Caution**: tokens/$ improving more than 10x year over year (good for usage but increases pressure on vendor revenue per GPU).
- **Breakage**: tokens/$ improving more than 20x year over year without commensurate volume growth, indicating vendor revenue compression rather than usage expansion.
- **Trade response**: ambiguous. Falling inference cost expands usage and is good for the buildout overall, but is bad for vendor revenue per GPU. The trade is to rotate from GPU sellers to tokens-consumed beneficiaries (application-layer, data, observability, energy per token) when this tripwire flips. The signal is most useful read together with #8 (ARR per capex dollar).

## 10. NVDA data-center revenue trajectory

- **What to monitor**: NVIDIA data-center segment revenue quarterly, the split between compute and networking, and any commentary on visibility, allocation, or sell-through to second-tier customers.
- **Where**: NVDA quarterly press release, CFO commentary, supplemental financials, conference call.
- **Current reading (2026-08-05)**: $75.2B in Q1 FY27 (reported 5/20/26), +21% QoQ and +92% YoY — sequential growth accelerated sharply from April's 10% QoQ pace ^[extracted]. Q2 FY27 guidance points to continued sequential growth (total company revenue guided to $91.0B ±2%). Q2 FY27 actual results had not yet been reported as of 8/5/26 (NVIDIA typically reports late August).
- **Caution**: flat QoQ for two consecutive quarters absent disclosed export-control headwinds.
- **Breakage**: an outright sequential decline in data-center revenue not attributable to a one-time export item, or a guide-down on the next quarter beyond known export effects.
- **Trade response**: this is the cleanest single-stock proxy for the entire thesis. A break here is a peak signal for accelerators, HBM, optics, and ABF substrate. The electrical and power buckets lag but follow within two to four quarters. Networking and optics names (ANET, CIEN, COHR, FN) move with the networking segment specifically.

## 11. Hyperscaler capex mix shifting from infrastructure to inference

- **What to monitor**: the qualitative split between training-cluster capex and inference-fleet capex in earnings call language, and any explicit shift toward shorter useful-life inference accelerators (custom ASICs, lower-spec GPUs). Watch useful-life assumption changes for AI assets in 10-Qs.
- **Where**: hyperscaler earnings calls, capital allocation commentary, ASIC announcements (Trainium, TPU, Maia, MTIA), 10-Q footnotes.
- **Current reading (2026-08-05)**: no hyperscaler gave an explicit numerical training-vs-inference split in Q2 2026 calls ^[extracted]. Meta's Zuckerberg (7/29/26) gave qualitative commentary about compute going to training plus "core business, new products, agents," and floated a compute-rental/cloud-style revenue line without a percentage breakdown ^[extracted]. Industry-wide, short-lived compute assets are rising to ~60% of capex in 2026 from ~43% in 2022 — a hardware-lifespan shift, not confirmation of a training-to-inference pivot ^[extracted]. All hyperscalers raised, not cut, capex YoY this cycle.
- **Caution**: an explicit guidance shift at one of the four cloud hyperscalers toward "more inference, less training" with a numerical mix attached, or a useful-life extension on AI assets.
- **Breakage**: two of the four explicitly cut training-cluster capex year over year, or any hyperscaler discloses sub-leasing surplus training capacity.
- **Trade response**: training-tilted exposures (HBM, NVL72, leading-edge networking) compress first; inference-tilted exposures (custom ASICs, lower-power CPUs, edge accelerators) hold up. Memory is the most exposed bucket because training is HBM-intensive in a way inference is not. Optics tilt mixed: training drives NVL72 inter-rack, inference is more pluggable.

## 12. AI training cluster size announcements

- **What to monitor**: announced cluster sizes and schedules for Stargate, xAI Colossus, Anthropic compute commitments, and Meta's GW-scale builds. Track cancellations, deferrals, downsizing, and operator changes.
- **Where**: company press releases, OpenAI / Oracle filings, satellite imagery analysis via SemiAnalysis, Tom's Hardware reporting, DCD, FERC interconnection queue updates.
- **Current reading (2026-08-05)**: beyond the March 2026 Abilene scrap, reporting since April describes continuing Stargate friction — control disputes among OpenAI, Oracle, and SoftBank, ongoing reliability issues at the Abilene site, and reports that Meta is circling excess Stargate capacity ^[extracted]. By contrast, xAI's Colossus 2 (Memphis, via onsite turbines), Meta's Prometheus (1GW, targeted 2026) and Hyperion (scaling toward 5GW), and Anthropic's TPU compute buildout (>1GW online 2026, scaling toward 1M TPUs by 2027) are all reported on schedule or ahead — no second hyperscaler has slipped a flagship cluster ^[extracted]/^[inferred] on the hyperscaler-count interpretation.
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
