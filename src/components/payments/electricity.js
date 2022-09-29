import React from 'react';
import styles from './electricity.modules.scss';
import AppImages from '../../utilities/images/images';

const Electricity = () => (
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
      <h2 id="service">Choose a biller</h2>
      <div className="page">
        <div className="select-dropdown">
          <select>
            <option value="Airtel">
              <p>
                EKEDC
                {' '}
                <img src={AppImages.EKEDC} id="logo" className="g-1" alt="Logo" />
              </p>

            </option>
            <option value="jos">JOS</option>
            <option value="lAGOS">lAGOS</option>
          </select>
        </div>
      </div>
      <form className="dataf">
        <div className="elec">
          <div>
            <p className="airtelp">Account type</p>
            <input type="text" id="text" className="airteli" name="text" />
          </div>

          <div>
            <p className="airtelp">Meter no</p>
            <input type="tel" id="mp" className="airtelinn" name="meter" />
          </div>

        </div>
        <div className="elec">
          <div>
            <p className="airtelp">Phone number</p>
            <input type="tel" id="phonenumber" className="airtelinn" name="phonenumber" />
          </div>
          <div>
            <p className="airtelp">Amount</p>
            <input type="number" id="number" className="airtelinn" name="number" min="100" max="500000" />
          </div>
        </div>
        <div className="profilea">
          <img src={AppImages.PROFILEA} id="logo" className="g-1" alt="Logo" />
          <a href="www.google.com"><p id="linkpro">Saved beneficiaries</p></a>
        </div>
        <button type="button" className="air-button">Proceed</button>
      </form>
    </div>
  </div>

);

export default Electricity;
