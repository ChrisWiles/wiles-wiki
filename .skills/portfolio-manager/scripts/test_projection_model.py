import copy, importlib.util, json, unittest
from pathlib import Path
import numpy as np
from projection_model import simulate, fit, interval_score, psd_correlation, stress_cases, common_factors

class ProjectionChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.root=Path(__file__).resolve().parents[3]
        cls.data=json.loads((cls.root/'investing/models/inputs/2026-10-16.json').read_text())
    def test_no_external_cash_flows_and_conservation(self):
        spec={'factors':np.zeros((120,2)),'beta':np.array([[1.,0.]]),'residual_cov':np.zeros((1,1)),'tickers':['SPY']}
        r,curves,w=simulate(spec,[100.],paths=100,steps=60)
        np.testing.assert_allclose(w,100.,rtol=1e-12)
        self.assertEqual(r['60']['p_loss'],0.)
        self.assertEqual(r['60']['p_double'],0.)
    def test_negative_drift_does_not_force_recovery(self):
        spec={'factors':np.array([[-.10,0.]]*120),'beta':np.array([[1.,0.]]),'residual_cov':np.zeros((1,1)),'tickers':['SPY']}
        r,_,w=simulate(spec,[100.],paths=10,steps=12)
        self.assertLess(r['12']['median'],31)
        self.assertEqual(r['6']['p_drawdown30'],1.)
    def test_same_paths_for_a_benchmark_holding(self):
        spec=fit(self.data,only_funds=True)
        r,_,_=simulate(spec,[100.,0.],paths=1000,steps=12,seed=2)
        # Equal paths must never count as outperformance (tiny float tolerances excepted).
        self.assertEqual(r['12']['p_beat_spy'],0.)
    def test_no_lookahead_in_training(self):
        altered=copy.deepcopy(self.data)
        for t in altered['monthly_log_returns']:
            altered['monthly_log_returns'][t]['2026-09']=99
        a=fit(self.data,'2015-01',only_funds=True);b=fit(altered,'2015-01',only_funds=True)
        np.testing.assert_array_equal(a['factors'],b['factors'])
        self.assertEqual(a['dates'][-1],'2015-01')
    def test_all_complete_training_months(self):
        ds,_=common_factors(self.data)
        self.assertEqual(ds[-1],'2026-09')
        self.assertTrue(all(d<'2026-10' for d in ds))
    def test_short_histories_explicit_not_spliced(self):
        sp=fit(self.data)
        self.assertEqual(sp['notes']['CBRS']['kind'],'parameter proxy')
        self.assertEqual(sp['notes']['SPCX']['peer'],'RKLB')
        self.assertLess(sp['notes']['CBRS']['observations'],18)
        self.assertNotIn('GOOGL',sp['tickers']);self.assertNotIn('QQQM',sp['tickers'])
    def test_covariance_psd(self):
        sp=fit(self.data)
        self.assertGreaterEqual(np.linalg.eigvalsh(sp['residual_cov']).min(),-1e-10)
    def test_interval_score_penalizes_misses(self):
        self.assertEqual(interval_score(.8,1.2,1),1.2-.8)
        self.assertGreater(interval_score(.8,1.2,.2),interval_score(.8,1.2,1.0))
    def test_permanent_loss_is_possible_in_explicit_stress(self):
        case=stress_cases({'NVDA':100.,'SPY':50.})['Direct NVIDIA permanent loss']
        self.assertEqual(case['value'],50.)
        self.assertIsNone(case['probability'])
    def test_seed_reproducibility_and_quantile_order(self):
        sp=fit(self.data,only_funds=True)
        a,_,_=simulate(sp,[50,50],paths=200,steps=12,seed=44)
        b,_,_=simulate(sp,[50,50],paths=200,steps=12,seed=44)
        self.assertEqual(a,b)
        for row in a.values():self.assertLessEqual(row['p10'],row['median']);self.assertLessEqual(row['median'],row['p90'])

if __name__=='__main__':unittest.main()
