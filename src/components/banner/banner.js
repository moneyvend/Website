import React from 'react';
import { Layout, Image } from 'antd';
import styles from './banner.modules.css';
import AppImages from '../../utilities/images/images';

const Banner = () => (
  <Layout>
    <div>
      <div className="header-wrapper">
        <div className="text-container">
          <p className="header-text">
            Pay easy, internet or not
          </p>
          <h1>
            The Simplest Way For Fast Payments
          </h1>
          <button type="button" className="payment">Bill payments</button>
          <button type="button" className="merchant">Become a merchant   ></button>
        </div>
        <img src={AppImages.IMAGE_ONE} id="image-one" alt="Logo" preview={false} />
      </div>
      <ul className="logos">
        <li>
          <Image src={AppImages.IEDC} className={styles.image} alt="Logo" preview={false} />
        </li>
        <li>
          <Image src={AppImages.DSTV} className={styles.image} alt="Logo" preview={false} />
        </li>
        <li>
          <Image src={AppImages.IKEJA_LOGO} className={styles.image} alt="Logo" preview={false} />
        </li>
        <li>
          <Image src={AppImages.UPAY} className={styles.image} alt="Logo" preview={false} />
        </li>
        <li>
          <Image src={AppImages.MTN} className={styles.image} alt="Logo" preview={false} />

        </li>
        <li>
          <Image src={AppImages.GOTV} className={styles.image} alt="Logo" preview={false} />
        </li>
      </ul>

    </div>
  </Layout>
);

export default Banner;
