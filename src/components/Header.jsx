import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/img/logo.png" alt="Barf and More Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Anasayfa</Link>
        <Link to="/urunler">Ürünler</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/iletisim">İletişim</Link>
      </nav>

      <div className="icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default Header;
