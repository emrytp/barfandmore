import React from "react";
import "./Footer.css"; // varsa stil dosyası

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Sosyal Medya Hesaplarımız</h4>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Barf and More</h4>
          <ul>
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#">Ürünler</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Müşteri Hizmetleri</h4>
          <ul>
            <li><a href="#">KVKK</a></li>
            <li><a href="#">S.S.S</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 Tüm Hakları Saklıdır - Endo Gıda A.Ş.</p>
      </div>
    </footer>
  );
};

export default Footer; // ✅ Eksik olan kısım bu
