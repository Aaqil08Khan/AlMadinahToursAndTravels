import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/tours.css";
export default function Tours() {
  return (
    <div className="tours-page">
      <Header />
      {/* HERO */}
      <section className="tours-hero">
        <div className="tours-hero-content">
          <h1>Explore Our International Tours</h1>
          <p>
            Handcrafted travel experiences designed for comfort, spirituality,
            and unforgettable memories.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="tours-intro container">
        <h2>Our Featured Tours</h2>
        <p>
          Discover premium international travel packages with carefully curated
          itineraries, luxury stays, guided tours, and seamless travel
          arrangements. Whether you're traveling for leisure or events, we have
          something special for you.
        </p>
      </section>

      {/* TOUR CARDS */}
      <section className="tours-grid container">

        <div className="tour-card">
          <div className="tour-img baku"></div>
          <h3>Baku Tour</h3>
          <p>Explore Azerbaijan’s modern beauty and historic charm.</p>
          <Link to="/tours/baku" className="tour-btn">View Details</Link>
        </div>

        <div className="tour-card">
          <div className="tour-img countries"></div>
          <h3>4 Countries Tour</h3>
          <p>Visit multiple countries in one unforgettable journey.</p>
          <Link to="/tours/4-countries" className="tour-btn">View Details</Link>
        </div>

        <div className="tour-card">
          <div className="tour-img cricket"></div>
          <h3>IND vs PAK Sri Lanka</h3>
          <p>Watch the biggest cricket rivalry live in Sri Lanka.</p>
          <Link to="/tours/ind-vs-pak" className="tour-btn">View Details</Link>
        </div>

      </section>

      {/* CTA */}
      <section className="tours-cta">
        <div className="container">
          <h2>Need Help Choosing a Tour?</h2>
          <p>Our travel experts will guide you to the perfect package.</p>
          <Link to="/contact">
            <button className="cta-btn">Contact Us</button>
          </Link>
        </div>
      </section>

      <Footer />

    </div>
  );
}