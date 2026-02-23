import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import TransportRatesSection from '../components/TransportRateSection';
import { Link } from "react-router-dom";
import { hotelsData } from "../data/hotelData";
import { hotelRates } from "../data/hotelRates";

import "../styles/home.css";
import "../styles/services.css";

const Services = () => {


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [hotelCategory, setHotelCategory] = useState("luxury");
  const [hoveredCard, setHoveredCard] = useState(null);

  // LUXURY HOTELS
  const makkahHotels = [

    { id: 1, name: "Fairmont Makkah Clock Royal Tower", type: "luxury", slug: "fairmont-makkah", period: "Flexible", distance: "0m", sharing: "800", double: "900", triple: "850", quad: "800", quint: "750", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "900", amenities: ["Free WiFi", "Haram View", "Luxury Dining"], image: "/assets/images/fairmount-hotel.jpg" },
    { id: 2, name: "Conrad Makkah", type: "luxury", slug: "conrad-makkah", period: "Flexible", distance: "100m", sharing: "700", double: "780", triple: "740", quad: "700", quint: "660", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "780", amenities: ["Free WiFi", "Restaurant", "Luxury Suites"], image: "/assets/images/conrad-hotel.webp" },
    { id: 3, name: "Hyatt Regency Makkah", type: "luxury", slug: "hyatt-makkah", period: "Flexible", distance: "150m", sharing: "680", double: "750", triple: "710", quad: "670", quint: "630", meals: "Half Board", rating: 5, location: "Makkah", priceFrom: "750", amenities: ["Gym", "Free WiFi", "Near Haram"], image: "/assets/images/hyatt-hotel.jpg" },
    { id: 4, name: "Hilton Convention Makkah", type: "luxury", slug: "hilton-convention", period: "Flexible", distance: "300m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "680", amenities: ["Free WiFi", "Parking", "Restaurant"], image: "/assets/images/hilton-makkah.jpg" },
    { id: 5, name: "Raffles Makkah Palace", type: "luxury", slug: "raffles-makkah", period: "Flexible", distance: "50m", sharing: "950", double: "1050", triple: "1000", quad: "950", quint: "900", meals: "Full Board", rating: 5, location: "Makkah", priceFrom: "1050", amenities: ["Spa", "Butler Service", "VIP Lounge"], image: "/assets/images/raffles-hotel.jpg" },
    { id: 6, name: "Mövenpick Hotel & Residence Hajar Tower Makkah", type: "luxury", slug: "movenpick-hajar-tower-makkah", period: "Flexible", distance: "0m", sharing: "820", double: "900", triple: "860", quad: "820", quint: "780", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "900", amenities: ["Dining Options", "Pool", "Gym"], image: "/assets/images/movenpick_hotel.webp" },
    // Newly Added Hotels
    { id: 7, name: "Pullman Zamzam Makkah", type: "luxury", slug: "pullman-zamzam-makkah", period: "Flexible", distance: "0m", sharing: "800", double: "880", triple: "840", quad: "800", quint: "760", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "880", amenities: ["City View", "Free WiFi", "Restaurant"], image: "/assets/images/pullman-zamzam-makkah.webp" },
    { id: 8, name: "voco Makkah (IHG)", type: "luxury", slug: "voco-makkah", period: "Flexible", distance: "600m", sharing: "650", double: "720", triple: "690", quad: "650", quint: "610", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "720", amenities: ["Free WiFi", "Shuttle Service", "Urban Views"], image: "/assets/images/voco-makkah.webp" },
    { id: 9, name: "Holiday Inn Makkah Al Aziziyah", type: "luxury", slug: "holiday-inn-makkah-al-aziziyah", period: "Flexible", distance: "1500m", sharing: "500", double: "580", triple: "540", quad: "500", quint: "460", meals: "Breakfast Included", rating: 4, location: "Makkah", priceFrom: "580", amenities: ["Free WiFi", "Shuttle Service"], image: "/assets/images/makkah-al-azizah.webp" },
    { id: 10, name: "Makkah Towers (Clock Towers)", type: "luxury", slug: "makkah-towers-clock-towers", period: "Flexible", distance: "10m", sharing: "900", double: "980", triple: "940", quad: "900", quint: "860", meals: "Breakfast Included", rating: 5, location: "Makkah", priceFrom: "980", amenities: ["Near Grand Mosque", "Luxury Rooms"], image: "/assets/images/theclocltower.webp" },
    { id: 11, name: "Safa Tower Hotel Makkah", type: "luxury", slug: "safa-tower-hotel-makkah", period: "Flexible", distance: "400m", sharing: "700", double: "780", triple: "740", quad: "700", quint: "660", meals: "Breakfast Included", rating: 4, location: "Makkah", priceFrom: "780", amenities: ["Free WiFi", "Shuttle Service"], image: "/assets/images/safatowerhotel.webp" },
    { id: 12, name: "Kiswa Towers Hotel", type: "luxury", slug: "kiswa-towers-hotel-makkah", period: "Flexible", distance: "1400m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Breakfast Included", rating: 4, location: "Makkah", priceFrom: "680", amenities: ["Free WiFi", "Shuttle"], image: "/assets/images/kiswatowerhotel.webp" }
  ];
  const madinahHotels = [
    { id: 13, name: "Anwar Al Madinah Movenpick", type: "luxury", slug: "movenpick-madinah", period: "Flexible", distance: "50m", sharing: "650", double: "720", triple: "680", quad: "640", quint: "600", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "720", amenities: ["Free WiFi", "Shopping Mall", "Near Haram", "Restaurant"], image: "/assets/images/anwar-hotel.jpg" },
    { id: 14, name: "Pullman Zamzam Madina", type: "luxury", slug: "pullman-madinah", period: "Flexible", distance: "150m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Half Board", rating: 5, location: "Madinah", priceFrom: "680", amenities: ["Free WiFi", "City View", "Restaurant"], image: "/assets/images/pullman-hotel.jpg" },
    { id: 15, name: "Madinah Hilton Hotel", type: "luxury", slug: "hilton-madinah", period: "Flexible", distance: "100m", sharing: "620", double: "700", triple: "660", quad: "620", quint: "580", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "700", amenities: ["Free WiFi", "Haram View", "Executive Rooms"], image: "/assets/images/madinah-hilton-hotel.avif" },
    { id: 16, name: "Shaza Al Madina", type: "luxury", slug: "shaza-madinah", period: "Flexible", distance: "150m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Room Only", rating: 5, location: "Madinah", priceFrom: "680", amenities: ["Boutique Style", "Fine Dining", "Free WiFi"], image: "/assets/images/sheza-hotel.jpg" },
    { id: 17, name: "Dar Al Taqwa Hotel", type: "luxury", slug: "dar-al-taqwa", period: "Flexible", distance: "20m", sharing: "700", double: "780", triple: "740", quad: "700", quint: "660", meals: "Full Board", rating: 5, location: "Madinah", priceFrom: "780", amenities: ["Luxury Decor", "Front Row", "VIP Service"], image: "/assets/images/dar-al-taqwa-hotel.jpg" },
    { id: 18, name: "Shaza Regency Plaza Al Madinah", type: "luxury", slug: "shaza-regency-plaza-al-madinah", period: "Flexible", distance: "300m", sharing: "500", double: "580", triple: "540", quad: "500", quint: "460", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "580", amenities: ["Free WiFi", "Modern Rooms", "Restaurant"], image: "/assets/images/shazaregencyplazahotel.webp" },
    { id: 19, name: "Makarem Al Madinah Hotel", type: "luxury", slug: "makarem-al-madinah-hotel", period: "Flexible", distance: "250m", sharing: "520", double: "600", triple: "560", quad: "520", quint: "480", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "600", amenities: ["Free WiFi", "Restaurant", "Room Service"], image: "/assets/images/makaremalmadinah.webp" },
    { id: 20, name: "Nusk Al Eman Hotel", type: "luxury", slug: "nusk-al-eman-hotel", period: "Flexible", distance: "400m", sharing: "450", double: "520", triple: "490", quad: "450", quint: "420", meals: "Room Only", rating: 4, location: "Madinah", priceFrom: "520", amenities: ["Free WiFi", "Shuttle Service"], image: "/assets/images/nuskalemanhotel.webp" },
    { id: 21, name: "Dar Al Eiman Al Haram Hotel", type: "luxury", slug: "dar-al-eiman-al-haram", period: "Flexible", distance: "100m", sharing: "580", double: "650", triple: "610", quad: "580", quint: "540", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "650", amenities: ["Free WiFi", "Close to Haram", "Restaurant"], image: "/assets/images/daraleimanhotel.webp" },
    { id: 22, name: "Sofitel Shahd Al Madinah", type: "luxury", slug: "sofitel-shahd-al-madinah", period: "Flexible", distance: "300m", sharing: "580", double: "660", triple: "620", quad: "580", quint: "540", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "660", amenities: ["Luxury Dining", "Free WiFi", "Modern Rooms"], image: "/assets/images/sofitelhotel.webp" },
    { id: 23, name: "Millennium Al Aqeeq Hotel", type: "luxury", slug: "millennium-al-aqeeq-hotel", period: "Flexible", distance: "200m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "680", amenities: ["Free WiFi", "Executive Lounge"], image: "/assets/images/millenniumhotel.webp" },
    { id: 24, name: "Al Manakha Rotana Madinah", type: "luxury", slug: "al-manakha-rotana-madinah", period: "Flexible", distance: "350m", sharing: "540", double: "620", triple: "580", quad: "540", quint: "500", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "620", amenities: ["Free WiFi", "Restaurant"], image: "/assets/images/almanakhahotel.jpg" },
    { id: 25, name: "Waqf Othman Bin Affan Hotel", type: "luxury", slug: "waqf-othman-bin-affan-hotel", period: "Flexible", distance: "300m", sharing: "480", double: "550", triple: "520", quad: "480", quint: "440", meals: "Room Only", rating: 4, location: "Madinah", priceFrom: "550", amenities: ["Free WiFi", "Modern Rooms"], image: "/assets/images/outhmanhotel.webp" },
    { id: 26, name: "Taiba Front Hotel", type: "luxury", slug: "taiba-front-hotel", period: "Flexible", distance: "100m", sharing: "580", double: "660", triple: "620", quad: "580", quint: "540", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "660", amenities: ["Free WiFi", "Haram Proximity"], image: "/assets/images/taibahotel.webp" },
    { id: 27, name: "Maden Taiba Hotel", type: "luxury", slug: "maden-taiba-hotel", period: "Flexible", distance: "150m", sharing: "550", double: "630", triple: "590", quad: "550", quint: "510", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "630", amenities: ["Free WiFi", "Restaurant"], image: "/assets/images/taibamadenhotel.webp" },
    { id: 28, name: "Elaf Taiba Hotel", type: "luxury", slug: "elaf-taiba-hotel", period: "Flexible", distance: "100m", sharing: "600", double: "680", triple: "640", quad: "600", quint: "560", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "680", amenities: ["Free WiFi", "Near Haram"], image: "/assets/images/elaftaibahotel.webp" },
    { id: 29, name: "View Al Madinah Hotel", type: "luxury", slug: "view-al-madinah-hotel", period: "Flexible", distance: "250m", sharing: "520", double: "600", triple: "560", quad: "520", quint: "480", meals: "Room Only", rating: 4, location: "Madinah", priceFrom: "600", amenities: ["Free WiFi", "Modern Rooms"], image: "/assets/images/viewalmadinahhotel.jpg" },
    { id: 30, name: "Makarem Haram View Suites", type: "luxury", slug: "makarem-haram-view-suites", period: "Flexible", distance: "80m", sharing: "750", double: "830", triple: "790", quad: "750", quint: "710", meals: "Breakfast Included", rating: 5, location: "Madinah", priceFrom: "830", amenities: ["Haram View", "Luxury Suites"], image: "/assets/images/makaremharamsuites.png" },
    { id: 31, name: "Elaf Al Taqwa Hotel", type: "luxury", slug: "elaf-al-taqwa-hotel", period: "Flexible", distance: "50m", sharing: "650", double: "730", triple: "690", quad: "650", quint: "610", meals: "Breakfast Included", rating: 4, location: "Madinah", priceFrom: "730", amenities: ["Free WiFi", "Front Row Access"], image: "/assets/images/elafaltaqwa.webp" }
  ];

  const economyHotels = hotelRates.filter(
    hotel => hotel.type === "economy"
  );

  const makkahEconomy = economyHotels.filter(
    hotel => hotel.location === "Makkah"
  );

  const madinahEconomy = economyHotels.filter(
    hotel => hotel.location === "Madinah"
  );


  // Consolidate all hotels for cards
  const allHotels = [
    ...makkahHotels,
    ...madinahHotels,
    ...economyHotels
  ];

  const filteredHotels = allHotels.filter(
    hotel => hotel.type === hotelCategory
  );

  // Reusable Table Component
  const HotelTable = ({ hotels, category }) => (
    <table className="hotel-table">
      <thead>
        <tr>
          <th>Hotel</th>
          <th>{category === "luxury" ? "Period" : "Category"}</th>
          <th>{category === "luxury" ? "Dist." : "Shuttle"}</th>
          <th>{category === "luxury" ? "Sharing" : "Location "}</th>
          <th>Double</th>
          <th>Triple</th>
          <th>Quad</th>
          <th>Quint</th>
          <th>{category === "luxury" ? "Meals" : "Meals"}</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map(hotel => (
          <tr key={hotel.id}>
            <td>
              {hotel.name}
              {hotel.highlight && (
                <span style={{
                  marginLeft: "8px",
                  background: "#ff9800",
                  color: "#fff",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  Shuttle
                </span>
              )}
            </td>
            <td>{category === "luxury" ? hotel.period : hotel.category}</td>
            <td>{category === "luxury" ? hotel.distance : hotel.shuttle}</td>
            <td>{category === "luxury" ? hotel.sharing + " SAR" : hotel.locationNote}</td>
            <td>{hotel.double ? hotel.double + " SAR" : "—"}</td>
            <td>{hotel.triple ? hotel.triple + " SAR" : "—"}</td>
            <td>{hotel.quad ? hotel.quad + " SAR" : "—"}</td>
            <td>{hotel.quint ? hotel.quint + " SAR" : "—"}</td>
            <td>{category === "luxury" ? hotel.meals : "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );



  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="hero-tag">WHAT WE OFFER</span>
          <h1>Choose Your Umrah Accommodation</h1>
          <p>
            Select between premium 5-star hotels or affordable economy stays
            tailored for every pilgrim’s budget.
          </p>
          <a href="#services" className="btn primary">Explore Our Services</a>
        </div>
      </section>

      {/* TOGGLE */}
      <div className="hotel-toggle">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="toggle-instruction">
            Select a category below to view seasonal hotel rates:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? "1rem" : "0",
            }}
          >
            <button
              className={`toggle-btn ${hotelCategory === "luxury" ? "active" : ""}`}
              onClick={() => setHotelCategory("luxury")}
            >
              ⭐ Luxury Hotels
            </button>

            <button
              className={`toggle-btn ${hotelCategory === "economy" ? "active" : ""}`}
              onClick={() => setHotelCategory("economy")}
            >
              💰 Economy Hotels
            </button>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <section className="hotel-table-section">
        <div className="solutions-header">
          <span className="solutions-tag">SEASONAL RATES</span>
          <h2>{hotelCategory === "luxury" ? "Luxury Hotel Pricing" : "Economy Hotel Listings"}</h2>
          <p>{hotelCategory === "luxury"
            ? "Direct rates for 5-star accommodations near the Holy Mosques."
            : "Direct rates for economy hotels near the Holy Mosques."}
          </p>
        </div>

        <div className="table-wrapper">
          {hotelCategory === "luxury" ? (
            <>
              <h3 style={{ margin: "20px 0px", color: 'rgb(26,35,126)' }}>Makkah 5-Star Hotels</h3>
              <HotelTable hotels={makkahHotels} category="luxury" />

              <h3 style={{ margin: "40px 0px 20px 0", color: 'rgb(26,35,126)' }}>Madinah 5-Star Hotels</h3>
              <HotelTable hotels={madinahHotels} category="luxury" />
            </>
          ) : (
            <>
              <h3 style={{ margin: "20px 0px", color: 'rgb(26,35,126)' }}>Makkah Economy Hotels</h3>
              <HotelTable hotels={makkahEconomy} category="economy" />

              <h3 style={{ margin: "40px 0px 20px 0", color: 'rgb(26,35,126)' }}>Madinah Economy Hotels</h3>
              <HotelTable hotels={madinahEconomy} category="economy" />
            </>
          )}
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="hotel-rates-section">
        <div className="hotels-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "25px",
            padding: "40px 0",
          }}
        >
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="hotel-card"
              onMouseEnter={() => setHoveredCard(hotel.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="hotel-image-wrapper" style={{ height: "210px", position: "relative" }}>
                {hotel.highlight && (
                  <div style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "#1e88e5",
                    color: "#fff",
                    padding: "6px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 2
                  }}>
                    🚐 Shuttle Available
                  </div>
                )}
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-rating">
                  ⭐ {hotel.rating} Star
                </div>
              </div>

              <div className="hotel-content" style={{ padding: "20px" }}>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>

                {hotelCategory === "luxury" ? (
                  <p style={{ color: "#b22222", fontWeight: "bold" }}>
                    From {hotel.priceFrom} SAR
                  </p>
                ) : (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Price On Request
                  </p>
                )}

                <Link
                  to={`/hotel/${hotel.slug}`}
                  className="view-details-btn"
                  style={{ display: "block", marginTop: "15px", textAlign: "center" }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPORT SECTION */}
      <section className="transport-fix-wrapper"><TransportRatesSection /></section>

      {/* PROCESS SECTION */}
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









