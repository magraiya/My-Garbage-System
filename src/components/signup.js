import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../Styles/signup.css'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await axios.post('http://localhost:3001/signup', formData);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            if (err.response?.status === 400) {
                setError('User already exists. Please use a different email.');
            } else {
                setError('An error occurred during signup. Please try again.');
            }
        }
    };

    return (
        <div className="signup-container">
            <Header />
            <div className="signup-content">
                <h2>Create Account</h2>
                <p>Please fill in the details to create an account.</p>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
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
                    
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                    
                    <div className="form-footer">
                        <p>
                            Already have an account? <Link to="/login">Login here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;