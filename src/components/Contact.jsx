// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/meorarlg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({ fullName: '', email: '', contactNo: '', message: '' });
      } else {
        alert("❌ Something went wrong. Please try again!");
      }
    } catch (error) {
      alert("⚠️ Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <section className="contact-page">
      <Helmet>
        <title>Contact Us - Muqaddas Travels</title>
        <meta
          name="description"
          content="Get in touch with Muqaddas Travels for Umrah and Hajj packages. Contact us today for inquiries, bookings, or support. We are here to help you 24/7."
        />
        <meta
          name="keywords"
          content="Contact Muqaddas Travels, Umrah booking UK, Hajj packages UK, Umrah inquiries, travel support"
        />
        <meta name="author" content="Muqaddas Travels" />
        <meta property="og:title" content="Contact Us - Muqaddas Travels" />
        <meta
          property="og:description"
          content="Reach out to Muqaddas Travels for all your Hajj and Umrah travel needs. Our team is ready to assist you with packages, bookings, and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.muqaddastravels.com/contact" />
        <meta property="og:image" content="https://www.muqaddastravels.com/og-image.jpg" />
      </Helmet>

      <h2 className="contact-heading">
        Contact <span>Us</span>
      </h2>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Drop Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="contactNo"
              placeholder="Contact No"
              required
              value={formData.contactNo}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Stylish Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <i className="fa-solid fa-circle-check success-icon"></i>
            <h3>Message Sent Successfully</h3>
            <p>
              Thank you for reaching out to us. <br />
              Our team will review your message and get back to you shortly.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
