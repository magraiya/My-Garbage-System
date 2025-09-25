import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Clean Socity</div>
      <nav>
        <ul>
          <li><a href="/Header">Home</a></li>
          <li><a href="#contact">Contact</a></li> 
          <li><a href="/Login">Services</a></li>
        </ul>
      </nav>
      <button className="cta-button">
        <a href="Login/">Login</a>
        </button>
      
    </header>
  );
};

export default Header;