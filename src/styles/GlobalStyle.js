import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
    ${'' /* background-color: ${(props) => props.theme.color.background}; */}
    background: linear-gradient(to bottom, #1b1b1b, #2a2a2a);
    color: ${(props) => props.theme.color.primary};
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
  }

`
export default GlobalStyle
