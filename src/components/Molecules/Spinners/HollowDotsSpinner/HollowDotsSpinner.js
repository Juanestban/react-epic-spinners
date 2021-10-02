import { HollowDotsContainer } from './styles'

export const HollowDotsSpinner = ({ color, sizeCircle, duration }) => {
  const circles = Array.from({ length: 3 })
  const caclDelay = (index) => `calc(300ms * ${index})`

  return (
    <HollowDotsContainer
      color={color}
      duration={duration}
      sizeCircle={sizeCircle}
    >
      {circles.map((_, index) => {
        const styleDelay = { animationDelay: caclDelay(index + 1) }
        return <div key={index} className="dot" style={styleDelay} />
      })}
    </HollowDotsContainer>
  )
}
