const shemeKeyframe = ({
  x,
  y,
  id,
}: any) => `@keyframes breeding-rhombus-spinner-animation-child-${id} {
  50% {
    transform: translate(${x},${y});
  }
}
`

export const keyframes = () => {
  let compilate = ``
  const values = [
    { id: 1, x: '-225%', y: '-225%' },
    { id: 2, x: '0', y: '-225%' },
    { id: 3, x: '225%', y: '-225%' },
    { id: 4, x: '225%', y: '0' },
    { id: 5, x: '225%', y: '225%' },
    { id: 6, x: '0', y: '225%' },
    { id: 7, x: '-225%', y: '225%' },
    { id: 8, x: '-225%', y: '0' },
  ]

  for (const val of values) {
    compilate += shemeKeyframe({ ...val })
  }
  return compilate
}
