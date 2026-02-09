// src="../../public/assets/logos/logo-en.png"
import React from 'react';
import { FaTiktok, FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const TransportRatesTable = () => { 

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '10px',
    },
    ratesCard: {
      background: '#ffffff',
      maxWidth: '750px',
      width: '100%',
      borderRadius: '0',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    },
    header: {
      background: '#ffffff',
      padding: '15px 30px 12px',
      borderBottom: '3px solid #0d3b66',
    },
    headerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px',
    },
    logoImg: {
      height: '50px',
      width: 'auto',
    },
    socialIcons: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    socialHandle: {
      fontSize: '11px',
      color: '#666',
      marginTop: '5px',
      textAlign: 'right',
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '8px',
    },
    visaText: {
      fontSize: '13px',
      color: '#0d3b66',
      fontWeight: '600',
      marginBottom: '3px',
    },
    mainTitle: {
      fontSize: '22px',
      fontWeight: '800',
      color: '#0d3b66',
      marginBottom: '8px',
    },
    transportBadge: {
      display: 'inline-block',
      background: '#0d3b66',
      color: 'white',
      padding: '6px 20px',
      borderRadius: '25px',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    vehicleSection: {
      border: '2px solid #0d3b66',
      marginBottom: '0',
    },
    vehicleHeader: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr 120px',
      borderBottom: '2px solid #0d3b66',
    },
    vehicleType: {
      background: '#ffffff',
      padding: '10px 15px',
      borderRight: '2px solid #0d3b66',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    vehicleName: {
      fontSize: '13px',
      fontWeight: '800',
      color: '#0d3b66',
      marginBottom: '2px',
    },
    vehicleCapacity: {
      fontSize: '10px',
      color: '#666',
      fontWeight: '600',
    },
    vehicleImage: {
      width: '90%',
      height: '60px',
      objectFit: 'contain',
      marginTop: '6px',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    },
    routesHeader: {
      background: '#ffffff',
      padding: '10px 15px',
      borderRight: '2px solid #0d3b66',
      fontSize: '12px',
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
    },
    totalHeader: {
      background: '#ffffff',
      padding: '10px 15px',
      fontSize: '12px',
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    routeRow: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr 120px',
      borderBottom: '2px solid #0d3b66',
    },
    routePlaceholder: {
      background: '#f8f9fa',
      borderRight: '2px solid #0d3b66',
    },
    routeInfo: {
      background: '#ffffff',
      padding: '10px 15px',
      borderRight: '2px solid #0d3b66',
      fontSize: '11px',
      color: '#333',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
    },
    routePrice: {
      background: '#ffffff',
      padding: '10px 15px',
      fontSize: '16px',
      fontWeight: '800',
      color: '#0d3b66',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      background: '#0d3b66',
      padding: '12px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'white',
      fontSize: '11px',
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
    <div style={styles.container} className="transport-rates-table">
      <style>
        {`
          /* Tablet devices (768px - 1024px) */
          @media (max-width: 1024px) {
            .transport-rates-table {
              padding: 20px 15px !important;
              min-height: auto !important;
            }
            .rates-card-responsive {
              max-width: 100% !important;
            }
            .header-responsive {
              padding: 12px 20px 10px !important;
            }
            .logo-responsive {
              height: 40px !important;
            }
            .title-section-responsive .main-title {
              font-size: 18px !important;
            }
            .title-section-responsive .visa-text {
              font-size: 11px !important;
            }
            .title-section-responsive .transport-badge {
              font-size: 10px !important;
              padding: 5px 16px !important;
            }
          }

          /* Mobile devices (below 768px) */
          @media (max-width: 768px) {
            .transport-rates-table {
              padding: 15px 10px !important;
              min-height: auto !important;
            }
            .header-responsive {
              padding: 10px 15px 8px !important;
            }
            .header-top-responsive {
              flex-direction: column !important;
              align-items: center !important;
              gap: 15px !important;
              margin-bottom: 10px !important;
            }
            .logo-responsive {
              height: 35px !important;
            }
            .social-section-responsive {
              text-align: center !important;
            }
            .title-section-responsive .main-title {
              font-size: 16px !important;
              margin-bottom: 6px !important;
            }
            .title-section-responsive .visa-text {
              font-size: 10px !important;
            }
            .title-section-responsive .transport-badge {
              font-size: 9px !important;
              padding: 4px 14px !important;
            }
            
            /* Table adjustments */
            .vehicle-header-responsive {
              grid-template-columns: 100px 1fr 80px !important;
            }
            .route-row-responsive {
              grid-template-columns: 100px 1fr 80px !important;
            }
            .vehicle-type-responsive {
              padding: 8px 10px !important;
            }
            .vehicle-name-responsive {
              font-size: 11px !important;
            }
            .vehicle-capacity-responsive {
              font-size: 8px !important;
            }
            .vehicle-image-responsive {
              height: 45px !important;
              margin-top: 4px !important;
            }
            .routes-header-responsive,
            .total-header-responsive {
              padding: 8px 10px !important;
              font-size: 10px !important;
            }
            .route-info-responsive {
              padding: 8px 10px !important;
              font-size: 9px !important;
            }
            .route-price-responsive {
              padding: 8px 10px !important;
              font-size: 13px !important;
            }
            
            /* Footer adjustments */
            .footer-responsive {
              padding: 10px 15px !important;
              flex-direction: column !important;
              gap: 8px !important;
            }
            .contact-item-responsive {
              font-size: 10px !important;
            }
          }

          /* Small mobile devices (below 480px) */
          @media (max-width: 480px) {
            .transport-rates-table {
              padding: 10px 5px !important;
            }
            .header-responsive {
              padding: 8px 12px 6px !important;
            }
            .logo-responsive {
              height: 30px !important;
            }
            .social-icons-responsive a {
              width: 28px !important;
              height: 28px !important;
              font-size: 14px !important;
            }
            .social-handle-responsive {
              font-size: 9px !important;
            }
            .title-section-responsive .main-title {
              font-size: 14px !important;
            }
            .title-section-responsive .visa-text {
              font-size: 9px !important;
            }
            
            /* Extra compact table */
            .vehicle-header-responsive {
              grid-template-columns: 80px 1fr 70px !important;
            }
            .route-row-responsive {
              grid-template-columns: 80px 1fr 70px !important;
            }
            .vehicle-type-responsive {
              padding: 6px 8px !important;
            }
            .vehicle-name-responsive {
              font-size: 10px !important;
            }
            .vehicle-capacity-responsive {
              font-size: 7px !important;
            }
            .vehicle-image-responsive {
              height: 35px !important;
            }
            .route-info-responsive {
              font-size: 8px !important;
              padding: 6px 8px !important;
            }
            .route-price-responsive {
              font-size: 11px !important;
              padding: 6px 8px !important;
            }
            .routes-header-responsive,
            .total-header-responsive {
              font-size: 9px !important;
              padding: 6px 8px !important;
            }
          }
        `}
      </style>
      <div style={styles.ratesCard} className="rates-card-responsive">
        {/* Header */}
        <div style={styles.header} className="header-responsive">
          <div style={styles.headerTop} className="header-top-responsive">
            {/* Logo */}
            <div>
              <img src="../../public/assets/logos/logo-en.png" alt="Al Madina Travels" style={styles.logoImg} className="logo-responsive" />
            </div>

            {/* Social Media */}
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

          {/* Title Section */}
          <div style={styles.titleSection} className="title-section-responsive">
            <div style={styles.visaText} className="visa-text">
              Visa Only (Without Transport <span style={{ fontWeight: 800 }}>530 SAR</span>)
            </div>
            <h1 style={styles.mainTitle} className="main-title">Hotel Booking Mandatory</h1>
            <div style={styles.transportBadge} className="transport-badge">TRANSPORTATION RATES</div>
          </div>
        </div>

        {/* Rates Table */}
        <div>
          {vehicles.map((vehicle, idx) => (
            <div key={idx} style={styles.vehicleSection}>
              <div style={styles.vehicleHeader} className="vehicle-header-responsive">
                <div style={styles.vehicleType} className="vehicle-type-responsive">
                  <div>
                    <div style={styles.vehicleName} className="vehicle-name-responsive">{vehicle.name}</div>
                    <div style={styles.vehicleCapacity} className="vehicle-capacity-responsive">{vehicle.capacity}</div>
                  </div>
                  <img src={vehicle.image} alt={vehicle.name} style={styles.vehicleImage} className="vehicle-image-responsive" />
                </div>
                <div style={styles.routesHeader} className="routes-header-responsive">Routes</div>
                <div style={styles.totalHeader} className="total-header-responsive">Total</div>
              </div>
              {vehicle.routes.map((route, routeIdx) => (
                <div key={routeIdx} style={{ ...styles.routeRow, borderBottom: routeIdx === vehicle.routes.length - 1 ? 'none' : '2px solid #0d3b66' }} className="route-row-responsive">
                  <div style={styles.routePlaceholder}></div>
                  <div style={styles.routeInfo} className="route-info-responsive">{route.route}</div>
                  <div style={styles.routePrice} className="route-price-responsive">{route.price}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer} className="footer-responsive">
          <div style={styles.contactItem} className="contact-item-responsive">
            <FaPhone style={{ fontSize: '13px' }} />
            +966 55 239 9655
          </div>
          <div style={styles.contactItem} className="contact-item-responsive">
            <FaEnvelope style={{ fontSize: '13px' }} />
            info@almadinatravels.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportRatesTable;
