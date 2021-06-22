import { Helmet } from 'react-helmet-async'
import { Container, ContainerTitle } from './styles'
import Title from '../../components/Atoms/Title'
import Text from '../../components/Atoms/Text'
import ContainerCodeCopy from '../../components/Molecules/ContainerCodeCopy'
import { AtomSpinner } from '../../components/Molecules/Spinners'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <ContainerTitle>
          <Title>React Epic Spinners</Title>
          <Text>
            This components epic spinners implemented for use in React.
          </Text>
        </ContainerTitle>
        <ContainerCodeCopy />
        <AtomSpinner />
      </Container>
    </>
  )
}
