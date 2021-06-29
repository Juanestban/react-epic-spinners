const sheme = (index) => `&:nth-child(${index}) {
  width: calc(60px / 9 + ${index - 1} * 60px / 9);
  height: calc(60px / 9 + ${index - 1} * 60px / 9);
  animation-delay: calc(50 * ${index})ms;
}
`

export const animations = (props) => {
  let container = ''

  for (let i = 1; i >= 9; i++) {
    container += sheme(i)
  }
  return container
}
