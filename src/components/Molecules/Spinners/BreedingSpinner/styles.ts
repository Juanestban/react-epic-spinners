import styled from 'styled-components'
import { keyframes } from './animation'
import { FC } from 'react'

const sizeCSS = ({ size = 65, other = 7.5 }) => `calc(${size}px / ${other})`
const sizePositionCSS = ({ size = 65, other = 2.3077 }) =>
  `calc(${size}px / ${other})`
const durationCSS = ({ duration = 2000 }) => `${duration}ms`
const bgCSS = ({ color = '#ff1d5e' }) => color

export const BreendingSpinnerContainer = styled.div`
  width: ${(props: any) => `${props.size}px`};
  height: ${(props: any) => `${props.size}px`};
  position: relative;
  transform: rotate(45deg);
` as unknown as FC<any>

export const RhombusContent = styled.div`
  width: ${sizeCSS};
  height: ${sizeCSS};
  position: absolute;
  animation-duration: ${durationCSS as any};
  top: ${sizePositionCSS};
  left: ${sizePositionCSS};
  background-color: ${bgCSS};
  box-sizing: border-box;
  animation-iteration-count: infinite;

  &:nth-child(2n + 0) {
    margin-right: 0;
  }
  animation-name: breeding-rhombus-spinner-animation-child-${({ id }) => id};
  animation-delay: calc(100ms * ${({ id }) => id});

  ${keyframes()}
` as unknown as FC<any>

export const RhombusContentBig = styled.div`
  width: ${({ size }: any) => sizeCSS({ size, other: 3 })};
  height: ${({ size }: any) => sizeCSS({ size, other: 3 })};
  animation-duration: ${durationCSS};
  top: ${({ size }: any) => sizePositionCSS({ size, other: 3 })};
  left: ${({ size }: any) => sizePositionCSS({ size, other: 3 })};
  background-color: ${bgCSS};
  box-sizing: border-box;
  animation: breeding-rhombus-spinner-big 2s infinite;
  animation-delay: 0.5s;

  @keyframes breeding-rhombus-spinner-big {
    50% {
      transform: scale(0.5);
    }
  }
` as unknown as FC<any>
