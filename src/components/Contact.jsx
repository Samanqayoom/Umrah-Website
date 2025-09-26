import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Add this
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const formRef = useRef(); // Add this

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'send',     // Replace with your EmailJS service ID
      'template_g8o214k',    // Replace with your EmailJS template ID
      formRef.current,
      'lBXU1-S7r1VIvmQvJ'      // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', contactNo: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message.');
      console.error(error);
    });
  };

  return (
    <section className="contact-page">
      <h2 className="contact-heading">Contact <span>Us</span></h2>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Drop Message</h3>
          <form onSubmit={handleSubmit} ref={formRef}>
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
