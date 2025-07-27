import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Health Services 🏥",
    description:
      "We ensure your health and safety during the journey with 24/7 medical support, hygiene guidance, and emergency assistance."
  },
  {
    title: "Transport Services 🚐",
    description:
      "Comfortable and timely transport to and from all holy sites with air-conditioned vehicles and reliable drivers."
  },
  {
    title: "Visa Assistance 🛂",
    description:
      "Our experts handle your Umrah visa process smoothly and efficiently with complete documentation support."
  },
  {
    title: "Ziyarat Tours 🕌",
    description:
      "Guided visits to sacred historical sites in Makkah and Madina for a spiritually uplifting experience."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="intro">
        As one of the credible Umrah Travel Agencies in the region, we hold a
        distinctive market reputation – thanks to our exceptional Umrah travel
        services for our clients.
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
