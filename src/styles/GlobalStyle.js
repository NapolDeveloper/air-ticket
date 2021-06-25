import { createGlobalStyle } from 'styled-components';

import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
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
