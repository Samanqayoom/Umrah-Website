// src/components/WhyChooseUs.jsx
import React from "react";
import { Helmet } from "react-helmet";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Trusted & Registered Agency",
    description:
      "We are a legally registered Umrah travel agency with years of experience and verified licenses to serve our clients with complete trust."
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Affordable Packages",
    description:
      "We offer flexible and budget-friendly Umrah packages without compromising on comfort, convenience, and services."
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description:
      "Our support team is available round-the-clock during your travel, ensuring peace of mind and instant help when you need it."
  },
  {
    icon: "fa-solid fa-plane-departure",
    title: "Tailored Services",
    description:
      "From visa to transport to hotel stay — everything is customized to match your needs, making your journey smooth and memorable."
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Experienced Team",
    description:
      "Our trained and professional staff ensures that your religious journey is managed with care, dedication, and proper guidance."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      {/* ✅ Meta Tags */}
      <Helmet>
        <title>Why Choose Muqaddas Travels - Trusted Umrah Agency UK</title>
        <meta
          name="description"
          content="Discover why pilgrims choose Muqaddas Travels for Umrah. Trusted agency, affordable packages, 24/7 support, tailored services, and an experienced team."
        />
        <meta
          name="keywords"
          content="Muqaddas Travels, Why Choose Us, Umrah Agency UK, Trusted Umrah Packages, Affordable Umrah Packages, 24/7 Support, Tailored Services"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="Why Choose Muqaddas Travels - Trusted Umrah Agency" />
        <meta
          property="og:description"
          content="We provide trusted, affordable, and customized Umrah packages with 24/7 support and experienced staff."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.muqaddastravels.co.uk/#why-choose-us"
        />
      </Helmet>

      <h2>Why Choose Us</h2>
      <p className="why-intro">
        With thousands of satisfied pilgrims, we continue to deliver excellence in every step of the Umrah journey. Here’s what sets us apart:
      </p>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            <i className={item.icon + " why-icon"}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
