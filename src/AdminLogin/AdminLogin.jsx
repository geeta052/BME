import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
        twoFactorCode: '',
        fullName: '',
        email: '',
        profilePicture: null,
        phoneNumber: '',
        secondaryEmail: '',
        address: '',
        dateOfBirth: '',
        gender: '',
        role: '',
        institute: '',
        position: '',
        verificationDocument: null,
        preferences: {
            eventTypes: [],
            categories: []
        },
        emergencyContactName: '',
        emergencyContactRelation: '',
        emergencyContactNumber: '',
        agreeToTerms: false,
        receiveMarketing: false,
        languagePreference: '',
        accessibilitySettings: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Admin Profile</h1>
            <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <h2>Basic Information</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="secondaryEmail">Secondary Email</label>
                        <input type="email" id="secondaryEmail" name="secondaryEmail" value={formData.secondaryEmail} onChange={handleChange} />
                    </div>
                </div>

                {/* Security Section */}
                <h2>Security</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twoFactorCode">Two-Factor Code</label>
                        <input type="text" id="twoFactorCode" name="twoFactorCode" value={formData.twoFactorCode} onChange={handleChange} />
                    </div>
                </div>

                {/* Contact Information Section */}
                <h2>Contact Information</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                </div>

                {/* Profile Section */}
                <h2>Profile</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} accept="image/*" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="verificationDocument">Verification Document</label>
                        <input type="file" id="verificationDocument" name="verificationDocument" onChange={handleChange} accept="image/*,application/pdf" />
                    </div>
                </div>

                {/* Preferences Section */}
                <h2>Preferences</h2>
                <div className="form-group">
                    <label>Event Types</label>
                    <input type="text" name="preferences.eventTypes" value={formData.preferences.eventTypes} onChange={handleChange} placeholder="Enter preferred event types..." />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" name="preferences.categories" value={formData.preferences.categories} onChange={handleChange} placeholder="Enter preferred categories..." />
                </div>

                {/* Additional Settings */}
                <h2>Settings</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="languagePreference">Language Preference</label>
                        <input type="text" id="languagePreference" name="languagePreference" value={formData.languagePreference} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="accessibilitySettings" checked={formData.accessibilitySettings} onChange={handleChange} />
                            Accessibility Settings
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit">SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;
