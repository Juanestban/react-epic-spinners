import { FlowerSpinner as FlowerSpinnerContainer } from './styles'

export const FlowerSpinner = (props) => {
  return (
    <FlowerSpinnerContainer {...props}>
      <div className="dots-container">
        <div className="bigger-dot">
          <div className="smaller-dot" />
        </div>
      </div>
    </FlowerSpinnerContainer>
  )
}
