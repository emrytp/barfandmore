import React from 'react';
import './AboutSection.css';

/**
 * AboutCard component displays a short informative card about the BARF nutrition method
 * used by Barf and More. It’s centered and styled to stand out in the layout.
 */
const AboutCard = () => {
  return (
    <div className="aboutcard-wrapper">
      <div className="aboutcard">
        {/* Main title of the card */}
        <span className="aboutcard__title">Barf and More</span>

        {/* Description content of the card */}
        <p className="aboutcard__content">
         Köpekler doğaları gereği çiğ beslenirler. 
         Günümüzde kuru mama yaygın olarak kullanılsa da, 
         BARF beslenme köpekler için en doğal beslenme şeklidir. 
         Uzun raf ömrüne sahip ticari kuru mamalar yerine 
         BARF diyetiyle beslenen köpekler hem daha sağlıklı hem de daha mutlu olurlar.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
