import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`

export const Sidebar = styled.aside`
  height: 100%;
  padding: 2rem;
  width: 25rem;

  .logo {
    display: block;
    fill: #fff;
    margin: 0 auto;
    width: 15rem;
  }
`

export const Content = styled.section`
  background-color: var(--white);
  flex-grow: 1;
  padding: 2rem;
  position: relative;
  height: 100%;
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const SongsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 75vh;
  justify-content: space-between;
  margin: 2rem 0;
  max-width: 1250px;
  overflow-y: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: var(--white);
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: var(--white);
  }
`

export const PlayerWrapper = styled.div`
  width: 70rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-bottom: 2rem;
  transform: translateX(-50%);
  z-index: 2;
`

export const Lyrics = styled.div`
  text-align: center;
  white-space: pre;
`
