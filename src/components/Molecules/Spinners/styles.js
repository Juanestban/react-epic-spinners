import styled from 'styled-components'

const calc = 'calc(60px / 25)'

// container of spinner

export const ContainerSpinner = styled.div`
  width: 60px;
  height: 60px;
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
  color: #ff1d5e;
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// spinner-line

const animation = [
  { z: '120deg', x: '66deg', z2: '0deg' },
  { z: '240deg', x: '66deg', z2: '0deg' },
  { z: '360deg', x: '66deg', z2: '0deg' },
]

const keyframe = [
  { z: '120deg', x: '66deg', z2: '360deg' },
  { z: '240deg', x: '66deg', z2: '360deg' },
  { z: '360deg', x: '66deg', z2: '360deg' },
]

const keyframeReducer = () =>
  keyframe.reduce(
    (prevVal, { x, z, z2 }, currentIndex) => `${prevVal}

@keyframes atomSpinnerAnimation-${currentIndex + 1} {
  100% {
    transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  }
}`
  )

const animationReducer = () =>
  animation.reduce(
    (prevVal, { x, z, z2 }, currentIndex) => `${prevVal}

    &:nth-child(${currentIndex + 1}) {
      animation: atomSpinnerAnimation-${currentIndex + 1} 1s linear infinite;
      transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
    }`
  )

export const SpinnerLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-top-width: ${calc};
  border-top-color: transparent;
  border-left-width: ${calc};
  border-left-color: #ff1d5e;
  border-left-style: solid;
  border-top-style: solid;

  ${animationReducer()}

  ${keyframeReducer()}
`
