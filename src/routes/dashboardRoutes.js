/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-indent */
import { Route } from 'react-router-dom';
import Index from '../components/users-page';
import PaymentService from '../components/users-page/payment-services/payment-services';
import TransactionIndex from '../components/users-page/transactionPage/transaction';
import SettingsPage from '../components/users-page/setting/setting';
import Notification from '../components/users-page/notification/notification';
import HelpPage from '../components/users-page/help/help';

class DashboardRoutes {
  static routes =
    <Route path="dashboard" element={<Index />}>
      <Route path="services">
        <Route index={true} element={<PaymentService />} />
      </Route>

      <Route path="transactions">
        <Route index={true} element={<TransactionIndex />} />
      </Route>

      <Route path="notification">
        <Route index={true} element={<Notification />} />
      </Route>

      <Route path="settings">
        <Route index={true} element={<SettingsPage />} />
      </Route>

      <Route path="help">
        <Route index={true} element={<HelpPage />} />
      </Route>
    </Route>
}
export default DashboardRoutes;
