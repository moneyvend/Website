import React from 'react';
import styles from './recepient.modules.scss';
import AppImages from '../../utilities/images/images';

const Recepient = () => (
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
      <h2 id="service">Confirm Summary</h2>
      <div className="paylist">
      <p>Recipent Details</p>
        <ul id="l1">
          <li><p>Product</p></li>
          <li><p>Phone</p></li>
          <li><p>Amount</p></li>
        </ul>
        <ul id="l2">
          <li><p>Airtel</p></li>
          <li><p>08022499826</p></li>
          <li><p>#5000 + NO service Charge</p></li>
        </ul>
      </div>
      <div className="paylist">
        <ul id="l1">
          <p>Transaction Details</p>
          <li><p>Total Payable Amount</p></li>
          <li><p>Transaction ID</p></li>
          <li><p>Status</p></li>
        </ul>
        <ul id="l2">
          <li><p>#5000</p></li>
          <li><p>123456789</p></li>
          <li><p>initiated</p></li>
        </ul>
      </div>
      <div className="check">
        <input type="checkbox" name="check" id="check" />
        <p>I confirm the transaction summary above is correct</p>
      </div>
      <button type="button" className="probutton">Proceed</button>
    </div>
  </div>

);

export default Recepient;
