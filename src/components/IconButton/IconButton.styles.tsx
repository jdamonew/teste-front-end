import styled from "styled-components";

export const IconButton = styled.button`
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.surface};
    /* color: ${({ theme }) => theme.colors.surface}; */
    /* font-size: ${({ theme }) => theme.fontSize.lg}; */
    /* 
    border-radius: ${({ theme }) => theme.borderRadius.xxl}; */
    /* padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl}; */
    /* transition: 0.4s ease-in-out; */
 
    &:hover{
        transition: 0.4s ease-in-out;
        background-color: ${({ theme }) => theme.colors.neutralLight};
    } 

    /* @media (max-width: 390px){
        padding: ${({ theme }) => theme.spacing.md} ;
    } */
`