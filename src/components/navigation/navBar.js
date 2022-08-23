import React from 'react';
import { NavLink } from 'react-router-dom';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css'; // eslint-disable-line no-unused-vars

const NavBar = () => (
  <div className="container">
    <img src={AppImages.LOGO_VERT} id="logo" className="l-1" alt="Logo" preview={false} />
    <div>
      <ul className="navList">
        <li><NavLink id="anchora" to="/products" className="nav-link">Products</NavLink></li>
        <li><NavLink id="anchorb" to="/merchants" className="nav-link">Merchants</NavLink></li>
        <li><NavLink id="anchorc" to="/about" className="nav-link">About us</NavLink></li>
        <li><NavLink id="anchorc" to="/support" className="nav-link">Support</NavLink></li>
      </ul>
    </div>
    <button className="login" type="button"><NavLink to="/auth/login">Login</NavLink></button>
  </div>
);

export default NavBar;
