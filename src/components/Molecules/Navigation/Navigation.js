import Title from '../../Atoms/Title'
import { Header, Contain, Link } from './styles'

export const Navigation = () => {
  return (
    <Header>
      <Contain>
        <Title>React Epic Spinners</Title>
      </Contain>
      <Contain>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>
      </Contain>
    </Header>
  )
}
