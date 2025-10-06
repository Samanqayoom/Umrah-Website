// src/pages/AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Helmet>
        <title>About Us - Muqaddas Travels</title>
        <meta
          name="description"
          content="Muqaddas Travels offers trusted Umrah and Hajj services with integrity, comfort, and care. Learn about our mission, vision, and why thousands of pilgrims trust us."
        />
        <meta
          name="keywords"
          content="Umrah packages UK, Hajj services UK, Muqaddas Travels, Affordable Umrah, Trusted Hajj tours"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="About Us - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Discover Muqaddas Travels – trusted Umrah and Hajj travel partner in the UK. Our mission is to ensure a smooth, comfortable, and spiritual journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.muqaddastravels.com/about" />
        <meta property="og:image" content="https://www.muqaddastravels.com/og-image.jpg" />
      </Helmet>

      <div className="about-content">
        <h1>
          About <span className="highlight">Muqaddas Travels</span>
        </h1>
        <p className="intro">
          Muqaddas Travels is dedicated to providing exceptional Umrah and Hajj
          services with integrity, comfort, and a strong spiritual focus. Our
          mission is to ensure that every pilgrim can fulfill their sacred
          duties with complete peace of mind, while we take care of all the
          details.
        </p>

        <section>
          <h2><i className="fas fa-star vision-icon"></i> Our Vision</h2>
          <p>
            To become the most trusted and reliable travel partner for Umrah and
            Hajj journeys in the UK, known for excellence, transparency, and
            care.
          </p>
        </section>

        <section>
          <h2><i className="fas fa-handshake why-icon"></i> Why Choose Us?</h2>
          <ul className="features-list">
            <li>
              <i className="fas fa-user-tie staff"></i> Experienced and
              professional staff with deep knowledge of Hajj & Umrah rituals
            </li>
            <li>
              <i className="fas fa-money-bill-wave price"></i> Affordable,
              flexible, and tailor-made packages for every budget
            </li>
            <li>
              <i className="fas fa-phone-alt support"></i> 24/7 dedicated
              customer support to guide you at every step
            </li>
            <li>
              <i className="fas fa-mosque mosque"></i> Trusted by thousands of
              satisfied pilgrims who recommend us with pride
            </li>
            <li>
              <i className="fas fa-heart comfort"></i> Focus on comfort,
              convenience, and a spiritually uplifting experience
            </li>
            <li>
              <i className="fas fa-check-circle trust"></i> A promise of
              reliability, integrity, and personalized attention
            </li>
          </ul>
        </section>

        <section className="closing-note">
          <p>
            At Muqaddas Travels, we believe your sacred journey deserves nothing
            less than the best. From booking to your safe return, we stand by
            your side — so you can focus entirely on worship, reflection, and
            spiritual connection.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
