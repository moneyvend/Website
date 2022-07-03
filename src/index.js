import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import ComingSoon from './components/shared/coming-soon/comingSoon';
import Transaction from './components/transactions/transaction';
import Banner from './components/banner/banner';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <App /> */}
      {/* <ComingSoon /> */}
      <Banner />
      {/* <Transaction /> */}
    </BrowserRouter>
  </React.StrictMode>,
);
