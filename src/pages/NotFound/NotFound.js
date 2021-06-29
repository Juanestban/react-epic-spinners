import { ContainerNotFound, Figure } from './styles'
import notFoundImg from '../../assets/img/not-found.svg'

export default function NotFoundPage() {
  return (
    <ContainerNotFound>
      <Figure>
        <img src={notFoundImg} alt="not found" />
      </Figure>
    </ContainerNotFound>
  )
}
