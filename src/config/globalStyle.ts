import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #121414;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
