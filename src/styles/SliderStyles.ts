import { css, keyframes } from "styled-components"

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  33.33% {
    transform: scale(1.2);
  }
  66.66% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const SliderStyles = css`
  .swiper-slide.swiper-slide-active {
    animation: ${scaleUp} 3s ease-in-out 3s forwards;
  }
    
  .swiper-slide {
    max-width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    scale: 0.8;
    
    @media (min-width: 501px) {
      width: 100%;
      max-width: 493px;
    }
  }
`
