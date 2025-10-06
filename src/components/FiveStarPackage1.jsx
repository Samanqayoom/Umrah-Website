// src/pages/FiveStarPackage1.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import './FiveStarPackage1.css';
import kabah from '../assets/Al madina ❤.jpg';
import greenDoor from '../assets/65Asy5Lx.jpg';
import haramNight from '../assets/hHfG7_GU.jpg';
import masjidFront from '../assets/رحلة عمرة تمنحك سكينةً وسلامًا لا ينقطعان برؤية….jpg';

const packages = [
  // ... (aapka existing packages data yahan same rehne do)
];

const FiveStarPackage1 = () => {
  return (
    <section className="five-star-section">
      {/* ✅ Meta Tags for SEO */}
      <Helmet>
        <title>5 Star Umrah Packages - Muqaddas Travels UK</title>
        <meta
          name="description"
          content="Explore our premium 5 Star Umrah Packages from the UK. Includes luxury hotels in Makkah & Madinah, VIP transport, daily breakfast, and guided Ziyarat tours."
        />
        <meta
          name="keywords"
          content="5 Star Umrah Packages UK, Luxury Umrah Packages, VIP Umrah Packages, Umrah 2025, Umrah from London, Best Umrah agency UK"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="5 Star Umrah Packages - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Book your luxury 5 Star Umrah Package with Muqaddas Travels. Enjoy premium hotels, VIP transfers, guided Ziyarat, and 24/7 customer support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/packages/5star"
        />
        <meta
          property="og:image"
          content="https://www.muqaddastravels.co.uk/og-image.jpg"
        />
      </Helmet>

      <h2>5 Star Umrah Packages</h2>
      <div className="package-list">
        {packages.map((pkg) => (
          <div className="package-row" key={pkg.id}>
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
            <div className="package-details">
              <h3>{pkg.title}</h3>
              <ul>
                {pkg.description.map((item, index) => (
                  <li
                    key={index}
                    className={item.startsWith('Price:') ? 'price-highlight' : ''}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* ✅ Contact Buttons with Correct Links */}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveStarPackage1;
