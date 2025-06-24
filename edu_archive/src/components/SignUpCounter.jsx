import React from 'react';
import './SignUpCounter.css';
import thumbsup from '../assets/thumbs-up-svgrepo-com.svg';

function SignUpCounter() {
  return (
    <div className="signup-counter-card">
        <div className="signup-counter-icon">
        <span role="img" aria-label="clock"><img src={thumbsup} style={{width: '40px', height: '40px',padding: '10px'}}></img></span>
        </div>
        <div className="signup-counter-number">100</div>
        <div className="signup-counter-label">Sign Ups</div>
    </div>
  )
}

export default SignUpCounter;
