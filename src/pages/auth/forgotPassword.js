import React from 'react';
import AppImages from '../../utilities/images/images';
import Styles from './forgotPassword.modules.css';

const ForgotPasswordPage = () => (
  <div className="contr-3">

    <div className="dr1">
      <div className="b-r" />
      <h5>Creating payment solutions</h5>
      <p className="pd">
        Enter new details of your password

      </p>

    </div>
    <div id="c--2">
      <div className="haw">
        <a className="aw" href="google.com">Login</a>
        <button type="button" className="bwa">Register</button>
      </div>
      <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} />
      <h1 id="H1">Reset Password</h1>
      <p className="pdw">
        Enter new details of your password
      </p>
      <form id="f-3">
        <label className="l-1" htmlFor="old-password">
          Old password
          <input type="password" className="i-1" name="old-password" id="re-password" placeholder="Enter old password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </label>
        <label className="l-1" htmlFor="password">
          New password
          <input type="password" className="i-1" name="password" id="password" placeholder="Enter new password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </label>
        <label className="l-1" htmlFor="re-password">
          Confirm new password*
          <input type="password" className="i-1" name="re-password" id="re-password" placeholder="Confirm new password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </label>
        <div className="l-2">
          <label className="l-3" htmlFor="check">
            Remember me
            <input type="checkbox" name="check" id="check" />
          </label>
          <a href="google.com" className="l-3"> Forgot Password? </a>
        </div>
        <button type="button" id="b-r">Sign up</button>
      </form>
      <div className="fo-1">
        <p className="fo-p">
          Already have an account?
          <a href="google.com" className="l-4">Login</a>
        </p>
      </div>
    </div>
  </div>
);

export default ForgotPasswordPage;
