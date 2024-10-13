import React, { useState } from 'react';
import './reset.css'; // Import the CSS file
import { FaArrowRight} from 'react-icons/fa6';
import { FiEye} from 'react-icons/fi';


const Reset = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="main-containers">
            <div className="form-container1">
                <h2 className="form-title1">Reset Password</h2>
                <p className="form-description1">
                    Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit amet nunc.
                </p>

                <div className="input-container1">
                    <label className="input-label1" htmlFor="password">Password</label>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        placeholder="8+ characters"
                        className="input-field1"
                    />
                    <span className="password-toggle1" onClick={togglePasswordVisibility}>
                    <FiEye className="fa fa-eye1" />
                    </span>
                </div>

                <div className="input-container1">
                    <label className="input-label1" htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        id="confirm-password"
                        className="input-field1"
                    />
                    <span className="password-toggle1" onClick={toggleConfirmPasswordVisibility}>
                    <FiEye className="fa fa-eye1" />
                    </span>
                </div>

                <button className="reset-button1">
                    RESET PASSWORD <FaArrowRight className="arrow-icon1" />
                </button>
            </div>
        </div>
    );
};

export default Reset;
