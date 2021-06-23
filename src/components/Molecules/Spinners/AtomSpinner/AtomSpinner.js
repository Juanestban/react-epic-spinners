import defaultProps from '../../../../config/defaultProps'
import {
  ContainerSpinner,
  SpinnerInner,
  SpinnerCircle,
  SpinnerLine,
} from './styles'

export const AtomSpinner = ({ size, color, duration } = defaultProps) => {
  return (
    <ContainerSpinner size={size}>
      <SpinnerInner>
        <SpinnerLine size={size} color={color} duration={duration} />
        <SpinnerLine size={size} color={color} duration={duration} />
        <SpinnerLine size={size} color={color} duration={duration} />
        <SpinnerCircle size={size} color={color}>
          &#9679;
        </SpinnerCircle>
      </SpinnerInner>
    </ContainerSpinner>
  )
}
