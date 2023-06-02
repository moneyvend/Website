/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Box, Button, useToast } from '@chakra-ui/react';
import registerStyle from './register.module.scss';
import AppImages from '../../utilities/images/images';
import apiService from '../../services/apiService';
import Utils from '../../utilities';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [match, setMatch] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [formDate, setFormDate] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    frontendUrl: window.location.href,
  });

  const {
    fullname,
    email,
    password,
    password2,
  } = formDate;

  if (phone.charAt(0) === '0') {
    setPhone(phone.replace('0', ''));
  }

  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMatch('Password do not match');
      toast({
        title: 'Password do not match',
        description: 'Please check your password and try again',
        status: 'error',
        position: 'top-right',
        duration: 10000,
        isClosable: true,
      });
    } else {
      const userData = {
        fullname,
        email,
        phone,
        password,
        frontendUrl: Utils.getBaseURL(),
      };
      setIsLoading(true);
      const response = await apiService.register(userData);
      setIsLoading(false);
      if (!response.error) {
        toast({
          title: 'Account created successfully',
          description: 'Please check your email to verify your account',
          status: 'success',
          position: 'top-right',
          duration: 15000,
          isClosable: true,
        });
        setFormDate({
          fullname: '',
          email: '',
          password: '',
          password2: '',
          phone: '',
        });
        navigate(`/auth/complete/${email}`);
      } else {
        toast({
          title: response.error,
          description: response.message,
          status: 'error',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      }
      setMatch('');
    }
  };

  // regeter api integration

  return (
    <section className={registerStyle.holdAll}>
      <div className={registerStyle.holdFormNText}>
        <div className={registerStyle.holdText}>
          <div className={registerStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <Box p="12">
            <h3>Creating payment solutions</h3>
            <p>A product which specializes in creating terminal solution products for customers, SME&apos;s and merchants. </p>
          </Box>
        </div>
        <div className={registerStyle.holdForm}>
          <div className={registerStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={registerStyle.headerText}>
            <h3>Create Account</h3>
            <p>Please sign up by creating a personal account to  access all payment services and unique products.</p>
          </div>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" placeholder="Full name" name="fullname" value={fullname} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>
                Phone number
                <span className={registerStyle.dont}>(include country code i.e +235..)</span>
              </Form.Label>
              <Form.Control type="phone" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Re-type password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password2" value={password2} onChange={onChange} />
              <Form.Text className="text-muted">
                {match}
              </Form.Text>
            </Form.Group>

            <p className={registerStyle.already}>
              Already have an account?
              <Link to="/auth/login">Login</Link>
            </p>

            <Button variant="primary" type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
