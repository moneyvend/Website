/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-indent */
import { Route } from 'react-router-dom';
import Index from '../components/users-page';
import PaymentService from '../components/users-page/payment-services/payment-services';
import TransactionIndex from '../components/users-page/transactionPage/transaction';
import SettingsPage from '../components/users-page/setting/setting';
import Notification from '../components/users-page/notification/notification';
import HelpPage from '../components/users-page/help/help';
import ChooseAirtime from '../components/users-page/payment-services/Layout/ChooseAirtime';
import ConfirmSummary from '../components/users-page/payment-services/Layout/ConfirmSummary';
import PaymentMethod from '../components/users-page/payment-services/Layout/PaymentMethod';
import DataServices from '../components/users-page/payment-services/Layout/DataServices';
import Electricity from '../components/users-page/payment-services/Layout/Electricity';
import Cabletv from '../components/users-page/payment-services/Layout/Cabletv';
import BankPayment from '../components/users-page/payment-services/Layout/BankPayment';
import CardPayment from '../components/users-page/payment-services/Layout/CardPayment';

class DashboardRoutes {
  static routes =
    <Route path="dashboard" element={<Index />}>
      <Route path="services">
        <Route index={true} element={<PaymentService />} />
        <Route path="airtime">
          <Route index={true} element={<ChooseAirtime />} />
        </Route>
        <Route path="card-payment" element={<CardPayment />} />
        <Route path="summary">
          <Route index={true} element={<ConfirmSummary />} />
        </Route>
        <Route path="payment-method">
          <Route index={true} element={<PaymentMethod />} />
        </Route>
        <Route path="bank-payment">
          <Route index={true} element={<BankPayment />} />
        </Route>
        <Route path="data-services">
          <Route index={true} element={<DataServices />} />
        </Route>
        <Route path="electricity">
          <Route index={true} element={<Electricity />} />
        </Route>
        <Route path="cabletv">
          <Route index={true} element={<Cabletv />} />
        </Route>
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
