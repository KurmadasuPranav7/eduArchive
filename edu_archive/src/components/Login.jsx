import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Login.css';

function Login() {
  return (
    <div className='login-container'>
        <SignIn></SignIn>
    </div>
  )
}

export default Login;
