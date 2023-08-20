import styled from "styled-components";

export const SectionArea = styled.section`
    padding: 5vh 0;
`;

export const SectionBox = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 25px;
    background: rgb(110, 220, 120);
    border: 5px solid rgb(50, 200, 50);
    border-radius: 35px;
    text-align: center;

    @media (min-width: 576px) {
        padding: 30px 50px;
    }
`;
