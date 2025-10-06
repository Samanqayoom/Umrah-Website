// src/components/Services.jsx
import React from "react";
import { Helmet } from "react-helmet";
import "./Services.css";

const servicesData = [
  {
    title: "Health Services",
    description:
      "We ensure your health and safety during the journey with 24/7 medical support, hygiene guidance, and emergency assistance.",
    icon: <i className="fas fa-hospital-symbol service-icon health-icon"></i>
  },
  {
    title: "Transport Services",
    description:
      "Comfortable and timely transport to and from all holy sites with air-conditioned vehicles and reliable drivers.",
    icon: <i className="fas fa-shuttle-van service-icon transport-icon"></i>
  },
  {
    title: "Visa Assistance",
    description:
      "Our experts handle your Umrah visa process smoothly and efficiently with complete documentation support.",
    icon: <i className="fas fa-passport service-icon visa-icon"></i>
  },
  {
    title: "Ziyarat Tours",
    description:
      "Guided visits to sacred historical sites in Makkah and Madina for a spiritually uplifting experience.",
    icon: <i className="fas fa-mosque service-icon ziyarat-icon"></i>
  }
];

const Services = () => {
  return (
    <section className="services-section">
      {/* ✅ Meta Tags */}
      <Helmet>
        <title>Our Umrah Travel Services - Muqaddas Travels UK</title>
        <meta
          name="description"
          content="Muqaddas Travels provides top-notch Umrah services including health support, transport, visa assistance, and guided Ziyarat tours for a smooth journey."
        />
        <meta
          name="keywords"
          content="Umrah Services UK, Health Services, Transport Services, Visa Assistance, Ziyarat Tours, Muqaddas Travels"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="Our Umrah Travel Services - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Experience seamless Umrah travel with Muqaddas Travels: Health support, transport, visa assistance, and guided Ziyarat tours."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/#services"
        />
      </Helmet>

      <h2>Our Services</h2>
      <p className="intro">
        As one of the credible Umrah Travel Agencies in the region, we hold a
        distinctive market reputation – thanks to our exceptional Umrah travel
        services for our clients.
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
