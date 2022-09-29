import React from 'react';
import styles from './summary.modules.scss';
import AppImages from '../../utilities/images/images';

const Summary = () => (
  <div className="bgpay">

    <div className="sidebar">
      <div id="sideimg">
        {' '}
        <img src={AppImages.LOGO_VERT} id="logo" className="lp-1" alt="Logo" />
      </div>
      <div id="iconside">
        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.HOME} className="g-1" id="logo" alt="Logo" />
              {' '}
              Payment services
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Transactions} id="logo" className="g-1" alt="Logo" />

              Transactions
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Profile} id="logo" className="g-1" alt="Logo" />

              Beneficiary
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Notifications} id="logo" className="g-1" alt="Logo" />

              Notifications
            </button>
            {' '}
          </li>

          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

              Settings
            </button>
            {' '}
          </li>
        </ul>

        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

              Help
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

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
      <h2 id="service">Confirm Summary</h2>
      <p className="deet1"> Confirm your transaction details</p>
      <div className="paylist">
        <ul id="l1">
          <li><p>Product</p></li>
          <li><p>Phone</p></li>
          <li><p>Amount</p></li>
          <li><p>Total Payable Amount</p></li>
          <li><p>Transaction ID</p></li>
          <li><p>Status</p></li>
        </ul>
        <ul id="l2">
          <li><p>Airtel</p></li>
          <li><p>08022499826</p></li>
          <li><p>#5000 + NO service Charge</p></li>
          <li><p>#5000</p></li>
          <li><p>123456789</p></li>
          <li><p>initiated</p></li>
        </ul>
      </div>
      <p className="deet">Confirm Payment Method</p>
      <div className="listserv">
        <div className="box">
          <img src={AppImages.Mastercard} id="lm" className="g-1" alt="Logo" width="20px" />
          <img src={AppImages.Visa} id="lm" className="g-1" alt="Logo" />
          <img src={AppImages.Verve} id="lm" className="g-1" alt="Logo" />
        </div>
        <div>
          <button type="button" className="confbu">Pay with Bank Transfer</button>
        </div>
        <div />
      </div>

    </div>
  </div>

);

export default Summary;
