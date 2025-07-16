import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturesIcons from "./components/FeaturesIcons";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Contact from "./components/Contact"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <AboutSection />
              <FeaturesSection />
              <FeaturesIcons />
              <ContactSection />
            </>
          }
        />
        <Route path="/urunler" element={<Products />} />
        <Route path="/iletisim" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
