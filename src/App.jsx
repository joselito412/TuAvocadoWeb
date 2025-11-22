import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import PersonasPage from './pages/PersonasPage';

function App() {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/que-hacemos" element={<WhatWeDoPage />} />
        <Route path="/personas" element={<PersonasPage />} />
      </Routes>

      <footer>
        <div className="content-wrapper">
          <p className="copyright">&copy; 2024 - 2025, <strong>AVOCADO</strong>. All right reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}

export default App;
