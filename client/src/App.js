import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Zmieniono Switch na Routes
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;