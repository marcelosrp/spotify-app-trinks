import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --spotify-green: #1db954;
    --white: #eee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  
  a {
    color: var(--highlight);
  }

  .ReactModal__Content {
    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 2rem;
      position: absolute;
      right: 1rem;
    }

    p {
      color: var(--background);
      font-size: 1.6rem;
      text-align: center;
      white-space: pre;
    }
  }
`

export default GlobalStyles
