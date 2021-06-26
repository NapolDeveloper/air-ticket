import { createGlobalStyle } from 'styled-components';

import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
  }
  button{
    text-decoration: none;
    border: none;
  }
  input:focus{
    outline: none;
  }
`;

export default GlobalStyle;
