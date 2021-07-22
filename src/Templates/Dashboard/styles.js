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

export const SongsWrapper = styled.div`
  flex-grow: 1;
  margin: 2rem 0;
  overflow-y: auto;
`

export const PlayerWrapper = styled.div`
  margin: 2rem 0;
`

export const Lyrics = styled.div`
  text-align: center;
  white-space: pre;
`
