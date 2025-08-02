// src/App.js
import React from 'react';
import SeatMap from './components/SeatMap';
import { SeatBookingProvider } from './contexts/SeatBookingContext';

function App() {
  return (
    <SeatBookingProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
        }}
      >
        <SeatMap />
      </div>
    </SeatBookingProvider>
  );
}

export default App;
