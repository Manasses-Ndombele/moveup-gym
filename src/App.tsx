import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PersonalTrainer from './pages/PersonalTrainer';
import Plans from './pages/Plans';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-trainer" element={<PersonalTrainer />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;