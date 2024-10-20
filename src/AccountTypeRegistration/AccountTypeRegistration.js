// AccountTypeRegistration.js

import React, { useState } from 'react';
import './AccountTypeRegistration.css'; // Import the CSS file

const AccountTypeRegistration = () => {
    const [accountType, setAccountType] = useState('');

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the registration logic (e.g., sending data to API)
        alert(`Selected Account Type: ${accountType}`);
    };

    return (
        <div className="registration-container">
            <h2>Registration - Account Type</h2>
            <form onSubmit={handleSubmit}>
                <div className="radio-group">
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Student"
                            checked={accountType === 'Student'}
                            onChange={handleAccountTypeChange}
                            className="radio-input"
                        />
                        <span className="radio-custom">Student</span>
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Admin"
                            checked={accountType === 'Admin'}
                            onChange={handleAccountTypeChange}
                            className="radio-input"
                        />
                        <span className="radio-custom">Admin</span>
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="Institute"
                            checked={accountType === 'Institute'}
                            onChange={handleAccountTypeChange}
                            className="radio-input"
                        />
                        <span className="radio-custom">Institute</span>
                    </label>
                </div>
                <button type="submit" className="continue-button">Continue</button>
            </form>
        </div>
    );
};

export default AccountTypeRegistration;
