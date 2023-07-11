import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderSpinner = styled.div`
    width: 50px;
    height: 50px;
    margin: 25px auto;
    border: 10px solid #F3F3F3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation-name: ${loaderAnimation};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;
