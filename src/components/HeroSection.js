import React from 'react';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: 'url(https://borgenproject.org/wp-content/uploads/Road_NH_48_to_the_Shekhawati-Waste_collect-20131007.jpg)',
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Efficient Waste Management for a Sustainable Future</h1>
        <p>A new approach to cleanliness, inspired by community and care.</p>
        {/* <button className="main-cta-button">Join the Movement</button> */}
      </div>
    </section>
  );
};

export default HeroSection;