import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-wrapper">
      <div className="feature-card">
        <img src="/img/barfbeef.png" alt="Barf Beef" />
        <div className="feature-content">
          <h2>BARF BEEF</h2>
          <button>ALIŞVERİŞE BAŞLA</button>
        </div>
      </div>

      <div className="feature-card">
        <img src="/img/barfchick.png" alt="Barf Chick" />
        <div className="feature-content">
          <h2>BARF CHICK</h2>
          <button>ALIŞVERİŞE BAŞLA</button>
        </div>
      </div>

      <div className="feature-card">
        <img src="/img/barfecomix.png" alt="Barf Ecomix" />
        <div className="feature-content">
          <h2>BARF ECOMIX</h2>
          <button>ALIŞVERİŞE BAŞLA</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
