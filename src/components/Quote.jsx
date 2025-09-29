import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [dateType, setDateType] = useState('text');

  return (
    <section className="quote-section">
      <div className="quote-box">
        <h2>Find me a quote</h2>
        <p>Discover inclusive finest Umrah packages</p>

        <form
          className="quote-form"
          action="https://formspree.io/f/mnngpgbw"
          method="POST"
        >
           <input type="text" placeholder="Full Name" name="fullName" required />
          <input type="text" placeholder="Contact Number" name="contact" required />
          <input type="email" placeholder="Email Address" name="email" required />
          <input
            type={dateType}
            placeholder="Travel Date"
            onFocus={() => setDateType('date')}
            onBlur={(e) => e.target.value === '' && setDateType('text')}
            name="travelDate"
            required
          />

          <input type="text" placeholder="Month" name="month" required />
          <input type="text" placeholder="Days" name="days" required />

         
          <input
            type="number"
            placeholder="Number of person"
            name="persons"
            required
            min="1"
          />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default Quote;
