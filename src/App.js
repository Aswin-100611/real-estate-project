import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PropertyDetails from "./components/PropertyDetails";
import PropertyListing from './components/PropertyListing';
import ContactSection from "./components/ContactSection";
import AgentsPage from "./components/AgentsPage";
import AgentChat from "./components/AgentChat";
import WishList from "./components/WishList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/property" element={<PropertyListing />} />
        <Route path="/browser" element={<PropertyListing />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/agents" element={<AgentsPage />} />
<Route path="/agent/:id" element={<AgentChat />} />
<Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;