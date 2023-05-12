import styled from 'styled-components'

const getColor = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 2500 }) => `${duration}ms`
const getSize = ({ size = 60 }) => `${size}px`

const rotation = (numb: number) => `rotate(${numb}deg)`

const scale = (numb: number) => `scale(${numb})`
const scaleCero = () => scale(0.8)
const scaleOne = () => scale(1)

export const FulfillBounCircleContainer = styled.div`
  width: ${getSize};
  height: ${getSize};
  position: relative;
  animation: fulfilling-bounding-container-animation infinite
    ${getDuration as any} ease;

  & .orbit {
    width: ${getSize};
    height: ${getSize};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: calc(${getSize} * 0.03) solid ${getColor};
    animation: fulfilling-bounding-orbit-animation infinite
      ${getDuration as any} ease;
  }

  & .circle {
    height: ${getSize};
    width: ${getSize};
    color: ${getColor};
    display: block;
    animation: fulfilling-bounding-circle-animation infinite
      ${getDuration as any} ease;
    border-radius: 50%;
    position: relative;
    border: calc(${getSize} * 0.1) solid ${getColor};
    transform: rotate(0deg) scale(1);
  }

  @keyframes fulfilling-bounding-container-animation {
    0% {
      transform: ${() => rotation(0)};
    }

    100% {
      transform: ${() => rotation(360)};
    }
  }
  @keyframes fulfilling-bounding-orbit-animation {
    0% {
      transform: ${scaleOne};
    }

    50% {
      transform: ${scaleOne};
    }

    62.5% {
      transform: ${scaleCero};
    }

    75% {
      transform: ${scaleOne};
    }

    87.5% {
      transform: ${scaleCero};
    }

    100% {
      transform: ${scaleOne};
    }
  }
  @keyframes fulfilling-bounding-circle-animation {
    0% {
      transform: ${scaleOne};
      border-color: transparent;
      border-top-color: inherit;
    }

    16.7% {
      border-color: transparent;
      border-top-color: initial;
      border-right-color: initial;
    }

    33.4% {
      border-color: transparent;
      border-top-color: inherit;
      border-right-color: inherit;
      border-bottom-color: inherit;
    }

    50% {
      border-color: inherit;
      transform: ${scaleOne};
    }

    62.5% {
      border-color: inherit;
      transform: scale(1.4);
    }

    75% {
      border-color: inherit;
      transform: ${scaleOne};
      opacity: 1;
    }

    87.5% {
      border-color: inherit;
      transform: scale(1.4);
    }

    100% {
      border-color: transparent;
      border-top-color: inherit;
      transform: ${scaleOne};
    }
  }
`
