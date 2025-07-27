import React from 'react';
import './Hero.css';
import poster from '../assets/5ss.png';

const Hero = () => (
  <section className="hero-section">
    <img src={poster} alt="Umrah Poster" className="full-poster" />
  </section>
);

export default Hero;
