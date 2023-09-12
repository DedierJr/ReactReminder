import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 100%;
    height: 10vh;

    padding:  0 4rem;

    background-color: var(--cor_2);

    overflow: hidden;

    > img {
        height:2.5rem;
    }
`;