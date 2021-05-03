import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html, body, #root {
        height: 100%;
    }

    body {
        background: #0B1417;
        color: #fff;
    }

    *, input, button, textArea {
        outline: none;
        border: none;
        font-family: 'Roboto', sans-serif;
    }

    a {
        display: block;
        text-decoration: none;
        color: #fff;
    }
    ul {list-style: none;}

`;

export default GlobalStyles