import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/indvspak.css";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function IndVsPak() {


    // FORM STATE
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      // simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 2000);
    };
  return (
    < >
      <Header />

      <section className="cricket-hero">
        <div className="cricket-hero__overlay"></div>

        <div className="cricket-hero__content">
          <h1 className="cricket-hero__title">
            Pakistan vs India <br />
            World Cup In Sri Lanka
          </h1>

          <p className="cricket-hero__subtitle">
            Watch the biggest cricket live in Sri Lanka — Flights, match tickets,
            hotels & transfers handled end-to-end.
          </p>

          <div className="cricket-hero__price">
            Only In SAR 350,000
          </div>

          <p className="cricket-hero__cta-text">
            Ready to Travel – Book Now!
          </p>

          <div className="cricket-hero__buttons">
            <Link to="/contact" className="btn call">
              Call
            </Link>

            <a
              href="https://wa.me/923257359610"
              target="_blank"
              rel="noreferrer"
              className="cricket-btn cricket-btn--whatsapp"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </section>


      <section className="pkg-overview">
      <div className="pkg-overview__container">

        {/* Left Content */}
        <div className="pkg-overview__content">
          <h2 className="pkg-overview__title">Package Overview</h2>

          <ul className="pkg-overview__list">
            <li>Pakistan PK vs India in World Cup Match</li>
            <li>12 – 16 February</li>
            <li>Sri Lanka + Dubai Stopover</li>
            <li>Ramada by Wyndham Colombo Hotel</li>
            <li>Official Match Tickets Included</li>
            <li>Carefully curated Sri Lanka travel experience</li>
            <li>Dubai stopover with dinner & city tour</li>
            <li>Zero logistics stress — we handle everything</li>
          </ul>

           


            <Link to="/book" className="pdU-btn">
              <button
                className="pdU-btn"
                 
              >
                Book Now
              </button>
            </Link>
        </div>

        {/* Right Image */}
        <div className="pkg-overview__image-wrapper">
          <img
            src="../../public/assets/images/cricket.webp"
            alt="Cricket Stadium"
            className="pkg-overview__image"
          />
        </div>

      </div>
    </section>



    <section className="itinerary">
      <div className="itinerary__container">

        <h2 className="itinerary__title">
          Detailed Day-Wise Itinerary
        </h2>

        <div className="itinerary__grid">

          <div className="itinerary__card">
            <h3 className="itinerary__day">
              13 FEB | ARRIVAL – KANDY
            </h3>
            <ul className="itinerary__list">
              <li>Arrival in Sri Lanka</li>
              <li>Transfer to Kandy</li>
              <li>En-route Kandy City Tour</li>
              <li>Overnight stay in Kandy</li>
            </ul>
          </div>

          <div className="itinerary__card">
            <h3 className="itinerary__day">
              14 FEB | KANDY → COLOMBO
            </h3>
            <ul className="itinerary__list">
              <li>Transfer to Colombo</li>
              <li>En-route Colombo City Tour</li>
              <li>Overnight stay in Colombo</li>
            </ul>
          </div>

          <div className="itinerary__card">
            <h3 className="itinerary__day">
              15 FEB | MATCH DAY
            </h3>
            <ul className="itinerary__list">
              <li>Transfer from hotel to stadium</li>
              <li><strong>PAKISTAN vs INDIA Cricket Match</strong></li>
              <li>Return transfer</li>
              <li>Overnight stay in Colombo</li>
            </ul>
          </div>

          <div className="itinerary__card">
            <h3 className="itinerary__day">
              16 FEB | DEPARTURE – DUBAI STOPOVER
            </h3>
            <ul className="itinerary__list">
              <li>Airport transfer</li>
              <li>Flight to Dubai</li>
              <li>Dubai city tour & dinner</li>
            </ul>
          </div>

        </div>

        

      </div>
    </section>


    <section className="mavens-contact" id="contact">
        <div className="mavens-contact__container">

          {/* Left Content */}
          <div className="mavens-contact__info">
            <h1 className="mavens-contact__title">
              Contact Al Madina<br /> Travel Today
            </h1>

            <p className="mavens-contact__description">
              Reach out for inquiries about Group Tour packages, visa assistance,
              and international tours. We're here to help you plan your spiritual journey.
            </p>

            <div className="mavens-contact__details">
              <div className="mavens-contact__detail">
                <span className="mavens-contact__label">Connect: </span>
                <span className="mavens-contact__value">0325 7359610</span>
              </div>

              <div className="mavens-contact__detail">
                <span className="mavens-contact__label">Email: </span>
                <span className="mavens-contact__value">
                  almadinatravels@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="mavens-contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="mavens-form__input"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              className="mavens-form__input"
              placeholder="Your Email"
              required
            />

            <textarea
              className="mavens-form__textarea"
              placeholder="Your Message"
              rows="5"
              required
            />

            <button
              type="submit"
              className="mavens-form__button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Your Inquiry Now"}
            </button>

            {isSubmitted && (
              <p className="mavens-form__success">
                ✅ Thank you! We’ll contact you shortly.
              </p>
            )}
          </form>

        </div>
      </section>
      <Footer />
    </>
  );
}