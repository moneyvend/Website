import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styles from './banner.modules.scss'; // eslint-disable-line no-unused-vars
import AppImages from '../../utilities/images/images';

const Banner = () => (
  <div className="sect">
    <div className="header-wrapper">
      <div className="text-container">
        <p className="header-text">
          Pay easy, internet or not
        </p>
        <b>
          <h1 id="H-1">
            The Simplest Way For Fast Payments
          </h1>
        </b>
        <button type="button" className="payment">Bill payments</button>
        <button type="button" className="merchant">
          Become a merchant
          <FiChevronRight />
        </button>
      </div>
      <img src={AppImages.IMAGE_ONE} id="image-one" alt="Logo" />
    </div>

    <div className="bod">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img className="se-1" src={AppImages.IEDC} alt="Logo" height="100" width="250" />
          </div>
          <div className="slide">
            <img className="se-1" src={AppImages.DSTV} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img className="se-3" src={AppImages.STARTIME} alt="Logo" height="100" />
          </div>
          <div className="slide">
            <img alt="logo" className="se-4" src={AppImages.IKEJA_LOGO} height="100" />
          </div>
          <div className="slide">
            <img className="se-4" src={AppImages.UPAY} alt="Logo" height="100" />
          </div>
          <div className="slide">
            <img className="se-2" src={AppImages.MTN} alt="Logo" height="100" />
          </div>
          <div className="slide">
            <img className="se-3" src={AppImages.ETISALAT} alt="Logo" height="100" />
          </div>
          <div className="slide">
            <img className="se-2" src={AppImages.GOTVT} alt="Logo" height="100" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
