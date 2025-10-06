// src/pages/FiveStarPackages.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import './FiveStarPackages.css';
import kabah from '../assets/al.jpg';
import greenDoor from '../assets/mosque.jpg';
import haramNight from '../assets/os.jpg';
import masjidFront from '../assets/R.jpg';

const packages = [
  {
    id: 1,
    nights: '7 Night',
    star: '5 Star',
    makkahNights: '4 nights',
    madinahNights: '3 nights',
    makkahHotel: 'Emaar Al Khalil',
    madinahHotel: 'Zaha Al Madinah',
    price: '£960',
    image: kabah,
  },
  {
    id: 2,
    nights: '10 Night',
    star: '5 Star',
    makkahNights: '5 nights',
    madinahNights: '5 nights',
    makkahHotel: 'Worth Elite',
    madinahHotel: 'Emaar Taibah',
    price: '£1100',
    image: greenDoor,
  },
  {
    id: 3,
    nights: '12 Night',
    star: '5 Star',
    makkahNights: '6 nights',
    madinahNights: '6 nights',
    makkahHotel: 'Emaar Worth Elite',
    madinahHotel: 'Al Mokhtara Diamond',
    price: '£1150',
    image: haramNight,
  },
  {
    id: 4,
    nights: '14 Night',
    star: '5 Star',
    makkahNights: '7 nights',
    madinahNights: '7 nights',
    makkahHotel: 'Emaar Andalusia',
    madinahHotel: 'Emaar Taibah',
    price: '£1204',
    image: masjidFront,
  },
];

const FiveStarPackages = () => {
  return (
    <section className="three-star-section">
      {/* ✅ Meta Tags for SEO */}
      <Helmet>
        <title>5 Star Umrah Packages - Muqaddas Travels UK</title>
        <meta
          name="description"
          content="Explore our luxury 5 Star Umrah packages from the UK with premium hotels in Makkah & Madinah, guided Ziyarat tours, transport, and 24/7 support."
        />
        <meta
          name="keywords"
          content="5 Star Umrah Packages UK, Luxury Umrah Packages, VIP Umrah Packages, Umrah 2025, Umrah from London"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="5 Star Umrah Packages - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Book your 5 Star Umrah package with Muqaddas Travels. Enjoy luxury hotels, VIP transport, guided Ziyarat, and full support throughout your journey."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/packages/5star"
        />
      </Helmet>

      <h2>5 Star Umrah Packages</h2>
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

export default FiveStarPackages;
