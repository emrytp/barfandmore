import React from "react";
import { Link } from "react-router-dom"; 
import "./FeaturesSection.css";

const products = [
  {
    id: 1,
    name: "BARF BEEF",
    image: "/img/ürünler/dana-akciger.jpg"
  },
  {
    id: 2,
    name: "BARF CHICK",
    image: "/img/ürünler/dana-girtlak.jpg"
  },
  {
    id: 3,
    name: "BARF ECOMIX",
    image: "/img/ürünler/dana-kulak.jpg"
  },
  {
    id: 4,
    name: "BARF OYUNCAK",
    image: "/img/ürünler/oyuncak.jpg"
  }
];

const doubleProducts = [...products, ...products];

const FeaturesSection = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubleProducts.map((product, index) => (
          <div key={index} className="marquee-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <Link to="urunler" className="buy-button">ALIŞVERİŞE BAŞLA</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
