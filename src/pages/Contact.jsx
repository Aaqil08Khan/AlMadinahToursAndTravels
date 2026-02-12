import "../styles/home.css";
import "../styles/contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { sendEmailForm } from "../utils/sendEmail";

const Contact = () => {

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

          <div className="contact-info-item">
            <div className="icon-box">
              <img src="/assets/icons/map-icon-contact.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Office Address</h4>
              <p>
                Awais Street Architect Society Main Jan Muhammad Road Railwind Road <br />
                Lahore, Pakistan 53720
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <img src="/assets/icons/call-icon.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Phone Number</h4>
              <p>+966 51 013 9093<br />+92 334 713 9093</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <img src="/assets/icons/mail-icon.svg" alt="" />
            </div>
            <div className="info-text">
              <h4>Email Address</h4>
              <p>info@almadinatraveltour.com<br />reservation@almadinatraveltour.com</p>
            </div>
          </div>

          <div className="contact-info-item">
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

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input type="text" name="name" placeholder="Your full name" required />
              </div>

              <div className="form-group">
                <label>Phone Number <span>*</span></label>
                <input type="text" name="phone" placeholder="+1 234 567 890" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address <span>*</span></label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="How can we help you?" />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="form-success">
                ✅ Thank you! Your message has been sent.
              </p>
            )}
          </form>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default Contact;
