import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PropertyDetails from "./components/PropertyDetails";
import PropertyListing from './components/PropertyListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/property/:id" element={<PropertyDetails/>} />
         <Route path="/property" element={<PropertyListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
