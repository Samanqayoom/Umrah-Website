import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "fa-solid fa-shield-halved", // Trusted
    title: "Trusted & Registered Agency",
    description:
      "We are a legally registered Umrah travel agency with years of experience and verified licenses to serve our clients with complete trust."
  },
  {
    icon: "fa-solid fa-hand-holding-dollar", // Affordable
    title: "Affordable Packages",
    description:
      "We offer flexible and budget-friendly Umrah packages without compromising on comfort, convenience, and services."
  },
  {
    icon: "fa-solid fa-headset", // Support
    title: "24/7 Support",
    description:
      "Our support team is available round-the-clock during your travel, ensuring peace of mind and instant help when you need it."
  },
  {
    icon: "fa-solid fa-plane-departure", // Services
    title: "Tailored Services",
    description:
      "From visa to transport to hotel stay — everything is customized to match your needs, making your journey smooth and memorable."
  },
  {
    icon: "fa-solid fa-people-group", // Team
    title: "Experienced Team",
    description:
      "Our trained and professional staff ensures that your religious journey is managed with care, dedication, and proper guidance."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
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
