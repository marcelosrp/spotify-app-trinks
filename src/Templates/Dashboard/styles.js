import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem 0;
  width: 100%;
`

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

export const SongsWrapper = styled.div`
  flex-grow: 1;
  margin: 2rem 0;
  overflow-y: auto;
`

export const PlayerWrapper = styled.div`
  margin: 2rem 0;
`
