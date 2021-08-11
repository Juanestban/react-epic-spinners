import styled from 'styled-components'

export const ContainerCard = styled.article`
  /* change this part and use the display: grid */
  display: grid;
  gap: 1rem;
  padding: 0 10px;
  padding-top: 20px;
  grid-auto-flow: dense;
  grid-auto-rows: 12rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
`

export const Card = styled.div`
  /* width: calc(100% / 4); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 25px;
`
