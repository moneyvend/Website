import React from 'react';
import AppImages from '../../utilities/images/images';
import Styles from './register.modules.css';

const RegisterPage = () => (
  <div className="contr">

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
      <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} />
      <h1 id="H1">Create Account</h1>
      <p className="pdw">
        Please sign up by creating a personal account to
        access all payment services and unique products
      </p>
      <form id="f-3">

        <label className="l-1" htmlFor="name">
          Full name*
          <input type="text" className="i-1" name="name" id="name" placeholder="Username" />
        </label>

        <label className="l-1" htmlFor="phone">
          Phone number
          <input type="phone" className="i-1" name="phone" id="phone" placeholder="Phone number" />
        </label>
        <label className="l-1" htmlFor="email">
          Email
          <input type="email" className="i-1" name="email" id="email" placeholder="Email" />
        </label>
        <label className="l-1" htmlFor="password">
          Password
          <input type="password" className="i-1" name="password" id="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </label>
        <label className="l-1" htmlFor="re-password">
          Re-type Password*
          <input type="password" className="i-1" name="re-password" id="re-password" placeholder="Re-type Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </label>
        <div className="l-2">
          <label className="l-3" htmlFor="check">
            Remember me
            <input type="checkbox" name="check" id="check" />
          </label>
          <a href="google.com" className="l-3"> Forgot Password? </a>
        </div>
        <button type="button" id="b-r">Sign up</button>
        <div className="fo-1">
          <p className="fo-p">
            Already have an account?
            <a href="google.com" className="l-4">Login</a>
          </p>
        </div>
      </form>
    </div>
  </div>
);

export default RegisterPage;
