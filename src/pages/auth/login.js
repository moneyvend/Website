import React, { useState } from 'react';
import AppImages from '../../utilities/images/images';

import Styles from './login.modules.css';

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
    <div className="contr-1">
      <div className="dr">
        <div className="b-r" />
        <h5>Creating payment solutions</h5>
        <p className="pd">
          A product which specializes in creating
          terminal solution products for customers, SME's and merchats

        </p>

      </div>
      <div id="c--1">
        <div className="haw">
          <a className="aw" href="google.com">Login</a>
          <button type="button" className="bwa">Register</button>
        </div>
        <div>
          <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} />
          <h1 id="H1">Welcome Back</h1>
          <p className="pdo">Log In with your phone number or Email address</p>
          <p className="pod">Please sign in to your personal account to start access all payment services.</p>
          
        </div>

        <div className="rep">
          <button type="button" onClick={handleClick} className="rp">Phone Number</button>
          <button type="button" onClick={handleEmail} className="rp">Email</button>
        </div>

        {isShown && (
        <form id="f-3">

          <label className="l-1" htmlFor="phone">
            Phone number
            <input type="phone" className="i-1" name="phone" id="phone" placeholder="Phone number" />
          </label>
          <label className="l-1" htmlFor="password">
            Password
            <input type="password" className="i-1" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
          </label>
          <div className="l-2">
            <label className="l-3" htmlFor="check">
              Remember me
              <input type="checkbox" name="check" id="check" />
            </label>
            <a href="google.com" className="l-3"> Forgot Password? </a>
          </div>
          <button type="button" id="b-r">Log in</button>
        </form>
        )}

        {isEmail && (
        <form id="f-3">

          <label className="l-1" htmlFor="email">
            Email
            <input type="email" className="i-1" name="email" id="email" placeholder="Email" />
          </label>
          <label className="l-1" htmlFor="password">
            Password
            <input type="password" className="i-1" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
          </label>
          <div className="l-2">
            <label className="l-3" htmlFor="check">
              Remember me
              <input type="checkbox" name="check" id="check" />
            </label>
            <a href="google.com" className="l-3"> Forgot Password? </a>
          </div>
          <button type="button" id="b-r">Log in</button>
        </form>
        )}

        <div className="fo-2">
          <p className="fo-p">
            Don't have an account?
            <a href="google.com" className="l-4">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
