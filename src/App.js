import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Beneficiaries from './Components/Pages/beneficiaries';
import ComingSoon from './Components/Pages/comingSoon';
import PaymentServices from './Components/Pages/paymentServices';
import Settings from './Components/Pages/settings';
import Transaction from './Components/Pages/Transaction';

function App() {
  return (
    <Routes>
      <ComingSoon />
      <Route path="Settings" element={<Settings />} />
      <Route path="Transactions" element={<Transaction />} />
      <Route path="Beneficiaries" element={<Beneficiaries />} />
      <Route path="PaymentServices" element={<PaymentServices />} />
    </Routes>

  );
}

export default App;
