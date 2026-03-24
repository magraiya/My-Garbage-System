import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import '../Styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = await axios.post('http://localhost:3001/login', { email, password });
      if (result.status === 200) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-content">
        <h2>Login</h2>
        <p>Please enter your credentials to log in.</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="required">Email:</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="required">Password:</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          
          <div className="form-footer">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;