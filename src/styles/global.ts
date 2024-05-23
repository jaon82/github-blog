import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    ${mixins.fonts.textM};
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }
  button {
    border: none;
    cursor: pointer;
  }
`;
