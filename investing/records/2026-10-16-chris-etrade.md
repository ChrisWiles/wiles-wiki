# Chris's E*TRADE portfolio — October 16, 2026

The selected individual brokerage account now has saved quantities for **16 stock/ETF positions and seven Treasury notes**, plus **69 open-lot rows**. The [minimal holdings record](../../.skills/holdings/references/chris-etrade.md) contains only securities and quantities. This dated snapshot retains the additional values needed for portfolio and holding-period work.

## Account values

| Component | USD |
| --- | ---: |
| Stocks and ETFs, sum of rounded position values | $2,991,551.32 |
| Treasury notes, sum of rounded position values | $2,850.96 |
| Cash | $6,516.68 |
| Broker net account value in the captured positions view | $3,000,918.95 |
| Broker total price paid for open positions | $1,925,730.71 |
| Treasury face amount | $2,900.00 |
| Margin balance, checked in detailed balances | $0.00 |

Rounded position values plus cash exceed the broker total by $0.01. Using the full-precision quote products and then rounding the total matches the broker's net account value exactly. Keep the broker total and the individual values as recorded rather than altering a position to force agreement.

The later detailed-balances page, refreshed at **11:47:36 AM EDT / 10:47:36 AM Central**, showed securities of **$2,995,264.65**, cash/net cash-margin balance of **$6,516.68**, and net account value of **$3,001,781.33**. These reconcile exactly. They are a later intraday mark, not the total for the earlier position rows. Purchasing power and margin-enabled withdrawal amounts are not additional cash or assets.

## Retained records

- [Position values and price-paid fields](2026-10-16-chris-etrade-positions.csv): 23 positions, each with security, quantity, last price, price paid and market value.
- [Acquisition dates and lot quantities](2026-10-16-chris-etrade-lots.csv): 69 open-lot rows. Their quantities sum exactly to every recorded position.

For stocks/ETFs, quantity means shares and prices are USD per share. For Treasury notes, quantity means USD face amount, and last price/price paid are per $100 of face value. Each position's quantity × quoted price, divided by 100 for notes and rounded to cents, matches its recorded market value. Treasury quantities are not thousands of dollars or bond counts.

`price_paid` copies the broker's field. Its displayed precision may be rounded; it is not a certification of a complete, adjusted tax basis. The acquisition dates are the dates shown in the expanded lot rows. Broker lot IDs, tax-term codes and basis/holding-period adjustment histories were not captured. The position view had wash-sale adjustments enabled, which does not establish household wash-sale clearance.

## Basis items needing review

| Security | Acquisition date shown | Shares | Price paid shown |
| --- | --- | ---: | ---: |
| AAPL | 2025-01-16 | 57 | $0.00 |
| GOOG | 2025-01-16 | 57 | $0.00 |

Preserve these zeros as broker observations. Do not assume the shares were acquired for free, that the basis is tax-ready, or that all sale proceeds would be taxable gain. Obtain the applicable basis/transfer/corporate-action history before relying on those lots for a tax recommendation. Acquisition dates and ordinary price-paid fields help research but do not by themselves resolve adjusted holding periods or personalized sale taxes.

## Capture scope

Read from the logged-in [E*TRADE positions page](https://us.etrade.com/etx/pxy/portfolios/positions) and [balances page](https://us.etrade.com/e/t/accounts/AcctBalanceDetails) through computer use on October 16, 2026. Positions and expanded lots were captured during the morning visit before the detailed balance check at 11:47 AM Eastern; the portfolio header retained its 11:43 AM Eastern refresh label while lot expansion updated the marks. These are intraday values, not completed-session closes. The broker notes that bond prices update at the end of each business day; no independent bond-price timestamp or accrued-interest amount was supplied.

Only the selected individual brokerage account was reviewed. Other accounts, Robinhood cash/lot details, recent transaction history, dividend-reinvestment settings and verified option marks remain outside this capture. No orders, account settings or holdings were changed. Account numbers and authenticated navigation links are excluded from these records. Refresh prices before a later valuation; retain this snapshot for provenance and comparison rather than overwriting it.
