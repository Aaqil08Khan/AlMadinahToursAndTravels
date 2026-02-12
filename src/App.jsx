import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import BookPackage from './pages/BookPackage';

import Baku from "./pages/Baku";
import FourCountries from "./pages/FourCountries";
import IndPak from "./pages/IndPak";
import HotelDetails from './pages/HotelDetails';


import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hotel/:slug" element={<HotelDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour" element={<Navigate to="/tours" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookPackage />} />

        <Route path="/tours/baku" element={<Baku />} />
        <Route path="/tours/4-countries" element={<FourCountries />} />
        <Route path="/tours/ind-vs-pak" element={<IndPak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;