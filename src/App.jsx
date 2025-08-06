import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainSection from './Components/Homepage/MainSection';
import FlightSection from './Components/FlightSection/FlightSection';
import Community from './Components/Community/Community';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/flights" element={<FlightSection />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
