import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'antd';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css';

const NavBar = () => (
  <div className="container">
    <Image src={AppImages.LOGO_VERT} id="logo" className={styles.image} alt="Logo" preview={false} />
    <div>
      <ul className="navList">
        <li><NavLink id="anchora" to="/">Products</NavLink></li>
        <li><NavLink id="anchorb" to="/">Merchant</NavLink></li>
        <li><NavLink id="anchorc" to="/">About us</NavLink></li>
        <li><NavLink id="anchorc" to="/">Support</NavLink></li>
      </ul>
    </div>
    <button className="login" type="button">Log in</button>
  </div>
);

export default NavBar;
