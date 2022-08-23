import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css'; // eslint-disable-line no-unused-vars

<<<<<<< HEAD
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div className="container">
      <div id="c-1">
        <div>
          <img src={AppImages.LOGO_VERT} id="logo" className="l-1" alt="Logo" preview={false} />
        </div>
        <div className="navBar">
          <button type="button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose style={{ color: '#333', width: '40px', height: '40px' }} />
            ) : (
              <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <li>
              <NavLink
                to="/"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                hii
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
      <div className="des-1">
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
};

export default NavBar;
