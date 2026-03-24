import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Clean Socity Initiative. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;