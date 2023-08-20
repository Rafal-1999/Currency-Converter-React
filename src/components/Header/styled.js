import styled from "styled-components";

export const HeaderArea = styled.header`
    background: rgba(230, 230, 230, 0.5);
    margin-bottom: 20px;
    padding: 10px;
`;

export const HeaderOne = styled.h1`
    margin-top: 0;
    font-size: 28px;

    @media (min-width: 576px) {
        font-size: 34px;
    }
`;

export const Description = styled.p`
    margin: 0;
    font-size: 20px;
`;
