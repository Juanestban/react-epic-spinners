import defaultProps from '../../../../config/defaultProps'
import {
  ContainerSpinner,
  SpinnerInner,
  SpinnerCircle,
  SpinnerLine,
} from './styles'

export const AtomSpinner = ({ size, color, duration } = defaultProps) => {
  const spnLine = ['', '', '']

  return (
    <ContainerSpinner size={size}>
      <SpinnerInner>
        {spnLine.map((_, i) => (
          <SpinnerLine key={i} size={size} color={color} duration={duration} />
        ))}
        <SpinnerCircle size={size} color={color}>
          &#9679;
        </SpinnerCircle>
      </SpinnerInner>
    </ContainerSpinner>
  )
}
