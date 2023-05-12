import styled from 'styled-components'

const widthAndHeight = ({ size = 70 }) => `${size}px`
const dotsWidthAndHeight = ({ size = 70 }) =>
  `calc(${widthAndHeight({ size })} / 7)`

const smallerDotColor = ({ color = '#ff1d5e' }) => color
const durations = ({ duration = 2.5 }) => `${duration}s`
const smallerDotWidthAndHeight = '100%'

// arg = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0] ,[0, 0, 0], [0, 0, 0]]
const animationBoxShadow = (arg: (number | string)[][], color: string) => {
  const repeats = Array.from({ length: 8 }).map((_, index) => arg[index])
  return repeats
    .map(
      (el, index) =>
        `${color} ${el.join(' ')}${repeats.length === index + 1 ? '' : ','}`
    )
    .join('\n')
}

export const FlowerSpinner = styled.div`
  width: ${widthAndHeight as any};
  height: ${widthAndHeight as any};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & .dots-container {
    width: ${dotsWidthAndHeight as any};
    height: ${dotsWidthAndHeight as any};
  }

  & .smaller-dot,
  & .bigger-dot {
    background-color: ${smallerDotColor};
    width: ${smallerDotWidthAndHeight};
    height: ${smallerDotWidthAndHeight};
    border-radius: 50%;
    animation: flower-spinner-smaller-dot-animation ${durations as any} 0s
      infinite both;
  }

  & .bigger-dot {
    padding: 10%10%;
    animation: flower-spinner-bigger-dot-animation ${durations as any} 0s
      infinite both;
  }

  @keyframes flower-spinner-bigger-dot-animation {
    0%,
    100% {
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          color
        )};
    }

    50% {
      transform: rotate(180deg);
    }

    25%,
    75% {
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            ['26px', 0, 0],
            ['-26px', 0, 0],
            [0, '26px', 0],
            [0, '-26px', 0],
            ['19px', '-19px', 0],
            ['19px', '19px', 0],
            ['-19px', '-19px', 0],
            ['-19px', '19px', 0],
          ],
          color
        )};
    }

    100% {
      transform: rotate(360deg);
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          color
        )};
    }
  }

  @keyframes flower-spinner-smaller-dot-animation {
    0%,
    100% {
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          color
        )};
    }

    50% {
      transform: rotate(180deg);
    }

    25%,
    75% {
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            ['14px', 0, 0],
            ['-14px', 0, 0],
            [0, '14px', 0],
            [0, '-14px', 0],
            ['10px', '-10px', 0],
            ['10px', '10px', 0],
            ['-10px', '-10px', 0],
            ['-10px', '10px', 0],
          ],
          color
        )};
    }

    100% {
      transform: rotate(360deg);
      box-shadow: ${({ color = 'rgb(255,29,94)' }: any) =>
        animationBoxShadow(
          [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          color
        )};
    }
  }
`
