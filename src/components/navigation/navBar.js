/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import AppImages from '../../utilities/images/images';
import styles from './navBar.modules.css'; // eslint-disable-line no-unused-vars

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const navigate = useNavigate();
  const customRoute = (index) => {
    navigate(index);
  };
  return (
    <div className="container2">
      <div id="c-1">
        <div id="c-3">
          <img src={AppImages.LOGO_VERT} id="logo" className="l-1 logMe" alt="Logo" />
          <img src={AppImages.LOGO_VERT} id="h-logo" alt="Logo" />
        </div>
        <div className="navBar" id="c-2">
          <button type="button" id="bit" onClick={handleToggle} className={`toggleBtn ${!navbarOpen ? 'd-none' : ''}`}>
            <MdClose style={{ color: '#000', fontSize: '24px' }} />
          </button>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <ul className="navList">
              <div className="op">
                <li><NavLink id="anchora" to="/products" className="nav-link">Products</NavLink></li>
                <li><NavLink id="anchorb" to="/merchants" className="nav-link">Merchants</NavLink></li>
                <li><NavLink id="anchorc" to="about" className="nav-link">About us</NavLink></li>
                <li><NavLink id="anchorc" to="/support" className="nav-link">Support</NavLink></li>
                <li>
                  <button
                    type="button"
                    className="batt"
                    onClick={() => {
                      customRoute('/auth/login');
                    }}
                    disabled
                  >
                    Log in
                  </button>
                </li>
              </div>
            </ul>

            <div className="nav-footer">
              <p id="p-10">@Monievend</p>
              <div className="di-1">
                <p>Terms of service</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
              </div>
              <div className="di-1">
                <BsFacebook />
                <BsLinkedin />
                <BsTwitter />
              </div>
            </div>
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
      <button
        type="button"
        className="login"
        onClick={() => {
          customRoute('/auth/login');
        }}
        disabled
      >
        Login
      </button>
    </div>
  );
};

export default NavBar;
