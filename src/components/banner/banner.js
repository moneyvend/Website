import React from 'react';
import { Layout, Image } from 'antd';
import { FiChevronRight } from 'react-icons/fi';
import styles from './banner.modules.scss';
import AppImages from '../../utilities/images/images';

const Banner = () => (
  <Layout>
    <div className={styles.landing}>
      <div className="header-wrapper">
        <div className="text-container">
          <p className="header-text">
            Pay easy, internet or not
          </p>
          <h1>
            The Simplest Way For Fast And Available Payments
          </h1>
          <button type="button" className="payment">Bill payments</button>
          <button type="button" className="merchant">
            Become a merchant
            <FiChevronRight />
          </button>
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
    <div className="bod">
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
    <img  className="s-1" src={AppImages.IEDC} alt="Logo" height="100" width="250" preview={false} />
		</div>
		<div class="slide">
			<img className="s-1" src={AppImages.DSTV} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img  className="s-1" src={AppImages.IKEJA_LOGO} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={AppImages.UPAY} className={styles.image} alt="Logo" preview={false} height="100" width="250"/>
		</div>
		<div class="slide">
			<img  src={AppImages.MTN} className={styles.image} alt="Logo" preview={false}  height="100" width="250" />
		</div>
		<div class="slide">
			<img src={AppImages.GOTV} className={styles.image} alt="Logo" preview={false} height="100" width="250"  />
		</div>
	</div>
  </div>
</div>
  </Layout>
);

export default Banner;
