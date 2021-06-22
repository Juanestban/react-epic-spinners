import defaultProps from '../../../config/defaultProps'
import {
  ContainerSpinner,
  SpinnerInner,
  SpinnerCircle,
  SpinnerLine,
} from './styles'

export const AtomSpinner = ({ size, color, duration } = defaultProps) => {
  return (
    <ContainerSpinner>
      <SpinnerInner>
        <SpinnerLine />
        <SpinnerLine />
        <SpinnerLine />
        <SpinnerCircle>&#9679;</SpinnerCircle>
      </SpinnerInner>
    </ContainerSpinner>
  )
}
