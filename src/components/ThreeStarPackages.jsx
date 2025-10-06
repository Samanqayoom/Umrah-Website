// src/pages/ThreeStarPackages.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import './ThreeStarPackages.css';
import kabah from '../assets/4.jpg';
import greenDoor from '../assets/madina.jpg';
import haramNight from '../assets/madinah.jpg';
import masjidFront from '../assets/kaaba.jpg';

const packages = [
  {
    id: 1,
    nights: '7 Night',
    star: '3 Star',
    makkahNights: '4 nights',
    madinahNights: '3 nights',
    makkahHotel: 'Emaar Al Khalil',
    madinahHotel: 'Zaha Al Madinah',
    price: '£899',
    image: kabah,
  },
  {
    id: 2,
    nights: '10 Night',
    star: '3 Star',
    makkahNights: '5 nights',
    madinahNights: '5 nights',
    makkahHotel: 'Worth Elite',
    madinahHotel: 'Emaar Taibah',
    price: '£999',
    image: greenDoor,
  },
  {
    id: 3,
    nights: '12 Night',
    star: '3 Star',
    makkahNights: '6 nights',
    madinahNights: '6 nights',
    makkahHotel: 'Emaar Worth Elite',
    madinahHotel: 'Al Mokhtara Diamond',
    price: '£1049',
    image: haramNight,
  },
  {
    id: 4,
    nights: '14 Night',
    star: '3 Star',
    makkahNights: '7 nights',
    madinahNights: '7 nights',
    makkahHotel: 'Emaar Andalusia',
    madinahHotel: 'Emaar Taibah',
    price: '£1149',
    image: masjidFront,
  },
];

const ThreeStarPackages = () => {
  return (
    <section className="three-star-section">
      {/* ✅ Meta Tags for SEO */}
      <Helmet>
        <title>3 Star Umrah Packages - Muqaddas Travels UK</title>
        <meta
          name="description"
          content="Check our affordable 3 Star Umrah packages from the UK with stays in Makkah & Madinah, guided Ziyarat, transport, and full support."
        />
        <meta
          name="keywords"
          content="3 Star Umrah Packages UK, Affordable Umrah Packages, Umrah from London, Muqaddas Travels"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="3 Star Umrah Packages - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Book your 3 Star Umrah package with Muqaddas Travels. Comfortable hotels, guided Ziyarat, transport, and full support for a smooth journey."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/packages/3star"
        />
      </Helmet>

      <h2>3 Star Umrah Packages</h2>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={`${pkg.nights} ${pkg.star}`} />
            <h3>{pkg.nights} {pkg.star} Umrah Package</h3>
            
            <div className="hotel-info">
              <div>
                <i className="fa-solid fa-kaaba icon"></i>
                <p>Makkah ({pkg.makkahNights})</p>
                <span>{pkg.makkahHotel}</span>
              </div>
              <div>
                <i className="fa-solid fa-mosque icon"></i>
                <p>Madinah ({pkg.madinahNights})</p>
                <span>{pkg.madinahHotel}</span>
              </div>
            </div>

            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>

            <div className="price">{pkg.price}</div>
            <p className="disclaimer">All packages are subject to availability.</p>

            <div className="contact-buttons">
              <a href="tel:+44 02038219282" className="call-btn">
                <i className="fa-solid fa-phone"></i> Call Us
              </a>
              <a
                href="https://wa.me/447465683556"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeStarPackages;
