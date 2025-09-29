import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-page">
      <h2 className="contact-heading">Contact <span>Us</span></h2>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Drop Message</h3>

          {/* Formspree integration */}
          <form
            action="https://formspree.io/f/meorarlg"
            method="POST"
          >
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
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
