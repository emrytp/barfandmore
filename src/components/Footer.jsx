import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Sosyal Medya Hesaplarımız</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/barfandmore/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/barfandmore/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Barf and More</h4>
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/urunler">urunler</Link></li>
            <li><a href="#">Blog</a></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Müşteri Hizmetleri</h4>
          <ul>
            <li><Link to="/kvkk">KVKK</Link></li>
            <li><Link to="/sss">S.S.S</Link></li> 
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 Tüm Hakları Saklıdır - Endo Gıda A.Ş.</p>
      </div>
    </footer>
  );
};

export default Footer;
