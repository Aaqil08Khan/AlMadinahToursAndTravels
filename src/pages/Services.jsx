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

  // Consolidated Hotel Data for both Table and Cards
  const makkahHotels = [
    { id: 1, name: "Fairmont Makkah Clock Royal Tower", slug: "fairmont-makkah", period: "20 Mar – 17 Apr", distance: "50m", sharing: "550", double: "650", triple: "600", quad: "550", quint: "500", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "650", amenities: ["Free WiFi", "Spa", "Haram View", "Fine Dining"], image: "/assets/images/fairmount-hotel.jpg" },
    { id: 2, name: "Conrad Makkah", slug: "conrad-makkah", period: "20 Mar – 17 Apr", distance: "100m", sharing: "500", double: "580", triple: "540", quad: "500", quint: "460", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "580", amenities: ["Free WiFi", "Restaurant", "24/7 Service", "Luxury Suites"], image: "/assets/images/conrad-hotel.webp" },
    { id: 3, name: "Hyatt Regency Makkah", slug: "hyatt-makkah", period: "20 Mar – 17 Apr", distance: "150m", sharing: "480", double: "550", triple: "510", quad: "470", quint: "430", meals: "Half Board", rating: 5, location: "Makkah", priceFrom: "550", amenities: ["Free WiFi", "Gym", "Close to Haram", "Executive Lounge"], image: "/assets/images/hyatt-hotel.jpg" },
    { id: 4, name: "Hilton Convention Makkah", slug: "hilton-convention", period: "20 Mar – 17 Apr", distance: "300m", sharing: "420", double: "500", triple: "460", quad: "420", quint: "380", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "500", amenities: ["Free WiFi", "Parking", "Restaurant", "Business Center"], image: "/assets/images/hilton-makkah.jpg" },
    { id: 5, name: "Raffles Makkah Palace", slug: "raffles-makkah", period: "20 Mar – 17 Apr", distance: "50m", sharing: "700", double: "850", triple: "800", quad: "750", quint: "700", meals: "Full Board", rating: 5, location: "Makkah", priceFrom: "850", amenities: ["Butler Service", "Spa", "Direct Access", "VIP Lounge"], image: "/assets/images/raffles-hotel.jpg" },
  ];

  const madinahHotels = [
    { id: 6, name: "Anwar Al Madinah Movenpick", slug: "movenpick-madinah", period: "20 Mar – 17 Apr", distance: "50m", sharing: "450", double: "520", triple: "480", quad: "440", quint: "400", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "520", amenities: ["Free WiFi", "Shopping Mall", "Near Gate 25", "Restaurant"], image: "/assets/images/anwar-hotel.jpg" },
    { id: 7, name: "Pullman Zamzam Madina", slug: "pullman-madinah", period: "20 Mar – 17 Apr", distance: "150m", sharing: "400", double: "480", triple: "440", quad: "400", quint: "360", meals: "Half Board", rating: 5, location: "Madinah", priceFrom: "480", amenities: ["Free WiFi", "City View", "Tea Lounge", "Breakfast"], image: "/assets/images/pullman-hotel.jpg" },
    { id: 8, name: "Madinah Hilton Hotel", slug: "hilton-madinah", period: "20 Mar – 17 Apr", distance: "100m", sharing: "430", double: "510", triple: "470", quad: "430", quint: "390", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "510", amenities: ["Free WiFi", "Haram View", "Executive Rooms", "Parking"], image: "/assets/images/madinah-hilton-hotel.avif" },
    { id: 9, name: "Shaza Al Madina", slug: "shaza-madinah", period: "20 Mar – 17 Apr", distance: "150m", sharing: "410", double: "490", triple: "450", quad: "410", quint: "370", meals: "Room Only", rating: 5, location: "Madinah", priceFrom: "490", amenities: ["Boutique Style", "Fine Dining", "Free WiFi", "Wellness Center"], image: "/assets/images/sheza-hotel.jpg" },
    { id: 10, name: "Dar Al Taqwa Hotel", slug: "dar-al-taqwa", period: "20 Mar – 17 Apr", distance: "20m", sharing: "520", double: "620", triple: "580", quad: "540", quint: "500", meals: "Full Board", rating: 5, location: "Madinah", priceFrom: "620", amenities: ["Free WiFi", "Front Row", "Luxury Decor", "VIP Service"], image: "/assets/images/dar-al-taqwa-hotel.jpg" },
  ];

  const allHotels = [...makkahHotels, ...madinahHotels];

  const HotelRow = ({ hotel }) => (
    <tr>
      <td>{hotel.name}</td>
      <td>{hotel.period}</td>
      <td>{hotel.distance}</td>
      <td>{hotel.sharing} SAR</td>
      <td style={{ color: '#d32f2f', fontWeight: 'bold' }}>{hotel.double} SAR</td>
      <td style={{ color: '#d32f2f', fontWeight: 'bold' }}>{hotel.triple} SAR</td>
      <td style={{ color: '#d32f2f', fontWeight: 'bold' }}>{hotel.quad} SAR</td>
      <td style={{ color: '#d32f2f', fontWeight: 'bold' }}>{hotel.quint} SAR</td>
      <td>{hotel.meals}</td>
    </tr>
  );

  return (
    <>
      <Header />

      <section className="services-hero">
        <div className="services-hero-content">
          <span className="hero-tag">WHAT WE OFFER</span>
          <h1>Services Designed for a Peaceful Journey</h1>
          <p>From planning to return, we manage every detail of your pilgrimage so you can focus entirely on your spiritual purpose.</p>
          <a href="#services" className="btn primary">Explore Our Services</a>
        </div>
      </section>

      {/* PRICING TABLES */}
      <section className="hotel-table-section" id="services">
        <div className="solutions-header">
          <span className="solutions-tag">SEASONAL RATES</span>
          <h2>Luxury Hotel Pricing</h2>
          <p>Direct rates for 5-star accommodations near the Holy Mosques.</p>
        </div>

        <div className="table-wrapper">
          <h3 style={{ margin: '20px 0', color: '#1a237e' }}>Makkah 5-Star Hotels</h3>
          <table className="hotel-table">
            <thead>
              <tr><th>Hotel</th><th>Period</th><th>Dist.</th><th>Sharing</th><th>Double</th><th>Triple</th><th>Quad</th><th>Quint</th><th>Meals</th></tr>
            </thead>
            <tbody>
              {makkahHotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)}
            </tbody>
          </table>

          <h3 style={{ margin: '40px 0 20px 0', color: '#1a237e' }}>Madinah 5-Star Hotels</h3>
          <table className="hotel-table">
            <thead>
              <tr><th>Hotel</th><th>Period</th><th>Dist.</th><th>Sharing</th><th>Double</th><th>Triple</th><th>Quad</th><th>Quint</th><th>Meals</th></tr>
            </thead>
            <tbody>
              {madinahHotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)}
            </tbody>
          </table>
        </div>
      </section>

      {/* UPDATED HOTEL CARDS GRID */}
      <section className="hotel-rates-section">
        <div className="hotel-rates-container">
          <div className="hotel-rates-header">
            <span className="hotel-rates-tag">PREMIUM ACCOMMODATIONS</span>
            <h2 className="hotel-rates-title">Featured Luxury Stays</h2>
          </div>

          <div className="hotels-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '25px', 
            padding: '20px 0' 
          }}>
            {allHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="hotel-card"
                onMouseEnter={() => setHoveredCard(hotel.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="hotel-image-wrapper" style={{ height: '210px' }}>
                  <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                  <div className="hotel-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {hotel.rating} Star
                  </div>
                </div>

                <div className="hotel-content" style={{ padding: '20px' }}>
                  <h3 className="hotel-name" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{hotel.name}</h3>
                  
                  <div className="hotel-location" style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '5px'}}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {hotel.location} • From <span style={{ fontWeight: 'bold', color: '#b22222' }}>{hotel.priceFrom} SAR</span>
                  </div>

                  <div className="hotel-amenities" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                    {hotel.amenities.map((amenity, index) => (
                      <span key={index} className="amenity-tag" >{amenity}</span>
                    ))}
                  </div>

                  <div className="hotel-cta">
                    <Link 
                      to={`/hotel/${hotel.slug}`} 
                      className="view-details-btn"
                      style={{ 
                        display: 'block', 
                        textAlign: 'center', 
                        textDecoration: 'none',
                        padding: '12px',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                    >
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

      <section className="transport-fix-wrapper"><TransportRatesSection /></section>

      <section className="process-section">
        <div className="process-header">
          <span className="process-eyebrow">How it works</span>
          <h2 className="process-title">A Simple Booking Journey</h2>
        </div>
        <div className="process-steps">
          {["Enquire", "Customize", "Book", "Travel"].map((step, i) => (
            <div key={i} className="process-step">
              <span className="step-number">0{i + 1}</span>
              <h3>{step}</h3>
              <p>Tailored guidance for your spiritual path.</p>
            </div>
          ))}
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





