import { positionsTransformed } from './positionsCircles'
import { IntersecCirclesContainer } from './styles'

export const IntersecCirclesSpinners = (props) => {
  const { sizeCircle } = props
  const circles = positionsTransformed(sizeCircle)

  return (
    <IntersecCirclesContainer {...props}>
      <div className="spinner-block">
        {circles.map((pos = {}) => (
          <div className="circle" style={pos} />
        ))}
      </div>
    </IntersecCirclesContainer>
  )
}
