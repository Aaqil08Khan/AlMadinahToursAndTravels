import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/bookpackage.css";
import "../styles/home.css";

function BookPackage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="book-hero">
        <div className="book-hero-inner">
          <h1>Complete Your Booking</h1>
          <p>
            Our team will contact you shortly to confirm availability,
            travel dates and final pricing.
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
                Our travel consultant will call you within 24 hours to
                confirm dates, room type, and finalize your package.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="book-form">
            <h2>Submit Booking Request</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />

              <div className="two">
                <input type="tel" placeholder="Phone Number" required />
                <input type="email" placeholder="Email" />
              </div>

              <div className="two">
                <input type="text" placeholder="City" />
                <select required defaultValue="">
                  <option value="" disabled>Select Package</option>
                  <option>Budget Umrah</option>
                  <option>Semi Deluxe</option>
                  <option>Luxury Premium</option>
                </select>
              </div>

              <textarea placeholder="Travel Month / Message"></textarea>

              <button type="submit">Submit Request</button>
            </form>

            {submitted && (
              <div className="success">
                ✅ Request submitted. Our team will contact you soon.
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BookPackage;