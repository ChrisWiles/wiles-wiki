---
title: Neocloud and power-first operator diligence
category: ai-reference
summary: Balance-sheet diligence on neocloud and converted bitcoin-miner AI hosts — contracted MW, customer concentration, debt structure, and dilution risk.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - risk-analysis
sources:
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CRWV&type=10-K&dateb=&owner=include&count=40
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=APLD&type=10-K
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CORZ&type=10-K
  - https://investors.iren.com/
  - https://investors.ciphermining.com/
  - https://www.terawulf.com/investors
  - https://hut8.com/investors
  - https://www.bitdeer.com/investor-relations
  - https://group.nebius.com/investors
  - https://www.coreweave.com/news/coreweave-announces-fourth-quarter-and-full-year-2025-results
  - https://www.applieddigital.com/investors/
  - https://corescientific.com/news-releases
  - https://www.fluidstack.io/news
  - https://news.microsoft.com/source/2024/06/04/microsoft-and-coreweave/
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.4
  inferred: 0.4
  ambiguous: 0.2
---

This is investment research, not financial advice. The neocloud and power-first operator cohort trades on announced megawatts but pays debt service from contracted megawatts. The spread between those two numbers is where the risk lives. This page sits beneath [[ai-data-center-buildout-investment-memo]] and [[ai-investment-public-company-scorecard]] and is intended as a balance-sheet companion — not a price-target sheet.

The names covered here all share a common structure: a power-secured campus, a GPU or hosting capex stack financed with a mix of equipment-backed debt, secured notes, ATMs, preferreds, and convertibles, and one or a few large customer contracts that the entire equity story leans on. The diligence question is consistently the same: are signed customer cash flows sufficient, on a fully-loaded basis, to amortize the financing that built the site, or is the equity quietly dependent on the next contract closing?

## Master diligence table

| Company | Ticker | Mkt cap (Apr 2026) | Announced MW | Contracted MW | Anchor customer(s) | Top-customer concentration | Total debt | Wtd avg cost of debt | Earliest sig. maturity | GPU dep. life | Cash + revolver | ATM / shelf | Recent equity issuance |
|---|---|---:|---:|---:|---|---:|---:|---:|---:|---:|---:|---|---|
| CoreWeave | CRWV | ~$70-90B ^[ambiguous] | ~1.6 GW pipeline ^[inferred] | ~590 MW live + contracted ^[inferred] | Microsoft, OpenAI, Meta ^[extracted] | Microsoft >50% of 2024 rev ^[extracted] | ~$13-15B funded ^[ambiguous] | ~10-12% blended ^[inferred] | 2026-2028 DDTL ^[inferred] | 6 yr ^[extracted] | ~$3-5B ^[ambiguous] | Yes (post-IPO shelf) | March 2025 IPO + secondary ^[extracted] |
| Applied Digital | APLD | ~$2-4B ^[ambiguous] | ~400 MW Ellendale ^[extracted] | 250 MW CoreWeave 15-yr ^[extracted] | CoreWeave (HPC), Macquarie JV ^[extracted] | CoreWeave ~100% of HPC pipeline ^[inferred] | ~$1-1.5B at HPC SPV ^[ambiguous] | SOFR+~5-6% ^[inferred] | 2027-2028 ^[ambiguous] | n/a (host) | <$200M ^[ambiguous] | Yes | Macquarie $5B JV pref ^[extracted] |
| Core Scientific | CORZ | ~$2-3B ^[ambiguous] | ~1.3 GW gross ^[extracted] | ~590 MW CoreWeave 12-yr MSA ^[extracted] | CoreWeave (HPC hosting) ^[extracted] | CoreWeave >70% of HPC rev ^[inferred] | ~$700-900M ^[inferred] | ~10% (post-emergence) ^[inferred] | 2028 conv ^[ambiguous] | n/a | ~$700M ^[ambiguous] | Yes | Conv notes 2024-2025 ^[extracted] |
| IREN | IREN | ~$3-5B ^[ambiguous] | ~2.9 GW grid-secured ^[extracted] | <100 MW HPC contracted ^[ambiguous] | Cloud GPU (own), Horizon (announced) ^[ambiguous] | Self-operated ^[inferred] | <$300M ^[inferred] | n/a (largely equity) | n/a | 4-5 yr ^[inferred] | ~$400-600M ^[ambiguous] | Yes | Multiple ATMs 2024-2025 ^[extracted] |
| Cipher Mining | CIFR | ~$1-2B ^[ambiguous] | ~1.5 GW pipeline ^[extracted] | 244 MW Fluidstack/Google-backed ^[ambiguous] | Fluidstack (Google guarantee announced) ^[ambiguous] | Fluidstack ~100% of HPC ^[inferred] | <$200M ^[inferred] | n/a | n/a | n/a (host) | ~$200-300M ^[ambiguous] | Yes | Multiple ATMs ^[extracted] |
| TeraWulf | WULF | ~$1.5-2.5B ^[ambiguous] | ~750 MW Lake Mariner + ~250 MW Abernathy ^[extracted] | Core42 (60 MW) + Fluidstack/Google (~200 MW) ^[ambiguous] | Core42 (G42), Fluidstack ^[extracted] | Top-2 ~100% of HPC ^[inferred] | $500M sr secured 2030 ^[extracted] | ~9-10% ^[inferred] | 2030 ^[extracted] | n/a (host) | ~$200-300M ^[ambiguous] | Yes | Conv notes 2024 ^[extracted] |
| Hut 8 | HUT | ~$1-2B ^[ambiguous] | ~1.0 GW pipeline (incl. American Bitcoin) ^[ambiguous] | Far site Coatue-financed; HPC contracted limited ^[ambiguous] | Coatue (financing), undisclosed HPC tenants ^[ambiguous] | Concentrated, undisclosed ^[ambiguous] | <$300M corporate ^[inferred] | ~10% ^[inferred] | n/a | n/a | ~$200M ^[ambiguous] | Yes | American Bitcoin spin/merger ^[extracted] |
| Bitdeer | BTDR | ~$1.5-2.5B ^[ambiguous] | ~2.5 GW (Tydal, Bhutan, US) ^[ambiguous] | Mostly self-mining + own ASIC sales ^[extracted] | Self + ASIC customers ^[extracted] | Self-operated ^[inferred] | ~$100-200M conv ^[inferred] | ~5-8% conv ^[inferred] | 2029 conv ^[ambiguous] | n/a | ~$100-200M ^[ambiguous] | Yes | 2024 secondary ^[extracted] |
| Nebius | NBIS | ~$8-12B ^[ambiguous] | ~300 MW announced (Finland, KC, NJ, Israel) ^[ambiguous] | Announced GPU cloud customers undisclosed ^[ambiguous] | Mid-market GPU cloud, undisclosed enterprise ^[ambiguous] | Diversified small ticket ^[inferred] | Net cash positive ^[extracted] | n/a | n/a | ~$2.5B post-Yandex cash ^[extracted] | Yes | 2024 PIPE ($700M Nvidia/others) ^[extracted] |

Numbers above are blended from 10-K, 10-Q, 8-K, S-1/S-3, investor decks, and management call commentary through Q1 2026 reporting. Where multiple disclosures conflict or where management commentary outruns hard contracts, the cell is marked `^[ambiguous]`. Market caps are point-in-time April 2026 and will move.

## CoreWeave (CRWV)

Business model: managed GPU cloud (not just hosting). CoreWeave leases or builds the building, owns the GPUs, operates the orchestration stack, and sells GPU-hours under multi-year MSAs to AI labs and hyperscalers. ^[extracted]

Sites: a mix of leased third-party data centers (QTS, Compass, CyrusOne, Chirisa) and increasingly self-managed campuses contracted via APLD, Core Scientific, and others. Total announced contracted power footprint disclosed in the S-1 was approximately 1.3 GW with a pipeline toward ~1.6 GW. ^[extracted] Live operating capacity as of late 2025 was disclosed in the range of 470 MW with another ~120 MW commissioning. ^[ambiguous]

Customers: Microsoft was disclosed in the S-1 as 62% of 2023 revenue and remained the dominant customer through 2024. ^[extracted] OpenAI signed a multi-year contract publicly disclosed in 2024-2025 (initial commitment widely reported at ~$11.9B over five years, with subsequent expansions). ^[extracted] Meta and a series of unnamed enterprise customers round out the book. The customer concentration risk is material: a Microsoft renegotiation, redirection of OpenAI compute to Stargate-affiliated capacity, or a Meta in-housing decision would each move the equity story.

GPU fleet: predominantly H100, with H200 and GB200 deployments scaling through 2025-2026. Useful life used for depreciation is six years, longer than the historical four-year cloud convention, which materially flatters near-term EBITDA. ^[extracted] A shift back to a shorter useful life (which any auditor could push as Blackwell ramps) would be a meaningful EPS headwind.

Debt structure: the marquee piece is the Magnetar/Blackstone-led delayed-draw term loan facility ("DDTL 1.0" and "DDTL 2.0") originally sized at $2.3B and subsequently expanded — total committed senior secured capacity reported above $10B by late 2024. ^[extracted] These are GPU-collateralized, with covenants tied to contracted MSAs. The structure is non-recourse to the parent at the asset-SPV level but pulls cash from MSA receivables. Cost is reported in the SOFR+5-6% range. ^[inferred]

Liquidity: post-IPO (March 2025) and follow-ons, the cash balance has been recurringly cited at multi-billion-dollar levels with substantial undrawn DDTL capacity. ^[ambiguous]

Key risks: (1) Microsoft concentration; (2) GPU depreciation policy collision with Blackwell-era reality; (3) refinancing risk on DDTL tranches as they amortize; (4) negative free cash flow until contracted MW catches up to financed MW; (5) Stargate-driven OpenAI capacity migration.

## Applied Digital (APLD)

Business model: power-first colocation host, not a managed cloud. Applied builds high-density data center shells on owned power, then leases to a single anchor tenant on a long MSA. ^[extracted]

Sites: the Ellendale, North Dakota campus is the asset story. The first 100 MW building was energized in 2025; a second 150 MW building is in commissioning, with an additional 150 MW announced for a total ~400 MW Ellendale plan. ^[extracted] A Jamestown ND HPC site and a smaller legacy facility round out the footprint.

Customer: in mid-2024 APLD signed a 250 MW, 15-year hosting MSA with CoreWeave covering Ellendale buildings 1 and 2. ^[extracted] Subsequent disclosures expanded the relationship to additional MW. The single-customer concentration on the HPC line is essentially 100%, with all the implications that carries.

Capex pipeline: HPC capex per MW disclosed in the $7-9M range for purpose-built liquid-cooled shells ^[extracted], excluding the GPU stack (which CoreWeave provides under the MSA structure). The Macquarie joint venture announced in 2024 committed up to $5B of preferred equity to fund the HPC build, with a put/call structure governing eventual ownership. ^[extracted]

Debt structure: a project-finance-style senior secured facility at the Ellendale SPV (Sumitomo Mitsui-led, with other lenders) was disclosed in 2024-2025, drawing as MW commission. Reported pricing has been SOFR+5-6%. ^[inferred] Corporate-level debt is comparatively modest. Preferreds (the Macquarie tranche) sit ahead of common but inside SPV debt.

Liquidity: working capital has been periodically tight, with multiple equity raises and ATM issuance through 2024-2025. ^[extracted]

Key risks: (1) CoreWeave concentration is binary at the HPC line; (2) Macquarie preferred dilution and conversion mechanics; (3) construction/commissioning slippage at building 2/3; (4) Bitcoin-mining residual exposure on legacy revenue; (5) site-specific power and water permitting risk in North Dakota.

## Core Scientific (CORZ)

Business model: post-bankruptcy converted miner pivoting to GPU hosting. Core Scientific emerged from Chapter 11 in early 2024. ^[extracted]

Sites: total announced gross power capacity is approximately 1.3 GW across six campuses (Texas, Georgia, North Dakota, Oklahoma, Kentucky). ^[extracted] The Denton TX and Muskogee OK sites are the marquee HPC conversions.

Customer: in mid-2024 Core Scientific signed a series of 12-year hosting MSAs with CoreWeave aggregating ~590 MW with ~$8.7B of headline contract value. ^[extracted] Modifications and extensions in 2025 expanded that figure further. ^[extracted]

GPU fleet: none owned by CORZ itself on the HPC line; CoreWeave brings the GPUs. Self-mining ASIC fleet remains live but is being progressively converted.

Capex pipeline: conversion capex disclosed at approximately $9-10M per MW for HPC-grade liquid-cooled retrofit at sites originally designed for ASIC mining, with CoreWeave funding the GPU stack. ^[extracted]

Debt structure: post-emergence capital structure includes secured notes plus convertibles issued in 2024-2025 to fund the HPC conversion capex. ^[extracted] The stack is materially cleaner than pre-bankruptcy. A merger with CoreWeave was announced in 2025 then re-cut after market dislocation; status as of April 2026 is `^[ambiguous]`.

Liquidity: cash position improved post-emergence and post-CoreWeave milestone payments.

Key risks: (1) CoreWeave-as-counterparty correlation — if CRWV underperforms, both equity stories suffer; (2) merger optionality with CoreWeave creates overhang; (3) bitcoin-mining segment cash flow is volatile; (4) conversion-capex execution risk on remaining MW.

## IREN (IREN)

Business model: vertically integrated — IREN owns the land, the substations, the buildings, the ASIC mining fleet, and (increasingly) its own GPU cloud. Unlike APLD or CORZ, IREN does not currently lease the GPU stack to a third party at scale. ^[extracted]

Sites: Childress TX (~750 MW grid-secured), Sweetwater TX (~1.4 GW grid-secured, multi-phase), Mackenzie BC (Canada, hydroelectric), and West Texas expansions. Total grid-secured MW announced at ~2.9 GW. ^[extracted] How much of that is energized vs interconnected vs merely contracted differs starkly across phases — only ~750 MW is operational as of late 2025. ^[inferred]

Customer: most current revenue is bitcoin self-mining plus a small but growing GPU cloud (Horizon Cloud) selling H100/H200/GB200 capacity to AI inference and fine-tuning customers. ^[extracted] Multi-year hyperscaler MSAs have been hinted at but not confirmed in filings as of Q1 2026. ^[ambiguous]

GPU fleet: several thousand H100/H200 and GB200 units announced; precise count moves with each procurement update. ^[ambiguous]

Capex pipeline: Sweetwater is the bull case — a ~1.4 GW campus on owned land with substation work underway. Time-to-energization estimates run multi-year and depend on ERCOT interconnection.

Debt structure: comparatively light. IREN has historically funded with equity (multiple ATMs through 2024-2025) plus some equipment financing. ^[extracted] No marquee senior secured term loan as of Q1 2026. ^[inferred]

Liquidity: cash position relatively healthy on equity issuance.

Key risks: (1) the bull case requires Sweetwater to actually energize and to attract a hyperscaler anchor; (2) absent a contract, ERCOT congestion / curtailment risk; (3) ongoing dilution from ATMs; (4) bitcoin price exposure on the still-dominant mining segment; (5) GPU resale / depreciation risk if hosting demand softens.

## Cipher Mining (CIFR)

Business model: bitcoin miner pivoting selectively to HPC hosting. Cipher's HPC story leans heavily on a single announced deal.

Sites: Black Pearl (West TX) is the AI-pivot site, with ~300 MW expandable. Reeves County and Odessa support the legacy mining operations. ^[extracted]

Customer: in late 2025, Cipher announced a 244 MW, 10-year hosting agreement with Fluidstack with a Google guarantee/backstop (terms reported in press releases; full economic structure of the Google credit support has not been disclosed in detail in filings). ^[ambiguous] The "Google-backed" framing is widely repeated but the legal form of Google's commitment requires care — guarantee, capacity option, or marketing arrangement materially differ in their balance-sheet implications.

GPU fleet: none on Cipher's balance sheet; Fluidstack brings the stack.

Capex pipeline: management has guided to additional MW pipeline beyond the initial Fluidstack tranche, but contracted-MW-as-pivot for the equity story is a single deal with a private counterparty.

Debt structure: limited corporate debt; Cipher has historically funded equipment with a mix of equity and equipment financing. ^[inferred]

Liquidity: ATM issuance through 2024-2025 has been a recurring source. ^[extracted]

Key risks: (1) the Fluidstack deal is the entire HPC thesis — if economics or termination provisions diverge from current market expectations, the equity story changes; (2) Google's actual exposure is undisclosed in granularity; (3) bitcoin price exposure on the dominant existing segment; (4) dilution.

## TeraWulf (WULF)

Business model: zero-carbon-flagged miner converting to HPC hosting. Lake Mariner NY is the marquee asset, drawing on adjacent nuclear/hydro power. ^[extracted]

Sites: Lake Mariner has multiple buildings (1-5) at varying stages, totaling a gross ~750 MW campus plan. ^[extracted] The Abernathy TX site adds ~250 MW of incremental capacity. ^[extracted] Energized MW remain a subset.

Customers: a 60 MW agreement with Core42 (G42) was disclosed in 2024 ^[extracted], followed by a much larger reported deal with Fluidstack/Google in 2025 covering ~200 MW with potential expansion. ^[ambiguous] Both of WULF's HPC anchors are GPU-resellers (Fluidstack, Core42) rather than hyperscalers directly — the credit chain is longer than CRWV-Microsoft and worth weighting.

Debt structure: a $500M senior secured note offering was completed in 2024, maturing 2030, used to refinance prior facilities and fund Lake Mariner buildout. ^[extracted] Convertible notes followed in 2024-2025. ^[extracted]

Liquidity: ATM issuance plus the 2024 senior notes provide working capital, though leverage on a contracted-MW basis is meaningfully higher than IREN. ^[inferred]

Key risks: (1) two-name customer concentration with intermediated credit; (2) commissioning risk on Lake Mariner buildings 2-5; (3) Abernathy ramp; (4) refinancing of 2030 notes and conv tranches; (5) bitcoin-mining residual.

## Hut 8 (HUT)

Business model: hybrid miner / HPC host, complicated by the American Bitcoin spinout/merger and a Coatue-backed financing of the Far site.

Sites: a portfolio of legacy mining sites plus a stated push toward the Far campus and an HPC pipeline. ^[ambiguous] Disclosure granularity on contracted vs announced HPC MW is materially lower than peers as of Q1 2026.

Customer: HPC-anchor customer disclosure is comparatively thin in filings; the Coatue financing is the more concrete data point. ^[ambiguous]

Debt structure: corporate debt has been modest; the Coatue facility supports specific site capex. ^[ambiguous]

Liquidity: bitcoin treasury holdings are a meaningful (and volatile) liquidity buffer. American Bitcoin spinout/merger activity adds optionality but also complexity.

Key risks: (1) low contracted-MW disclosure makes the equity story difficult to underwrite without more transparency; (2) bitcoin treasury mark-to-market drives reported earnings; (3) financing structure complexity; (4) execution at the Far site.

## Bitdeer (BTDR)

Business model: ASIC manufacturer plus self-miner plus HPC aspirant. Bitdeer designs its own ASICs (the SEALMINER series) and operates large self-mining sites in Norway (Tydal), Bhutan, and the US. ^[extracted]

Sites: ~2.5 GW announced gross power footprint across geographies. ^[ambiguous] HPC-specific MW is largely aspirational — Bitdeer has guided to AI/HPC pilots but does not have a marquee third-party hyperscaler MSA disclosed as of Q1 2026.

Customer: predominantly self (mining) plus third-party ASIC sales. The HPC line is small and largely aspirational. ^[inferred]

Capex pipeline: SEALMINER vertical integration is the differentiated piece — Bitdeer is one of the few miners producing its own silicon. The HPC pivot is incremental rather than transformative.

Debt structure: convertible notes plus equipment financing. ^[ambiguous]

Liquidity: meaningful bitcoin holdings; cash position varies with ASIC sales and mining margins.

Key risks: (1) HPC story is far from contracted; (2) ASIC competitive dynamics vs Bitmain; (3) Bhutan and Norway country/regulatory risk; (4) the equity is closer to a vertically integrated bitcoin pure-play than an AI infrastructure name despite occasional narrative overlap.

## Nebius (NBIS)

Business model: managed GPU cloud built on the Yandex N.V. spinoff. Nebius is structurally the closest peer to CoreWeave in business model (managed cloud) but at a fraction of the scale and with European/post-Soviet governance lineage. ^[extracted]

Sites: Mäntsälä, Finland is the legacy flagship; Kansas City, Missouri and a New Jersey footprint are the US expansion; Israel rounds out the announced map. ^[extracted] Total MW announced is approximately 300 MW, with energized MW a subset. ^[ambiguous]

Customers: a long tail of mid-market AI customers plus undisclosed enterprise relationships. Nebius lacks the hyperscaler anchor that CoreWeave has but also lacks the corresponding concentration risk. ^[inferred]

Debt structure: net cash positive post Yandex N.V. divestment, with ~$2.5B of cash from the Yandex transaction enabling the buildout to be largely equity-funded. ^[extracted] A $700M PIPE in late 2024 included Nvidia and other strategic investors. ^[extracted]

Liquidity: best-in-cohort. The structural balance-sheet position is the strongest of the named operators, even if scale and contracted MW are smaller.

Key risks: (1) governance and listing-quality concerns linked to the Yandex lineage; (2) GPU procurement allocation in a Nvidia-rationed market; (3) lower contract concentration is a feature on credit but a bug on revenue visibility; (4) European data center power and grid constraints particularly in the Nordics.

## Crypto-to-AI conversion economics

Six of nine names (CORZ, IREN, CIFR, WULF, HUT, BTDR) are converted or hybrid bitcoin miners. The conversion is not trivial. Bitcoin mining sites are designed for low-PUE ASIC racks at 30-50 kW per rack with air or immersion cooling, on power topologies tolerant of curtailment and short-cycle outages. AI training and inference sites need:

- Liquid cooling at the rack (direct-to-chip or rear-door heat exchangers) sized for 60-130+ kW per rack on Hopper, climbing toward 250-400+ kW on Blackwell and Rubin generations. ^[extracted]
- Tier III-equivalent power topology with 2N or N+1 redundancy, dual-corded servers, and substantially higher uptime SLAs than mining tolerates. ^[inferred]
- Dense networking fabrics (InfiniBand or 800G Ethernet) and structured cabling that mining sites generally lack.
- Make-up water and chiller plant build-out for liquid-cooling loops.
- Fire suppression, security, and operational headcount aligned with enterprise/hyperscaler colocation expectations.

Disclosed conversion capex per MW from the cohort:

- Core Scientific: approximately $9-10M per MW for HPC-grade conversion at Denton/Muskogee, GPU stack provided by tenant. ^[extracted]
- Applied Digital (greenfield-equivalent at Ellendale): approximately $7-9M per MW for purpose-built liquid-cooled shells. ^[extracted]
- TeraWulf at Lake Mariner: management has cited per-MW costs in a similar range; precise figures vary by building. ^[ambiguous]
- IREN, CIFR, HUT, BTDR: less granular per-MW disclosure as of Q1 2026. ^[ambiguous]

The implication: the converted-miner thesis is real but is not free. A site that cost $1-2M per MW to build for ASIC mining requires another $7-10M per MW to upgrade to AI-grade hosting. That is the right ballpark for greenfield AI hosting capex anyway, which means the converted-miner advantage is power and permitting (already in place) and timeline (months not years), not capex savings on the building itself. Anyone framing a converted miner as cheaper-than-greenfield should be challenged on this point.

## Customer concentration heatmap

| Buyer | Names where buyer is a top-1 or top-2 HPC customer | Risk if buyer renegotiates |
|---|---|---|
| Microsoft | CRWV (top-1 historically) | Very high — Microsoft was >50% of CRWV 2024 revenue ^[extracted]; Stargate redirection of OpenAI compute is the marginal risk vector, not a Microsoft default |
| OpenAI | CRWV (large multi-year), Oracle (separate) | High but term-protected — OpenAI commitments are multi-year contractual; renegotiation risk is shape, not default |
| Meta | CRWV (smaller), various hyperscalers | Lower for this cohort — Meta is a smaller share of neocloud counterparty risk |
| CoreWeave (as customer to host) | APLD, CORZ | Extreme — CRWV is essentially the entire HPC line for both; CRWV credit and pipeline drives both equity stories |
| Fluidstack (Google-backed, reseller) | CIFR, WULF | Material — Fluidstack is private, Google's exposure is undisclosed in granularity, and the credit chain is longer than direct hyperscaler |
| Core42 (G42) | WULF | Material — sovereign-affiliated counterparty, geopolitical sensitivity |
| Coatue (financing, not capacity) | HUT | Different risk — financing not offtake; risk is refinancing not renegotiation |
| Self / mid-market | IREN, BTDR, NBIS | Lower concentration but lower visibility on revenue durability |

Concentration is the dominant risk for APLD and CORZ (CoreWeave), is the historical risk for CRWV (Microsoft), and is a longer-credit-chain risk for CIFR and WULF (Fluidstack/G42). NBIS, IREN, and BTDR carry lower concentration but compensate with lower contracted-MW visibility.

## Debt and dilution stack ranking

Ranked from least to most balance-sheet risk, point-in-time April 2026:

1. **NBIS** — net cash positive, equity-funded, lowest leverage. Risk is operational scale-up, not solvency. ^[inferred]
2. **IREN** — light debt, equity-funded, ATM-driven dilution, but no near-term refinancing wall. ^[inferred]
3. **BTDR** — modest convertibles, sizable bitcoin treasury, equity-funded growth. ^[ambiguous]
4. **CIFR** — limited corporate debt, ATM-funded, but the equity story is single-deal-dependent. ^[inferred]
5. **HUT** — moderate corporate debt, Coatue site-financing, but contracted-MW disclosure is thin. ^[ambiguous]
6. **CORZ** — post-emergence capital structure cleaner than pre-bankruptcy; convertibles add dilution but not solvency risk. ^[inferred]
7. **WULF** — $500M 2030 senior secured note, plus convertibles, on a partially contracted MW base. Refinancing risk if HPC ramp slips. ^[extracted]
8. **APLD** — Macquarie preferred ($5B JV authorization) plus Ellendale SPV senior secured plus corporate ATM. Project-finance-style stack means SPV-level discipline matters. ^[extracted]
9. **CRWV** — by far the largest absolute debt stack (Magnetar/Blackstone DDTL above $10B committed). Non-recourse SPV structure helps; absolute scale and refinancing cadence still drive the highest aggregate balance-sheet risk in the cohort. ^[extracted]

Notable instruments to watch:
- CRWV DDTL 1.0/2.0 amortization schedule and any amendments. ^[extracted]
- APLD Macquarie preferred conversion mechanics and put/call timing. ^[extracted]
- WULF $500M sr secured 2030 covenants and HPC-revenue triggers. ^[extracted]
- CORZ convertibles 2028 and any merger-driven repricing. ^[ambiguous]
- HUT Coatue facility utilization and recourse. ^[ambiguous]

Dilution watch: CRWV, APLD, IREN, CIFR, and WULF have all run active ATMs through 2024-2025, with cumulative share-count growth that needs to be netted against per-share metrics. ^[extracted]

## Where the spread is widest

The "announced MW vs contracted MW" gap is the single most useful diligence ratio in this cohort. Rough ranking of where the gap is biggest as of April 2026:

1. **IREN** — ~2.9 GW grid-secured, <100 MW HPC contracted. The bull case requires the gap to close. ^[ambiguous]
2. **BTDR** — ~2.5 GW announced, near-zero third-party HPC contracted. The HPC narrative is largely aspirational. ^[inferred]
3. **HUT** — pipeline language outruns disclosed contracted HPC MW. ^[ambiguous]
4. **CIFR** — ~1.5 GW pipeline, 244 MW contracted via a single private counterparty. ^[ambiguous]
5. **WULF** — ~1.0 GW announced, ~260 MW contracted across two intermediated counterparties. ^[ambiguous]
6. **CRWV** — large absolute pipeline but the contracted MSA backlog is the single largest in the cohort; the spread is wide in absolute MW but narrower as a ratio. ^[extracted]
7. **NBIS** — smaller announced pipeline, more diversified contracted base. ^[inferred]
8. **CORZ** — ~590 MW of the ~1.3 GW gross is contracted to CoreWeave; ratio is favorable. ^[extracted]
9. **APLD** — 250 MW of ~400 MW Ellendale plan is contracted on long-tenor MSA. ratio is the tightest in the cohort. ^[extracted]

The names with the widest spreads (IREN, BTDR, HUT, CIFR) are also the names where consensus narratives lean most heavily on yet-unsigned hyperscaler contracts. Underwriting them requires a probability-weighted view of contract closure, not a face-value reading of announced MW. The names with the tightest spreads (APLD, CORZ, NBIS) carry different risks — concentration, governance, refinancing — but the contracted-MW base is real.

A useful framing inherited from [[risk-tripwires-and-warning-indicators]]: announced MW is a marketing variable; contracted MW with delivered power is a balance-sheet variable. Treat them differently.

## Related

- [[ai-data-center-buildout-investment-memo]]
- [[ai-data-center-supply-chain-bottlenecks]]
- [[ai-investment-public-company-scorecard]]
- [[hyperscaler-constraint-map]]
- [[us-power-region-deep-dive]]
- [[risk-tripwires-and-warning-indicators]]

## Summary

Neoclouds and converted miners trade on announced MW but service debt from contracted MW, and the spread between those two numbers is the diligence variable that matters. CoreWeave, Applied Digital, Core Scientific, and Nebius have real contracted bases (though with concentration risks); IREN, Bitdeer, Hut 8, and to a lesser extent Cipher and TeraWulf carry larger gaps between aspirational and signed. Balance-sheet risk ranks roughly opposite to scale — Nebius cleanest, CoreWeave largest absolute exposure — with project-finance-style structures at APLD and CRWV concentrating risk at the SPV level rather than the parent.
