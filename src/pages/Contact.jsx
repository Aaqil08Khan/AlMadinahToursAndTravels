import "../styles/home.css";
import "../styles/contact.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="sub-heading">Get in Touch</span>
          <h1 className="main-heading">Contact Us</h1>
          <p className="description">
            Have questions about our services? Ready to book your Umrah journey?
            We're <br /> here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="contact-container">

        {/* INFO */}
        <div className="contact-info">
          <div className="info-header">
            <span>Contact Information</span>
            <h2>Let's Start Your Journey</h2>
            <p>
              Whether you have questions about our packages, need assistance
              with booking, or want to discuss a custom travel plan, our team
              is ready to assist you.
            </p>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <img src="/assets/icons/map-icon-contact.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Office Address</h4>
              <p>
                123 Travel Street, Business District<br />
                City, Country 12345
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <img src="/assets/icons/call-icon.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Phone Number</h4>
              <p>+1 234 567 890<br />+1 234 567 891</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <img src="/assets/icons/mail-icon.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Email Address</h4>
              <p>info@almadinahtravels.com<br />bookings@almadinahtravels.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <img src="/assets/icons/clock-icon.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Working Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="form-card">
          <h3>Send Us a Message</h3>
          <p>Fill out the form below and we'll get back to you within 24 hours.</p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Phone Number <span>*</span></label>
                <input type="text" placeholder="+1 234 567 890" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address <span>*</span></label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea
                rows="5"
                placeholder="Tell us about your travel plans, preferred dates, number of travelers, etc."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>
                <img src="/assets/icons/sent-icon.svg" alt="" />
              </span>
              Send Message
            </button>
          </form>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Contact;
