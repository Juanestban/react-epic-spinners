import { FC } from 'react'
import styled from 'styled-components'

const getSize = ({ size = 15 }) => `${size}px`
const sizeCSS = ({ size = 15 }) => `calc((${size}px + ${size}px * 1.125) * 3)`
const durationCSS = ({ duration = 1200 }) => `${duration}ms`
const bgCSS = ({ color = '#ff1d5e' }) => color

export const ContainerCircle = styled.div`
  box-sizing: border-box;
  width: ${sizeCSS};
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 30px;
  justify-content: center;
  .div {
    box-sizing: border-box;
  }
`
export const SpinnerCircle = styled.div`
  width: ${getSize};
  height: ${getSize};
  margin-left: calc(${getSize} * 1.125);
  transform: rotate(45deg);
  border-radius: 10%;
  border: 3px solid ${bgCSS};
  overflow: hidden;
  background-color: transparent;

  animation: circles-to-rhobuses-animation ${durationCSS as any} linear infinite;

  &:nth-child(1) {
    animation-delay: calc(150ms * 1);
    margin-left: 0;
  }

  &:nth-child(2) {
    animation-delay: calc(150ms * 2);
  }

  &:nth-child(3) {
    animation-delay: calc(150ms * 3);
  }

  @keyframes circles-to-rhobuses-animation {
    0% {
      border-radius: 10%;
    }

    17.5% {
      border-radius: 10%;
    }

    50% {
      border-radius: 100%;
    }

    93.5% {
      border-radius: 10%;
    }

    100% {
      border-radius: 10%;
    }
  }
` as unknown as FC<any>
