import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLoginForm = styled.div`
    width:100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);

    @media (min-width:400px) {
        max-width: 370px;
    }
`

export const StyledDivToRegister = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    gap: 1rem;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);
    margin-top: 1rem;

    @media (min-width:400px) {
        max-width: 370px;
    }
`

export const StyledLinkToRegister = styled(Link)`
    width:100%;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    border-radius: var(--radius-1);
    padding: 0.5rem 1rem;
    height: 2.5rem;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);

    &:hover {
        background-color: var(--color-grey-2);
    }

    @media (min-width: 370px) {
        max-width: 370xp;
    }
`

export const StyledLoginTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0.5rem 0;
    margin: 1rem 0;   
`
