import { Helmet } from 'react-helmet-async'
import { Container } from './styles'
import Title from '../../components/Atoms/Title'
import Text from '../../components/Atoms/Text'
import ContainerCodeCopy from '../../components/Molecules/ContainerCodeCopy'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Title>React Epic Spinners</Title>
        <Text>This components epic spinners implemented for use in React.</Text>
      </Container>
      <ContainerCodeCopy />
    </>
  )
}
