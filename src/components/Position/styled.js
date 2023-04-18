import styled, { css } from "styled-components";

export const BoxPosition = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    ${({ topLeft }) => topLeft && css`
        grid-area: topLeft;
    `}

    ${({ top }) => top && css`
        grid-area: top;
        justify-content: center;
    `}

    ${({ topRight }) => topRight && css`
        grid-area: topRight;
        justify-content: flex-end;
    `}

    ${({ left1 }) => left1 && css`
        grid-area: left1;
    `}

    ${({ right1 }) => right1 && css`
        grid-area: right1;
        grid-column: 2 / 4;
        justify-content: flex-end;
    `}

    ${({ left2 }) => left2 && css`
        grid-area: left2;
    `}

    ${({ center }) => center && css`
        grid-area: center;
        justify-content: center;
        align-items: center;
    `}

    ${({ bottomLeft }) => bottomLeft && css`
        grid-area: bottomLeft;
    `}

    ${({ bottomRight }) => bottomRight && css`
        grid-area: bottomRight;
        grid-column: 2 / 4;
        justify-content: flex-end;
    `}
`;

export const Button = styled.button`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
`;

export const Caption = styled.p`
    margin: 0;
    font-size: 20px;
    text-transform: uppercase;
`;

export const IconLink = styled.a`
    font-size: 0;
    text-decoration: none;
`;

export const SelectCurrencies = styled.select`
    padding: 10px 15px 10px 0;
    background: rgba(250, 250, 250, 0.2);
    border: none;
    font-size: 25px;
`;

export const FieldTitle = styled.label`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;

export const InputValue = styled.input`
    width: 80%;
    height: 100%;
    margin: 0;
    padding: 10px 5px;
    background: rgba(250, 250, 250, 0.2);
    border: none;
    border-radius: 25px;
    font-size: 25px;
    text-align: right;

    ${({ padding }) => padding && css`
        padding-right: 20px;
    `}
`;

export const CurrentRate = styled.p`
    margin: 0;
    font-size: 18px;
`;
