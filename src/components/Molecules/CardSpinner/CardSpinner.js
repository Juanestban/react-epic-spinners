import Spinners from '../Spinners'
import { ContainerCard } from './styles'

export const CardSpinner = () => {
  const keySpinners = Object.keys(Spinners)

  return (
    <ContainerCard>
      {keySpinners.map((name, i) => {
        const Spinner = Spinners[[name]]
        return <Spinner key={i} color="#09f" size={100} />
      })}
    </ContainerCard>
  )
}
