import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppImages from '../../utilities/images/images';
import './forgotPassword.modules.css';

export default function PasswordResetPage() {
  const navigate = useNavigate();
  return (
    <div className="contr-3">
      <div className="dr1">
        <div className="b-r" />
        <h5>Creating payment solutions</h5>
        <p className="pd">Enter new details of your password</p>
      </div>
      <div id="c--2">
        <div className="haw emil">
          <button
            type="button"
            className="aw but"
            onClick={() => {
              navigate('/auth/login');
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="bwa"
            onClick={() => {
              navigate('/auth/register');
            }}
          >
            Register
          </button>
        </div>
        <img src={AppImages.HLOGO} id="img-7" alt="Logo" />
        <h1 id="H1">Recover Password</h1>
        <p className="pdw">Please sign in to your personal account to start access all payment services.</p>
        <form id="f-3">
          <label className="l-1" htmlFor="Enter email">
            Email *
            <input type="password" className="i-1" name="Enter email" id="Enter email" placeholder="Enter email" required />
          </label>
          <button type="button" id="b-r">Sign up</button>
        </form>
        <div className="fo-1">
          <p className="fo-p">
            Don’t have an account?
            <a href="/auth/register" className="l-4">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
