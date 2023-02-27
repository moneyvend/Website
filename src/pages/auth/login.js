/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import loginStyle from './login.module.scss';
import AppImages from '../../utilities/images/images';

export default function RegisterPage() {
  /* eslint-disable */
  const [switchMe, setSwitchMe] = useState('Login with email');

  // Email Login API integration

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const usenavigate = useNavigate();

  // const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      // usenavigate('./dashboard');
    }
  });
   const emailLogin = () => {
    // console.warn(email, password);
    const item = { email, password };
    let result = fetch('https://monievend.herokuapp.com/api/auth/login/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    usenavigate('./dashboard');
  };

  // Phone Login Api integration
  const handleSubmit = () => {
    // console.log('success');
    axios.post('https://monievend.herokuapp.com/api/auth/login/phone', {
      phone: 'phone',
      password: 'password',
    })
    .then((result) => {
      console.log(result);
      alert('Logined successfully');
      usenavigate('/dashboard');
    })
    .catch((error) => {
      console.log(error);
      alert('wrong credentials. please try again!');
    });
  };

  const handleToggle = (index) => {
    setSwitchMe(index);
  };
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
            <button
              type="button"
              className={switchMe === 'Login with email' ? loginStyle.acti : loginStyle.actiNot}
              onClick={() => {
                handleToggle('Login with email');
              }}
            >
              Login with email
            </button>
            <button
              type="button"
              className={switchMe === 'Login with phone number' ? loginStyle.acti : loginStyle.actiNot}
              onClick={() => {
                handleToggle('Login with phone number');
              }}
            >
              Login with phone number
            </button>
          </div>
          {switchMe === 'Login with email'
            ? (
              <Form>
                <p className={loginStyle.inSwi}>{switchMe}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <div className={loginStyle.holdRemember}>
                  <Link to="/auth/forgot-password">Forgot Password?</Link>
                </div>

                <p className={loginStyle.already}>
                  Don&apos;t have an account?
                  <Link to="/auth/register">Sign up</Link>
                </p>

                <Button variant="primary" type="submit" onClick={emailLogin}>
                  Submit
                </Button>
              </Form>
            )
            : (
              <Form onSubmit={handleSubmit}>
                <p className={loginStyle.inSwi}>{switchMe}</p>
                <Form.Group className="mb-3">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="phone" placeholder="Phone number" name="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2">
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
            )}
        </div>
      </div>
      {/* {isLoading ? <Loader /> : null} */}
    </section>
  );
}
