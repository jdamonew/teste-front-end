import styled from "styled-components";
import type { PanelProps } from "./Panel.types";


export const Panel = styled.div<PanelProps>`
    background-color: ${({ theme, variant }) => theme.colors[variant]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    height: 7.5rem;
    gap: 50px;
    margin-bottom: ${({ overlap = 0 }) => `-${overlap}px`};
    
    p{
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: 500;
        width:40%;
        
    }
    
    @media (max-width: 1040px){
        height: 12rem;
        flex-direction: column;
        justify-content: end;
        align-items: flex-start;
        padding-bottom: ${({ overlap = 0 }) => overlap > 0 ? '50px' : '0px'};
        gap: 20px;

        p{
            font-size: ${({ theme }) => theme.fontSize.md};
            width:100%;
            margin:0;
        }
    }
    @media (max-width: 390px){
        padding-bottom: ${({ overlap = 0 }) => overlap > 0 ? '35px' : '0px'};
    }
`