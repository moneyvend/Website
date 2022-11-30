/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import verifyEmailStyle from './verifyEmail.module.scss';
import AppImages from '../../utilities/images/images';
// import ErrorModal from '../../Modals/errorModal';
// import Loader from '../../Loader/Loader';

export default function RecoverPasswordPage() {
  // const [errorModal, setErrorModal] = useState(false);
  const signupToken = JSON.parse(sessionStorage.getItem('user'));
  console.log(signupToken.data.verification.link.slice(56, 400));
  return (
    <section className={verifyEmailStyle.holdAll}>
      <div className={verifyEmailStyle.holdFormNText}>
        <div className={verifyEmailStyle.holdText}>
          <div className={verifyEmailStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div>
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </div>
        </div>
        <div className={verifyEmailStyle.holdForm}>
          <div className={verifyEmailStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={verifyEmailStyle.headerText}>
            <h3>Email Verification Sent</h3>
            <p>We&apos;ve sent a link to your email address: marian@gmail.com</p>
          </div>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className={verifyEmailStyle.already}>
            Didn&apos;t receive an email ?
            <Link to=" ">Resend</Link>
          </p>
        </div>
      </div>
      {/* {isError ? <ErrorModal show={errorModal} onHide={() => setErrorModal(false)} errorMsg={message} /> : null} */}
      {/* {isLoading ? <Loader /> : null} */}
    </section>
  );
}
