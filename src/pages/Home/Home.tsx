import { Helmet } from 'react-helmet-async'
import { Container, ContainerTitle } from './styles'
import Text from '../../components/Atoms/Text'
import ContainerCodeCopy from '../../components/Molecules/ContainerCodeCopy'
import { CardSpinner } from '../../components/Molecules/CardSpinner'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="React Epics spinners" />
      </Helmet>
      <Container>
        <ContainerTitle>
          <Text style={{ textAlign: 'center' }}>
            This components epic spinners implemented for use in React.
          </Text>
        </ContainerTitle>
        <ContainerCodeCopy />
        <CardSpinner />
      </Container>
    </>
  )
}
