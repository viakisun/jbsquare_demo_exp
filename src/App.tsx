import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JBKoreanPortalFinal from './pages/JBKoreanPortalFinal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jb-korean-portal" element={<JBKoreanPortalFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
