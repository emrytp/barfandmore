import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Sosyal Medya Hesaplarımız</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
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

export default Footer;
