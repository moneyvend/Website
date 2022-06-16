import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beneficiaries from './components/pages/beneficiaries';
import ComingSoon from './components/pages/coming-soon/comingSoon';
import PaymentServices from './components/pages/paymentServices';
import Settings from './components/pages/settings';
import Transaction from './components/pages/Transaction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="Transactions" element={<Transaction />} />
      <Route path="Beneficiaries" element={<Beneficiaries />} />
      <Route path="PaymentServices" element={<PaymentServices />} />
    </Routes>

  );
}

export default App;
