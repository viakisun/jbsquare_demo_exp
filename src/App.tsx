import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JBSquareRootRedesign from './pages/jb_square_root_redesign';
import JBSquareF2Desktop from './pages/jb_square_f2_desktop';
import JBSquareAUS from './pages/JBSquareAUS';
import JBSquarePortal from './pages/JBSquarePortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jb-square-root-redesign" element={<JBSquareRootRedesign />} />
        <Route path="/jb-square-f2-desktop" element={<JBSquareF2Desktop />} />
        <Route path="/jb-square-aus" element={<JBSquareAUS />} />
        <Route path="/jb-square-portal" element={<JBSquarePortal />} />
      </Routes>
    </Router>
  );
}

export default App;
