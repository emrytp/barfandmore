// src/components/Loader.jsx
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-text">
        <span>B</span>
        <span>A</span>
        <span>R</span>
        <span>F</span>
        <span>&nbsp;</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>&nbsp;</span>
        <span>M</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-text {
    display: flex;
    gap: 8px;
    font-size: 32px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }

  .loader-text span {
    display: inline-block;
    animation: bounce 0.4s infinite ease-in-out;
    color: #000000ff;
  }

  .loader-text span:nth-child(1) { animation-delay: 0s; }
  .loader-text span:nth-child(2) { animation-delay: 0.1s; }
  .loader-text span:nth-child(3) { animation-delay: 0.2s; }
  .loader-text span:nth-child(4) { animation-delay: 0.3s; }
  .loader-text span:nth-child(5) { animation-delay: 0.4s; }
  .loader-text span:nth-child(6) { animation-delay: 0.5s; }
  .loader-text span:nth-child(7) { animation-delay: 0.6s; }
  .loader-text span:nth-child(8) { animation-delay: 0.7s; }
  .loader-text span:nth-child(9) { animation-delay: 0.8s; }
  .loader-text span:nth-child(10) { animation-delay: 0.9s; }
  .loader-text span:nth-child(11) { animation-delay: 1s; }
  .loader-text span:nth-child(12) { animation-delay: 1.1s; }
  .loader-text span:nth-child(13) { animation-delay: 1.2s; }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default Loader;
