import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Sayfa bulunamadı.</p>
      <a href="/">Anasayfa'ya dön</a>
    </div>
  );
};

export default NotFound;
