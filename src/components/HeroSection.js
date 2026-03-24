import React from 'react';
import '../Styles/heroSection.css';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: 'url(https://borgenproject.org/wp-content/uploads/Road_NH_48_to_the_Shekhawati-Waste_collect-20131007.jpg)',
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">Efficient Waste Management for a Sustainable Future</h1>
        <p className="hero-subtitle">A new approach to cleanliness, inspired by community and care.</p>
      </div>
    </section>
  );
};

export default HeroSection;