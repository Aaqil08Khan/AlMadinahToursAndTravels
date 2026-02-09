import React from 'react';

const TransportRatesText = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '60px 80px',
      background: 'linear-gradient(135deg, #0a4d7a 0%, #0d3b66 100%)',
      // minHeight: '100vh',
      color: 'white',
      height: '47rem',
      width: '33rem',
    },
    title: {
      fontSize: '72px',
      fontWeight: '800',
      marginBottom: '40px',
      lineHeight: '1.2',
      fontFamily: "'Poppins', sans-serif",
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: '500',
      marginBottom: '30px',
      lineHeight: '1.6',
      maxWidth: '600px',
    },
    description: {
      fontSize: '20px',
      fontWeight: '400',
      marginBottom: '50px',
      lineHeight: '1.8',
      maxWidth: '600px',
    },
    button: {
      background: 'white',
      color: '#0d3b66',
      padding: '18px 50px',
      fontSize: '18px',
      fontWeight: '700',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container} className="transport-rates-text">
      <style>
        {`
          /* Tablet devices (768px - 1024px) */
          @media (max-width: 1024px) {
            .transport-rates-text {
              padding: 50px 60px !important;
              align-items: center !important;
              text-align: center !important;
            }
            .transport-rates-text h1 {
              font-size: 56px !important;
            }
            .transport-rates-text .subtitle {
              font-size: 22px !important;
            }
            .transport-rates-text .description {
              font-size: 18px !important;
            }
          }

          /* Mobile devices (below 768px) */
          @media (max-width: 768px) {
            .transport-rates-text {
              padding: 40px 30px !important;
              min-height: auto !important;
              align-items: center !important;
              text-align: center !important;
            }
            .transport-rates-text h1 {
              font-size: 42px !important;
              margin-bottom: 25px !important;
            }
            .transport-rates-text .subtitle {
              font-size: 18px !important;
              margin-bottom: 20px !important;
            }
            .transport-rates-text .description {
              font-size: 16px !important;
              margin-bottom: 35px !important;
            }
            .transport-rates-text .book-now-btn {
              padding: 15px 40px !important;
              font-size: 16px !important;
            }
          }

          /* Small mobile devices (below 480px) */
          @media (max-width: 480px) {
            .transport-rates-text {
              padding: 30px 20px !important;
            }
            .transport-rates-text h1 {
              font-size: 32px !important;
              margin-bottom: 20px !important;
            }
            .transport-rates-text .subtitle {
              font-size: 16px !important;
              margin-bottom: 15px !important;
            }
            .transport-rates-text .description {
              font-size: 14px !important;
              margin-bottom: 30px !important;
            }
            .transport-rates-text .book-now-btn {
              padding: 12px 35px !important;
              font-size: 15px !important;
              width: 100% !important;
              max-width: 250px !important;
            }
          }
        `}
      </style>

      <h1 style={styles.title}>Transport Rates</h1>

      <p style={styles.subtitle} className="subtitle">
        Private or shared airport transfers available.
      </p>

      <p style={styles.description} className="description">
        Book Nusuk-compliant transport for smooth and safe travel to your hotel.
      </p>

      <button
        className="book-now-btn"
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Book Now
      </button>
    </div>
  );
};

export default TransportRatesText;
