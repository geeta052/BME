import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
        twoFactorCode: '',
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log(formData);
    };

    return (
        <div className="fullscreen-container">
            <div className="form-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="username">Username/Email:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                Remember Me
                            </label>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="twoFactorCode">Two-Factor Code (if enabled):</label>
                            <input
                                type="text"
                                id="twoFactorCode"
                                name="twoFactorCode"
                                value={formData.twoFactorCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit">Login</button>
                    <a href="/forgot-password">Forgot Password?</a>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginForm;
