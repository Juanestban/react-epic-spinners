import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  /* padding: 0 3rem; */
  font-size: 1.25rem;
  border: 1px solid transparent;
  background: transparent;
  outline: none;
  /* transition-property: background, box-shadow; */
  /* transition-duration: 0.35s; */
  cursor: pointer;
  transition: filter 0.5s ease, box-shadow 0.2s ease-in;

  &:focus {
    /* box-shadow: 0 0 0 1px transparent, 0 0 10px 0 var(--background-color); */
    outline: none;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    background-color: var(--hover-code);
    filter: brightness(0.9);
  }

  &:disabled {
    color: #555455;
    background-color: #302e30;
    cursor: not-allowed;
  }
`
