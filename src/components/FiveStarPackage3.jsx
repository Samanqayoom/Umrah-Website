import React from 'react';
import './FiveStarPackage3.css';
import kabah from '../assets/VmJ5v-tC.jpg';
import greenDoor from '../assets/smJOZbHm.jpg';
import haramNight from '../assets/View of masjid nabawi from my room @ oberoi hotel.jpg';
import masjidFront from '../assets/يوفر فندق سويس المقام اطلاله مميزه.jpg';

const packages = [
  {
    id: 1,
    title: '3 Star Umrah Package - 7 Nights',
    description: [
      'Total Stay: 6 Nights',
      'Makkah: 4 Nights at Emaar Al Khalil Hotel',
      'Madinah: 3 Nights at Zaha Al Madinah Hotel',
      'Clean & Comfortable Rooms',
      'Attached Bathroom',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £700'
    ],
    image: kabah,
  },
  {
    id: 2,
    title: '3 Star Umrah Package - 10 Nights',
    description: [
      'Total Stay: 10 Nights',
      'Makkah: 5 Nights at Worth Elite Hotel',
      'Madinah: 5 Nights at Emaar Taibah Hotel',
      'Clean & Comfortable Rooms',
      'Attached Bathroom',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £800'
    ],
    image: greenDoor,
  },
  {
    id: 3,
    title: '3 Star Umrah Package - 12 Nights',
    description: [
      'Total Stay: 12 Nights',
      'Makkah: 6 Nights at Emaar Worth Elite Hotel',
      'Madinah: 6 Nights at Al Mokhtara Diamond Hotel',
      'Clean & Comfortable Rooms',
      'Attached Bathroom',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £1000'
    ],
    image: haramNight,
  },
  {
    id: 4,
    title: '3 Star Umrah Package - 14 Nights',
    description: [
      'Total Stay: 14 Nights',
      'Makkah: 7 Nights at Emaar Andalusia Hotel',
      'Madinah: 7 Nights at Emaar Taibah Hotel',
      'Clean & Comfortable Rooms',
      'Attached Bathroom',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £1103'
    ],
    image: masjidFront,
  },
];

const FiveStarPackage3 = () => {
  return (
    <section className="five-star-section">
      <h2>3 Star Umrah Packages</h2>
      <div className="package-list">
        {packages.map(pkg => (
          <div className="package-row" key={pkg.id}>
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
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveStarPackage3;
