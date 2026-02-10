import React from "react";
import "../styles/baku.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function BakuTour() {
  return (
    <>
      <Header />
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1598275277521-1885382a3c3f?q=80&w=2070&auto=format&fit=crop"
          alt="Baku"
          className="hero-bg"
        />

        <div className="overlay" />

        <div className="hero-inner">
          <h1>Baku Group Tour</h1>

          <p className="sub">
            5 Days /4 Nights Baku Group Tour with 4 Star Accommodation
          </p>

          <p className="desc">
            Travel smarter with Mavensfly on our all-inclusive Baku Group Tour.
            From curated sightseeing to seamless logistics, this experience is
            designed for travelers who value comfort, culture, and clarity
          </p>

          <div className="price">Only In SAR 5,000</div>

          <p className="cta">Ready to Travel -Book Now!</p>

          <div className="buttons">
            <Link to="/contact" className="btn call">
              Call
            </Link>
            <a
              href="https://wa.me/923257359610"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp"
            >
              Whatsapp
            </a>

          </div>

          <p className="departure">
            Departure From Lahore on 23rd January
          </p>
        </div>
      </section>


      <section className="attractions">
        <div className="attractions-container">

          {/* LEFT */}
          <div className="attractions-left">
            <h2>Major Attractions Covered</h2>

            <ul>
              <li>Baku Full-Day City Tour</li>
              <li>Ateshgah (Fire Temple)</li>
              <li>Yanar Dag (Burning Mountain)</li>
              <li>Gobustan National Park</li>
              <li>Mud Volcanoes</li>
              <li>Gabala – Full-day scenic excursion</li>
            </ul>

             

            <Link to="/book" className="book-btn">
                Book Now
                 
              </Link>
          </div>

          {/* RIGHT */}
          <div className="attractions-right">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
              alt="Baku attraction"
            />
          </div>

        </div>
      </section>


      <section className="itinerary">
        <div className="container">
          <h2 className="title">Detailed Day-Wise Itinerary</h2>

          <div className="grid">
            {/* DAY 1 */}
            <div className="baku-day">
              <h3>Day 1 — Arrival in Baku</h3>
              <ul>
                <li>Arrival at Baku Airport</li>
                <li>Transfer to hotel and check-in</li>
                <li>Overnight stay in Baku</li>
              </ul>
            </div>

            {/* DAY 2 */}
            <div className="baku-day">
              <h3>Day 2: Baku City Tour & Surroundings</h3>
              <ul>
                <li>Guided Baku city tour</li>
                <li>Visit Ateshgah Fire Temple</li>
                <li>Explore Yanar Dag (Burning Mountain)</li>
                <li>Excursion to Gobustan & Mud Volcanoes</li>
                <li>Return to hotel</li>
              </ul>
            </div>

            {/* DAY 3 */}
            <div className="baku-day">
              <h3>Day 3: Full-Day Gabala Excursion</h3>
              <ul>
                <li>Scenic drive to Gabala</li>
                <li>Explore natural landscapes and attractions</li>
                <li>Return to Baku by evening</li>
              </ul>
            </div>

            {/* DAY 4 */}
            <div className="baku-day">
              <h3>Day 4: Free Day</h3>
              <ul>
                <li>Leisure time for shopping or personal exploration</li>
              </ul>
            </div>

            {/* DAY 5 */}
            <div className="baku-day day5">
              <h3>Day 5: Departure</h3>
              <ul>
                <li>Check-out from hotel</li>
                <li>Transfer to airport for return flight to Lahore</li>
              </ul>
            </div>
          </div>


        </div>
      </section>


      {/* TOP SECTION */}
      <section className="phs-wrapper">
        <div className="phs-container">

          {/* IMAGE */}
          <div className="phs-imageBox">
            <img
              src="../../public/assets/images/bakuskyline.jpeg"
              alt="Baku skyline"
              className="phs-image"
            />
          </div>

          {/* TEXT */}
          <div className="phs-content">
            <h3 className="phs-heading">PACKAGE HIGHLIGHTS:</h3>

            <ul className="phs-list">
              <li>Return Air Ticket</li>
              <li>Visa Assistance</li>
              <li>Stay in 4-Star Luxury Hotel (Diamond Hotel / Similar)</li>
              <li>4 Nights Comfortable Accommodation</li>
              <li>Daily Breakfast</li>
              <li>Return Airport Transfers</li>
              <li>Guided City Tours (English Speaking Guide)</li>
              <li>Air-Conditioned Transport</li>
              <li>Complete Sightseeing as per itinerary</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA BAND */}
      <section className="phs-ctaBand">
        <div className="phs-ctaInner">
          <h2 className="phs-ctaTitle">Book Now!</h2>
          <p className="phs-ctaSub">Limited Seats - Reserve now</p>

          <div className="phs-ctaButtons">
            <Link to="/contact" className="btn call">
              Call
            </Link>
            <a
              href="https://wa.me/923257359610"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </section>
      <Footer />


    </>
  );
}