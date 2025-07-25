import React from 'react';
import './BarfMarquee.css';

/**
 * BarfMarquee component creates a smooth, horizontally-scrolling marquee banner.
 * It repeats the text "Barf and More" using two flex groups to ensure seamless animation.
 */
const BarfMarquee = () => {
  return (
    <div className="barf-marquee-wrapper">
      <div className="marquee">
        <div className="marquee__inner">
          {/* Group 1: Repeated text spans */}
          <div className="marquee__group">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={`marquee1-${index}`}>Barf and More</span>
            ))}
          </div>
          {/* Group 2: Duplicate for infinite loop effect */}
          <div className="marquee__group">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={`marquee2-${index}`}>Barf and More</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarfMarquee;
