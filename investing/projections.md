# Portfolio projections

Research and design prepared October 16, 2026. The user wants projections at **six months and one, two, three, four and five years**, with estimated probabilities. The confirmed baseline has **no new deposits or withdrawals**. A working conditional stock/ETF engine was completed October 17; see [implementation and validation](models/README.md) and the [first report](../reports/investing/projections/2026-10-17.md). Full-household inputs and demonstrated household calibration remain incomplete.

The purpose is to help decide whether our current investments offer enough potential reward for the losses we could face, and whether a proposed change improves that tradeoff. Long-term AI infrastructure investing remains the core. Do not assume profitable swing trading or a particular AGI date to make the projection work.

## What Chris should see

Start with a short explanation of the outlook and its implications. Then show one readable table, with a row for each of the six horizons:

| When | Middle estimate | Middle 80% of modeled outcomes | Chance of finishing below today's value | Chance of reaching the stated target |
| --- | --- | --- | --- | --- |
| Six months; one, two, three, four and five years, each on its own row | Dollar value and cumulative return | Lower and upper dollar values | Model estimate | Model estimate, only if a target is defined |

Use the actual valuation date to calculate each target date. The middle estimate is the **median**: half the modeled outcomes are higher and half lower. It is not a promise or the probability of hitting that exact value. The range runs from the 10th to the 90th percentile, leaving modeled outcomes outside it on both sides; the lower edge is not the worst possible loss. Marginal ranges at different dates do not mean there is an 80% chance of staying inside the entire path. A median path is not necessarily one simulated path.

Show these additional questions in a compact second table or supporting detail:

- What is the chance of being ahead, losing at least 20% by that date, or doubling the starting value? Treat these as diagnostic thresholds, not the user's approved loss limits or return goals.
- What is the chance of a peak-to-trough fall of at least 30% **at any point before** that date? This differs from finishing 30% below the starting value. State the path frequency; a monthly model can miss a deeper fall within the month.
- What is the chance of outperforming an S&P 500 total-return reference and a Nasdaq-100 total-return reference over the same period? These are comparisons, not approved portfolio targets.
- What does the downside mean in dollars, what causes it, and which holdings contribute most? Include the average result in the worst 5% of modeled ending outcomes in the appendix when the sample supports it; this is not a loss ceiling.

Use cumulative returns for every horizon. Annualized returns can be additional context for horizons of at least one year; do not compare a six-month cumulative return with a five-year annualized return as if they were the same measure. Keep average ending wealth separate from the median when an unusually strong upside tail makes them differ materially.

Round probabilities to a precision the evidence supports, generally whole percentages or broader ranges. Distinguish the model's output from uncertainty about whether the model is right. Never describe a result such as a modeled 70% chance as a verified real-world frequency merely because many paths were simulated. A zero count in a finite simulation does not establish that an event is impossible.

## What the research supports

These sources inform the design; they do not forecast this household's returns. The implementation choices below are our recommendations, not a claim to reproduce any provider's proprietary model.

| Primary source checked October 16, 2026 | Finding relevant to this design |
| --- | --- |
| [Vanguard Capital Markets Model](https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts.html) | Uses outcome distributions, including correlations and non-normal behavior; warns that historical estimation can miss extreme losses. Its 10- and 30-year outlooks are not short-term forecasts. |
| [J.P. Morgan long-term assumptions](https://am.jpmorgan.com/us/en/asset-management/adv/insights/portfolio-insights/ltcma/) | Intended for strategic decisions over 10–15 years, not short-term tactical allocation. Do not paste an annual long-run expected return into each of our six horizons. |
| [CFA Institute: Backtesting and Simulation, printed pages 56–57](https://www.cfainstitute.org/sites/default/files/-/media/documents/book/curriculum-update/2021-member-guide-refresher-readings.PDF) | Historical simulation depends on the past representing future uncertainty. Simple normal models miss important downside behavior; greater model complexity also brings estimation error. Use scenario and sensitivity checks. |
| [CFA Institute: Equity Valuation](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/equity-valuation-concepts-basic-tools) | Company fundamentals and valuation matter; more than one valuation method can help expose sensitivity to assumptions. A valuation estimate is fallible. |
| [MSCI: AI and geopolitical stress scenarios](https://www.msci.com/research-and-insights/blog-post/macro-scenarios-in-focus-assessing-portfolio-resilience-to-ai-and-geopolitical-risks) | Separates hypothetical shocks from forecasts and uses market relationships plus judgment to examine portfolio effects. A stress result is not automatically a probability estimate. |
| [Gneiting and Raftery: Strictly Proper Scoring Rules](https://sites.stat.washington.edu/people/raftery/Research/PDF/Gneiting2007jasa.pdf) | Provides ways to evaluate probability forecasts and prediction intervals. Our proposed scorekeeping uses event scores and interval coverage/width, not just whether one central target was close. |
| [New York Fed: option-based distributions](https://www.newyorkfed.org/research/staff_reports/sr677.html) | Option prices can be used to construct risk-neutral distributions. They are a distinct input to examine, not an automatic estimate of real-world investment success. |
| [TreasuryDirect: Treasury notes](https://www.treasurydirect.gov/marketable-securities/treasury-notes/) | Notes pay coupons every six months and have a maturity date. Forecast their cash flows and what happens to the proceeds rather than extending today's price forever. |
| [FINRA Rule 2214](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2214) | A useful reporting standard is to explain assumptions, methodology, limitations and the hypothetical nature of results. This is a design reference, not a determination that this personal workflow is subject to member-firm rules. |

## Build the correct starting portfolio

Use dated account positions and a common valuation session. Reconcile the instruments, quantities, cash, debt or margin balances if present, and total value. Do not infer E*TRADE shares from daily gains. The [October 16 E*TRADE capture](records/2026-10-16-chris-etrade.md) now supplies all its stock/ETF quantities, Treasury face amounts, cash and margin balance, plus 69 lot rows. Robinhood cash and current option marks/terms remain missing; its saved quantities retain their original snapshot dates. Refresh prices across the recorded holdings before a new combined valuation.

Missing tax lots do **not** prevent a supported pre-tax stock projection. Missing position quantities and marks do prevent a complete household dollar forecast. A first model may cover the recorded stocks/ETFs across all three accounts after common-date pricing, with exclusions named beside every outcome table. Include E*TRADE cash and Treasuries only when their dated values, cash-flow treatment and any accrued-interest limits are supported. Never scale a subset to an invented household total or treat excluded assets as zero. Fresh prices alone do not make old position counts broker-reconciled.

Keep account views for implementation and a combined view for shared risk. Obtain dated sponsor holdings to measure the companies held through QQQ, QQQM and SPY alongside direct positions. GOOG and GOOGL share issuer risk. QQQ and QQQM are closely related exposures, not independent bets.

Either model an ETF as a fund, using its look-through to explain and estimate risk, or reconstruct its holdings for modeling. Do not add the constituent values on top of the fund value. Include fund expenses once; returns already net of fees must not have the same fee subtracted again.

Retain input dates, sources, adjustment conventions and missing fields. Keep broker exports, account identifiers and detailed personal tax inputs in ignored storage under the existing publication rules.

## Use two views of the future

**A market-based distribution** estimates how the current portfolio could behave across many related market paths. Start with a transparent model of common exposures and company-specific risk. A reasonable first candidate is historical blocks of market/factor returns sampled together, with forward return assumptions stated separately. Sampling blocks can retain some clustering, but cannot reproduce every future shock. Compare it with a simpler reference model and explicit severe stresses rather than assuming sophistication ensures accuracy.

**A business-based scenario model** asks what the underlying companies could earn and what investors might pay for those earnings. For important holdings, connect revenue, margins, reinvestment, financing, dilution and valuation to the shareholder outcome. Use normalized operating earnings and cash flow where headline profits are distorted by investment gains or a memory-cycle peak. Use consistent enterprise/equity and share-count bases; do not subtract debt twice or count dividends twice. The local valuation tools support arithmetic checks, not the truth of the assumptions.

The six-month and one-year views need current volatility, earnings changes, financing events, valuation sensitivity and market conditions. The two- through five-year views need more attention to business growth, returns on capital, capacity, competition, financing and eventual valuations. The split is a modeling emphasis, not a claim that fundamentals reliably time short-term prices. Long-run asset-class assumptions are context and sensitivity inputs, not direct forecasts for these holdings at these horizons. Do not extrapolate a recent AI-stock rally into a permanent growth rate. Examine uncertainty in the estimated returns and model parameters themselves, as well as randomness in market paths; compare plausible parameter sets without inventing weights to hide disagreement.

Produce all six horizons from a **consistent set of joint paths**. Model common shocks to technology valuations, AI spending, semiconductors, rates, financing and relevant country/currency exposure. Stress the possibility that apparent diversification weakens when those holdings fall together. Permit company failures and permanent losses; do not make mean reversion or a guaranteed recovery a condition of the model.

Short listing histories need explicit treatment. Do not truncate the whole portfolio's history to the newest listing, invent pre-listing prices, or silently splice a reused ticker into another company's history. If a justified factor/industry proxy is used, disclose the mapping and uncertainty. A current basket tested on older markets is a hypothetical risk diagnostic, not the household's historical performance or proof of stock-selection skill.

Do not bolt two forecasts together by counting the same earnings growth or market premium twice. Document how the market and business views interact: they can be separate cross-checks first. Combine them into one probability distribution only when the mapping, dependencies and weights are explicit and tested. More simulated paths reduce sampling noise; they do not repair uncertain expected returns or unsupported assumptions.

## Test the AI thesis in both directions

At minimum, examine profitable AI deployment, slower monetization, efficiency/substitution, excess capacity and falling prices, operator financing stress, higher rates, and geopolitical or export disruption. Translate each into relevant business and valuation changes rather than assigning every AI stock the same gain or loss.

For example, faster agent adoption can help suppliers while lower rental prices hurt computing operators. Scarce power can support equipment orders while delaying customer deployment. More capable AI can coexist with weaker shareholder returns. AGI arriving is not the same event as this portfolio doubling.

These stresses can overlap. Do not give them weights that appear to sum to a complete forecast unless they form an explicit, coherent scenario system. If scenario weights rely on judgment, label them **subjective assumptions**, explain the evidence and show how results change under other plausible weights. Do not manufacture a bull/base/bear split merely to produce percentages. Publish no aggregate probability if its weighting has no defensible basis; conditional scenario outcomes remain useful.

## Handle options, bonds and future actions explicitly

The recorded NVDA and MU calls expire during the requested forecast period. Verify deliverables, multiplier, strike, expiry, exercise style, quotes and adjustments before modeling them. Reprice them nonlinearly along the same underlying paths, with interest rates, dividends, volatility and remaining life accounted for; a constant delta or a stock growth rate is not a five-year call forecast. Option-pricing probabilities are not automatically real-world path probabilities.

At expiry, reflect verified settlement/exercise mechanics and available funding. Define a forecast-only treatment of sale, exercise, expiry or proceeds before including the calls in a complete model; an automatic roll is not assumed or authorized. If that policy or contract data is unresolved, exclude the options explicitly and keep the output a stock/ETF subset forecast. A hypothetical modeling policy is never a broker instruction.

For Treasury notes, include face amounts, dated coupons, accrued interest, maturity repayment and price changes before maturity. Prevent double-counting accrued interest or coupons. State a cash/reinvestment assumption for maturing principal and income. Reinvestment rates are assumptions, not guaranteed future yields. The baseline has no external deposits or withdrawals; dividends, coupons and maturity proceeds remain internal cash flows and must stay in the modeled wealth.

Begin with a documented **keep-current-holdings policy**, including the handling of income and instrument expiry. Compare any suggested change on the same paths, starting wealth, cash-flow basis, dates and costs. Do not assume weekly rebalancing, future stock-picking profits or unverified swing-trading alpha. Include transaction costs and liquidity constraints when an alternative trades. Show the price paid for lower downside as well as any modeled improvement in return; do not optimize weights before the user's constraints are known.

## Distinguish account value, purchasing power and sale proceeds

The first baseline is nominal USD, pre-tax, with no new deposits or withdrawals. State how fees and internal income are treated. Add inflation-adjusted value as a separate view with a sourced inflation model and sensitivity; a rise in dollars can still lose purchasing power.

After-tax forecasts require the applicable lot, transaction, rate and tax-context inputs under [tax review](tax-review.md). Separate taxes incurred while holding from a hypothetical tax bill if everything were sold at the horizon. Apply no flat capital-gains rate to the entire account value. Do not treat unrealized gains as immediately taxed or assume losses automatically produce a usable tax refund. If tax inputs are missing, publish the supported pre-tax view and state what remains unmodeled.

## Make the probabilities earn their place

Before numerical publication, check valuation arithmetic, cash conservation, joint dependencies, corporate actions and instrument boundaries. Show how the result changes with plausible returns, margins, valuations, correlations, volatility, scenario weights and inflation assumptions. If the conclusion reverses under modest changes, explain that beside the recommendation rather than hide it in a narrow range.

Use rolling historical-origin tests with inputs available at each origin where the necessary data exist. Evaluate event probabilities, interval coverage/width and performance against a simple reference forecast. Use Brier scores for binary events and a proper interval score for ranges; raw hit rate alone rewards broad, unhelpful bands. Do not substitute a retrospective fit or many overlapping weekly forecasts for independent validation. Long-horizon evidence will be limited; disclose that limit and any proxy-based testing.

Separate three labels: **conditional model estimate**, **subjective scenario assumption**, and **demonstrated calibration**. A tested conditional model can be useful before it has a long live record, but must not be called proven or empirically calibrated beyond the actual test evidence. If basic inputs or validation fail, return scenario sensitivities and the specific gap instead of invented percentages. Record model specification, data window, parameter sources, path frequency, seed, simulation count and convergence checks in the appendix so another run can reproduce it.

## Weekly use and scorekeeping

Refresh supported marks and material evidence weekly. Revisit model assumptions when earnings, financing, valuations, macro evidence or instrument events justify it; do not invent a new growth forecast from every research headline. Explain whether the change in projections came from prices, confirmed trades, business assumptions or model revisions.

Keep both a fresh rolling outlook and prior forecasts with fixed target dates. Use dated stock reports and the portfolio state for assumptions, input scope, version and forecast identity; preserve original forecasts and their committed links. A new weekly start date does not erase a missed forecast. Do not overwrite the old baseline with today's holdings or score later trades as if they were originally predicted. Track a hypothetical frozen-policy result separately from actual account results, which require verified transactions and cash flows.

Assess matured forecasts by horizon using the original event definition. Account for dependence between overlapping forecasts; a year's weekly five-year projections are not 52 independent trials. Calibration evidence accumulates slowly and should be reported honestly. Use the [decision journal](decisions/index.md) for material recommendations and their outcomes, without creating a new investment decision merely because the projection was refreshed.

## Implementation status and remaining gaps

1. Agent: obtain current sponsor look-through and suitable return/factor data; establish the dated instrument/price basis and model choices. This can proceed while household inputs are incomplete.
2. Retained inputs: E*TRADE positions, cash, margin balance and acquisition-date rows are saved in the October 16 record and minimal holdings references. Remaining inputs include Robinhood cash/borrowing balances, current option details/marks, any later position changes and other assets the user wants included. Tax-term/adjusted-basis evidence and transaction history are needed for after-tax analysis, not as a prerequisite to every pre-tax calculation.
3. Completed October 17: reproducible stock/ETF model, six horizons, sensitivity cases, unit checks and limited historical proxy diagnostics. First forecast `P-2026-10-16-v1` is frozen. Continue improving weak long-horizon interval coverage and valuation-informed returns; expand to other assets only with supported input/handling policies. No household label on a partial model.
4. User preferences before recommending target allocations: liquidity needs, tolerable losses, and any dated dollar goal. Until then, loss/doubling thresholds are diagnostic questions only. Deposits and withdrawals are confirmed as zero for the baseline; any later cash-flow plan is a separate comparison.

Keep this capability in `portfolio-manager`, with `stock-analysis` explaining its decision implications. A second generic forecasting skill is not needed merely to produce a probability table. The maintained helpers and commands now live in [models/README.md](models/README.md). Preserve the distinction between implemented arithmetic, limited validation evidence and demonstrated real-world calibration.
