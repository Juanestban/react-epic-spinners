import { HTMLProps, FC } from 'react'
import styled from 'styled-components'

export const Paragraph = styled.p`
  font-size: 19px;
  margin: 0;
  padding: 0 20px;
  font-family: 'Titillium Web', sans-serif;
` as unknown as FC<HTMLProps<HTMLParagraphElement>>
