import { ContainerFinger, SpinnerRing } from './styles'

export const FingerprintSpinner = ({ size, duration, color }: any) => {
  const spinner = ['', '', '', '', '', '', '', '', '']

  return (
    <ContainerFinger size={size}>
      {spinner.map((_, index) => (
        <SpinnerRing
          key={index}
          size={size}
          duration={duration}
          color={color}
          index={index + 1}
        />
      ))}
    </ContainerFinger>
  )
}
