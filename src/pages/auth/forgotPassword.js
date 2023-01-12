/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import AppImages from '../../utilities/images/images';
import forgetStyle from './forgotPassword.module.scss';

export default function ForgotPasswordPage() {
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

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
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
