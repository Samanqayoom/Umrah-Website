import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [dateType, setDateType] = useState('text');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    travelDate: '',
    month: '',
    days: '',
    persons: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnngpgbw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          fullName: '',
          contact: '',
          email: '',
          travelDate: '',
          month: '',
          days: '',
          persons: '',
        });
      } else {
        alert("❌ Something went wrong. Please try again!");
      }
    } catch (error) {
      alert("⚠️ Error: " + error.message);
    }
  };

  return (
    <section className="quote-section">
      <div className="quote-box">
        <h2>Find me a quote</h2>
        <p>Discover inclusive finest Umrah packages</p>

        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type={dateType}
            placeholder="Travel Date"
            onFocus={() => setDateType('date')}
            onBlur={(e) => e.target.value === '' && setDateType('text')}
            name="travelDate"
            required
            value={formData.travelDate}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Month"
            name="month"
            required
            value={formData.month}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Days"
            name="days"
            required
            value={formData.days}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Number of person"
            name="persons"
            required
            min="1"
            value={formData.persons}
            onChange={handleChange}
          />
          <button type="submit">Book Now</button>
        </form>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <i className="fa-solid fa-circle-check success-icon"></i>
            <h3>Booking Request Sent</h3>
            <p>
              Thank you for choosing our Umrah package. <br />
              Our representative will contact you soon to confirm your booking details.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Quote;
