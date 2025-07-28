import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Layout & Page Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Homepage Components
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturesIcons from "./components/FeaturesIcons";
import ContactSection from "./components/ContactSection";
import BarfMarquee from "./components/BarfMarquee";

// Pages
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import KvkkPage from "./components/KvkkPage";
import SssPage from "./components/SssPage";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";

// Carousel styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Updates the page title when route changes
 */
const SetTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

/**
 * Main router-based layout content with loader transition
 */
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <SetTitle title="Ana Sayfa | Barf and More" />
              <BarfMarquee />
              <HeroSlider />
              <BarfMarquee />
              <AboutSection />
              <FeaturesSection />
              <FeaturesIcons />
              <ContactSection />
            </>
          }
        />

        {/* Ürünler */}
        <Route
          path="/urunler"
          element={
            <>
              <SetTitle title="Ürünler | Barf and More" />
              <Products />
            </>
          }
        />

        {/* Ürün Detay */}
        <Route
          path="/urun/:id"
          element={
            <>
              <SetTitle title="Ürün Detayı | Barf and More" />
              <ProductDetail />
            </>
          }
        />

        {/* İletişim */}
        <Route
          path="/iletisim"
          element={
            <>
              <SetTitle title="İletişim | Barf and More" />
              <Contact />
            </>
          }
        />

        {/* KVKK */}
        <Route
          path="/kvkk"
          element={
            <>
              <SetTitle title="KVKK | Barf and More" />
              <KvkkPage />
            </>
          }
        />

        {/* Sıkça Sorulan Sorular */}
        <Route
          path="/sss"
          element={
            <>
              <SetTitle title="S.S.S | Barf and More" />
              <SssPage />
            </>
          }
        />

        {/* Blog listesi */}
        <Route
          path="/blog"
          element={
            <>
              <SetTitle title="Blog | Barf and More" />
              <Blog />
            </>
          }
        />

        {/* Blog detay */}
        <Route
          path="/blog/:id"
          element={
            <>
              <SetTitle title="Blog Detayı | Barf and More" />
              <BlogDetail />
            </>
          }
        />

        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <>
              <SetTitle title="Sayfa Bulunamadı | Barf and More" />
              <NotFound />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

/**
 * Root of the app wrapped in <Router>
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
