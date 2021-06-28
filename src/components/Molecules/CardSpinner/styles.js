import styled from 'styled-components'

export const ContainerCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  padding-top: 20px;
`

export const Card = styled.div`
  width: calc(100% / 4);
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 25px;
`
