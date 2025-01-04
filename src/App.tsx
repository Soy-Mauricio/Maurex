import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import ViewMore from './pages/ViewMore';
import ScrollToTop from './components/Scroll';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/view-more" element={<ViewMore />} />
      </Routes>
    </Router>
  );
};

export default App;