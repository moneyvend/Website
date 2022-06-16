import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beneficiaries from './components/beneficiaries/beneficiaries';
import ComingSoon from './components/shared/coming-soon/comingSoon';
import PaymentServices from './components/payments/paymentServices';
import Settings from './components/settings/settings';
import Transaction from './components/transactions/transaction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="dashboard">
        <Route element={<>This is the Home for dashboard</>} index />
        <Route path="settings" element={<Settings />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="payments" element={<PaymentServices />} />
      </Route>
    </Routes>

  );
}

export default App;
