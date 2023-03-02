/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import AppImages from '../../utilities/images/images';
import forgetStyle from './forgotPassword.module.scss';

export default function ForgotPasswordPage() {
  /* eslint-disable */
  const [email, setEmail] = useState('');
  const usenavigate = useNavigate;

  const handleSubmit = () => {
    axios.post('https://monievend.herokuapp.com/api/auth/forgot-password', {
      email: 'email',
    }).then((result) => {
      console.log(result);
      alert('Password Reset Email sent successfully');
      usenavigate('/auth/login');
    })
      .catch((error) => {
        console.log(error);
        alert('User with email provided does not exist');
      });
  };

  return (
    <section className={forgetStyle.holdAll}>
      <div className={forgetStyle.holdFormNText}>
        <div className={forgetStyle.holdText}>
          <div className={forgetStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div>
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </div>
        </div>
        <div className={forgetStyle.holdForm}>
          <div className={forgetStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={forgetStyle.headerText}>
            <h3>Recover Password</h3>
            <p>Please check your email after submitting the form.</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <p className={forgetStyle.already}>
              Don&apos;t have an account?
              <Link to="/auth/register">Sign up</Link>
            </p>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      {/* {isLoading ? <Loader /> : null} */}
    </section>
  );
}
