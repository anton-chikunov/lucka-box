import React from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import sprite from '../../assets/img/icons.svg';

function Login() {

  return (
    <div className="auth-block">
      <div className="auth-block__subtitle">JUST LOGIN FIRST</div>
      <h1 className="auth-block__title">Sign in to Luckabox Customer</h1>
      <div className="auth-block__form">
        <TextInput type="text" icon="email" label="Your Email" value="adrienbelaich@gmail.com" error="Wrong ID" />
        <TextInput type="password" icon="password" label="Password" />
        <TextInput type="password" icon="password" label="Repeat Password" />
        <div className="auth-block__buttons">
          <Button fullWidth={true} title="Login" />
        </div>
      </div>

      <div className="auth-socials">
        <div className="auth-socials__or">
          <span>OR</span>
        </div>
        <div className="auth-socials__buttons">
          <button type="button" className="auth-socials__btn">
            <svg className="icon icon--google" fill="currentColor">
              <use href={sprite + "#google"} />
            </svg>            
          </button>
          <button type="button" className="auth-socials__btn">
            <svg className="icon icon--facebook" fill="currentColor">
              <use href={sprite + "#facebook"} />
            </svg>            
          </button>
          <button type="button" className="auth-socials__btn">
            <svg className="icon icon--twitter" fill="currentColor">
              <use href={sprite + "#twitter"} />
            </svg>            
          </button>          
        </div>
      </div>
    </div>
  );
}

export default Login;