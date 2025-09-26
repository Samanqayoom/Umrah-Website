import React, { useState } from "react";
import "./App.css";

// Sample packages data
const packages = [
  { id: 1, star: 3, duration: 7, hotelMakkah: "Emaar Al Khalil", hotelMadinah: "Zaha Al Madinah", price: "£899" },
  { id: 2, star: 4, duration: 10, hotelMakkah: "Worth Elite", hotelMadinah: "Emaar Taibah", price: "£1050" },
  { id: 3, star: 5, duration: 12, hotelMakkah: "Emaar Worth Elite", hotelMadinah: "Al Mokhtara Diamond", price: "£1150" },
  { id: 4, star: 3, duration: 14, hotelMakkah: "Emaar Andalusia", hotelMadinah: "Emaar Taibah", price: "£1149" },
];

const Package = () => {
  const [filter, setFilter] = useState({ star: null, duration: null });

  const filteredPackages = packages.filter(pkg => {
    return (filter.star ? pkg.star === filter.star : true) &&
           (filter.duration ? pkg.duration === filter.duration : true);
  });

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="dropdown">
            Umrah Packages
            <ul className="dropdown-menu">
              <li onClick={() => setFilter({ star: 3 })}>3 Star Packages</li>
              <li onClick={() => setFilter({ star: 4 })}>4 Star Packages</li>
              <li onClick={() => setFilter({ star: 5 })}>5 Star Packages</li>
              <li onClick={() => setFilter({ duration: 7 })}>7 Nights</li>
              <li onClick={() => setFilter({ duration: 10 })}>10 Nights</li>
              <li onClick={() => setFilter({})}>Show All</li>
            </ul>
          </li>
        </ul>
      </nav>

      <section className="packages-section">
        <h2>Available Umrah Packages</h2>
        <div className="package-grid">
          {filteredPackages.map(pkg => (
            <div className="package-card" key={pkg.id}>
              <h3>{pkg.star} Star - {pkg.duration} Nights</h3>
              <p>Makkah Hotel: {pkg.hotelMakkah}</p>
              <p>Madinah Hotel: {pkg.hotelMadinah}</p>
              <p className="price">{pkg.price}</p>
            </div>
          ))}
          {filteredPackages.length === 0 && <p>No packages found.</p>}
        </div>
      </section>
    </div>
  );
};

export default Package;
