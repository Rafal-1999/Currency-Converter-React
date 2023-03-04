import { createGlobalStyle } from "styled-components";
import euroImage from "./images/backgrounds/euro.jpg";

export const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
    }
    html {
        box-sizing: inherit;
    }
    body {
        background-image: url("${euroImage}");
    }
`;
