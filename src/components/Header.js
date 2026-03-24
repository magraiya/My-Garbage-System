import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Clean Society</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-button">Log In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;