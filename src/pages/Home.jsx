
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";
import { useRef, useState } from "react";
import { sendEmailForm } from "../utils/sendEmail";

function Home() {

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await sendEmailForm(formRef);

    if (response.success) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current.reset();

      setTimeout(() => setIsSubmitted(false), 4000);
    } else {
      setIsSubmitting(false);
      alert("Failed to send message");
    }
  };



  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">WELCOME TO THE AL-MADINA TRAVELS & TOURS</p>
          <h1>
            Make Your Next Trip<br />
            <span>Your Best Trip</span>
          </h1>
          <p className="hero-desc">
            Experience a sacred journey to the Holy Lands with trusted guidance,
            premium services, and over 15 years of devotion to pilgrims.
          </p>

          <div className="hero-buttons">
            <Link to="/packages" className="btn primary">
              Explore Packages →
            </Link>
            <Link to="/contact" className="btn outline">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="stats-container">
          <div className="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>10,000+</h3>
            <p>Happy Pilgrims</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Satisfaction</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages-section">
        <h2 className="section-title">Our Umrah Packages</h2>
        <p className="section-subtitle">
          Carefully designed packages for a comfortable and spiritual journey
        </p>

        <div className="package-container">
          <div className="package-list">

            {/* Package Card 1 */}
            <div className="package-card">
              <div className="package-image">
                <span className="badge">Best Offer</span>
                <img
                  src="/assets/images/package1.jpg"
                  alt="Budget Umrah Package"
                />
              </div>

              <div className="package-content">
                <h3>Budget Umrah Package</h3>
                <ul className="package-details">
                  <li>🕋 15 Days Umrah</li>
                  <li>✈ Economy Class Return Flight</li>
                  <li>🏨 Hotel Near Haram</li>
                  <li>🚌 Ziyarat Included</li>
                </ul>
              </div>

              <div className="package-action">
                <p className="price">
                  Starts from <span>SAR 2,800/-</span>
                </p>
                <Link to="/contact" className="btn-book">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Package Card 2 */}
            <div className="package-card">
              <div className="package-image">
                <span className="badge">Popular</span>
                <img
                  src="/assets/images/package2.jpg"
                  alt="Economy Umrah Package"
                />
              </div>

              <div className="package-content">
                <h3>Economy Umrah Package</h3>
                <ul className="package-details">
                  <li>🕋 21 Days Umrah</li>
                  <li>✈ Economy Class Return Flight</li>
                  <li>🏨 Premium Hotel</li>
                  <li>🚌 Local Transport</li>
                </ul>
              </div>

              <div className="package-action">
                <p className="price">
                  Starts from <span>SAR 3,800/-</span>
                </p>
                <Link to="/contact" className="btn-book">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="enquiry-container">
            <div className="enquiry-card">
              <div className="enquiry-header">
                <h2>Book Package</h2>
                <span className="line"></span>
              </div>

              <form
                ref={formRef}
                className="enquiry-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />

                <div className="two-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="two-col">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                  />

                  <select name="package" defaultValue="">
                    <option value="" disabled>
                      Package Name
                    </option>
                    <option>14 Days Umrah</option>
                    <option>21 Days Umrah</option>
                    <option>28 Days Umrah</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                ></textarea>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Query..." : "Submit Query"}
                </button>

                {isSubmitted && (
                  <p className="form-success">
                    ✅ Thank you! Your message has been sent.
                  </p>
                )}

                <p className="trust-text">
                  📞 Our team will contact you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Dedicated services to make your Umrah journey peaceful and memorable
        </p>

        <div className="services-grid">
          <div
            className="service-card"
            style={{ backgroundImage: 'url("/assets/images/umrah_package.jpg")' }}
          >
            <div className="service-overlay"></div>
            <h3>Umrah Packages</h3>
            <p>Complete spiritual journeys with guided support and care.</p>
          </div>

          <div
            className="service-card"
            style={{ backgroundImage: 'url("/assets/images/visa_assistance2.jpg")' }}
          >
            <div className="service-overlay"></div>
            <h3>Visa Assistance</h3>
            <p>Fast, reliable, hassle-free visa processing support.</p>
          </div>

          <div
            className="service-card"
            style={{ backgroundImage: 'url("/assets/images/hotel.jpg")' }}
          >
            <div className="service-overlay"></div>
            <h3>Hotel Booking</h3>
            <p>Comfortable stays close to Makkah and Madinah Haram.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="why-wrapper">
          <div className="why-text">
            <span className="why-label">WHY CHOOSE US</span>
            <h2>Your Trusted Partner for Sacred Journeys</h2>
            <p className="why-desc">
              At The Al-Madina Travels & Tours, Umrah is more than travel — it is a
              deeply spiritual experience. With over 15 years of expertise, we
              ensure comfort, care, and devotion at every step.
            </p>

            <ul className="why-features">
              <li>
                <span className="icon">✔</span>
                <div>
                  <strong>Trusted & Reliable</strong>
                  <p>Licensed and certified with a proven record.</p>
                </div>
              </li>
              <li>
                <span className="icon">✔</span>
                <div>
                  <strong>Expert Guidance</strong>
                  <p>Experienced scholars and guides throughout the journey.</p>
                </div>
              </li>
              <li>
                <span className="icon">✔</span>
                <div>
                  <strong>Premium Service</strong>
                  <p>Best-in-class stay and personalized attention.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="why-visual">
            <img src="/assets/images/kaaba.jpg" alt="Sacred Journey" />
            <div className="trust-badge">
              <strong>15+</strong>
              <span>Years of Trust</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
