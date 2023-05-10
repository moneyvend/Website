/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AuthContext from '../../features/authentication/loginPhoneService';
// import { login, reset } from '../../features/authentication/signupSlice';
import loginStyle from './login.module.scss';
import AppImages from '../../utilities/images/images';

// async function LoginUser(credentials) {
// return fetch('http://localhost:8080/login', {
// method: 'POST',
// header: {
// 'Content-Type': 'application/json'
// },
// body: JSON.stringify(credentials)
// }).then(data => data.json())
// }

export default function RegisterPage({ setToken }) {
  /* eslint-disable */
  const [switchMe, setSwitchMe] = useState('Login with email');

  const { setAuth } = useContext(AuthContext);
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

  // Email Login api integration
  useEffect(() => {
    userRef.current?.focus();
  }, [])

  useEffect(() => {
    if (localStorage.getItem('user-data')) {
      navigate('/dashboard');
    }
  }, [])

  const emailLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log(email, password);
      let item = { email, password };
      let result = await fetch('https://monievend.herokuapp.com/api/auth/login/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(item)
        // }).then((response) => response.json())
        // .then(() => {
        // result = result.json();
        // localStorage.setItem('user-info', JSON.stringify(result));
        // navigate('/dashboard');
        // }).catch(error => {
        // alert(error.message);
        // console.log(deviceToken);
        // })
      }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
          alert('Please Enter valid email');
        } else {
          if (resp.password === password) {
            alert('Success');
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('userrole', resp.role);
            navigate('/')
          } else {
            alert('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        alert('Login Failed due to :' + err.message);
      });
    }
  }
  useEffect(() => {
    emailLogin();
  }, []);

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please Enter email');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  }

  // const emailLogin = async (e) => {
  // e.preventDefault();
  // try {
  // const response = await axios.post('https://monievend.herokuapp.com/api/auth/login/email',
  // JSON.stringify({ email, password }),
  // {
  // headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
  // }
  // );
  // console.log(JSON.stringify(response?.data));
  // const accessToken = response?.data?.accessToken;
  // const roles = response?.data?.roles;
  // setAuth({ email, password, roles, accessToken });
  // navigate('/dashboard')
  // 
  // setEmail('');
  // setPassword('');
  // } catch (err) {
  // if (!err?.response) {
  // setErrMsg('No Server Response');
  // } else if (err.response?.status === 400) {
  // setErrMsg('Missing Username or Password');
  // } else if (err.response?.status === 401) {
  // setErrMsg('Unauthorized');
  // } else {
  // setErrMsg('Login Failed');
  // }
  // errRef.current.focus();
  // }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://monievend.herokuapp.com/api/auth/login/phone',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
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
