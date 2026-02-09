import React from 'react';
import TransportRatesTable from '../components/TransportRatesTable';
import TransportRatesText from '../components/TransportRateText';



 

const TransportRatesSection = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100vh',
      width: '100%',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.container} className="transport-rates-section">
      <style>
        {`
          @media (max-width: 1024px) {
            .transport-rates-section {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      
      {/* Left Section - Transport Rates Table */}
      <TransportRatesTable />
      
      {/* Right Section - Text Content */}
      <TransportRatesText />
    </div>
  );
};

export default TransportRatesSection;
