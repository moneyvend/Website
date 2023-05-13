/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Button, Text,Box,useToast } from '@chakra-ui/react';
// import { login, reset } from '../../features/authentication/signupSlice';
import AuthContext from '../../features/authentication/loginPhoneService';
import loginStyle from './login.module.scss';
import AppImages from '../../utilities/images/images';
import apiService from '../../services/apiService';

async function LoginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function RegisterPage({ setToken }) {
  /* eslint-disable */
  const [switchMe, setSwitchMe] = useState('Login with email');
  const toast = useToast()
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const deviceToken = searchParams.get('token');
  const navigate = useNavigate();

  // Email Login Api integration
  const emailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await apiService.loginWithEmail(email, password)
    setIsLoading(false);
    if(!response.error) {
      setAuth(true);
      navigate('/dashboard');
    } else {
      toast({
        title: response.error,
        description: response.message,
        status: 'error',
        position:'top-right',
        duration: 10000,
        isClosable: true,
      })
      setErrMsg(response.data.message);
      errRef.current.focus();
    }
  };

  // Phone Login Api integration
  const postLogin = () => {
    fetch('https://monievend.herokuapp.com/api/auth/login/phone', {
      method: 'POST',
      body: JSON.stringify({
        phone,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/dashboard');
        console.log(data);
      })
      .catch((err) => {
        alert('wrong credentials');
        console.error(err)
      });
  }

  // Phone Login Api integration
  const loginWithPhoneNumber = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await apiService.loginWithPhoneNumber(phone, password)
    setIsLoading(false);
    if(!response.error) {
      setAuth(true);
      navigate('/dashboard');
    } else {
      toast({
        title: response.error,
        description: response.message,
        status: 'error',
        position:'top-right',
        duration: 10000,
        isClosable: true,
      })
      setErrMsg(response.data.message);
      errRef.current.focus();
    }
  };

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
          <Box p="12">
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </Box>
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
              Login with phone
            </button>
          </div>
          {switchMe === 'Login with email'
            ? (
              <Form onSubmit={emailLogin}>
                <Text className={loginStyle.inSwi}>{switchMe}</Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
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

                <Button variant="primary" type="submit" isLoading={isLoading}>
                  Submit
                </Button>
              </Form>
            )
            : (
              <Form onSubmit={loginWithPhoneNumber}>
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

                <Button variant="primary" type="submit" isLoading={isLoading}>
                  Submit
                </Button>
              </Form>
            )}
        </div>
      </div>
    </section>
  );
}
