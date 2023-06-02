/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
/* eslint-disable*/

const VerifyFromEmail = () => {
  const usenavigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');
  const emailVerification = async () => {
   
  };
  useEffect(() => {
    emailVerification();
  }, []);
  return (
    <div className='card'>
      <h1>Verify Success</h1>
      <button onClick={emailVerification}>Proceed</button>
    </div>
  );
};

export default VerifyFromEmail;
