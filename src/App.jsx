import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import PersonasPage from './pages/PersonasPage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/que-hacemos" element={<WhatWeDoPage />} />
        <Route path="/personas" element={<PersonasPage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
