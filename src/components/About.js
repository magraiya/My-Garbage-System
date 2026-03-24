import React from 'react';
import Header from './Header';
import '../Styles/about.css';
import '../Styles/about.css'

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-container">
        <h1>About Clean Society</h1>
        
        <section className="about-content">
          <h2>Our Mission</h2>
          <p>We are committed to creating cleaner and more sustainable communities through efficient waste management solutions.</p>
          
          <h2>What We Do</h2>
          <p>We provide comprehensive waste management services including collection, segregation, and recycling to help build a greener future.</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Recycling Rate</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;