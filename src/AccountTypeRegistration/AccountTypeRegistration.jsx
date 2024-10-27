import React, { useState } from 'react';
import './AccountTypeRegistration.css';

const AccountTypeRegistration = () => {
    const [accountType, setAccountType] = useState('');

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Account Type: ${accountType}`);
    };

    return (
        <div className="registration-container">
            <h1>Account Type Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="account-type-options">
                    <label className={accountType === 'Student' ? 'selected' : ''}>
                        <input
                            type="radio"
                            value="Student"
                            checked={accountType === 'Student'}
                            onChange={handleAccountTypeChange}
                        />
                        Student
                        {accountType === 'Student' && <span className="checkmark">✔</span>}
                    </label>
                    <label className={accountType === 'Admin' ? 'selected' : ''}>
                        <input
                            type="radio"
                            value="Admin"
                            checked={accountType === 'Admin'}
                            onChange={handleAccountTypeChange}
                        />
                        Admin
                        {accountType === 'Admin' && <span className="checkmark">✔</span>}
                    </label>
                    <label className={accountType === 'Institute' ? 'selected' : ''}>
                        <input
                            type="radio"
                            value="Institute"
                            checked={accountType === 'Institute'}
                            onChange={handleAccountTypeChange}
                        />
                        Institute
                        {accountType === 'Institute' && <span className="checkmark">✔</span>}
                    </label>
                </div>
                <button type="submit" className="submit-button" disabled={!accountType}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default AccountTypeRegistration;
