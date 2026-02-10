import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/fourcountries.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FourCountries() {
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

  const experiences = [
    {
      img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1974&auto=format&fit=crop",
      title: "Coral Island Tour & Alcazar Show – Thailand",
    },
    {
      img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop",
      title: "Chao Phraya Cruise Dinner & Bangkok City Tour",
    },
    {
      img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1974&auto=format&fit=crop",
      title: "Genting Highlands Excursion & KL Shopping Tour",
    },
    {
      img: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1974&auto=format&fit=crop",
      title: "Jakarta City Tour",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="fc-heroWrapper">
        <div className="fc-heroOverlay" />

        <div className="fc-heroContent">
          <h1 className="fc-title">4 Countries Group Tour</h1>

          <p className="fc-subline">
            Sri Lanka • Thailand • Indonesia • Malaysia
          </p>

          <p className="fc-duration">
            11 Days | 4 Countries | One Seamless Journey
          </p>

          <p className="fc-description">
            Mavensfly presents a power-packed international group tour designed
            for travelers who want <strong>maximum destinations with zero hassle.</strong>
            Celebrate the New Year season with a perfectly coordinated multi-country
            experience covering Southeast Asia’s most iconic highlights.
          </p>

          <div className="fc-pricePill">Only In SAR 80,000</div>

          <p className="fc-ctaText">Ready to Travel - Book Now!</p>

          <div className="fc-btnRow">
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

      {/* PACKAGE DETAILS */}
      <section className="pdU-wrapper">
        <div className="pdU-container">
          <div className="pdU-left">
            <h2 className="pdU-title">Package Details</h2>

            <ul className="pdU-list">
              <li><strong>Price:</strong> SAR 480,000 per person (Twin Sharing)</li>
              <li><strong>Return air ticket included</strong></li>
              <li><strong>Travel Date:</strong> 10 February</li>
              <li><strong>Last Booking Date:</strong> 30 January</li>
              <li><strong>Tour Type:</strong> Group Tour</li>
              <li>Limited seats available</li>
            </ul>


            <Link to="/book" className="pdU-btn">
              <button
                className="pdU-btn"
                 
              >
                Book Now
              </button>
            </Link>
          </div>

          <div className="pdU-right">
            <img
              src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1974&auto=format&fit=crop"
              alt="Malaysia skyline"
              className="pdU-image"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="fcExp-section">
        <div className="fcExp-container">
          <h2 className="fcExp-heading">Signature Experiences</h2>

          <div className="fcExp-grid">
            {experiences.map((item, i) => (
              <div key={i} className="fcExp-card">
                <img src={item.img} alt="" className="fcExp-img" />
                <p className="fcExp-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="mavens-contact">
        <div className="mavens-contact__container">
          <div className="mavens-contact__info">
            <h1 className="mavens-contact__title">
              Contact Mavens FLY <br /> Travel Today
            </h1>

            <p className="mavens-contact__description">
              Reach out for inquiries about Group Tour packages, visa assistance,
              and international tours.
            </p>

            <div className="mavens-contact__details">
              <p><strong>Connect:</strong> 0325 7359610</p>
              <p><strong>Email:</strong> mavensflytravelandtours@gmail.com</p>
            </div>
          </div>

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
