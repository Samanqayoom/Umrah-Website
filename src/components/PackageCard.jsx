//import React from 'react';
//import './PackageCard.css';

const PackageCard = ({ title, duration, hotel, transport, price }) => {
  return (
    <div className="package-card">
      <h3>{title}</h3>
      <p>Duration: {duration}</p>
      <p>Hotel: {hotel}</p>
      <p>Transport: {transport}</p>
      <p className="price">{price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default PackageCard;
