import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './HeroSlider.css';
import "slick-carousel/slick/slick.css"; // sadece bu, theme.css YOK!

// Özel geçiş butonları (← →)
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    →
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    ←
  </div>
);

const HeroSlider = () => {
  const navigate = useNavigate();

  const sliderContent = [
    {
      image: '/img/hero1.jpg',
      title1: 'TÜYLÜ DOSTLARINIZ İÇİN',
      title2: 'ALTERNATİF BESLENME ŞEKLİ',
      buttonText: 'ÜRÜNLERİMİZİ İNCELEYİN',
    },
    {
      image: '/img/hero2.jpg',
      title1: 'BARF İLE SAĞLIKLI',
      title2: 'VE MUTLU BESLENME',
      buttonText: 'ALIŞVERİŞE BAŞLA',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {sliderContent.map((slide, index) => (
          <div key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <h1 className="hero-title">
                  {slide.title1}<br />{slide.title2}
                </h1>
                <button
                  className="hero-button"
                  onClick={() => navigate('/urunler')}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
