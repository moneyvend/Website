/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import verifyEmailStyle from './verifyEmail.module.scss';
import AppImages from '../../utilities/images/images';
// import ErrorModal from '../../components/Modals/errorModal';
// import Loader from '../../Loader/Loader';

export default function RecoverPasswordPage() {
  // const [errorModal, setErrorModal] = useState(false);
  // const signupToken = JSON.parse(sessionStorage.getItem('user'));
  // console.log(signupToken.data.verification.link.slice(56, 400));

  const [email, setEmail] = useState('');
  const usenavigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  const emailVerification = async (e) => {
    e.preventDefault();
    await axios.post('https://monievend.herokuapp.com/api/auth/verify-email', {
      token,
    })
      .then((result) => {
        usenavigate('/auth/login');
      })
      .catch((error) => {
        usenavigate('/auth/login');
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
            <p>
              A product which specializes in creating terminal
              solution products for customers, SME&apos;s and merchants.
            </p>
          </div>
        </div>
        <div className={verifyEmailStyle.holdForm}>
          <div className={verifyEmailStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={verifyEmailStyle.headerText}>
            <h3>Email Verification Sent</h3>
            <p>
              We&apos;ve sent a link to your email address:
              {' '}
              {email}
            </p>
          </div>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={emailVerification}>
              Submit
            </Button>
          </Form> */}
          <p
            className={verifyEmailStyle.already}
          >
            Didn&apos;t receive an email ?
            <Link to=" ">Resend</Link>
          </p>
        </div>
      </div>
      {
        // {isError ? <ErrorModal show={errorModal} onHide={() => setErrorModal(false)} errorMsg={message} /> : null}
      }
    </section>
  );
}
