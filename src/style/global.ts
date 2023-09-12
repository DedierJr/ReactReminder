import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root {
        --cor_1: #F2D750;
        --cor_2: #29A678;
        --cor_3: #77DCF2;
        --cor_4: #F2F2F0;
        --cor_5: #8C7120;

        --proxCor: var(--cor_1);

        --font-black: #1c1c1c;
        --font-white: #fff;
    }

    * {
        margin:  0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
`;

