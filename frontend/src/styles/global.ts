import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    color: #FFEBE4;
    background-color: #1e2126;
    -webkit-font-smoothing: antialiased
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  #root {
    height: 100%;
  }
  
  @media (max-width: 1280px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 767px) {
    html {
      font-size: 87.5%;
    }
  }
  
  @media (max-width: 539px) {
    a,
    button,
    div {
      cursor: default !important;
    }
  }
`;
