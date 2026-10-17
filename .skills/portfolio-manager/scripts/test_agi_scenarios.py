"""Tests target conservation, policy, lineage and economically meaningful changes."""
import copy
import json
import math
import tempfile
import unittest
from decimal import Decimal
from pathlib import Path
from agi_scenarios import ROOT, HORIZONS, calculate, run

SPEC = ROOT / 'investing/models/agi-inputs/2026-10-16-v1.json'
class AGITests(unittest.TestCase):
    def setUp(self):
        self.s = json.loads(SPEC.read_text())
        self.h = json.loads((ROOT / 'investing/models/inputs' / self.s['holdings_input']).read_text())
        self.r = calculate(self.s, self.h)

    def test_all_quantities_and_accounts_once(self):
        total = sum(Decimal(q) * Decimal(self.h['prices'][s]) for a in self.h['accounts'].values() for s,q in a.items())
        self.assertAlmostEqual(float(total), self.r['initial_value'], places=6)
        self.assertEqual(len(self.r['security_groups']), 28)
        for b in self.r['branches'].values():
            self.assertEqual(set(b['horizons']), {str(m) for m in HORIZONS})
            for h in b['horizons'].values():
                self.assertAlmostEqual(sum(h['account_values'].values()), h['ending_value'], places=6)
                for x,y in [('GOOG','GOOGL'),('QQQ','QQQM')]:
                    a,c=h['securities'][x],h['securities'][y]
                    self.assertAlmostEqual(a['ending_value']/a['starting_value'],c['ending_value']/c['starting_value'])

    def test_independent_nvidia_bridge(self):
        # Five years in measured branch: adoption Jul 1 2029 to Oct 16 2031.
        from datetime import date
        t=(date(2031,10,16)-date(2029,7,1)).days/365.25
        p=self.s['branches'][1]['economics']['accelerators']
        expected=4392.77*214.13*1.10**5*(2/1.55)**(.8*t)*p['cash_conversion_ratio']/1.01**5*p['multiple_ratio']
        actual=self.r['branches']['measured']['horizons']['60']['securities']['NVDA']['ending_value']
        self.assertAlmostEqual(expected,actual,places=6)

    def test_conservation_when_no_economic_or_valuation_change(self):
        for g in self.s['groups'].values():g['ordinary_revenue_growth']=0
        for b in self.s['branches']:
            b['workloads_per_year']=b['efficiency_per_year']=1
            for p in b['economics'].values():p.update(cash_conversion_ratio=1,multiple_ratio=1,annual_dilution=0)
        r=calculate(self.s,self.h)
        for b in r['branches'].values():
            for h in b['horizons'].values():self.assertAlmostEqual(h['ending_value'],r['initial_value'])

    def test_adoption_lags_and_efficiency(self):
        delayed=self.r['branches']['delayed']['horizons']['60']
        self.assertEqual(delayed['active_adoption_years'],0)
        self.assertEqual(delayed['physical_compute_index'],1)
        efficient=self.r['branches']['efficient']['horizons']['60']
        self.assertGreater(efficient['workload_index'],1)
        self.assertLess(efficient['physical_compute_index'],1)
        for b in self.s['branches']:b['economics']['operators']['annual_dilution']+=.1
        changed=calculate(self.s,self.h)
        self.assertLess(changed['branches']['rapid']['horizons']['60']['securities']['NBIS']['ending_value'], self.r['branches']['rapid']['horizons']['60']['securities']['NBIS']['ending_value'])

    def test_weighting_is_not_endpoint_mutation(self):
        for name,w in self.r['weight_sets'].items():
            for m in HORIZONS:
                v=sum(w[k]*b['horizons'][str(m)]['ending_value'] for k,b in self.r['branches'].items())
                self.assertEqual(v,self.r['summaries'][name][str(m)]['weighted_endpoint'])
        bad=copy.deepcopy(self.s);bad['weight_sets']['Working judgment']['rapid']=.9
        with self.assertRaises(AssertionError):calculate(bad,self.h)
        bad=copy.deepcopy(self.s);del bad['security_groups']['NVDA']
        with self.assertRaises(AssertionError):calculate(bad,self.h)

    def test_repeatability_and_immutable_result(self):
        with tempfile.TemporaryDirectory() as d:
            out=Path(d)/'result.json'
            run(SPEC,out);first=out.read_bytes();run(SPEC,out)
            self.assertEqual(first,out.read_bytes())
            out.write_text('{}')
            with self.assertRaises(ValueError):run(SPEC,out)
if __name__=='__main__':unittest.main()
