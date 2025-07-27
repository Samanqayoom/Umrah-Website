import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <h2 className="contact-heading">Contact <span>Us</span></h2>

      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-form">
          <h3>Drop Message</h3>
          <form>
            <input type="text" placeholder="Full Name:" required />
            <input type="email" placeholder="Email Id:" required />
            <input type="tel" placeholder="Contact No:" required />
            <textarea rows="5" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>


          
        </div>
    
    </section>
  );
};

export default Contact;
