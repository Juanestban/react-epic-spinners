import styled from 'styled-components'
import { animationAtomSpinner, keyframeAtomSpinner } from './animation'

// container of spinner

const returnSize = ({ size = 60 }) => `${size}px`
const calcSize = ({ size = 60 }) => `calc(${returnSize({ size })} * 0.24)`
const returnColor = ({ color = '#ff1d5e' }) => color
const returnAnimation = ({ duration = 1000 }) => `${duration}ms`
const calcLine = ({ size = 60 }) => `calc(${size}px / 25)`

export const ContainerSpinner = styled.div`
  width: ${returnSize};
  height: ${returnSize};
  overflow: hidden;
`

// spinner inner

export const SpinnerInner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`

// spinner-circle

export const SpinnerCircle = styled.div`
  display: block;
  position: absolute;
  color: ${returnColor};
  font-size: ${calcSize};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// spinner-line
export const SpinnerLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: ${returnAnimation};
  border-top-color: transparent;
  border-top-width: ${calcLine};
  border-left-width: ${calcLine};
  border-left-color: ${returnColor};
  border-left-style: solid;
  border-top-style: solid;

  ${({ duration = 1000 }) => animationAtomSpinner(duration)}

  ${keyframeAtomSpinner()}
`
