import React from 'react';
import styles from './method.modules.scss';
import AppImages from '../../utilities/images/images';

const Method = () => (
  <div className="bgpay">

    <div className="sidebar">
      <div id="sideimg">
        {' '}
        <img src={AppImages.LOGO_VERT} id="logo" className="lp-1" alt="Logo" preview={false} />
      </div>
      <div id="iconside">
        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.HOME} className="g-1" id="logo" alt="Logo" preview={false} />
              {' '}
              Payment services
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Transactions} id="logo" className="g-1" alt="Logo" preview={false} />

              Transactions
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Profile} id="logo" className="g-1" alt="Logo" preview={false} />

              Beneficiary
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Notifications} id="logo" className="g-1" alt="Logo" preview={false} />

              Notifications
            </button>
            {' '}
          </li>

          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" preview={false} />

              Settings
            </button>
            {' '}
          </li>
        </ul>

        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" preview={false} />

              Help
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" preview={false} />

              Logout
            </button>
            {' '}
          </li>
        </ul>

      </div>

    </div>

    <div id="body-text">
      <input id="inputpay" type="text" name="search" placeholder="Search anything ...." />
    </div>
    <div className="body-text">
      <h2 id="service">Payment Method</h2>
      <button type="button" className="bou">
        <img src={AppImages.Link} id="logo" className="g-1" alt="Logo" preview={false} />
        <div className="consta-1">
          <p className="ai-1">Pay with Card</p>
          <p className="pi-1" id="pii">Pay directly from your DEBIT CARD. Your transaction will be completed as soon as your payment is confirmed.</p>
        </div>
      </button>
      <button type="button" className="bou">
        <img src={AppImages.Homer} id="logo" className="g-1" alt="Logo" preview={false} />
        <div className="consta-1">
          <p className="ai-1">Pay with Text</p>
          <p className="pi-1" id="pii">Make payment with your USSD BANK CODE .Your transaction will be completed as soon as your payment is confirmed.</p>
        </div>
      </button>
      <button type="button" className="probutton">Proceed</button>
    </div>
    
  </div>

);

export default Method;
