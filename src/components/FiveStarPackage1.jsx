import React from 'react';
import './FiveStarPackage1.css';
import kabah from '../assets/al.jpg';
import greenDoor from '../assets/mosque.jpg';
import haramNight from '../assets/os.jpg';
import masjidFront from '../assets/R.jpg';

const packages = [
  {
    id: 1,
    title: '5 Star Umrah Package - 7 Nights',
    description: [
      'Total Stay: 7 Nights',
      'Makkah: 4 Nights at Emaar Al Khalil Hotel',
      'Madinah: 3 Nights at Zaha Al Madinah Hotel',
      'Luxury & Comfortable Rooms',
      'Attached Bathroom with Premium Amenities',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £960'
    ],
    image: kabah,
  },
  {
    id: 2,
    title: '5 Star Umrah Package - 10 Nights',
    description: [
      'Total Stay: 10 Nights',
      'Makkah: 5 Nights at Worth Elite Hotel',
      'Madinah: 5 Nights at Emaar Taibah Hotel',
      'Luxury & Comfortable Rooms',
      'Attached Bathroom with Premium Amenities',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £1100'
    ],
    image: greenDoor,
  },
  {
    id: 3,
    title: '5 Star Umrah Package - 12 Nights',
    description: [
      'Total Stay: 12 Nights',
      'Makkah: 6 Nights at Emaar Worth Elite Hotel',
      'Madinah: 6 Nights at Al Mokhtara Diamond Hotel',
      'Luxury & Comfortable Rooms',
      'Attached Bathroom with Premium Amenities',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £1150'
    ],
    image: haramNight,
  },
  {
    id: 4,
    title: '5 Star Umrah Package - 14 Nights',
    description: [
      'Total Stay: 14 Nights',
      'Makkah: 7 Nights at Emaar Andalusia Hotel',
      'Madinah: 7 Nights at Emaar Taibah Hotel',
      'Luxury & Comfortable Rooms',
      'Attached Bathroom with Premium Amenities',
      'Daily Breakfast Included',
      'All Transport & Ziyarat Arranged',
      'Assistance from Local Guides',
      'Price: £1204'
    ],
    image: masjidFront,
  },
];

const FiveStarPackage1 = () => {
  return (
    <section className="five-star-section">
      <h2>5 Star Umrah Packages</h2>
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
                <a href="tel:07465683556" className="call-btn">
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
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveStarPackage1;
