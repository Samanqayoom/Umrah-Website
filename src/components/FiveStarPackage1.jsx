import React from 'react';
import './FiveStarPackage1.css';
import kabah from '../assets/Al madina ❤.jpg';
import greenDoor from '../assets/65Asy5Lx.jpg';
import haramNight from '../assets/hHfG7_GU.jpg';
import masjidFront from '../assets/رحلة عمرة تمنحك سكينةً وسلامًا لا ينقطعان برؤية….jpg';

const packages = [
  {
    id: 1,
    title: '5 Star Umrah Package - 7 Nights',
    description: [
      'Total Stay: 7 Nights',
      'Makkah: 4 Nights at Emaar Al Khalil Hotel(Walking Distance from Haram)',
      'Madinah: 3 Nights at Zaha Al Madinah Hotel(Close to Masjid an-Nabawi',
       'Spacious Luxury Suites with Elegant Interior',
    'King Size Beds with Premium Bedding',
    'Attached Bathroom with High-End Amenities',
    'Air Conditioning & Modern Furniture',
    'Daily Breakfast Buffet with Multiple Cuisines',
    'Private Luxury Transport for Airport Transfers & Ziyarat',
    '24/7 Concierge & Assistance from Experienced Local Guides',
    'Personalized Ziyarat Tours (Historical & Religious Sites)',
    'Dedicated Customer Support Throughout the Journey',
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
      'Ultra-Modern Deluxe Rooms with Haram View Options',
      'Premium Bedding & 24/7 Room Service',
      'Attached Bathroom with Luxury Toiletries & Walk-in Shower',
      'Complimentary High-Speed WiFi & Smart TV',
      'Daily Breakfast Buffet with Multiple Cuisine Options',
      'VIP Transport for Airport Transfers & Ziyarat',
      'Personal Assistance from Professional Local Guides',
      'Group & Private Ziyarat Packages',
      'Dedicated Travel Coordinator for Entire Trip',
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
      'Luxury Executive Rooms with Panoramic Views',
      'Comfortable Seating Area with Elegant Design',
      'Attached Bathroom with Jacuzzi & Premium Toiletries',
      'In-Room Dining & Complimentary Refreshments',
      'Daily Breakfast Buffet with Continental & Arabic Cuisine',
      'Personal Assistance from Professional Local Guides',
       'Private A/C Luxury Vehicles for Ziyarat & Transfers',
      '24/7 Multilingual Travel Guides',
      'Complimentary Welcome Pack & Refreshments',
      'VIP Assistance for Group & Individual Needs',
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
      'Private A/C Luxury Vehicles for Ziyarat & Transfers',
      'Luxury Suites with Haram & City View Options',
      'Premium Bedding, Workspace & Lounge Area',
      'Attached Bathroom with Rain Shower & Luxury Amenities',
      'Complimentary WiFi, Smart Entertainment System',
      'Daily International Buffet Breakfast & Room Dining',
       'Full VIP Transport Service for All Transfers & Ziyarat',
      'Personalized Itinerary with Guided Ziyarat',
      '24/7 Dedicated Concierge & Customer Support',
      'Special Care & Assistance for Families & Elderly Pilgrims',
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
