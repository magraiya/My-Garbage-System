import React, { useState } from 'react';
import './Login.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email or Username</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Sign In</button>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default SignIn;