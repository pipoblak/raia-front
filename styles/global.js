import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body, html, #__next {
    padding: 0;
    margin: 0;
    font-family: Open Sans, Helvetica, sans-serif, arial;
  }
  #__next{
    height: 100vh;
    width: 100vw;
  }
  * {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
