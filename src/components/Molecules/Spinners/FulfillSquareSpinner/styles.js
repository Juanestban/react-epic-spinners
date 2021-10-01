import styled from 'styled-components'

const getSize = ({ size = 64 }) => `${size}px`
const getBg = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 3000 }) => `${duration}ms`

export const FulfillingContainer = styled.div`
  width: ${getSize};
  height: ${getSize};
  position: relative;
  border: 4px solid ${getBg};
  animation: fulfillingSquareSpinner ${getDuration} infinite ease;

  @keyframes fulfillingSquareSpinner {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const SpinnerInner = styled.div`
  vertical-align: top;
  display: inline-block;
  background-color: ${getBg};
  width: 100%;
  opacity: 1;
  animation: fulfillingInnerSpinner ${getDuration} infinite ease;

  @keyframes fulfillingInnerSpinner {
    0% {
      height: 0;
    }
    25% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
`
