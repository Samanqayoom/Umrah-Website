import React from 'react';
import { Helmet } from 'react-helmet';
import './FiveStarPackage2.css';
import kabah from '../assets/بفخامة الإقامة، تسطر قصة ملهمة ترويها لأجيال ممتدة….jpg';
import greenDoor from '../assets/رحلة عمرة تمنحك سكينةً وسلامًا لا ينقطعان برؤية….jpg';
import haramNight from '../assets/Showcase your hotels unique charm with stunning….jpg';
import masjidFront from '../assets/Hotel Room_ 3ten_ca.jpg';


const packages = [
  {
    id: 1,
    title: '4 Star Umrah Package - 7 Nights',
    description: [
      'Total Stay: 7 Nights',
      'Makkah: 4 Nights at Emaar Al Khalil Hotel',
      'Madinah: 3 Nights at Zaha Al Madinah Hotel',
      'Comfortable & Well-Furnished Rooms',
      'Queen Size Beds with Soft Bedding',
      'Attached Bathroom with Essential Amenities',
      'Air Conditioning & Free WiFi',
      'Daily Breakfast Buffet (Arabic & Continental)',
      'Transport Arranged for Airport Transfers & Ziyarat',
      'Friendly Local Guide Support',
      '24/7 Customer Assistance',
      'Price: £780'
    ],
    image: kabah,
  },
  {
    id: 2,
    title: '4 Star Umrah Package - 10 Nights',
    description: [
      'Total Stay: 10 Nights',
      'Makkah: 5 Nights at Worth Elite Hotel',
      'Madinah: 5 Nights at Emaar Taibah Hotel',
      'Spacious Standard Rooms with Modern Design',
      'Comfortable Bedding & Clean Environment',
      'Attached Bathroom with Shower & Toiletries',
      'Complimentary WiFi & TV',
      'Daily Breakfast Buffet Included',
      'Air-Conditioned Bus/Van for Ziyarat & Transfers',
      'Assistance from Local Team',
      'Group Ziyarat Tours',
      'Price: £880'
    ],
    image: greenDoor,
  },
  {
    id: 3,
    title: ' 4 Star Umrah Package - 12 Nights',
    description: [
      'Total Stay: 12 Nights',
      'Makkah: 6 Nights at Emaar Worth Elite Hotel',
      'Madinah: 6 Nights at Al Mokhtara Diamond Hotel',
      'Neat & Comfortable Rooms with Seating Area',
      'Twin/Triple Sharing Options',
      'Attached Bathroom with Hot Water & Amenities',
      'Free WiFi & Daily Housekeeping',
      'Breakfast Buffet with Local & International Dishes',
        'Transport for Ziyarat & Transfers',
      'Guide Support for Group Tours',
      'Assistance for Families & Elderly',
      'Price: £1060'
    ],
    image: haramNight,
  },
  {
    id: 4,
    title: '4 Star Umrah Package - 14 Nights',
    description: [
      'Total Stay: 14 Nights',
      'Makkah: 7 Nights at Emaar Andalusia Hotel',
      'Madinah: 7 Nights at Emaar Taibah Hotel',
      'Modern Rooms with Comfortable Bedding',
      'Attached Bathroom with Daily Essentials',
      'Complimentary WiFi & In-Room Facilities',
      'Breakfast Buffet with Variety of Options',
      'Transport Arranged for All Transfers & Ziyarat',
      '24/7 Local Assistance & Support',
      'Special Care for Families & Elderly',
      'Price: £1200'
    ],
    image: masjidFront,
  },
];

const FiveStarPackage2= () => {
  return (
    <section className="five-star-section">
      <Helmet>
        {/* 🔹 Basic SEO */}
        <title>5 Star Umrah Packages UK - Luxury Umrah with Muqaddas Travels</title>
        <meta
          name="description"
          content="Book premium 5 Star Umrah Packages from the UK with Muqaddas Travels. Stay in 5-star hotels near Haram in Makkah & Madinah, VIP transport, daily breakfast & guided Ziyarat."
        />
        <meta
          name="keywords"
          content="5 Star Umrah Packages UK, Luxury Umrah Packages 2025, VIP Umrah UK, Best Umrah Agency London, Umrah Travel UK"
        />
        <meta name="author" content="Muqaddas Travels" />

        {/* 🔹 Open Graph (Facebook / WhatsApp) */}
        <meta property="og:title" content="5 Star Umrah Packages UK - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Discover luxury 5 Star Umrah Packages with premium hotels, VIP transport, guided Ziyarat tours & 24/7 support. Perfect for families & groups."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/packages/5star"
        />
        <meta
          property="og:image"
          content="https://www.muqaddastravels.co.uk/og-images/5star.jpg"
        />

        {/* 🔹 Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="5 Star Umrah Packages UK - Muqaddas Travels"
        />
        <meta
          name="twitter:description"
          content="Book luxury 5 Star Umrah Packages from the UK. Hotels near Haram, VIP transfers, guided Ziyarat & more."
        />
        <meta
          name="twitter:image"
          content="https://www.muqaddastravels.co.uk/og-images/5star.jpg"
        />
      </Helmet>

      <h2>4 Star Umrah Packages</h2>
      <div className="package-list">
        {packages.map(pkg => (
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

export default FiveStarPackage2;
