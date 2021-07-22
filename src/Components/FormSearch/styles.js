import styled from 'styled-components'

export const InputSearch = styled.input`
  border: 1px solid transparent;
  border-radius: 0.3rem;
  color: var(--spotify-green);
  padding: 1rem;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border: 1px solid var(--spotify-green);
  }

  &::placeholder {
    color: var(--spotify-green);
  }
`
