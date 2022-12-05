/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import loginStyle from './login.module.scss';
import AppImages from '../../utilities/images/images';

export default function RegisterPage() {
  return (
    <section className={loginStyle.holdAll}>
      <div className={loginStyle.holdFormNText}>
        <div className={loginStyle.holdText}>
          <div className={loginStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div>
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </div>
        </div>
        <div className={loginStyle.holdForm}>
          <div className={loginStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={loginStyle.headerText}>
            <h3>Welcome Back!</h3>
            <p>Please sign in to your personal account to start access all payment services.</p>
          </div>
          <div className={loginStyle.holdSwichButin}>
            <button type="button" className={loginStyle.acti}>Login with email</button>
            <button type="button" className={loginStyle.actiNot}>Login with phone number</button>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>

            <div className={loginStyle.holdRemember}>
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </div>

            <p className={loginStyle.already}>
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
