import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${ props => props.theme.colors.body }; 
    font-size: ${ props => props.theme.fonts.bodySize };
    font-family: 'Montserrat';
    line-height: 1.5;
  }
 
  
  /* browser compatibility - remove outline */
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="submit"],
  input[type="number"],
  input[type="tel"] {
    box-sizing: border-box;
    width: 100%;
    &:focus, &:active, &:visited {
      outline: none;
      -moz-outline-style: none;
    }
  }
  
`;

export default GlobalStyle;