import React from 'react';
import { Link } from 'react-router-dom';
import './register.modules.css';

const RegisterPage = () => (
  <div className="holdLogin">
    <div className="contr">

      <div className="dr">
        {/* <div className="b-r" /> */}
        <h5>Creating payment solution</h5>
        <p className="pd">
          A product which specializes in creating
          terminal solution products for customers, SME&apos;s and merchats

        </p>

      </div>
      <div id="c--1">
        <div className="haw">
          <Link className="aw" to="/auth/login">Login</Link>
          <button type="button" className="bwa">Register</button>
        </div>
        {/* <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} /> */}
        <h1 id="H1">Create Account</h1>
        <form id="f-3">

          <label className="l-1" htmlFor="name">
            Full name
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
              <input type="checkbox" name="check" id="check" />
              Remember me
            </label>
            <Link to="/auth/password-reset" className="l-3"> Forgot Password? </Link>
          </div>
          <button type="button" id="b-r">Sign up</button>
        </form>
        <div className="fo-1">
          <p className="fo-p">
            Already have an account?
            <Link to="/auth/login" className="l-4">Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;
