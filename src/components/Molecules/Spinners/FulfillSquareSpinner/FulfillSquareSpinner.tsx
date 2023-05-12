import { FulfillingContainer, SpinnerInner } from './styles'

export const FulfillSquareSpinner = (props: any) => {
  return (
    <FulfillingContainer {...props}>
      <SpinnerInner {...props} />
    </FulfillingContainer>
  )
}
