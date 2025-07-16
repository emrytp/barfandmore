import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">Barf and More</h2>
        <p className="about-text">
          Köpekler, doğaları gereği her zaman çiğ beslenen canlılar olmuşlardır. Günümüzde genellikle kuru mamalar tercih edilse de BARF beslenme köpeklerin doğalarına en uygun beslenme biçimidir. Bir yıl raf ömrü olan kuru mamalar yerine, köpekler BARF mamalar ile hem daha sağlıklı hem daha mutlu olacaklardır.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;