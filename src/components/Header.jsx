import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation();

  const message = "Hello, I am interested in the Premium Umrah package";
  const url = `https://wa.me/966510139093?text=${encodeURIComponent(message)}`;

  // Close everything when the route changes
  useEffect(() => {
    setNavToggle(false);
    setMobileDropdownOpen(false);
  }, [location]);

  // Reset dropdown when main menu is closed manually
  useEffect(() => {
    if (!navToggle) {
      setMobileDropdownOpen(false);
    }
  }, [navToggle]);

  const handleDropdownToggle = (e) => {
    if (window.innerWidth <= 768) {
      if (!mobileDropdownOpen) {
        e.preventDefault();
        setMobileDropdownOpen(true);
      }
    }
  };

  const isToursActive = location.pathname.startsWith("/tours");

  return (
    <header className="site-header">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <span className="logo-wrap">
            <img src="/assets/logos/logo-en.png" alt="Al-Madina Travels" />
          </span>
        </NavLink>

        <input 
          type="checkbox" 
          id="nav-toggle" 
          className="nav-toggle" 
          checked={navToggle}
          onChange={(e) => setNavToggle(e.target.checked)}
        />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="main-nav">
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/packages">Packages</NavLink></li>

            <li className="dropdown">
              <NavLink 
                to="/tours" 
                className={`drop-trigger ${isToursActive ? 'active' : ''}`} 
                onClick={handleDropdownToggle}
              >
                Tours ▾
              </NavLink>

              <ul className={`dropdown-menu ${mobileDropdownOpen ? 'mobile-open' : ''}`}>
                <li><NavLink to="/tours/baku">Baku Tour</NavLink></li>
                <li><NavLink to="/tours/4-countries">4 Countries Tour</NavLink></li>
                <li><NavLink to="/tours/ind-vs-pak">IND Vs PAK Sri Lanka Tour</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/contact">Contact</NavLink></li>

            <li className="mobile-action-item">
              <a href={url} target="_blank" rel="noopener noreferrer" className="phone mobile-phone">
                WhatsApp Us
              </a>
            </li>
            <li className="mobile-action-item">
              <NavLink to="/book" className="btn primary">Book Now</NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="phone">
            <img src="/assets/icons/call-icon (2).svg" alt="" />
            WhatsApp Us
          </a>
          <NavLink to="/book" className="btn primary">Book Now</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;