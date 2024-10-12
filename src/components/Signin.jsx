import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import googleLogo from "../assets/google-logo.png";
import './signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between sign-in and sign-up
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for Sign In form
  const [signInPhoneNumber, setSignInPhoneNumber] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // State for Sign Up form
  const [signUpName, setSignUpName] = useState('');
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState('+966');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


 
  
  return (
    <div className="main-container">
      <div className={`form-container ${isSignIn ? "" : "sign-up-form"}`}>
        <div className="form-header">
          {/* Toggle between Sign In and Sign Up */}
          <span
            className={`sign-in ${isSignIn ? "active-tab" : ""}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </span>
          <span
            className={`sign-up ${!isSignIn ? "active-tab" : ""}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </span>
        </div>

        {isSignIn ? (
          // Sign In Form
          <form>
            <div className="input-container">
              <label htmlFor="Phone1" className="input-label">
                Phone number
              </label>
              <input
                type="text"
                className="input-field"
                value={signInPhoneNumber}
                onChange={(e) => setSignInPhoneNumber(e.target.value)} // Separate state for Sign In
              />
            </div>

            <div className="input-container">
              <label htmlFor="Password" className="input-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)} // Separate state for Sign In
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FiEye className="fa fa-eye" />
              </span>

              <Link to="/User%20Account/Sign%20In/Forget%20Password" className="forgot-password">
                Forget Password
              </Link>
            </div>
            <button type="submit" className="sign-in-button">
              SIGN IN <FaArrowRight className="arrow-icon-sg" />
            </button>
          </form>
        ) : (
          // Sign Up Form
          <form>
            <div className="input-container">
              <label htmlFor="Name" className="input-label">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)} // Separate state for Sign Up
              />
            </div>
            <div className="input-container">
              <label htmlFor="Phone" className="input-label">
                Phone number
              </label>
              <input
                type="text"
                className="input-field"
                value={signUpPhoneNumber}
                onChange={(e) => setSignUpPhoneNumber(e.target.value)} // Separate state for Sign Up
              />
            </div>
            <div className="input-container">
              <label htmlFor="Email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                className="input-field"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)} // Separate state for Sign Up
              />
            </div>
            <div className="input-container password-container">
              <label htmlFor="Password" className="input-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)} // Separate state for Sign Up
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FiEye className="fa fa-eye" />
              </span>
            </div>
            <div className="input-container password-container">
              <label htmlFor="ConfirmPassword" className="input-label">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Separate state for Confirm Password
              />
              <span
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FiEye className="fa fa-eye" />
              </span>
            </div>

            <div className="terms">
              <input type="checkbox" className="checkbox1" />
              <label className="terms-label">
                Are you agree to Clicon <a href="#">Terms of Condition</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="sign-in-button">
              <Link to="/Sign%20In/Email%20Verification">
                SIGN UP  </Link> <FaArrowRight className="arrow-icon" />
             
            </button>
          </form>
        )}

        <div className="or-container">
          <span className="or-text">or</span>
        </div>

        <div className="social-login-container">
          <button className="social-button google-login">
            <img src={googleLogo} alt="Google" className="social-logo" />
            Login with Google
          </button>
          <button className="social-button apple-login">
            <FaApple className="social-icon" />
            Login with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
