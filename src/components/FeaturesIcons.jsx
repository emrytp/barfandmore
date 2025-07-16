import React from 'react';
import './FeaturesIcons.css';

const FeaturesIcons = () => {
  return (
    <div className="features-icons-wrapper">
      <div className="feature-icon-item">
        <img src="/img/icon1.png" alt="GDO'suz ve katkısız" />
        <p>Güçlü Bağışıklık</p>
      </div>
      <div className="feature-icon-item">
        <img src="/img/icon2.png" alt="Güvenli üretim" />
        <p>Sağılıklı Deri, Kürk ve Tırnaklar</p>
      </div>
      <div className="feature-icon-item">
        <img src="/img/icon3.png" alt="Veteriner onaylı" />
        <p>Daha İyi Sindirim</p>
      </div>
    </div>
  );
};

export default FeaturesIcons;
