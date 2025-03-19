import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SmoothScroll from './components/SmoothScroll';


// This is a basic structure - you can add more pages later
function App() {
  return (
    <Router>
      <SmoothScroll>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;