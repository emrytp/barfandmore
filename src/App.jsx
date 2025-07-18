import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturesIcons from "./components/FeaturesIcons";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import KvkkPage from "./components/KvkkPage";
import SssPage from "./components/SssPage"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sayfa geçişlerini algılayan özel wrapper
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Sayfa geçişlerinde 1 saniye loader

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
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
        <Route path="/kvkk" element={<KvkkPage />} />
        <Route path="/sss" element={<SssPage />} /> 
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
