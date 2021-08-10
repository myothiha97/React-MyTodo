import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.theme ? "rgb(20,20,20)" : "white")};
    }

    #root {
    height: 100%;
    }

    input,
    input:focus,
    input:active {
    outline: none;
    border: none;
    }

    a {
    text-decoration: none;
    }

    li {
    list-style: none;
    }

    button,
    button:focus,
    button:active {
    outline: none;
    border: none;
    }

`;

export default GlobalStyle;
