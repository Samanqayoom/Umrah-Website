import React from 'react';
import './FiveStarPackages.css';
import kabah from '../assets/al.jpg';
import greenDoor from '../assets/mosque.jpg';
import haramNight from '../assets/os.jpg';
import masjidFront from '../assets/R.jpg';

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

const FiveStarPackages = () => {
  return (
    <section className="three-star-section">
      <h2>5 Star Umrah Packages</h2>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.nights} />
            <h3>{pkg.nights} {pkg.star} Umrah Package</h3>
            <div className="hotel-info">
              <div>
                <img src="/makkah-icon.png" alt="Makkah" />
                <p>🕋Makkah({pkg.makkahNights})</p>
                <span>{pkg.makkahHotel}</span>
              </div>
              <div>
                <img src="/madinah-icon.png" alt="Madinah" />
                <p>🕌Madinah({pkg.madinahNights})</p>
                <span>{pkg.madinahHotel}</span>
              </div>
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="price">{pkg.price}</div>
            
            <p className="disclaimer">All packages are subject to availability.</p>

            <div className="contact-buttons">
              <a href="tel:+920123456789" className="call-btn">📞 Call Us</a>
              <a
                href="https://wa.me/920123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                💬 WhatsApp
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveStarPackages;