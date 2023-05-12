import { HalfCircleContainer } from './styles'

export const HalfCircleSpinner = (props: any) => {
  return (
    <HalfCircleContainer {...props}>
      <div className="circle circle-1" />
      <div className="circle circle-2" />
    </HalfCircleContainer>
  )
}
