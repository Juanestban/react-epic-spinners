import { FulfillingContainer, SpinnerInner } from './styles'

export const FulfillSquareSpinner = (props) => {
  return (
    <FulfillingContainer {...props}>
      <SpinnerInner {...props} />
    </FulfillingContainer>
  )
}
