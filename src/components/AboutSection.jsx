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
          Dogs are naturally raw feeders. Although dry food is commonly used today,
          BARF nutrition is the most natural form of feeding for dogs. Instead of
          commercial dry foods with long shelf lives, BARF diets keep dogs both
          healthier and happier.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
