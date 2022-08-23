import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css';

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
        <div className='navBar'>
          <button type="button" onClick={handleToggle} className={`toggleBtn ${!navbarOpen ? 'd-none' : ''}`}>
            <MdClose style={{ color:  '#000', width: '21px', height: '21px' }} />
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
        <button type="button" onClick={handleToggle} className="toggleBtn ">
          <FiMenu style={{ color: '#000', width: '24px', height: '24px' }} />
        </button>
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
