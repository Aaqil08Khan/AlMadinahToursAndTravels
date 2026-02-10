import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/bookpackage.css";
import "../styles/home.css";

function BookPackage() {
  const handleMailTo = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.full_name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const subject = form.subject.value || "Contact Request";
    const message = form.message.value;

    const mailBody = `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
  `;

    const mailtoLink = `mailto:info@almadinatraveltour.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mailBody)}`;


    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="book-hero">
        <div className="book-hero-inner">
          <h1>Complete Your Booking</h1>
          <p>
            Our team will contact you shortly to confirm availability, travel
            dates and final pricing.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="book-wrapper">
        <div className="book-container">
          {/* LEFT — PACKAGE INFO */}
          <div className="book-info">
            <h2>Why Book With Us?</h2>

            <ul>
              <li>✔ 15+ years trusted Umrah experience</li>
              <li>✔ Hotels near Haram</li>
              <li>✔ Visa & flight support included</li>
              <li>✔ 24/7 assistance during journey</li>
              <li>✔ Transparent pricing</li>
            </ul>

            <div className="note-box">
              <h4>What happens after enquiry?</h4>
              <p>
                Our travel consultant will call you within 24 hours to confirm
                dates, room type, and finalize your package.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="form-card-bookingpage">
            <h3>Submit Booking Request</h3>
            <p>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleMailTo}>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 234 567 890"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <div className="two">
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select Package
                    </option>
                    <option>Budget Umrah</option>
                    <option>Semi Deluxe</option>
                    <option>Luxury Premium</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your travel plans, preferred dates, number of travelers, etc."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>
                  <img src="/assets/icons/sent-icon.svg" alt="" />
                </span>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BookPackage;
