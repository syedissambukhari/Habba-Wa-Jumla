import React, { useState } from "react";
import "./emailVerification.css";
import { FaArrowRight } from "react-icons/fa6";

const EmailVerification = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Verification code submitted: ${code}`);
    // Add logic to verify the code
  };

  const handleResendCode = () => {
    console.log("Resend code clicked");
    // Add logic to resend the verification code
  };

  return (
    <div className="verify-email-main">
      <div className="verify-email-container">
        <h2 className="verify-email-title">Verify Your Phone Number</h2>
        <p className="verify-email-subtitle">
          Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
          tristique a eu in diam.
        </p>
        <form className="verify-email-form" onSubmit={handleSubmit}>
          <div className="verification-input-box">
            <div className="verification-label-container">
              <label htmlFor="code" className="verification-label">
                Verification Code
              </label>
              <button
                type="button"
                className="resend-code-btn"
                onClick={handleResendCode}
              >
                Resend Code
              </button>
            </div>
            <input
              type="text"
              id="code"
              className="verification-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="verify-me-btn">
            VERIFY ME
            <FaArrowRight className="arrow-icons" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
