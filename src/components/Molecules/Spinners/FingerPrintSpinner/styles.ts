import styled from 'styled-components'
import { animations } from './animations'
import { FC } from 'react'

const getSize = ({ size = 64 }) => `${size}px`
const getRingSize = ({ size = 64, index = 0 }) =>
  `${(size - 2 * 2) / 9 + (index + 2) * ((size - 2 * 2) / 9)}px`
const getBg = ({ color = '#ff1d5e' }) => color
const getDuration = ({ duration = 1500 }) => `${duration}ms`
const getDelay = ({ index }: any) => `${index * 50}ms`

export const ContainerFinger = styled.div`
  height: ${getSize};
  width: ${getSize};
  padding: 2px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`

export const SpinnerRing = styled.div`
  width: ${getRingSize};
  height: ${getRingSize};
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${getBg};
  animation: fingerprint-spinner-animation ${getDuration as any}
    cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
  margin: auto;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  animation-duration: ${getDuration as any};
  animation-delay: ${getDelay};
  box-sizing: border-box;

  ${animations()}

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
` as unknown as FC<any>
