import { ContainerCircle, SpinnerCircle } from './styles'

export const CirclesRhumbusesSpinner = ({ color, duration }: any) => {
  const circles = ['', '', '']

  return (
    <ContainerCircle>
      {circles.map((_, index) => (
        <SpinnerCircle key={index} color={color} duration={duration} />
      ))}
    </ContainerCircle>
  )
}
