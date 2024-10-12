import React, { useState } from 'react';
import './forget.css';
import { FaArrowRight} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Forget = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Password reset email sent to: ${email}`);
    // Here you can add API call logic to send the password reset email
  };

  return (
    <div className="password-reset-main">
      <div className="password-reset-container">
        <h2 className="password-reset-title">Forget Password</h2>
        <p className="password-reset-subtitle">
          Enter the email address or mobile phone number associated with your account.
        </p>
        <form className="password-reset-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="email" className="reset-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="reset-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type='submit' className="send-code-btn">
            <Link to="/User Account/Sign In/Forget Password/Reset Password">SEND CODE</Link>
            <FaArrowRight className="arrow-icon2"/>
          </button>
        </form>
        
        <div className="reset-links">
          <a href="/signin" className="sign-in-link">Already have an account? <span>Sign In</span></a>
          <a href="/signup" className="sign-up-link">Don’t have an account? <span>Sign Up</span></a>
        </div>
        <hr className="divider" />
        <p className="contact-support">
          You may contact <a href="/support" className="customer-service-link">Customer Service</a> for help restoring access to your account.
        </p>
      </div>
    </div>
  );
};

export default Forget;
