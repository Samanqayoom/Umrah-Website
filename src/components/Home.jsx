import React from 'react';
import './Home.css';
import PackageCard from '../components/PackageCard';
import kabah from '../assets/kabah.jpg'; // Used below in hero background

const Home = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${kabah})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-text">
          <h1>Trusted Umrah Packages from Pakistan</h1>
          <p>We help you complete your spiritual journey with ease and comfort.</p>
          <button>Explore Packages</button>
        </div>
      </section>

      <section className="packages-section">
        <h2>Popular Umrah Packages</h2>
        <div className="package-list">
          <PackageCard
            title="Economy Package"
            duration="14 Days"
            hotel="3 Star"
            transport="Yes"
            price="PKR 250,000"
          />
          <PackageCard
            title="Standard Package"
            duration="10 Days"
            hotel="4 Star"
            transport="Yes"
            price="PKR 350,000"
          />
          <PackageCard
            title="VIP Package"
            duration="7 Days"
            hotel="5 Star"
            transport="Private"
            price="PKR 500,000"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
