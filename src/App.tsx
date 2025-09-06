import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JBSquareKRPortal from './pages/JBSquareKRPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jb-square-kr-portal" element={<JBSquareKRPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
