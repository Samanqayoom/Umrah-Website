import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>🕌 Umrah Travels</h2>
          <p>📍 Office #12, Zamzam Mall, Lahore</p>
          <p>📞 020 38219282</p>
          <p>✉️ umrah@muqaddastravels.co.uk</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>📦 Umrah Packages</li>
            <li>🧾 Terms & Conditions</li>
            <li>📄 Privacy Policy</li>
            <li>📞 Contact Us</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>👍 Facebook | 📸 Instagram | 📱 WhatsApp</p>
          <p>🎥 YouTube</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Muqaddas Travels. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
