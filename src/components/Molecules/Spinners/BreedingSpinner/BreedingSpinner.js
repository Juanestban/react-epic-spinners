import defaultProps from '../../../../config/defaultProps'
import {
  BreendingSpinnerContainer,
  RhombusContent,
  RhombusContentBig,
} from './styles'

export const BreedingSpinner = ({ size, color, duration } = defaultProps) => {
  const rhombusArray = ['', '', '', '', '', '', '', '']
  return (
    <BreendingSpinnerContainer>
      {rhombusArray.map((_, index) => (
        <RhombusContent
          key={index}
          size={size}
          color={color}
          duration={duration}
        />
      ))}
      <RhombusContentBig size={size} color={color} duration={duration} />
    </BreendingSpinnerContainer>
  )
}
