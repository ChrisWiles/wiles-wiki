---
title: "[At-risk] Applied Digital (APLD) — avoid / underweight"
category: ai-reference
slug: at-risk-applied-digital-apld
summary: At-risk dossier on Applied Digital (APLD). The Ellendale ND HPC build with CoreWeave as anchor lease customer is the long pitch; the bear case is a stack of capital-structure complexity (preferred equity, convertibles, ATM, common dilution), single-customer dependency on a counterparty that is itself an at-risk credit, announced-vs-delivered MW slippage, North Dakota power-delivery timing, and a residual crypto-mining segment dragging depreciation and cash. Recommendation avoid / underweight, conviction medium.
tags:
  - ai
  - investing
  - infrastructure
  - data-centers
  - risk-analysis
sources:
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001144879&type=10-K
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001144879&type=10-Q
  - https://www.applieddigital.com/news/
  - https://www.applieddigital.com/investors/
  - https://www.fool.com/investing/2026/04/02/applied-digital-borrowed-2-billion-crwv-debt/
  - https://www.bloomberg.com/news/articles/2026-04-09/coreweave-tapping-junk-debt-market-after-meta-ai-computing-deal
  - https://www.utilitydive.com/news/north-dakota-data-center-load-growth-mha-grand-forks-ellendale/
  - https://www.datacenterdynamics.com/en/news/applied-digital-ellendale-coreweave-lease/
  - https://www.coreweave.com/news
created: 2026-04-30
updated: 2026-04-30
provenance:
  extracted: 0.35
  inferred: 0.4
  ambiguous: 0.25
---

> **This is investment research, not financial advice.** I am long-biased on the AI-infrastructure supply chain but explicitly bearish (or at minimum underweight) on the *operator* layer, especially small-cap operators with concentrated customer exposure and complex capital stacks. APLD is the canonical example.

APLD closed at **~$10.40 on 2026-04-30** ^[extracted] after a volatile ~12 months that included the CoreWeave Ellendale lease re-confirmations, two preferred equity issuances (NEPC-led private), at least one ATM common-stock raise, and a March-to-April 2026 drawdown driven by widening CoreWeave credit spreads ^[ambiguous]. Sell-side targets sit in a wide $7-$18 dispersion ^[ambiguous]; the dispersion alone tells you this is a binary-ish setup with the answer mostly depending on the CoreWeave counterparty assumption and on Ellendale MW delivery.

This dossier is part of the [[analyst-picks-master-list]] at-risk leg and pairs with [[at-risk-coreweave-crwv]], [[neocloud-and-power-first-operator-diligence]], and [[risk-tripwires-and-warning-indicators]].

---

## 1. Recommendation in one paragraph

**Avoid / underweight, conviction medium.** Applied Digital's Ellendale ND HPC campus is a real asset with real power and a real anchor tenant — but the equity sits at the *triple intersection* of three risks that compound rather than offset: (i) a capital structure that has absorbed preferred equity (NEPC and other private issuances), convertible notes, project-level debt, and an active ATM into the common, all simultaneously, so common dilution is structurally rising even when operations execute; (ii) anchor-customer concentration where the anchor (CoreWeave, see [[at-risk-coreweave-crwv]]) is itself a high-yield, neocloud counterparty that is renting compute it has not yet sold through to end-tenants under matched-tenor contracts; and (iii) execution risk on the gap between *announced* MW (the headline numbers feeding the bull pitch) and *delivered, energized, revenue-generating* MW (the figure that actually services the debt and prefs). Each of those is survivable in isolation. Stacked, they create a setup where the equity can re-rate sharply lower on a single bad data point — a CoreWeave credit event, a preferred refinancing failure, an Ellendale construction delay disclosure, or an ATM dilution acceleration — and where the *upside* requires multiple things to go right (customer diversification + cash conversion + leverage reduction) on a timetable that does not match the maturity wall.

**Conviction: MEDIUM.** Direction is high-conviction; magnitude is uncertain because if the customer holds and Ellendale delivers, the equity *can* re-rate sharply higher. This is an "asymmetry is bad, not good" call.

---

## 2. What makes the long case popular

The bull pitch on APLD has four legs that genuinely sound compelling in isolation, which is why this name has retail and quasi-institutional follow-through despite the structural problems.

### 2.1 Ellendale, North Dakota — a power-first HPC campus

APLD's Ellendale (ND) HPC campus is the centerpiece. Announced capacity has stepped up over multiple disclosures from an initial ~100 MW to a multi-building, multi-hundred-MW design ^[ambiguous], with management discussing a path to north of **400 MW total IT load** at full Ellendale buildout ^[extracted from earnings commentary, ambiguous on timing]. The site benefits from:

- **Cheap, surplus North Dakota wind power** — ND has had structural curtailment in MISO and SPP for years, which means data center load is welcomed by the regional transmission operator and (more importantly) by the local cooperatives.
- **Cold ambient** — free-cooling more days per year than nearly any other US region, reducing PUE.
- **Friendly state regulatory regime** — North Dakota actively courts data center load (see [[us-power-region-deep-dive]]).
- **Land + interconnection availability** — the site is greenfield with secured interconnection paths, which in 2026 is rarer than the bulls give credit for.

The "power-first operator" framing (see [[neocloud-and-power-first-operator-diligence]]) is the real argument here: APLD has *power and land* in a year where both are scarce. That alone explains why they've found an anchor tenant.

### 2.2 CoreWeave as anchor lease customer

APLD's Ellendale HPC capacity has been pre-leased — in tranches — to **CoreWeave** under multi-year contracts. The lease structure matters: CoreWeave is paying for the *facility*, with GPUs financed and operated by CoreWeave on its own balance sheet (see [[at-risk-coreweave-crwv]]). For APLD this is a **triple-net-style colo / build-to-suit lease**, which is the highest-quality cash flow APLD has ever booked. The disclosed contracted revenue from the CoreWeave lease totals in the billions of dollars over the lease life ^[extracted, ambiguous on exact figure post-amendments]. To the bulls, this is "contracted Microsoft-grade cash flow" — a small-cap colo turned into an AI-infrastructure REIT-equivalent.

### 2.3 North Dakota power as a moat

The bulls argue that APLD has secured something that hyperscalers cannot easily get: a multi-hundred-MW interconnect with timing in the **2025-2027** window, in a region with surplus generation, in a state with no carbon pricing and a friendly regulatory posture. Interconnection queue waits in PJM, MISO, ERCOT, and CAISO are running 4-7 years for new utility-scale loads (see [[us-power-region-deep-dive]] and [[hyperscaler-constraint-map]]). Ellendale's interconnection — already energized in tranches — is a real scarce asset.

### 2.4 AI compute narrative

Layered on top: the broader narrative that *any* operator with energized AI-grade MW in 2026-2027 will get re-rated as the build-out cycle peaks. Comparable names (DLR, EQIX, IRM, even pure-plays like Iris Energy and Cipher Mining for the crypto-pivoting cohort) have multiple-expanded on the AI-DC narrative, and APLD has been the highest-beta way to play it because the equity is small and the contracted-revenue lookup is meaningful relative to the market cap.

This stack of arguments is *not wrong*. The problem is everything below.

---

## 3. Bear case (the reasons to avoid)

### 3.1 Capital structure complexity — the silent thesis-killer

This is the single biggest reason to avoid APLD even if you believe every word of the bull case. The cap stack as of the most recent disclosures includes, in approximate order of seniority:

| Layer | Approximate balance ^[ambiguous] | Notes |
|---|---|---|
| Project-level debt (HPC campus financings, including SMBC-led facilities and CIM-led project loans) | $1.5-$2.5B | Secured against Ellendale; covenants tied to lease performance |
| Convertible notes | $400-$600M | Multiple tranches; conversion prices set during 2024-2025 strikes that are now in-the-money or near-money |
| **Preferred equity (NEPC / Macquarie / other private)** | **$700M-$1.2B** ^[ambiguous] | The most under-appreciated layer; PIK toggles, redemption ladders, anti-dilution and most-favored-nation clauses ^[ambiguous] |
| ATM common-stock program | Active; multiple hundreds of millions issued | Drains the residual common claim every quarter; refile cycle ongoing |
| Common equity | The residual | Where retail sits |

The functional issue is not any single layer — it's the **stack**. Every layer above the common is sucking optionality and cash-flow priority *out* of the common, in real time:

1. **Preferred equity dividends** accrue (often PIK), so the preferred balance compounds against the common claim even when operations are flat.
2. **Convertible note conversions** dilute the share count if APLD trades up — capping the upside even when the thesis is working.
3. **Project debt covenants** restrict dividends to the parent and force any extra cash flow to amortize project debt first.
4. **The ATM** is the live wire: every quarter that operations don't generate enough cash to fund growth capex and prefs, more common shares get sold into the market. This is *predictable*, *disclosed*, and *bearish* — and yet retail consistently underprices the dilution rate.

The math problem: even in a base case where Ellendale delivers and CoreWeave pays, the *common* needs to outrun preferred PIK growth + convertible dilution + ATM dilution. The hurdle rate on the common is not the lease cap rate; it's the lease cap rate net of the senior-to-common-stack accretion rate.

### 3.2 Anchor-customer dependency on a counterparty that is itself at risk

CoreWeave is a single counterparty that, on conservative estimates, accounts for **>60% of APLD's HPC-segment contracted revenue** ^[ambiguous]. Read [[at-risk-coreweave-crwv]] for the full case there, but the key transmission mechanism is:

- CoreWeave's balance sheet leans on junk-debt issuance (Bloomberg April 2026 reporting on CoreWeave's high-yield deals after the Meta deal).
- CoreWeave's *own* customer concentration — Microsoft, OpenAI, Meta — means that any one of those customers reducing or shifting commitments forces CoreWeave to reduce or shift commitments to *its* infrastructure providers, of which APLD is one of the most concentrated.
- CoreWeave's GPU lease economics depend on continued utilization; if utilization disappoints, *CoreWeave* is the entity that breaks first, but APLD is the entity that takes the lease impairment.

The bull case treats the CoreWeave lease as "investment-grade cash flow." It isn't. CoreWeave trades like high-yield credit, and a lease from a high-yield counterparty is high-yield cash flow. APLD's equity multiple needs to bake that in and largely doesn't.

The transmission mechanic is non-linear: in a CoreWeave **stress** (not even default — just spread-widening or covenant amendment), APLD's project-level lenders will tighten. Project-debt covenants typically include language tying the debt to the *creditworthiness* of the anchor tenant, not just the cash flow. A downgrade or watchlist action on CoreWeave by a rating agency can *itself* trigger covenant tightening at APLD, even before any payment is missed. That is the silent trapdoor under this structure.

### 3.3 Execution risk on the Ellendale buildout — announced MW vs. delivered MW gap

This is the most operationally verifiable bear case. APLD has, across multiple disclosures, given **announced-MW** numbers that have repeatedly exceeded **delivered-MW** numbers by meaningful margins on rolling six-month horizons. The pattern (drawn from earnings commentary across FY25 and Q1-Q3 FY26) ^[inferred from earnings commentary]:

- Announced campus capacity grows in headline (X MW announced for Ellendale Building 1, then expanded to Y MW, then to Z MW).
- Delivered, energized, customer-billable MW lags the announced number by 6-12 months on the optimistic case, 12-24 months in practice ^[ambiguous].
- Each delay layers in: PUE commissioning, generator and switchgear delivery (see [[electrical-equipment-deep-dive]]), white-space buildout, and CoreWeave's own GPU staging.

A 6-month slip on a 100 MW building at $4-7M/MW/year colo revenue is $200-350M of revenue moved out of the year — and prefs and project debt do not move with it. This is not theoretical: the CoreWeave-as-customer relationship was *reaffirmed* in 2025 partly because Ellendale Building 1 had slipped and tenants needed the relationship re-confirmed.

There are three sub-risks here:

1. **Power-delivery timing** — even with surplus ND wind, the substation, transformer, and high-voltage interconnect work runs on long-lead-time transformer queues (see [[electrical-equipment-deep-dive]] and [[ai-data-center-supply-chain-bottlenecks]]). APLD has flagged transformer-procurement risk in past disclosures ^[ambiguous].
2. **Mechanical/electrical commissioning** — first-of-its-kind cooling and density designs (liquid-to-chip, rear-door HX, etc.) routinely add 2-4 months to commissioning relative to enterprise-DC plans.
3. **Customer GPU staging** — if CoreWeave (or another tenant) can't get GPUs in matched-tenor (NVIDIA delivery slots), commissioning can be delayed *by the customer*, but APLD still pays the carrying cost.

### 3.4 Power-delivery timeline slippage as a structural feature

North Dakota power is "surplus" in a planning sense, not in an "everything is wired and energized today" sense. Specifically:

- New high-voltage interconnect for multi-hundred-MW loads requires substation upgrades, which require **GSU (generator step-up) transformers and HV breakers**, both of which are running 18-30 month lead times globally (see [[electrical-equipment-deep-dive]]).
- Local transmission cooperative coordination (Otter Tail Power, MDU, Basin Electric, etc.) adds steps not always present in PJM/ERCOT.
- MISO/SPP planning processes are slower than ERCOT's.

APLD's ability to *expand* Ellendale beyond the currently energized phases is gated by external power-equipment supply chains that they don't control. Every quarter that the equipment market tightens (and as of 2026-04-30, GE Vernova and Hitachi backlogs are at multi-decade highs ^[extracted]), APLD's expansion-MW timeline pushes right. That is a *structural*, not a *cyclical*, headwind.

### 3.5 Crypto-mining segment depreciation overhang

APLD's heritage business is **crypto data centers** (Bitcoin hosting), and the company still operates legacy crypto-mining infrastructure. Two issues:

1. **Depreciation drag** — crypto-mining ASIC infrastructure depreciates fast (3-5 year useful lives at most, often impaired earlier as ASIC generations turn over), and that depreciation flows through APLD's GAAP P&L every quarter, dragging reported earnings even when HPC cash flow is improving.
2. **Capital tied up in a low-multiple, declining-relevance business** — every dollar of capital still attached to the crypto segment is a dollar not deployable into the HPC strategy that is the actual thesis.
3. **Optical/narrative drag** — investors who would otherwise pay an AI-DC multiple for APLD are reminded every 10-Q that this is partially still a Bitcoin host. That keeps the multiple compressed.

Management has talked about separating, divesting, or wind-down options for the crypto segment ^[ambiguous]; *none* of those options has been executed at the time of writing. Until it is, the crypto leg is dead weight on the AI-DC story.

---

## 4. What would force re-rating downward (the tripwires)

These are the *avoid-call-confirmation* triggers — events that, if they happen, accelerate the downward re-rating from "underweight" to "actively short" for those willing to size the borrow risk.

### 4.1 Anchor customer (CoreWeave or other) cancellation, deferral, or amendment

Any disclosure that:

- A CoreWeave Ellendale tranche is **deferred, descoped, or restructured** (rent step-up changes, lease commencement push-out, MW reduction);
- A non-CoreWeave secondary tenant pulls out before signing;
- CoreWeave's own credit watch goes negative or is downgraded;

…is a direct hit to APLD's contracted-revenue NPV. Watch the CoreWeave credit-spread chart (see [[risk-tripwires-and-warning-indicators]]) — APLD equity should track it with a lag.

### 4.2 Preferred equity refinancing failure

The preferred equity tranches issued in 2024-2025 (NEPC-led and others) have step-up dividend rates and redemption ladders that get expensive after specific dates. If APLD cannot refinance the prefs at flat-or-better terms when the step-up trigger hits ^[ambiguous on exact dates], the company faces a classic preferred-stack squeeze: dividend rates accelerate, restricting cash to the common, forcing more ATM, accelerating dilution. A *failed* refinancing — either disclosed as "we could not access the market" or implicit in a fire-sale equity issuance — is the single highest-conviction re-rating-downward catalyst.

### 4.3 Ellendale construction delays — disclosed or inferred

Watch:

- Each 10-Q for changes to the **energized MW** disclosure vs. the prior quarter's guidance.
- Comments on transformer / switchgear delivery slippage in earnings calls.
- Filings or correspondence with North Dakota PSC or the local cooperative on interconnect milestones.
- Customer commentary (CoreWeave earnings calls reference Ellendale capacity timing).

A six-month-or-greater slip on the next un-delivered Ellendale phase, or a *second* slip on an already-delayed phase, is a re-rating-downward catalyst.

### 4.4 ATM dilution acceleration

The ATM is the "tell" for management's confidence in cash conversion. Watch:

- Quarter-over-quarter growth in shares outstanding from ATM filings (S-3, prospectus supplements, 424B5).
- Whether the ATM size is being *expanded* on shelf refilings.
- Whether ATM activity is concentrated in months *after* a stock-price rally (good signal — issuing into strength) or *during* a stock-price drawdown (bad signal — issuing because they have to).

If ATM dilution rate exceeds ~5% of shares outstanding per year, the common's path to per-share value creation is closed off even in the bull operating case.

### 4.5 Project-debt covenant amendment

If APLD's project-level lenders (SMBC, CIM, others ^[ambiguous]) require a covenant amendment — extending headroom on debt-service-coverage, EBITDA tests, or anchor-tenant credit triggers — that is a *yellow card*. A *second* amendment, or amendment language that introduces equity cures (e.g., requiring the parent to inject common-stock proceeds into the project SPV), is a red card.

### 4.6 Crypto-segment impairment

A material write-down of the crypto-mining segment would be financially small but informationally large: it would confirm management has given up on the legacy business and is directing all attention to HPC. Counter-intuitively, this is *neutral-to-positive* operationally (focuses the story) but **negative for near-term reported earnings and covenant headroom** — and any covenant trip from a non-cash impairment is exactly the kind of secondary effect retail underweights.

---

## 5. What would invalidate the avoid call

If the following happen, the avoid call should be reconsidered (and possibly flipped to a small constructive position).

### 5.1 Customer diversification — sovereign or hyperscaler direct

If APLD signs a **second large anchor tenant** that is *not* a neocloud counterparty — specifically a sovereign AI program (e.g., a state government, or a UAE / Saudi / Indo-Pacific sovereign with ND interconnect demand), or a hyperscaler-direct lease (Microsoft, Google, Amazon, Oracle), or a frontier lab direct — the anchor-customer-concentration risk collapses materially. Even a 30/70 second-tenant mix would re-rate the equity because it would prove APLD is a *power-first operator* (see [[neocloud-and-power-first-operator-diligence]]) rather than a CoreWeave proxy.

### 5.2 Profitable cash conversion — multiple consecutive quarters

If APLD prints **two-or-more consecutive quarters of positive operating cash flow net of preferred dividends and project-debt amortization** — i.e., true free-cash-flow-to-common positive — without an ATM draw in either quarter, the cap-stack thesis breaks. That would mean the prefs are being serviced from operations, the project debt is amortizing on plan, and the common is no longer being diluted to fund the gap. This is a high bar; APLD has not cleared it as of the most recent reporting period ^[ambiguous].

### 5.3 Debt-to-equity reduction — measurable, sustained

If consolidated leverage ratios (debt/EBITDA, total liabilities/equity inclusive of preferred mezzanine) trend down for three-or-more consecutive quarters, the structural concern compresses. The mechanism would most likely be:

- Convertible note conversions that reduce debt and *don't* trigger an equivalent ATM offset;
- Asset sales (crypto-segment monetization) used to repay debt rather than fund growth;
- Genuine FCF used for debt reduction rather than new project starts.

None of these is the current trajectory, but any of them would change the analysis.

### 5.4 Preferred equity refinancing at flat-or-better terms

If APLD refinances the existing preferred stack at a *lower* coupon or with fewer covenants — specifically removing PIK-toggle accretion, removing MFN clauses, or extending maturities at flat dividend — that is *direct evidence* that the private credit market does not perceive APLD as distressed. This would be a strong invalidator of the cap-stack bear case.

### 5.5 Ellendale delivery on or ahead of plan for two consecutive quarters

If the **delivered, energized, billable MW** number meets or exceeds the prior-quarter guidance for two consecutive quarters, with no slippage on the un-delivered backlog, the execution-risk bear case substantially compresses. This is observable in the 10-Q segment disclosures and earnings-call commentary.

---

## 6. Position framing

For a basket built around the [[ai-data-center-buildout-investment-memo]] thesis, APLD should be:

- **Underweight or zero** in the operator/REIT bucket (DLR, EQIX, IRM are the diversified primaries; APLD is not a substitute).
- **Not used as a CoreWeave proxy** — if you want CoreWeave exposure, take CoreWeave directly, where the cap stack is at least transparent and the customer concentration is one level less compounded.
- **Pair-trade candidate** if you have AI-DC longs you want to hedge customer-concentration risk on: short APLD against long DLR or EQIX captures the customer-concentration delta cleanly.

If the invalidation triggers in §5 begin to fire, revisit at no more than a 1% basket weight given the variance.

---

## 7. Sources

Primary:

- APLD FY2025 10-K (fiscal year ending May 2025) — SEC EDGAR ^[extracted]
- APLD Q3 FY26 10-Q (reported April 2026) — SEC EDGAR ^[extracted]
- APLD prospectus supplements (424B5) and S-3 shelf registrations covering ATM and preferred issuances ^[extracted]
- APLD-CoreWeave lease announcements and amendments (8-K filings) ^[extracted]
- Earnings call transcripts (Q1-Q3 FY26) ^[extracted on commentary, ambiguous on dollar figures cited above]

Secondary / news:

- Motley Fool — "Applied Digital Borrowed $2 Billion: CoreWeave Debt" (2026-04-02) ^[extracted]
- Bloomberg — "CoreWeave Tapping Junk Debt Market After Meta AI Computing Deal" (2026-04-09) ^[extracted]
- Utility Dive — North Dakota data-center load growth coverage ^[ambiguous]
- DataCenter Dynamics — Ellendale / CoreWeave lease coverage ^[ambiguous]
- CoreWeave investor materials and rating-agency reports ^[ambiguous]

Cross-reference within wiki: see [[at-risk-coreweave-crwv]] for the counterparty risk passthrough, [[neocloud-and-power-first-operator-diligence]] for the operator-quality framework, and [[risk-tripwires-and-warning-indicators]] for the monitoring tripwires used above.

---

## 8. Related

- [[neocloud-and-power-first-operator-diligence]] — the framework for evaluating power-first operators like APLD vs. financialized neoclouds
- [[at-risk-coreweave-crwv]] — the counterparty whose credit drives APLD's lease NPV
- [[ai-investment-public-company-scorecard]] — where APLD sits vs. the rest of the public-equity universe
- [[risk-tripwires-and-warning-indicators]] — the monitoring framework for the catalysts in §4
- [[us-power-region-deep-dive]] — North Dakota / MISO / SPP context for the Ellendale interconnect
- [[analyst-picks-master-list]] — basket context including the at-risk leg
- [[ai-data-center-buildout-investment-memo]] — the demand-side framing this name is exposed to
- [[electrical-equipment-deep-dive]] — transformer / switchgear lead times that gate Ellendale expansion
- [[ai-data-center-supply-chain-bottlenecks]] — broader buildout bottleneck stack
