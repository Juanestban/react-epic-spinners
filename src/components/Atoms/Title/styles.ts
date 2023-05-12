import { HTMLProps, FC } from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  color: var(--color-text-title);
  font-family: 'Titillium Web', sans-serif;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
` as unknown as FC<HTMLProps<HTMLHeadingElement>>
