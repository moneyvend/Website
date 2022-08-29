import React from 'react';
import AppImages from '../../utilities/images/images';
import Styles from './recoverPassword.modules.css';

const RecoverPasswordPage = () => (
  <div className="contr">

    <div className="dr">
      <div className="b-r" />
      <h5>Creating payment solutions</h5>
      <p className="pd">
        A product which specializes in creating
        terminal solution products for customers, SME&apos;s and merchats

      </p>

    </div>
    <div id="c--2">
      <div className="haw">
        <a className="aw" href="google.com">Login</a>
        <button type="button" className="bwa">Register</button>
      </div>
      <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} />
      <div className="j-c">
        <h1 id="H1">Recover Password</h1>
        <p className="pdw">
          Please sign in to your personal account
          to start access all payment services.
        </p>
        <form id="f-3">

          <label className="l-1" htmlFor="email">
            Email
            <input type="email" className="i-1" name="email" id="email" placeholder="Email" />
          </label>
          <button type="button" id="b-r">Sign up</button>
        </form>
        <div className="fo-1">
          <p className="fo-p">
            Don&apos;t have an account?
            <a href="google.com" className="l-4">Login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RecoverPasswordPage;
