import defaultProps from '../../../../config/defaultProps'
import { BreendingSpinnerContainer, RhombusContent } from './styles'

export const BreedingSpinner = ({ size, color, duration } = defaultProps) => {
  return (
    <BreendingSpinnerContainer>
      <RhombusContent />
    </BreendingSpinnerContainer>
  )
}
