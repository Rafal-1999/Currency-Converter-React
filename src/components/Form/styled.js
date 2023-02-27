import styled from "styled-components";

export const Interface = styled.div`
    height: 214px;
    display: grid;
    grid-template-columns: minmax(88px, 1fr) 2fr minmax(50px, 1fr);
    grid-template-areas:
        "topLeft top topRight"
        "left1 . right1"
        "left2 center ."
        "bottomLeft . bottomRight";
    align-content: space-between;
`;

export const SubmitButton = styled.button`
    width: 80%;
    background: rgb(50, 200, 50);
    margin-top: 20px;
    padding: 13px 0;
    border: 0;
    border-radius: 25px;
    font-size: 20px;
    transition: background 0.5s linear;
    cursor: pointer;

    &:hover,
    &:focus {
        background: rgb(170, 218, 170);
    }
`;
