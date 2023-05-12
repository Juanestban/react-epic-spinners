const calcPosition = (size: number, another: number | string) =>
  `calc(${size}px * ${another})`

// [top, left]
const positions = (sizeCircle = 35) => [
  [0, 0],
  [calcPosition(sizeCircle, 0.2), calcPosition(sizeCircle, -0.36)],
  [calcPosition(sizeCircle, -0.2), calcPosition(sizeCircle, -0.36)],
  [calcPosition(sizeCircle, -0.36), 0],
  [calcPosition(sizeCircle, -0.2), calcPosition(sizeCircle, 0.36)],
  [calcPosition(sizeCircle, 0.2), calcPosition(sizeCircle, 0.36)],
  [calcPosition(sizeCircle, 0.36), 0],
]

export const positionsTransformed = (sizeCircle: any) =>
  positions(sizeCircle).map(([top, left]) => ({ top, left }))
