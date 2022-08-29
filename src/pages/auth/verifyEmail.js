import React from 'react';
import AppImages from '../../utilities/images/images';
import Styles from './verifyEmail.modules.css';

const RecoverPasswordPage = () => (
  <div className="contr">

    <div className="dr">
      <div className="b-r" />
      <h5>Creating payment solutions</h5>
      <p className="pd">
        A product which specializes in creating
        terminal solution products for customers, SME's and merchats

      </p>

    </div>
    <div id="c--2">
      <div className="haw">
        <a className="aw" href="google.com">Login</a>
        <button type="button" className="bwa">Register</button>
      </div>
      <img src={AppImages.HLOGO} id="img-7" alt="Logo" preview={false} />
      <div className="j-c">
        <h1 id="H1">Verify Email</h1>
        <p className="ppw">
          We've sent a link to your email address: marian@gmail.com
        </p>
        <form id="f-3">
          <button type="button" id="b-r">Sign up</button>
        </form>
        <div className="fo-1">
          <p className="fo-p">
            Didn't receive an email?
            <a href="google.com" className="l-4">Resend</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RecoverPasswordPage;
