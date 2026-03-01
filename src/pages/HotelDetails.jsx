import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getHotelBySlug } from "../data/hotelData";
import { hotelRates } from "../data/hotelRates";
import "../styles/hotelDetails.css";

// Normalize an economy hotel from hotelRates into the shape HotelDetails expects
const normalizeEconomyHotel = (hotel) => ({
  id: hotel.id,
  name: hotel.name,
  slug: hotel.slug,
  image: "/assets/images/placeholder-hotel.jpg",
  rating: hotel.rating || 3,
  location: hotel.location,
  distance: `${hotel.locationNote || hotel.location}`,
  priceRange: "Price On Request",
  description: `${hotel.name} is an economy accommodation located in ${hotel.locationNote || hotel.location}, ${hotel.location}. Contact us for pricing and availability.`,
  gallery: ["/assets/images/placeholder-hotel.jpg"],
  fullAmenities: [
    { icon: "🕌", name: "Location", detail: hotel.locationNote || hotel.location },
    { icon: "🚐", name: "Shuttle", detail: hotel.shuttle === "Yes" ? "Shuttle service available" : "No shuttle service" },
    { icon: "⭐", name: "Category", detail: hotel.category || "Economy" },
  ],
  roomTypes: [
    {
      type: "Economy Room",
      description: "Comfortable economy accommodation suitable for pilgrims.",
      size: "N/A",
      occupancy: "2–5 adults",
      features: ["Beds", "Bathroom", "AC", "Basic Amenities"],
    },
  ],
  umrahFacilities: {
    title: "Pilgrim Services",
    features: [
      "Prayer mats available",
      "Qibla direction in rooms",
      "Prayer times displayed",
      hotel.shuttle === "Yes" ? "Shuttle service to Haram" : "Walking distance to Haram",
      "Halal dining options nearby",
    ],
  },
  diningOptions: [
    {
      name: "Local Restaurants",
      cuisine: "Arabic & International",
      timing: "Varies",
      specialty: "Halal meals available nearby",
    },
  ],
  nearbyAttractions: [
    {
      name: hotel.location === "Makkah" ? "Masjid al-Haram" : "Masjid an-Nabawi",
      distance: hotel.locationNote || "Nearby",
      time: hotel.shuttle === "Yes" ? "Shuttle available" : "Walking distance",
    },
  ],
  policies: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    cancellation: "Contact us for cancellation policy",
    children: "Contact us for details",
    pets: "Not allowed",
  },
});

const HotelDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    // First try luxury hotels from hotelData.js
    let hotelData = getHotelBySlug(slug);

    // If not found, search economy/standard hotels from hotelRates.js
    if (!hotelData) {
      const economyHotel = hotelRates.find((h) => h.slug === slug);
      if (economyHotel) {
        hotelData = normalizeEconomyHotel(economyHotel);
      }
    }

    if (hotelData) {
      setHotel(hotelData);
      window.scrollTo(0, 0);
    } else {
      navigate("/services");
    }
  }, [slug, navigate]);

  if (!hotel) {
    return (
      <>
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading hotel details...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section with Image Gallery */}
      <section className="hotel-detail-hero">
        <div className="hero-back-button">
          <Link to="/services" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Hotels
          </Link>
        </div>

        <div className="hero-gallery">
          <div className="main-image">
            <img src={hotel.gallery[activeImage]} alt={hotel.name} />
            <div className="image-overlay"></div>
            
            <div className="hotel-hero-content">
              <div className="hotel-badge">{hotel.rating} Star Hotel</div>
              <h1 className="hero-title">{hotel.name}</h1>
              <div className="hero-location">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{hotel.distance}</span>
              </div>
            </div>
          </div>

          {hotel.gallery.length > 1 && (
            <div className="gallery-thumbnails">
              {hotel.gallery.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${activeImage === index ? "active" : ""}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="quick-info-bar">
        <div className="quick-info-container">
          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <div>
              <span className="info-label">Check-in</span>
              <span className="info-value">{hotel.policies.checkIn}</span>
            </div>
          </div>

          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <div>
              <span className="info-label">Check-out</span>
              <span className="info-value">{hotel.policies.checkOut}</span>
            </div>
          </div>

          <div className="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <span className="info-label">Distance</span>
              <span className="info-value">{hotel.distance}</span>
            </div>
          </div>

          <div className="info-item price-item">
            <img src="../../public/assets/icons/Saudi_Riyal_Symbol.svg" alt="" />
            <div>
              <span className="info-label">Price Range</span>
              <span className="info-value">{hotel.priceRange}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="hotel-content-section">
        <div className="content-container">
          
          {/* About Section */}
          <div className="content-block about-section">
            <h2 className="section-title">About This Hotel</h2>
            <p className="section-description">{hotel.description}</p>
          </div>

          {/* Amenities Grid */}
          <div className="content-block amenities-section">
            <h2 className="section-title">Hotel Amenities</h2>
            <div className="amenities-grid">
              {hotel.fullAmenities.map((amenity, index) => (
                <div key={index} className="amenity-card">
                  <span className="amenity-icon">{amenity.icon}</span>
                  <h3 className="amenity-name">{amenity.name}</h3>
                  <p className="amenity-detail">{amenity.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Types */}
          <div className="content-block rooms-section">
            <h2 className="section-title">Room Types & Accommodations</h2>
            <div className="rooms-grid">
              {hotel.roomTypes.map((room, index) => (
                <div 
                  key={index} 
                  className={`room-card ${selectedRoom === index ? "selected" : ""}`}
                  onClick={() => setSelectedRoom(selectedRoom === index ? null : index)}
                >
                  <div className="room-header">
                    <h3 className="room-type">{room.type}</h3>
                    <span className="room-size">{room.size}</span>
                  </div>
                  <p className="room-description">{room.description}</p>
                  
                  <div className="room-info">
                    <div className="room-occupancy">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      {room.occupancy}
                    </div>
                  </div>

                  <div className="room-features">
                    {room.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Umrah Facilities */}
          <div className="content-block umrah-section">
            <div className="umrah-header">
              <svg className="umrah-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <h2 className="section-title">{hotel.umrahFacilities.title}</h2>
            </div>
            <div className="umrah-features-list">
              {hotel.umrahFacilities.features.map((feature, index) => (
                <div key={index} className="umrah-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dining Options */}
          <div className="content-block dining-section">
            <h2 className="section-title">Dining Options</h2>
            <div className="dining-grid">
              {hotel.diningOptions.map((option, index) => (
                <div key={index} className="dining-card">
                  <h3 className="dining-name">{option.name}</h3>
                  <div className="dining-info">
                    <span className="dining-cuisine">{option.cuisine}</span>
                    <span className="dining-timing">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {option.timing}
                    </span>
                  </div>
                  <p className="dining-specialty">
                    <strong>Specialty:</strong> {option.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="content-block attractions-section">
            <h2 className="section-title">Nearby Sacred Sites & Attractions</h2>
            <div className="attractions-list">
              {hotel.nearbyAttractions.map((attraction, index) => (
                <div key={index} className="attraction-item">
                  <div className="attraction-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="attraction-info">
                    <h4 className="attraction-name">{attraction.name}</h4>
                    <div className="attraction-meta">
                      <span className="distance">{attraction.distance}</span>
                      <span className="separator">•</span>
                      <span className="time">{attraction.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="content-block policies-section">
            <h2 className="section-title">Hotel Policies</h2>
            <div className="policies-grid">
              <div className="policy-item">
                <h4>Cancellation</h4>
                <p>{hotel.policies.cancellation}</p>
              </div>
              <div className="policy-item">
                <h4>Children</h4>
                <p>{hotel.policies.children}</p>
              </div>
              <div className="policy-item">
                <h4>Pets</h4>
                <p>{hotel.policies.pets}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="hotel-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Book Your Stay?</h2>
          <p className="cta-description">
            Contact us for availability, special packages, and group bookings
          </p>
          <div className="cta-buttons">
            <Link to="/book" className="btn-book-now">
              Book This Hotel
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn-contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HotelDetails;