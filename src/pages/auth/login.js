/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import { login, reset } from '../../features/authentication/signupSlice';
import AuthContext from '../../features/authentication/loginPhoneService';
import loginStyle from './login.module.scss';
import AppImages from '../../utilities/images/images';

export default function RegisterPage() {
  /* eslint-disable */
  const [switchMe, setSwitchMe] = useState('Login with email');

  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Email Login api integration
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const emailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://monievend.herokuapp.com/api/auth/login/email',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } catch (err) {
      alert('wrong user credentials');
    }
  }
  // 
  // const postLogin = () => {
  // fetch('https://monievend.herokuapp.com/api/auth/login/phone', {
  // method: 'POST',
  // body: JSON.stringify({
  // phone,
  // password,
  // }),
  // headers: {
  // 'Content-Type': 'application/json',
  // },
  // })
  // .then((res) => res.json())
  // .then((data) => {
  // navigate('/dashboard');
  // console.log(data);
  // })
  // .catch((err) => {
  // alert('wrong credentials');
  // console.error(err)
  // });
  // }
  // 
  // Phone Login Api integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://monievend.herokuapp.com/api/auth/login/phone',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ phone, password, roles, accessToken });
      setPhone('');
      setPassword('');
      navigate('/dashboard');
    } catch (err) {
      alert('wrong user credentials');
    }
  }

  const handleToggle = (index) => {
    setSwitchMe(index);
  };
  return (
    <section className={loginStyle.holdAll}>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
              type="submit"
              className={switchMe === 'Login with email' ? loginStyle.acti : loginStyle.actiNot}
              onClick={() => {
                handleToggle('Login with email');
              }}
            >
              Login with email
            </button>
            <button
              type="submit"
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
              <Form onSubmit={emailLogin}>
                <p className={loginStyle.inSwi}>{switchMe}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
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
                  <Form.Control type="password" value={password} placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
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
