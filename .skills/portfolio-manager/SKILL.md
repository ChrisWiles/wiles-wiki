---
name: portfolio-manager
description: Calculate household account exposure using saved holdings and verified market data; supports supplied brokerage records without requiring an Alpaca account.
---

# Portfolio manager

Read `investing/mandate.md`, `holdings`, and `portfolio-review`. Saved account references are the starting account inputs. Live brokerage access is not assumed; an Alpaca connection is optional and relevant only if the user actually supplies an Alpaca account.

Keep separate account records and distinguish stocks, ETFs, options and Treasury issues. Preserve ticker identity and known quantities; missing positions, cash, face amounts or cost basis remain unknown. A public report or issuer watchlist is never the current portfolio record.

For valuation, fetch timestamped quotes and confirmed instrument details, state the valuation session and quantify only the known subset. Without all account assets and cash, a denominator is incomplete: label known-security weights explicitly or omit weights. Do not use shares outstanding as personal shares. ETF look-through requires current sponsor holdings. Option delta/notional requires verified multiplier, quote, Greeks and contract details; do not equate long calls with common shares. Bond valuation requires face amount and quote convention, with accrued interest separate.

Use existing reconciliation helpers under this skill's `scripts/` only for supported file formats. Keep source exports, account IDs and credentials under ignored private storage. Optional Alpaca diagnostics in `references/alpaca-mcp-setup.md` and `scripts/check_alpaca_connection.py` do not authorize connecting or trading.

Write supported account-level calculations to the dated stock report and `investing/state/portfolio.md`; pass holdings, allocation and issuer-level findings to `stock-analysis`. Household investment data is authorized for publication. No mandatory broker setup, prescribed concentration percentages or executable orders.
