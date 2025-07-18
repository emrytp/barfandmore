import React from 'react';
import './SssPage.css';

const SssPage = () => {
  return (
    <div className="sss-container">
      <h2>Sıkça Sorulan Sorular</h2>

      <details>
        <summary>Barf Mama’nın Faydaları Nelerdir?</summary>
        <p>
          İçerdiği yüksek protein ile daha yüksek enerji ve kas kütlesi oluşumunu destekler.
          Barf dostlarımızın ömrünü uzatır, bağışıklığı artırır. İçerdiği çiğ kemik ile dostlarımızın
          dişlerini beyazlatır ve diş taşı sorununu en aza indirir. Ağız kokusu ve dışkılamayı azaltır.
          Taze et ve sebzelerin oluşturduğu koyu ve sağlıklı dışkılama ile sindirim sistemini destekler.
          Güçlü bir bağışıklık ve sağlıklı bir sindirim sistemine sahip olmalarını sağlar.
          Tüy dökülmesini büyük oranda azaltır. Daha sağlıklı bir deri, kürk ve tırnaklara sahip olmalarını sağlar.
          Daha iyi kilo kontrolü, yağsız vücut kitlesi için dostunuzun sağlığını destekler.
        </p>
      </details>

      <details>
        <summary>Barf Beef/Chick ve Barf Ecomix arasında fark nedir?</summary>
        <p>
          Barf Ecomix tavuk, et ve sebze karışımından yapılmaktadır.
          Barf Beef tek çeşit et ve sebzelerden, Barf Chick ise tavuk ve sebzelerden yapılmaktadır.
        </p>
      </details>
    </div>
  );
};

export default SssPage;
