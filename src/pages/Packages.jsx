import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/home.css";
import "../styles/packages.css";

const Packages = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="packages-hero">
        <div className="packages-hero-content">
          <span className="hero-eyebrow">Our Packages</span>
          <h1>Umrah Packages</h1>
          <p>
            Choose from our carefully curated Umrah packages designed to make your
            pilgrimage comfortable, meaningful, and spiritually fulfilling.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="package-highlight-section">
        <div className="packages-features">
          <div className="feature-item">
            <img src="/assets/icons/flight-icon.svg" alt="Flight Included" />
            <span>Flight Included</span>
          </div>

          <div className="feature-item">
            <img src="/assets/icons/hotel-icon.svg" alt="Hotels Near Haram" />
            <span>Hotels Near Haram</span>
          </div>

          <div className="feature-item">
            <img src="/assets/icons/bus-icon.svg" alt="Transport Covered" />
            <span>Transport Covered</span>
          </div>

          <div className="feature-item">
            <img src="/assets/icons/map-icon.svg" alt="Ziyarat Tours" />
            <span>Ziyarat Tours</span>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages-section-area">
        <div className="packages-header">
          <span className="packages-eyebrow">Choose Your Journey</span>
          <h2 className="packages-title">Packages for Every Pilgrim</h2>
          <p className="packages-subtitle">
            Whether you’re seeking simplicity or added comfort, explore our thoughtfully
            designed Umrah packages crafted for every type of pilgrim.
          </p>
        </div>

        <div className="packages-grid">

          {/* CARD 1 */}
          <article className="package-article">
            <img src="/assets/images/article1.jpg" alt="Budget Umrah" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Budget Umrah</h3>
                <span className="package-duration">14 Days</span>
              </div>
              <p className="package-desc">
                A cost-effective Umrah package covering all essential services for the mindful traveler.
              </p>
              <p className="package-price">
                SAR 3,800 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>Economy class flights</li>
                <li>3-star hotel (600m from Haram)</li>
                <li>Shared room (4 persons)</li>
                <li>Full Umrah Visa support</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="package-article">
            <img src="/assets/images/article2.jpg" alt="Semi-Deluxe" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Semi-Deluxe</h3>
                <span className="package-duration">15 Days</span>
              </div>
              <p className="package-desc">
                Enhanced comfort with closer hotel proximity and better transport options.
              </p>
              <p className="package-price">
                SAR 5,800 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>Standard Airline flights</li>
                <li>4-star hotel (300m from Haram)</li>
                <li>Twin sharing rooms</li>
                <li>Ziyarat tours included</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="package-article">
            <img src="/assets/images/article3.jpg" alt="Luxury Umrah" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Luxury Premium</h3>
                <span className="package-duration">21 Days</span>
              </div>
              <p className="package-desc">
                The ultimate spiritual experience with high-end luxury at every step.
              </p>
              <p className="package-price">
                SAR 13,400 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>Business class flights</li>
                <li>5-star Fairmont / Clock Tower</li>
                <li>Private suite options</li>
                <li>VIP Private Transport</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 4 */}
          <article className="package-article">
            <img src="/assets/images/article4.jpg" alt="Family Package" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Family Special</h3>
                <span className="package-duration">21 Days</span>
              </div>
              <p className="package-desc">
                Group discounts and child-friendly amenities for a stress-free family journey.
              </p>
              <p className="package-price">
                SAR 7,500 <span>Family of 4</span>
              </p>
              <ul className="package-features">
                <li>Family Economy flights</li>
                <li>Connecting 4-star rooms</li>
                <li>Kids meal options</li>
                <li>Group bus transport</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 5 */}
          <article className="package-article">
            <img src="/assets/images/article5.jpg" alt="Ramadan Umrah" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Ramadan Umrah</h3>
                <span className="package-duration">30 Days</span>
              </div>
              <p className="package-desc">
                Spend the last 10 days of the holy month in the vicinity of the Kaaba.
              </p>
              <p className="package-price">
                SAR 11,000 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>Full month stay</li>
                <li>Daily Iftar & Suhoor buffet</li>
                <li>Walking distance hotels</li>
                <li>Special Taraweeh guidance</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 6 */}
          <article className="package-article">
            <img src="/assets/images/article6.jpg" alt="Quick Umrah" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Quick Retreat</h3>
                <span className="package-duration">7 Days</span>
              </div>
              <p className="package-desc">
                A short, focused journey for professionals with limited time off.
              </p>
              <p className="package-price">
                SAR 5,200 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>Fast-track Visa service</li>
                <li>Airport pickup & drop-off</li>
                <li>3-star accommodation</li>
                <li>Flexible flight dates</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

          {/* CARD 7 */}
          <article className="package-article">
            <img src="/assets/images/article7.jpg" alt="Senior Citizens Umrah" />
            <div className="package-body">
              <div className="package-meta">
                <h3>Golden Age Care</h3>
                <span className="package-duration">15 Days</span>
              </div>
              <p className="package-desc">
                Designed for senior citizens with medical assistance and wheelchair support.
              </p>
              <p className="package-price">
                SAR 8,000 <span>per person</span>
              </p>
              <ul className="package-features">
                <li>24/7 medical support</li>
                <li>Wheelchair accessibility</li>
                <li>Direct flights</li>
                <li>Guided ritual assistance</li>
              </ul>
              <Link to="/book" className="btn-book">
                Book Now
              </Link>
            </div>
          </article>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Packages;
