import { FulfillBounCircleContainer } from './styles'

export const FulfillBounCircleSpinner = (props: any) => {
  return (
    <FulfillBounCircleContainer {...props}>
      <div className="circle" />
      <div className="orbit" />
    </FulfillBounCircleContainer>
  )
}
