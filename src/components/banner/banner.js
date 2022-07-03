import React from 'react';
import { Layout, Image } from 'antd';
import styles from './banner.module.css';
import AppImages from '../../utilities/images/images';

const Banner = () => (
  <Layout>
    <div>
      <div>
        <div>
          <p>
            payment services
          </p>
          <h1>
            The simplest way for fast payments
          </h1>
          <button type="button">Bill payments</button>
          <button type="button">Become a merchant</button>
        </div>
        <Image src={AppImages.IMAGE_ONE} className={styles.image} alt="Logo" preview={false} />
      </div>
      <ul>
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
