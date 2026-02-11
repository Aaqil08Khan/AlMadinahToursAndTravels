import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/aboutus.css";

const AboutUs = () => {
  return (
    <>
      <Header />

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-eyebrow">About The Al-Madina</span>

          <h1>
            A Journey Built on <span>Faith</span> &amp; Trust
          </h1>

          <p>
            For over a decade, we have been honored to guide pilgrims with
            sincerity, care, and responsibility—ensuring every sacred journey is
            peaceful, meaningful, and well-guided.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-section">
        <div className="who-container">
          <div className="who-content">
            {/* <span className="who-label">Who We Are</span> */}
            <h2>Your Trusted Companion for Sacred Journeys</h2>

            <p>
              Established in 2009, The Al-Madina Travels & Tours has been dedicated
              to helping pilgrims experience Umrah with peace, dignity, and care.
              What began as a humble initiative has grown into a trusted name
              among thousands of pilgrims.
            </p>

            <p>
              Our purpose is rooted in a simple belief — every pilgrim deserves
              clarity, comfort, and spiritual reassurance while visiting the
              sacred lands.
            </p>

            <p>
              By blending Islamic values with thoughtful travel planning, we
              ensure that each journey becomes a meaningful spiritual milestone,
              not just a tour.
            </p>
          </div>

          <div className="who-image">
            <img
              src="/assets/images/mission_img2.jpg"
              alt="Masjid an-Nabawi"
            />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="leadership-container">
          <div className="leadership-intro">
            <span className="leadership-label">Leadership</span>
            <h2>Guided by Responsibility &amp; Faith</h2>
            <p className="leadership-subtitle">
              A message from the leadership behind The Al-Madina Travels & Tours
            </p>
          </div>

          <div className="leadership-content">
            <div className="leadership-text">
              <h3>Mudassar Islam Rana</h3>
              <span className="designation">Chief Executive Officer</span>

              <blockquote>
                Our responsibility goes far beyond travel arrangements.
                We are custodians of a sacred trust — guiding pilgrims with
                honesty, care, and deep religious responsibility at every step
                of their journey.
              </blockquote>

              <p>
                With over 15 years of experience in Islamic travel, Mr. Rana has
                personally overseen thousands of successful pilgrimages. His
                leadership is rooted in transparency, service, and unwavering
                commitment to the spiritual well-being of every pilgrim.
              </p>
            </div>

            <div className="leadership-visual">
              <div className="initials">MIR</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="values-container">
          <div className="values-header">
            <span className="values-label">Our Values</span>
            <h2>What We Stand For</h2>
            <p>
              These principles are not just words — they define how we serve,
              guide, and protect every pilgrim who travels with us.
            </p>
          </div>

          <div className="values-list">
            <div className="value-item">
              <span className="value-index">01</span>
              <div className="value-content">
                <h3>Devotion</h3>
                <p>
                  Every pilgrimage is a sacred responsibility. We approach our
                  work with reverence, humility, and deep respect for the holy
                  journey entrusted to us.
                </p>
              </div>
            </div>

            <div className="value-item">
              <span className="value-index">02</span>
              <div className="value-content">
                <h3>Integrity</h3>
                <p>
                  Transparency guides everything we do — clear communication,
                  honest pricing, and sincere care with no hidden intentions.
                </p>
              </div>
            </div>

            <div className="value-item">
              <span className="value-index">03</span>
              <div className="value-content">
                <h3>Excellence</h3>
                <p>
                  From planning to execution, we pursue excellence in every
                  detail to ensure comfort, peace of mind, and spiritual focus.
                </p>
              </div>
            </div>

            <div className="value-item">
              <span className="value-index">04</span>
              <div className="value-content">
                <h3>Community</h3>
                <p>
                  We treat every pilgrim as family — offering guidance, care,
                  and lifelong support beyond the journey itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
