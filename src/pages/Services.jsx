import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/services.css";

const Services = () => {
  return (
    <>
      <Header />

      {/* SERVICES HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="hero-tag">WHAT WE OFFER</span>
          <h1>Services Designed for a Peaceful Journey</h1>
          <p>
            From planning to return, we manage every detail of your pilgrimage so
            you can focus entirely on your spiritual purpose.
          </p>

          <a href="#services" className="btn primary">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="service-highlights">
        <div className="highlight">
          <span>✔</span>
          Licensed &amp; Certified
        </div>
        <div className="highlight">
          <span>⏱</span>
          On-Time Coordination
        </div>
        <div className="highlight">
          <span>★</span>
          Premium Quality Care
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions" id="services">
        <div className="solutions-header">
          <span className="solutions-tag">COMPLETE SOLUTIONS</span>
          <h2>Everything You Need for Your Journey</h2>
          <p>
            From the moment you decide to embark on your pilgrimage until you
            return home, we're with you every step of the way.
          </p>
        </div>

        <div className="solutions-cards">
          {/* CARD 1 */}
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/icons/flight-round-icon (3).svg" alt="" srcset="" />
            </div>
            <h3>Umrah Packages</h3>
            <p>
              Comprehensive Umrah packages designed to meet every pilgrim's
              needs and budget. From budget-friendly options to premium luxury
              experiences, we have the perfect package for you.
            </p>
            <ul>
              <li>Multiple package tiers (Budget, Economy, Deluxe, VIP)</li>
              <li>Flexible duration (7, 14, 21, 28 days)</li>
              <li>Group and private options available</li>
              <li>All-inclusive packages with no hidden costs</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/icons/visa-assistance-icon.svg" alt="" srcset="" />
            </div>
            <h3>Visa Assistance</h3>
            <p>
              Expert visa processing services to ensure your application is
              handled smoothly and efficiently. We guide you through every
              step of the documentation process.
            </p>
            <ul>
              <li>Complete documentation guidance</li>
              <li>Fast-track visa processing</li>
              <li>Application tracking and updates</li>
              <li>Visa extension assistance if needed</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/icons/hotel-icon.svg" alt="" srcset="" />
            </div>
            <h3>Hotel Booking</h3>
            <p>
              Premium hotel accommodations near Haram in both Makkah and
              Madinah. We partner with the finest hotels to ensure your comfort
              during your sacred journey.
            </p>
            <ul>
              <li>Hotels within walking distance of Haram</li>
              <li>3-star to 5-star hotel options</li>
              <li>Room upgrades upon availability</li>
              <li>Special request accommodation</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="solution-card">
            <div className="icon-box">

              <img src="/assets/icons/bus-icon.svg" alt="" srcset="" />
            </div>
            <h3>Transport Services</h3>
            <p>
              Comfortable and reliable transportation throughout your journey.
              From airport transfers to inter-city travel, we ensure smooth
              mobility.
            </p>
            <ul>
              <li>Airport pickup and drop-off</li>
              <li>Air-conditioned vehicles</li>
              <li>Private and group transport options</li>
              <li>24/7 transport availability</li>
            </ul>
          </div>

          {/* CARD 5 */}
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/icons/map-icon-contact.svg" alt="" srcset="" />
            </div>
            <h3>Ziyarat Tours</h3>
            <p>
              Guided visits to the most sacred historical sites in Makkah and
              Madinah. Our knowledgeable guides provide spiritual insights at
              every location.
            </p>
            <ul>
              <li>All major Ziyarat sites covered</li>
              <li>Experienced religious guides</li>
              <li>Comfortable transport included</li>
              <li>Flexible scheduling options</li>
            </ul>
          </div>

          {/* CARD 6 */}
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/icons/customer-support-icon.svg" alt="" srcset="" />
            </div>
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock customer support to assist you throughout your
              pilgrimage. Our dedicated team is always available to help.
            </p>
            <ul>
              <li>Multilingual support team</li>
              <li>Emergency assistance</li>
              <li>WhatsApp support available</li>
              <li>On-ground representatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <span className="process-eyebrow">How it works</span>
          <h2 className="process-title">A Simple Booking Journey</h2>
          <p className="process-subtitle">
            From your first enquiry to your sacred journey — we guide you every
            step of the way.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <span className="step-number">01</span>
            <h3>Enquire</h3>
            <p>Share your travel dates, group size, and preferences with us.</p>
          </div>

          <div className="process-step">
            <span className="step-number">02</span>
            <h3>Customize</h3>
            <p>We craft a personalized Umrah package tailored to your needs.</p>
          </div>

          <div className="process-step">
            <span className="step-number">03</span>
            <h3>Book</h3>
            <p>Confirm your package with transparent pricing and easy payments.</p>
          </div>

          <div className="process-step">
            <span className="step-number">04</span>
            <h3>Travel</h3>
            <p>
              Begin your blessed journey with full guidance and on-ground
              support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="custom-cta">
        <div className="custom-cta-inner">
          <div className="cta-content">
            <h2>Looking for a Custom Umrah Package?</h2>
            <p>
              Every pilgrim’s journey is unique. Share your requirements with
              us, and we’ll design a personalized experience that fits your
              needs perfectly.
            </p>
          </div>

          <div className="cta-actions">
            <a href="#" className="btn-primary">
              Get Free Consultation <span aria-hidden="true">→</span>
            </a>
            <a href="#" className="btn-outline">
              Explore Packages
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
