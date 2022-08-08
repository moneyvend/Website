import React from 'react';
import { NavLink } from 'react-router-dom';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css';

const NavBar = () => (
  <div className="container">
    <img src={AppImages.LOGO_VERT} id="logo" className="l-1" alt="Logo" preview={false} />
    <div>
      <ul className="navList">
        <li><NavLink id="anchora" to="/">Products</NavLink></li>
        <li><NavLink id="anchorb" to="/">Merchants</NavLink></li>
        <li><NavLink id="anchorc" to="/">About us</NavLink></li>
        <li><NavLink id="anchorc" to="/">Support</NavLink></li>
      </ul>
    </div>
    <button className="login" type="button">Log in</button>
  </div>
);

export default NavBar;
