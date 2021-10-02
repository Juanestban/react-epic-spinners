import styled from 'styled-components'

const getColor = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 1200 }) => `${duration}ms`
const getSize = ({ size = 70 }) => `${size}px`
const getSizeCircle = ({ sizeCircle = 35 }) => `${sizeCircle}px`

export const IntersecCirclesContainer = styled.div`
  width: ${getSize};
  height: ${getSize};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & .spinner-block {
    display: block;
    width: ${getSizeCircle};
    height: ${getSizeCircle};
    transform-origin: center;
    animation: intersectionCirclesAnimation ${getDuration} linear infinite;
  }

  & .spinner-block .circle {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${getColor};
  }

  @keyframes intersectionCirclesAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
