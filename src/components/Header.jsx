import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
        <FiSearch />
        <FiUser />
        <FiShoppingCart />
      </div>
    </header>
  );
};

export default Header;
