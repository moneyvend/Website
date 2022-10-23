import { Route } from 'react-router-dom';
import Index from '../components/users-page';
import Beneficiaries from '../components/beneficiaries/beneficiaries';
import PaymentServices from '../components/payments/paymentServices';
import Settings from '../components/settings/settings';
import Transaction from '../components/transactions/transaction';
// import Airtime from '../components/payments/Airtime';
// import Electricity from '../components/payments/electricity';
// import Summary from '../components/payments/summary';
// import Method from '../components/payments/method';
// import Recepient from '../components/payments/recepient';
// import Notransaction from '../components/transactions/noTransaction';

class DashboardRoutes {
  static routes =

    <Route path="dashboard" element={<Index />}>
      <Route path="payments">
        <Route index element={<PaymentServices />} />
      </Route>

      <Route path="transactions">
        <Route index element={<Transaction />} />
      </Route>

      <Route path="beneficiaries">
        <Route index element={<Beneficiaries />} />
      </Route>

      {/* <Route path="notification">
        <Route index={true} element={<Notification />} />
      </Route> */}

      <Route path="settings">
        <Route index element={<Settings />} />
      </Route>
    </Route>

  // <Route path="noTransactions" element={<Notransaction />} />
  // <Route path="beneficiaries" element={<Beneficiaries />} />
  // <Route path="payments" element={<PaymentServices />} />

  // <Route path="payments/airtime" element={<Airtime />} />
  // <Route path="payments/electricity" element={<Electricity />} />
  // <Route path="payments/summary" element={<Summary />} />
  // <Route path="payments/method" element={<Method />} />
  // <Route path="payments/recepient" element={<Recepient />} />
}
export default DashboardRoutes;
