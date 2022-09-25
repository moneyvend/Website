import React from 'react';
import styles from './Airtime.modules.scss';
import AppImages from '../../utilities/images/images';

const Airtime = () => (
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
      <h2 id="service">Choose a biller</h2>
      <div className="page">
        <div className="select-dropdown">
          <select>
            <option value="Airtel">
              <p>
                Airtel
                {' '}
                <img src={AppImages.AICON} id="logo" className="g-1" alt="Logo" />
              </p>

            </option>
            <option value="MTN">MTN</option>
            <option value="Etisalat">Etisalat</option>
          </select>
        </div>
      </div>
      <form className="dataf">
        <p className="airtelp">Phone number</p>
        <input type="tel" id="phonenumber" className="airtelin" name="phonenumber" />
      </form>
      <form className="dataf">
        <p className="airtelp">Amount</p>
        <input type="tel" id="phonenumber" className="airtelinn" name="phonenumber" />
      </form>
      <div className="profilea">
        <img src={AppImages.PROFILEA} id="logo" className="g-1" alt="Logo" preview={false} />
        <a href="www.google.com"><p id="linkpro">Saved beneficiaries</p></a>
      </div>
      <button type="button" className="air-button">Proceed</button>
    </div>
  </div>

);

export default Airtime;
