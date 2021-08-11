import { Link as Anchor } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  min-height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 10px 5%;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--hover-code);
`

export const Contain = styled.div``

export const Link = styled(Anchor)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Titillium Web', sans-serif;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 0px 10px;

  &:hover {
    border-color: var(--hover-code);
    background-color: var(--hover-code);
  }
`
