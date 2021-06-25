import styled from 'styled-components'

export const BreendingSpinnerContainer = styled.div`
  width: 65px;
  height: 65px;
  position: relative;
  transform: rotate(45deg);
`

const sizeCSS = ({ size = 65, other = 7.5 }) => `calc(${size}px / ${other})`
const sizePositionCSS = ({ size = 65, other = 2.3077 }) =>
  `calc(${size}px / ${other})`
const durationCSS = ({ duration = 2000 }) => `${duration}ms`
const bgCSS = ({ color = '#ff1d5e' }) => color

export const RhombusContent = styled.div`
  width: ${sizeCSS};
  height: ${sizeCSS};
  position: absolute;
  animation-duration: ${durationCSS};
  top: ${sizePositionCSS};
  left: ${sizePositionCSS};
  background-color: ${bgCSS};
  box-sizing: border-box;
  animation-iteration-count: infinite;

  &:nth-child(2n + 0) {
    margin-right: 0;
  }
`

export const RhombusContentBig = styled.div`
  width: ${({ size }) => sizeCSS({ size, other: 3 })};
  height: ${({ size }) => sizeCSS({ size, other: 3 })};
  animation-duration: ${durationCSS};
  top: ${({ size }) => sizePositionCSS({ size, other: 3 })};
  left: ${({ size }) => sizePositionCSS({ size, other: 3 })};
  background-color: ${bgCSS};
  animation-delay: 500ms;
  box-sizing: border-box;
  animation: breeding-rhombus-spinner-big 2s infinite;

  @keyframes breeding-rhombus-spinner-big {
    50% {
      transform: scale(0.5);
    }
  }
`
