import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
/* eslint-disable*/

const VerifyFromEmail = () => {
  const usenavigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');
  const emailVerification = async (e) => {
    e.preventDefault();
    await axios.post('https://monievend.herokuapp.com/api/auth/verify-email', {
      token,
    })
      .then(() => {
        usenavigate('/auth/login');
      })
      .catch(() => {
        usenavigate('/auth/login');
      });
  };
  useEffect(() => {
    emailVerification();
  }, []);
  return (
    <div>
      <h1>Verify Success</h1>
    </div>
  );
};

export default VerifyFromEmail;
