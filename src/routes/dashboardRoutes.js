import { Typography } from 'antd';
import { Route } from 'react-router-dom';
import Beneficiaries from '../components/beneficiaries/beneficiaries';
import PaymentServices from '../components/payments/paymentServices';
import Settings from '../components/settings/settings';
import Transaction from '../components/transactions/transaction';

class DashboardRoutes {
    static routes =
      <Route path="dashboard">
        <Route element={<Typography>This is the Home for dashboard</Typography>} index />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="payments" element={<PaymentServices />} />
      </Route>
}
export default DashboardRoutes;
