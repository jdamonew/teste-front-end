import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
`

export const Section = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;

    h1 {
        white-space: pre-line;
        max-width: 22ch;
        text-align: center;
        font-size: 36px;
    }
    
    @media (max-width: 500px){
        h1{
            font-size: 24px;
        }
    }
`
export const Header = styled.div`
    
`
export const ActionsContainer = styled.div`
    margin-top: 68px;
    padding-bottom: 20px;
`
export const BenefitsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.lg};
    max-width: 1200px;
    width: 100%;
    display:flex;
    flex-direction: column;
    
    img{
        position: absolute;
    }
    
    @media (max-width: 1040px){
        width: 90%;
        img{
            position: unset;
            margin-bottom: -25px;
            z-index: 999;
        }
    }
`