import styled from 'styled-components'
import Button from '../../Atoms/Button'

export const Container = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export const BgCode = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: var(--background-color-code);

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`

export const ButtonIcon = styled(Button)`
  padding: 5px 7px;
  color: white;
  border-radius: 5px;

  &:hover {
    border-color: var(--hover-code);
  }

  &:focus {
    border-color: var(--hover-code);
  }
`

export const CodeContain = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    code {
      font-size: 14px;
    }
  }
`
