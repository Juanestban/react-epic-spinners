import { FulfillBounCircleContainer } from './styles'

export const FulfillBounCircleSpinner = (props) => {
  return (
    <FulfillBounCircleContainer {...props}>
      <div className="circle" />
      <div className="orbit" />
    </FulfillBounCircleContainer>
  )
}
