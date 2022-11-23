import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppImages from '../../utilities/images/images';

import './login.modules.css';

const LoginPage = () => {
  const [isShown, setIsShown] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
    if (setIsShown(true)) {
      setIsEmail(false);
    } else {
      setIsEmail(false);
    }
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setIsEmail(true);
    if (setIsEmail(true)) {
      setIsShown(false);
    } else {
      setIsShown(false);
    }
  };

  return (
    <div className="holdLogin">
      <div className="contr-1">
        <div className="dr">
          {/* <div className="b-r" /> */}
          {/* <img src={AppImages.VLOGO} alt="Logo" width={180} /> */}
          <h5>Creating payment solutions</h5>
          <p className="pd">
            A product which specializes in creating
            terminal solution products for customers, SME&apos;s and merchats
          </p>

        </div>
        <div id="c--1">
          <div className="haw">
            <button type="button" className="bwa">Login</button>
            <Link className="aw" to="/auth/register">Register</Link>
          </div>
          <div className="evenPadding">
            <img src={AppImages.LOGO_VERT} id="img-7" alt="Logo" />
            <h1 id="H1">Welcome Back!</h1>
            {isEmail ? <p className="pod">Log In with your phone number or Email address</p> : <p className="pod">Please sign in to your personal account to start access all payment services.</p>}

          </div>

          <div className="holdWswitch">
            <div className="rep evenPadding">
              <button type="button" onClick={handleClick} className="rp">Phone Number</button>
              <button type="button" onClick={handleEmail} className="rp">Email</button>
            </div>
          </div>

          {isShown && (
            <form id="f-3 loginForm" className="evenPadding">

              <label className="l-1 MobileInput" htmlFor="phone">
                Phone number
                <input type="phone" className="i-1 mobileIn" name="phone" id="phone" placeholder="Phone number" />
              </label>
              <label className="l-1 MobileInput" htmlFor="password">
                Password
                <input type="password" className="i-1 mobileIn" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              </label>
              <div className="l-2">
                <label className="l-3" htmlFor="check">
                  <input type="checkbox" name="check mobileIn" id="check" />
                  Remember me
                </label>
                <Link to="/auth/password-reset" className="l-3"> Forgot Password?</Link>
              </div>
              <button type="button" id="b-r" className="mobileLogin">Log in</button>
            </form>
          )}

          {isEmail && (
            <form id="f-3 loginForm" className="evenPadding">

              <label className="l-1 MobileInput" htmlFor="email">
                Email
                <input type="email" className="i-1 mobileIn" name="email" id="email" placeholder="Email" />
              </label>
              <label className="l-1" htmlFor="password">
                Password
                <input type="password" className="i-1" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              </label>
              <div className="l-2">
                <label className="l-3" htmlFor="check">
                  <input type="checkbox" name="check" id="check" />
                  Remember me
                </label>
                <Link to="/auth/password-reset" className="l-3"> Forgot Password? </Link>
              </div>
              <button type="button" id="b-r mobileLogin">Log in</button>
            </form>
          )}
          <p className="fo-p">
            Don&apos;t have an account?
            <Link to="/auth/register" className="l-4">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
