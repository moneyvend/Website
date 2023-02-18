/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import AppImages from '../../utilities/images/images';
import resetStyle from './passwordReset.module.scss';
// import resetStyle from './passwordReset.module.scss';

export default function PasswordResetPage() {
  // export default function PasswordResetPage() {

  const emailVerification = () => {
    axios.post('https://monievend.herokuapp.com/api/auth/forgot-password', {
      email: 'email',
    })
        .then(result => {
        console.log(result);
        alert('Password Reset Email sent successfully! please visit your email');
        usenavigate('#');
      })
    .catch(error => {
      console.log(error);
      alert('email address not found');
    });
};

  return (
    <section className={resetStyle.holdAll}>
      <div className={resetStyle.holdFormNText}>
        <div className={resetStyle.holdText}>
          <div className={resetStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div>
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </div>
        </div>
        <div className={resetStyle.holdForm}>
          <div className={resetStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={resetStyle.headerText}>
            <h3>Reset Password</h3>
            <p>Enter new details of your password</p>
          </div>
          <Form>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword2">
              <Form.Label>Re-type Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password2" />
            </Form.Group>

            <p className={resetStyle.already}>
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
