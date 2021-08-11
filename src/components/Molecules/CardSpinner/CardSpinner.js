import Spinners, { nameSpinners } from '../Spinners'
import Text from '../../Atoms/Text'
import { ContainerCard, Card } from './styles'

export const CardSpinner = () => {
  const keySpinners = Object.keys(Spinners)

  return (
    <ContainerCard>
      {keySpinners.map((name, i) => {
        const Spinner = Spinners[[name]]
        return (
          <Card key={i}>
            <Spinner color="#09f" size={80} />
            <Text style={{ marginTop: 10, textAlign: 'center' }}>
              {nameSpinners[i]}
            </Text>
          </Card>
        )
      })}
    </ContainerCard>
  )
}
