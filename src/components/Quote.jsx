import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [dateType, setDateType] = useState('text');

  return (
    <section className="quote-section">
      <div className="quote-box">
        <h2>Find me a quote</h2>
        <p>Discover inclusive finest Umrah packages</p>

        <form className="quote-form">
          <input
            type={dateType}
            placeholder="Travel Date"
            onFocus={() => setDateType('date')}
            onBlur={(e) => e.target.value === '' && setDateType('text')}
            required
          />
          <input type="text" placeholder="Month" required />
          <input type="text" placeholder="Days" required />

          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Contact Number" required />
          <input type="email" placeholder="Email Address" required />
          <input type="number" placeholder="Number of person" required min="1" />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default Quote;
