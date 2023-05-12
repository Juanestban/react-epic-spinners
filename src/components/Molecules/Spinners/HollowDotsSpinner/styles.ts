import { FC } from 'react'
import styled from 'styled-components'

const getColor = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 1000 }) => `${duration}ms`
const getSize = ({ sizeCircle = 18 }) => `${sizeCircle}px`

export const HollowDotsContainer = styled.div`
  width: ${getSize};
  height: ${getSize};

  & .dot {
    width: ${getSize};
    height: ${getSize};
    margin: 2px calc(${getSize} / 2);
    border: calc(${getSize} / 4) solid ${getColor};
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollowDotsAnimation ${getDuration as any} infinite 0ms;
  }

  @keyframes hollowDotsAnimation {
    50% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
` as unknown as FC<any>
