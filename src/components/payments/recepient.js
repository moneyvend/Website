import React from 'react';
import './recepient.modules.scss';
import AppImages from '../../utilities/images/images';

const Recepient = () => (
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
      <div className="payt">
        <p id="lrd">Recipent Details</p>
        <div className="listrecei">
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
      </div>
      <div className="payt">
        <p id="lrd">Transaction Details</p>
        <div className="listrecei">
          <ul id="l1">
            <li><p>Transaction Id </p></li>
            <li><p>Total payable</p></li>
          </ul>
          <ul id="l2">
            <li><p>Airtel</p></li>
            <li><p>#5000 + NO service Charge</p></li>
          </ul>
        </div>
      </div>
      <div className="check">
        <input type="checkbox" name="check" id="check" />
        <p className="confirm">I confirm the transaction summary above is correct</p>
      </div>
      <button type="button" className="probutton">Proceed</button>
    </div>
  </div>

);

export default Recepient;
