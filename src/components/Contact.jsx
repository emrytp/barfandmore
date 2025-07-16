import React from "react";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    

{/* Google Maps */}
<div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0722365680957!2d32.7249294!3d39.8995388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34df79a122bd1%3A0x2a022c203e2b36a6!2s1920.%20Cd%2049%2C%20Mutlukent%2C%2006800%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1720961481745"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Barf and More Konum"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>



      {/* İletişim Bilgileri Kutuları */}
      <div className="contact-icons-wrapper">
        <div className="contact-icon-item">
          <img src="./img/address.png" alt="Adres" />
          <p>
            Mutlukent, 1920. Cadde 49/1,<br />
            06800 Çankaya / Ankara
          </p>
        </div>
        <div className="contact-icon-item">
          <img src="./img/phone.png" alt="Telefon" />
          <p>+90 532 567 82 80</p>
        </div>
        <div className="contact-icon-item">
          <img src="./img/email.png" alt="E-posta" />
          <p>barf[at]barfandmore.com.tr</p>
        </div>
      </div>


    </>
  );
};

export default Contact;
