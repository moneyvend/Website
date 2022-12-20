/* eslint-disable react/jsx-indent */
import { Route } from 'react-router-dom';
import Index from '../components/users-page';
import PaymentService from '../components/users-page/payment-services/payment-services';
import TransactionIndex from '../components/users-page/transactionPage/index';

class DashboardRoutes {
  static routes =
    <Route path="dashboard" element={<Index />}>
      <Route path="services">
        <Route index element={<PaymentService />} />
      </Route>

      <Route path="transactions">
        <Route index element={<TransactionIndex />} />
      </Route>
    </Route>
}
export default DashboardRoutes;
