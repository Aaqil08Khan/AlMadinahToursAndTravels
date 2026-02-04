import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="nav-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logo-wrap">
            <img src="/assets/logos/logo-en.png" alt="Al-Madinah Travels" />
          </span>
        </NavLink>


        {/* Toggle */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/packages" className={({ isActive }) => isActive ? "active" : ""}>
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <a href="tel:+1234567890" className="phone">📞 +1 234 567 890</a>
          <a href="#" className="btn primary">Book Now</a>
        </div>

      </div>
    </header>
  );
}

export default Header;
