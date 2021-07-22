import styled from 'styled-components'

export const InputSearch = styled.input`
  border: 1px solid transparent;
  border-radius: 2rem;
  color: var(--spotify-green);
  font-weight: bold;
  padding: 1rem;
  outline: none;
  transition: all 0.3s ease;
  width: 30rem;

  &:focus {
    border: 1px solid var(--spotify-green);
  }

  &::placeholder {
    color: var(--spotify-green);
    font-size: 1.3rem;
    font-weight: bold;
  }
`
