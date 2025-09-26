import React from 'react';
import './FourStarPackages.css';
import kabah from '../assets/summer.jpg';
import greenDoor from '../assets/mecca.jpg';
import haramNight from '../assets/madinah.jpg';
import masjidFront from '../assets/photp.jpg';

const packages = [
  {
    id: 1,
    nights: '7 Night',
    star: '4 Star',
    makkahNights: '4 nights',
    madinahNights: '3 nights',
    makkahHotel: 'Emaar Al Khalil',
    madinahHotel: 'Zaha Al Madinah',
    price: '£920',
    image: kabah,
  },
  {
    id: 2,
    nights: '10 Night',
    star: '4 Star',
    makkahNights: '5 nights',
    madinahNights: '5 nights',
    makkahHotel: 'Worth Elite',
    madinahHotel: 'Emaar Taibah',
    price: '£1050',
    image: greenDoor,
  },
  {
    id: 3,
    nights: '12 Night',
    star: '4 Star',
    makkahNights: '6 nights',
    madinahNights: '6 nights',
    makkahHotel: 'Emaar Worth Elite',
    madinahHotel: 'Al Mokhtara Diamond',
    price: '£1060',
    image: haramNight,
  },
  {
    id: 4,
    nights: '14 Night',
    star: '4 Star',
    makkahNights: '7 nights',
    madinahNights: '7 nights',
    makkahHotel: 'Emaar Andalusia',
    madinahHotel: 'Emaar Taibah',
    price: '£1200',
    image: masjidFront,
  },
];

const FourStarPackages = () => {
  return (
    <section className="three-star-section">
      <h2>4 Star Umrah Packages</h2>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.nights} />
            <h3>{pkg.nights} {pkg.star} Umrah Package</h3>
            
            <div className="hotel-info">
              <div>
                <img src="/makkah-icon.png" alt="Makkah" />
                <p>
                  <i className="fa-solid fa-kaaba"></i> Makkah ({pkg.makkahNights})
                </p>
                <span>{pkg.makkahHotel}</span>
              </div>
              <div>
                <img src="/madinah-icon.png" alt="Madinah" />
                <p>
                  <i className="fa-solid fa-mosque"></i> Madinah ({pkg.madinahNights})
                </p>
                <span>{pkg.madinahHotel}</span>
              </div>
            </div>

            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>

            <div className="price">{pkg.price}</div>
            
            <p className="disclaimer">All packages are subject to availability.</p>

            <div className="contact-buttons">
              <a href="tel:+07465683556" className="call-btn">
                <i className="fa-solid fa-phone"></i> Call Us
              </a>
              <a
                href="https://wa.me/07465683556"
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

export default FourStarPackages;
