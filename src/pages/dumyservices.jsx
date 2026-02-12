import Header from "../components/Header";

import Footer from "../components/Footer";

import { useState } from "react";

import TransportRatesSection from '../components/TransportRateSection';

import { Link } from "react-router-dom";

import { hotelsData } from "../data/hotelData";



import "../styles/home.css";

import "../styles/services.css";



const Services = () => {



    const [hoveredCard, setHoveredCard] = useState(null);



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



            {/* HOTEL PRICING TABLE */}

            <section className="hotel-table-section" id="services">

                <div className="solutions-header">

                    <span className="solutions-tag">MAKKAH HOTELS</span>

                    <h2>Makkah Hotel Rates (Dummy Pricing)</h2>

                    <p>

                        Sample pricing structure for Umrah hotels near Haram. Final prices depend

                        on season, availability, and room category.

                    </p>

                </div>



                <div className="table-wrapper">

                    <table className="hotel-table">

                        <thead>

                            <tr>

                                <th>Hotel</th>

                                <th>Period</th>

                                <th>Distance from Haram</th>

                                <th>Sharing</th>

                                <th>Double</th>

                                <th>Triple</th>

                                <th>Quad</th>

                                <th>Quint</th>

                                <th>Meals</th>

                            </tr>

                        </thead>



                        <tbody>

                            <tr>

                                <td>Swissotel Makkah</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>150m</td>

                                <td>450 SAR</td>

                                <td>520 SAR</td>

                                <td>480 SAR</td>

                                <td>430 SAR</td>

                                <td>400 SAR</td>

                                <td>Breakfast Included</td>

                            </tr>



                            <tr>

                                <td>Pullman ZamZam Makkah</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>200m</td>

                                <td>420 SAR</td>

                                <td>500 SAR</td>

                                <td>460 SAR</td>

                                <td>410 SAR</td>

                                <td>380 SAR</td>

                                <td>Half Board</td>

                            </tr>



                            <tr>

                                <td>Hilton Suites Makkah</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>300m</td>

                                <td>390 SAR</td>

                                <td>470 SAR</td>

                                <td>430 SAR</td>

                                <td>390 SAR</td>

                                <td>350 SAR</td>

                                <td>Room Only</td>

                            </tr>



                            <tr>

                                <td>Elaf Kinda Hotel</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>350m</td>

                                <td>320 SAR</td>

                                <td>390 SAR</td>

                                <td>350 SAR</td>

                                <td>310 SAR</td>

                                <td>280 SAR</td>

                                <td>Breakfast Included</td>

                            </tr>



                            <tr>

                                <td>Al Kiswah Towers</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>900m</td>

                                <td>220 SAR</td>

                                <td>290 SAR</td>

                                <td>260 SAR</td>

                                <td>230 SAR</td>

                                <td>200 SAR</td>

                                <td>Room Only</td>

                            </tr>



                            <tr>

                                <td>Voco Makkah</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>1200m</td>

                                <td>250 SAR</td>

                                <td>320 SAR</td>

                                <td>290 SAR</td>

                                <td>260 SAR</td>

                                <td>230 SAR</td>

                                <td>Half Board</td>

                            </tr>



                            <tr>

                                <td>Jabal Omar Marriott</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>400m</td>

                                <td>410 SAR</td>

                                <td>480 SAR</td>

                                <td>440 SAR</td>

                                <td>400 SAR</td>

                                <td>360 SAR</td>

                                <td>Full Board</td>

                            </tr>



                            <tr>

                                <td>Anjum Hotel Makkah</td>

                                <td>20 Mar – 17 Apr</td>

                                <td>350m</td>

                                <td>370 SAR</td>

                                <td>440 SAR</td>

                                <td>400 SAR</td>

                                <td>360 SAR</td>

                                <td>320 SAR</td>

                                <td>Breakfast Included</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>



            {/* HOTEL RATES */}

            <section className="hotel-rates-section">

                <div className="hotel-rates-container">

                    {/* Header */}

                    <div className="hotel-rates-header">

                        <span className="hotel-rates-tag">PREMIUM ACCOMMODATIONS</span>

                        <h2 className="hotel-rates-title">Hotels Rates</h2>

                        <p className="hotel-rates-subtitle">3-star, 4-star, 5-star Hotels Available</p>

                        <p className="hotel-rates-description">

                            Choose budget to premium stays with instant booking and hotel vouchers.

                        </p>

                    </div>



                    {/* Hotels Grid */}

                    <div className="hotels-grid">

                        {hotelsData.map((hotel) => (

                            <div

                                key={hotel.id}

                                className="hotel-card"

                                onMouseEnter={() => setHoveredCard(hotel.id)}

                                onMouseLeave={() => setHoveredCard(null)}

                            >

                                <div className="hotel-image-wrapper">

                                    <img

                                        src={hotel.image}

                                        alt={hotel.name}

                                        className="hotel-image"

                                    />

                                    <div className="hotel-overlay"></div>

                                    <div className="hotel-rating">

                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">

                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />

                                        </svg>

                                        {hotel.rating} Star

                                    </div>

                                </div>



                                <div className="hotel-content">

                                    <h3 className="hotel-name">{hotel.name}</h3>



                                    <div className="hotel-location">

                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>

                                            <circle cx="12" cy="10" r="3"></circle>

                                        </svg>

                                        {hotel.location}

                                    </div>



                                    <div className="hotel-amenities">

                                        {hotel.amenities.map((amenity, index) => (

                                            <span key={index} className="amenity-tag">{amenity}</span>

                                        ))}

                                    </div>



                                    <div className="hotel-divider"></div>



                                    <div className="hotel-cta">

                                        <Link

                                            to={`/hotel/${hotel.slug}`}

                                            className="view-details-btn"

                                        >

                                            View Details

                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>



                    {/* Book Now Button */}

                    <div className="book-now-section">

                        <Link to="/book" className="book-now-btn">

                            Book Now

                            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">

                                <path d="M5 12h14M12 5l7 7-7 7" />

                            </svg>

                        </Link>

                    </div>

                </div>

            </section>



            {/* TRANSPORT RATES TABLE */}

            <section>

                <TransportRatesSection />

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

                            Every pilgrim's journey is unique. Share your requirements with

                            us, and we'll design a personalized experience that fits your

                            needs perfectly.

                        </p>

                    </div>



                    <div className="cta-actions">

                        <a href="contact" className="btn-primary">

                            Get Free Consultation <span aria-hidden="true">→</span>

                        </a>

                        <a href="packages" className="btn-outline">

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

















<section className="hotel-rates-section">
        <div className="hotel-rates-container">
          <div className="hotel-rates-header">
            <span className="hotel-rates-tag">PREMIUM ACCOMMODATIONS</span>
            <h2 className="hotel-rates-title">Featured Luxury Stays</h2>
            <p className="hotel-rates-subtitle">Exclusive 5-Star Experience</p>
          </div>

          <div className="hotels-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            padding: '20px 0'
          }}>
            {allHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="hotel-card"
                style={{ fontSize: '0.9rem' }} // Slightly shrinking font to adjust scale
                onMouseEnter={() => setHoveredCard(hotel.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="hotel-image-wrapper" style={{ height: '200px' }}>
                  <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                  <div className="hotel-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {hotel.rating} Star
                  </div>
                </div>

                <div className="hotel-content" style={{ padding: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 className="hotel-name" style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{hotel.name}</h3>
                  </div>

                  <div className="hotel-location" style={{ marginBottom: '10px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {hotel.location} • From <span style={{ fontWeight: 'bold', color: '#b22222' }}>{hotel.priceFrom} SAR</span>
                  </div>

                  <div className="hotel-amenities" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {hotel.amenities.map((amenity, index) => (
                      <span key={index} className="amenity-tag" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>{amenity}</span>
                    ))}
                  </div>

                  <div className="hotel-cta" style={{ marginTop: '15px' }}>
                    <Link to={`/hotel/${hotel.slug}`} className="view-details-btn" style={{ padding: '10px', fontSize: '0.85rem' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="book-now-section">
            <Link to="/book" className="book-now-btn">
              Book Your Pilgrimage
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>