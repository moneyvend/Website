import { Typography } from 'antd';
import { Route } from 'react-router-dom';

class DashboardRoutes {
    static routes =
      <Route path="auth">
        <Route path="/login"element={<Typography>This is the Home for dashboard</Typography>} index />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="payments" element={<PaymentServices />} />
      </Route>
}
export default DashboardRoutes;
