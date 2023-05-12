/* eslint-disable @typescript-eslint/no-explicit-any */
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

const keyframeAtomSpinner = () => {
  const keyframeStringify = keyframe
    .map(({ x, z, z2 }, index) => {
      return `@keyframes atomSpinnerAnimation-${index + 1} {
100% {
  transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
}
}`
    })
    .join('')

  return keyframeStringify

  //   return keyframe.reduce(
  //     (prevVal: any, { x, z, z2 }: any, currentIndex: number) =>
  //       typeof prevVal === 'object'
  //         ? `@keyframes atomSpinnerAnimation-1 {
  //   100% {
  //     transform: rotateZ(${prevVal.z}) rotateX(${prevVal.x}) rotateZ(${prevVal.z2});
  //   }
  // }
  // @keyframes atomSpinnerAnimation-2 {
  //   100% {
  //     transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  //   }
  // }`
  //         : `${prevVal}

  // @keyframes atomSpinnerAnimation-${currentIndex + 1} {
  //   100% {
  //     transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  //   }
  // }`
  //   )
}

const animationAtomSpinner = (duration = 1000) => {
  const stylesToString = animation
    .map(({ x, z, z2 }, index) => {
      return `&:nth-child(${index + 1}) {
animation: atomSpinnerAnimation-${index + 1} ${duration}ms linear infinite;
transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
}`
    })
    .join('')

  return stylesToString

  // return animation.reduce((prevVal, { x, z, z2 }, currentIndex) =>
  //   typeof prevVal === 'object'
  //     ? `&:nth-child(1) {
  //       animation: atomSpinnerAnimation-1 ${duration}ms linear infinite;
  //       transform: rotateZ(${prevVal.z}) rotateX(${prevVal.x}) rotateZ(${prevVal.z2});
  //     }
  //     &:nth-child(2) {
  //       animation: atomSpinnerAnimation-2 ${duration}ms linear infinite;
  //       transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  //     }`
  //     : `${prevVal}

  //   &:nth-child(${currentIndex + 1}) {
  //     animation: atomSpinnerAnimation-${
  //       currentIndex + 1
  //     } ${duration}ms linear infinite;
  //     transform: rotateZ(${z}) rotateX(${x}) rotateZ(${z2});
  //   }`
  // )
}

export { keyframeAtomSpinner, animationAtomSpinner }
