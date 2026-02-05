import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import { useState } from "react";

function Footer() {


  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallback = (e) => {
    e.preventDefault(); // prevent page reload
    setCallbackSubmitted(true); // show confirmation
    e.target.reset(); // optional: clear input

    // Optional: hide message after 3 seconds
    setTimeout(() => setCallbackSubmitted(false), 3000);
  }
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <NavLink to="/" className="logo">
            <span className="logo-wrap">
              <img src="/assets/logos/logo-en.png" alt="Al-Madinah Travels" />
            </span>
          </NavLink>
          <span>TRAVELS & TOURS</span>

          <p className="tagline">"Make Your Next Trip Your Best Trip"</p>

          <p className="desc">
            Guiding pilgrims on their sacred journey to the Holy Lands with
            devotion, care, and over 15 years of trusted experience.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/facebook-02-stroke-rounded.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/instagram-stroke-rounded.svg" alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/whatsapp-stroke-rounded.svg" alt="Whatsapp" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/youtube-stroke-rounded.svg" alt="Youtube" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/packages">Umrah Packages</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            📍 123 Travel Street, Business District<br />
            City, Country 12345
          </p>
          <p>📞 +1 234 567 890</p>
          <p>✉ info@almadinahtravels.com</p>
        </div>

        {/* CALLBACK */}
        <div className="footer-callback">
          <h4>Request Callback</h4>
          <p className="callback-text">
            Leave your number and we'll call you back within 24 hours.
          </p>

          <form onSubmit={handleCallback}>
            <input type="tel" placeholder="Your phone number" required />
            <button type="submit">Request Callback</button>
          </form>

          {callbackSubmitted && (
            <div className="confirmation-message">
              ✅ Thank you! We will call you back soon.
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Al-Madinah Travels & Tours. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;