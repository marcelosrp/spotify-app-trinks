import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    width: 50%;
    height: 100%;
  }

  .box-login {
    background-color: var(--white);
    flex-direction: column;

    @media (max-width: 800px) {
      padding: 0 1rem;
    }
  }

  .illustration {
    background-color: #1c2963;

    @media (max-width: 800px) {
      display: none;
    }
  }

  .logo {
    margin-bottom: 3rem;
    width: 20rem;
  }
`

export const LoginContent = styled.section`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 3rem 0;
  width: 50rem;

  @media (max-width: 800px) {
    width: 100%;
  }

  h1 {
    color: var(--background);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`
