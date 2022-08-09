import React from 'react';
import { NavLink } from 'react-router-dom';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css';

const NavBar = () => (
  <div className="container">
    <img src={AppImages.LOGO_VERT} id="logo" className="l-1" alt="Logo" preview={false} />
    <div>
      <ul className="navList">
        <li><NavLink id="anchora" to="/" className='nav-link'>Products</NavLink></li>
        <li><NavLink id="anchorb" to="/" className='nav-link'>Merchants</NavLink></li>
        <li><NavLink id="anchorc" to="/" className='nav-link'>About us</NavLink></li>
        <li><NavLink id="anchorc" to="/" className='nav-link'>Support</NavLink></li>
      </ul>
    </div>
    <button className="login" type="button">Log in</button>
  </div>
);

export default NavBar;
