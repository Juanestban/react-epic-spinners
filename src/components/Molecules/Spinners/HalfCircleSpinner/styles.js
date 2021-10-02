import styled from 'styled-components'

const getColor = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 1000 }) => `${duration}ms`
const getSize = ({ size = 60 }) => `${size}px`

export const HalfCircleContainer = styled.div`
  width: ${getSize};
  height: ${getSize};
  border-radius: 100%;
  position: relative;

  & .circle {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(${getSize} / 10) solid transparent;
  }

  & .circle-1 {
    border-top-color: ${getColor};
    animation: halfCircleSpinnerAnimate ${getDuration} infinite;
  }

  & .circle-2 {
    border-bottom-color: ${getColor};
    animation: halfCircleSpinnerAnimate ${getDuration} infinite alternate;
  }

  @keyframes halfCircleSpinnerAnimate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
