/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import verifyEmailStyle from './verifyEmail.module.scss';
import AppImages from '../../utilities/images/images';
import axios from 'axios';
// import ErrorModal from '../../Modals/errorModal';
// import Loader from '../../Loader/Loader';

export default function RecoverPasswordPage() {
  // const [errorModal, setErrorModal] = useState(false);
  // const signupToken = JSON.parse(sessionStorage.getItem('user'));
  // console.log(signupToken.data.verification.link.slice(56, 400));
  const [email, setEmail] = useState('');
  const usenavigate = useNavigate;

  const emailVerification = () => {
    axios.post('https://monievend.herokuapp.com/api/auth/verify-email', {
      email: 'email',
    })
        .then(result => {
        console.log(result);
        alert('email verified successfully');
        usenavigate('#');
      })
    .catch(error => {
      console.log(error);
      alert('email verification Failed please try again');
    });
};

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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={emailVerification}>
            Submit
          </Button>
        </Form>
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
