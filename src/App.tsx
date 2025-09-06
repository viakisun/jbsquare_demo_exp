import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JBMassBioPortal from './pages/JBMassBioPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jb-mass-bio-portal" element={<JBMassBioPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
