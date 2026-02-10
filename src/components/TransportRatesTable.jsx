import React from 'react';
import { FaTiktok, FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const TransportRatesTable = () => {

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
    },

    ratesCard: {
      background: '#ffffff',
      width: '794px',
      minHeight: '1020px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    header: {
      padding: '14px 26px 10px',
      borderBottom: '2px solid #0d3b66',
    },

    headerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },

    logoImg: { height: '48px' },

    socialIcons: { display: 'flex', gap: '10px' },

    socialHandle: {
      fontSize: '11px',
      color: '#666',
      textAlign: 'right',
      marginTop: '4px',
    },

    titleSection: { textAlign: 'center' },

    visaText: {
      fontSize: '13px',
      color: '#0d3b66',
      fontWeight: '600',
    },

    mainTitle: {
      fontSize: '20px',
      fontWeight: '800',
      color: '#0d3b66',
      margin: '4px 0',
    },

    transportBadge: {
      background: '#0d3b66',
      color: 'white',
      padding: '5px 18px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: '700',
      display: 'inline-block',
    },

    vehicleSection: {
      borderTop: '2px solid #0d3b66',
    },

    vehicleHeader: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr 130px',
    },

    vehicleType: {
      padding: '10px 8px 6px',
      borderRight: '2px solid #0d3b66',
      textAlign: 'center',
    },

    vehicleName: {
      fontSize: '15px',
      fontWeight: '800',
      color: '#0d3b66',
    },

    vehicleCapacity: {
      fontSize: '11px',
      color: '#666',
      marginBottom: '6px',
    },

    vehicleImage: {
      width: '100%',
      height: '100px',   // bigger image
      objectFit: 'contain',
    },

    routesHeader: {
      padding: '4px 8px',          // ↓ reduced vertical padding
      borderRight: '2px solid #0d3b66',
      fontSize: '11px',            // slightly smaller
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '2px solid #0d3b66',
      lineHeight: '1',             // tighter height
    },

    totalHeader: {
      padding: '4px 8px',          // ↓ reduced vertical padding
      fontSize: '11px',
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '2px solid #0d3b66',
      lineHeight: '1',
    },

    routeRow: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr 130px',
    },

    /* LEFT COLUMN — NO horizontal lines */
    routePlaceholder: {
      borderRight: '2px solid #0d3b66',
    },

    /* MIDDLE COLUMN */
    routeInfo: {
      color: '#0c436f',
      padding: '9px 12px',
      borderRight: '2px solid rgb(13, 59, 102)',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgb(13, 59, 102)',
    },

    /* RIGHT COLUMN */
    routePrice: {
      padding: '9px',
      fontSize: '16px',
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid #0d3b66',
    },

    footer: {
      background: '#0d3b66',
      padding: '12px 26px',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '6px',
    },

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: 'white',
      fontSize: '12px',
      fontWeight: '600',
    },
  };

  const vehicles = [
    {
      name: 'Bus',
      capacity: '(17-47 Pax)',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
      routes: [
        { route: 'Jed- Mak- Mad- Mak- Jed', price: '5500 SAR' },
        { route: 'Jed- Mak- Mad- Jed', price: '4500 SAR' },
        { route: 'Jed- Mad- Jed', price: '2500 SAR' },
      ],
    },
    {
      name: 'Coaster',
      capacity: '(15-25 Pax)',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
      routes: [
        { route: 'Jed- Mak- Mad- Mak- Jed', price: '5000 SAR' },
        { route: 'Jed- Mak- Mad- Jed', price: '4000 SAR' },
        { route: 'Jed- Mad- Jed', price: '2000 SAR' },
      ],
    },
    {
      name: 'Hiace',
      capacity: '(10-14 Pax)',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&q=80',
      routes: [
        { route: 'Jed- Mak- Mad- Mak- Jed', price: '3500 SAR' },
        { route: 'Jed- Mak- Mad- Jed', price: '2800 SAR' },
        { route: 'Jed- Mad- Jed', price: '1500 SAR' },
      ],
    },
    {
      name: 'SUV',
      capacity: '(5-6 Pax)',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80',
      routes: [
        { route: 'Jed- Mak- Mad- Mak- Jed', price: '2000 SAR' },
        { route: 'Jed- Mak- Mad- Jed', price: '1700 SAR' },
        { route: 'Jed- Mad- Jed', price: '900 SAR' },
      ],
    },
    {
      name: 'Sedan',
      capacity: '(3-4 Pax)',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80',
      routes: [
        { route: 'Jed- Mak- Mad- Mak- Jed', price: '1800 SAR' },
        { route: 'Jed- Mak- Mad- Jed', price: '1500 SAR' },
        { route: 'Jed- Mad- Jed', price: '800 SAR' },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.ratesCard}>
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <img src="/assets/logos/logo-en.png" alt="logo" style={styles.logoImg} />

            <div style={{ textAlign: 'right' }}>
              <div style={{ textAlign: 'right' }} className="social-section-responsive">
                <div style={styles.socialIcons} className="social-icons-responsive">
                  <a href="#" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'transform 0.2s',
                    background: '#000000',
                    color: 'white'
                  }}>
                    <FaTiktok />
                  </a>
                  <a href="#" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'transform 0.2s',
                    background: '#1877f2',
                    color: 'white'
                  }}>
                    <FaFacebookF />
                  </a>
                  <a href="#" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'transform 0.2s',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: 'white'
                  }}>
                    <FaInstagram />
                  </a>
                </div>
                <div style={styles.socialHandle} className="social-handle-responsive">@almadinatraveltour</div>
              </div>
            </div>
          </div>

          <div style={styles.titleSection}>
            <div style={styles.visaText}>Visa Only (Without Transport <b>530 SAR</b>)</div>
            <div style={styles.mainTitle}>Hotel Booking Mandatory</div>
            <div style={styles.transportBadge}>TRANSPORTATION RATES</div>
          </div>
        </div>

        <div>
          {vehicles.map((vehicle, idx) => (
            <div key={idx} style={{ border: '2px solid #0d3b66', marginBottom: '10px' }}>

              {/* HEADER ROW */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 120px',
                  borderBottom: '2px solid #0d3b66',
                  background: '#f1f1f1'
                }}
              >
                {/* VEHICLE TITLE */}
                <div
                  style={{
                    padding: '8px',
                    borderRight: '2px solid #0d3b66',
                    fontWeight: 800,
                    color: '#0d3b66',
                    textAlign: 'center',
                    fontSize: '1rem'
                  }}
                >
                  {vehicle.name}
                  <div style={{ fontSize: '11px', fontWeight: 600 }}>
                    {vehicle.capacity}
                  </div>
                </div>

                {/* ROUTES HEADER */}
                <div
                  style={{
                    padding: '6px 10px',
                    borderRight: '2px solid #0d3b66',
                    fontWeight: 800,
                    color: '#0d3b66',
                    fontSize: '1rem'
                  }}
                >
                  Routes
                </div>

                {/* TOTAL HEADER */}
                <div
                  style={{
                    padding: '6px',
                    fontWeight: 800,
                    color: '#0d3b66',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}
                >
                  Total
                </div>
              </div>

              {/* BODY */}
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 120px' }}>

                {/* IMAGE COLUMN (spans all rows) */}
                <div
                  style={{
                    borderRight: '2px solid #0d3b66',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px'
                  }}
                >
                  <img
                    src={vehicle.image}
                    alt=""
                    style={{
                      width: '100%',
                      height: '95px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* ROUTES + PRICES */}
                <div style={{ gridColumn: '2 / span 2' }}>
                  {vehicle.routes.map((route, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 120px',
                        borderBottom:
                          i !== vehicle.routes.length - 1
                            ? '1px solid #0d3b66'
                            : 'none'
                      }}
                    >
                      <div
                        style={{
                          padding: '7px 10px',
                          borderRight: '2px solid rgb(13, 59, 102)',
                          fontSize: '1rem',
                          color: '#0c406b',
                          fontWeight: '700'
                        }}
                      >
                        {route.route}
                      </div>

                      <div
                        style={{
                          padding: '7px',
                          textAlign: 'center',
                          fontWeight: 800,
                          color: '#0d3b66',
                          fontSize: '14px'
                        }}
                      >
                        {route.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <div style={styles.contactItem}><FaPhone /> +966 51 013 9093</div>
          <div style={styles.contactItem}><FaEnvelope /> info@almadinatravels.com</div>
        </div>
      </div>
    </div>
  );
};

export default TransportRatesTable;