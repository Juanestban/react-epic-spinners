import defaultProps from '../../../../config/defaultProps'
import {
  BreendingSpinnerContainer,
  RhombusContent,
  RhombusContentBig,
} from './styles'

export const BreedingSpinner = ({ size, color, duration } = defaultProps) => {
  const rhombusArray = ['', '', '', '', '', '', '', '']
  return (
    <BreendingSpinnerContainer size={size}>
      {rhombusArray.map((_, index) => (
        <RhombusContent
          key={index}
          size={size}
          color={color}
          duration={duration}
          id={index + 1}
        />
      ))}
      <RhombusContentBig size={size} color={color} duration={duration} />
    </BreendingSpinnerContainer>
  )
}
