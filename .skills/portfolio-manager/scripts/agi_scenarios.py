"""Deterministic, judgment-based economic scenarios. No fitted probability claim.

The normalized bridge does not require, or invent, current issuer revenue/FCF.
It is a sensitivity model anchored to recorded holdings and their frozen marks.
"""
import argparse
import calendar
import hashlib
import json
import math
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
HORIZONS = (6, 12, 24, 36, 48, 60)


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def target(start, months):
    year, month = divmod(start.year * 12 + start.month - 1 + months, 12)
    return date(year, month + 1, min(start.day, calendar.monthrange(year, month + 1)[1]))


def calculate(spec, holdings):
    branches = spec['branches']
    assert len({b['id'] for b in branches}) == len(branches)
    for weights in spec['weight_sets'].values():
        assert set(weights) == {b['id'] for b in branches}
        assert all(math.isfinite(v) and 0 <= v <= 1 for v in weights.values())
        assert math.isclose(sum(weights.values()), 1, abs_tol=1e-10)
    symbols = {s for a in holdings['accounts'].values() for s in a}
    assert symbols == set(spec['security_groups']), 'Every held security needs exactly one mapping'
    values = {s: sum(float(a.get(s, 0)) for a in holdings['accounts'].values()) * float(holdings['prices'][s]) for s in symbols}
    start = date.fromisoformat(holdings['valuation_date'])
    total = sum(values.values())
    assert math.isclose(total, float(holdings['initial_stock_value']), abs_tol=.01)
    results = {}
    for b in branches:
        assert b['workloads_per_year'] > 0 and b['efficiency_per_year'] > 0
        onset = date.fromisoformat(b['capability_date'])
        # Add adoption lag in whole calendar months; no capability = automatic revenue.
        adoption = target(onset, b['adoption_lag_months'])
        rows = {}
        for m in HORIZONS:
            end = target(start, m)
            years = m / 12
            active = max(0, (end - max(start, adoption)).days / 365.25)
            phase = years / 5
            # Conditional repricing anticipates economics; not a simulated price path.
            reprice = (1 - math.exp(-years / 1.2)) / (1 - math.exp(-5 / 1.2))
            securities = {}
            for s in sorted(symbols):
                group = spec['groups'][spec['security_groups'][s]]
                p = b['economics'][spec['security_groups'][s]]
                for name in ('cash_conversion_ratio', 'multiple_ratio'):
                    assert math.isfinite(p[name]) and p[name] > 0
                assert 0 <= p['annual_dilution'] < 1
                assert group['ordinary_revenue_growth'] > -1
                demand = b['workloads_per_year'] / b['efficiency_per_year'] if group['driver'] == 'physical_compute' else b['workloads_per_year'] if group['driver'] == 'paid_workloads' else 1
                revenue = (1 + group['ordinary_revenue_growth']) ** years * demand ** (group['elasticity'] * active)
                conversion = p['cash_conversion_ratio'] ** phase
                shares = (1 + p['annual_dilution']) ** years
                multiple = p['multiple_ratio'] ** reprice
                # Zero separately assumed dividends. Includes no reinvestment alpha.
                factor = revenue * conversion / shares * multiple
                assert math.isfinite(factor) and factor > 0
                securities[s] = dict(group=spec['security_groups'][s], starting_value=values[s], revenue_index=revenue, cash_conversion_ratio=conversion, diluted_share_index=shares, valuation_multiple_ratio=multiple, ending_value=values[s] * factor)
            ending = sum(r['ending_value'] for r in securities.values())
            accounts = {a: sum(float(q) * float(holdings['prices'][s]) * securities[s]['ending_value'] / values[s] for s, q in positions.items()) for a, positions in holdings['accounts'].items()}
            assert math.isclose(sum(accounts.values()), ending, abs_tol=1e-7)
            rows[str(m)] = dict(months=m, target_date=end.isoformat(), ending_value=ending, cumulative_return=ending / total - 1, active_adoption_years=active, workload_index=b['workloads_per_year'] ** active, compute_per_workload_index=b['efficiency_per_year'] ** -active, physical_compute_index=(b['workloads_per_year'] / b['efficiency_per_year']) ** active, securities=securities, account_values=accounts)
        results[b['id']] = dict(**b, adoption_date=adoption.isoformat(), horizons=rows)
    summaries = {}
    for name, weights in spec['weight_sets'].items():
        summaries[name] = {}
        for m in HORIZONS:
            endings = {k: r['horizons'][str(m)]['ending_value'] for k, r in results.items()}
            summaries[name][str(m)] = dict(weighted_endpoint=sum(weights[k] * v for k, v in endings.items()), low_endpoint=min(endings.values()), high_endpoint=max(endings.values()), endpoint_weight_below_start=sum(weights[k] for k, v in endings.items() if v < total), endpoint_weight_at_least_double=sum(weights[k] for k, v in endings.items() if v >= total * 2))
    return dict(scenario_id=spec['scenario_id'], model_version='normalized-economic-bridge-v1', valuation_date=start.isoformat(), evidence_cutoff=spec['evidence_cutoff'], initial_value=total, currency='USD', external_deposits=0, external_withdrawals=0, uncertainty_type='Subjective scenario weights; deterministic endpoints, no within-branch market distribution or calibrated event probabilities', dividend_policy='No separately modeled dividends or reinvestment; price-only economic bridge', baseline_forecast_id=spec['baseline_forecast_id'], capability_definition=spec['capability_definition'], weight_origin=spec['weight_origin'], weight_rationale=spec['weight_rationale'], weight_sets=spec['weight_sets'], groups=spec['groups'], security_groups=spec['security_groups'], branches=results, summaries=summaries, sources=spec['sources'], limitations=spec['limitations'])


def run(input_path, output_path):
    spec = json.loads(input_path.read_text())
    holdings_path = ROOT / 'investing/models/inputs' / spec['holdings_input']
    baseline_path = ROOT / 'investing/forecasts' / (spec['baseline_forecast_id'] + '.json')
    baseline = json.loads(baseline_path.read_text())
    assert baseline['input_sha256'] == digest(holdings_path)
    assert baseline['valuation_date'] == json.loads(holdings_path.read_text())['valuation_date']
    result = calculate(spec, json.loads(holdings_path.read_text()))
    assert math.isclose(result['initial_value'], baseline['initial_value'], abs_tol=.005)
    result.update(input_file=input_path.name, input_sha256=digest(input_path), holdings_input=spec['holdings_input'], holdings_sha256=digest(holdings_path), baseline_sha256=digest(baseline_path), model_code_sha256=digest(Path(__file__)))
    content = json.dumps(result, indent=2, sort_keys=True) + '\n'
    if output_path.exists() and output_path.read_text() != content:
        raise ValueError('Published scenario vintage is immutable; use a new version')
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content)
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    r = run(args.input, args.output)
    print(r['scenario_id'], round(r['initial_value'], 2))
