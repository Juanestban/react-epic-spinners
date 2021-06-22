// MISSING FINISHED

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
  keyframe.reduce((prevVal, { x, z, z2 }, currentIndex) => {
    console.log(prevVal, currentIndex)
    return typeof prevVal === 'object'
      ? `@keyframes atomSpinnerAnimation-${currentIndex} {
  100% {
    transform: rotateZ(${prevVal.z}) rotateX(${prevVal.x}) rotateZ(${prevVal.z2});
  }
}`
      : `${prevVal}

@keyframes atomSpinnerAnimation-${currentIndex + 1} {
  100% {
    transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  }
}`
  })

const animationReducer = () =>
  animation.reduce(
    (prevVal, { x, z, z2 }, currentIndex) => `${prevVal}

    &:nth-child(${currentIndex + 1}) {
      animation: atomSpinnerAnimation-${currentIndex + 1} 1s linear infinite;
      transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
    }`
  )

console.log(keyframeReducer())
