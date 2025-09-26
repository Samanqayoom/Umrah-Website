// src/pages/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-content">
        <h1>
          About <span className="highlight">Muqqadas Travels</span>
        </h1>
        <p className="intro">
          Muqqadas Travels is committed to providing exceptional Umrah services with integrity,
          comfort, and spiritual focus. Our mission is to assist our clients in fulfilling
          their religious duties with peace of mind.
        </p>

        <section>
          <h2><i className="fas fa-star vision-icon"></i> Our Vision</h2>
          <p>To be the most trusted travel partner for Umrah and Hajj journeys in the UK.</p>
        </section>

        <section>
          <h2><i className="fas fa-handshake why-icon"></i> Why Choose Us?</h2>
          <ul className="features-list">
            <li><i className="fas fa-user-tie staff"></i> Experienced and professional staff</li>
            <li><i className="fas fa-money-bill-wave price"></i> Affordable and flexible packages</li>
            <li><i className="fas fa-phone-alt support"></i> 24/7 customer support</li>
            <li><i className="fas fa-mosque mosque"></i> Trusted by thousands of pilgrims</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
