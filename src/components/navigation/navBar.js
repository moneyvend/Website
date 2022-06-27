import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Image } from 'antd';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css';

const NavBar = () => (
  <Layout className={styles.container}>
    <Image src={AppImages.LOGO_VERT} className={styles.image} alt="Logo" preview={false} />
    <div>
      <ul id="navList">
        <li><NavLink id="anchora" to="/">Products</NavLink></li>
        <li><NavLink id="anchorb" to="/">Merchant</NavLink></li>
        <li><NavLink id="anchorc" to="/">About us</NavLink></li>
        <li><NavLink id="anchorc" to="/">Support</NavLink></li>
      </ul>
      <button type="button">Log in</button>
    </div>
  </Layout>
);

export default NavBar;
