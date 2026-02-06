import styled from 'styled-components';
import type { TitleHeaderProps } from './Home.types';

export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const TitleHeader = styled.h1<TitleHeaderProps>`
  white-space: pre-line;
  max-width: 22ch;
  text-align: ${({ textAlign = 'center' }) => textAlign};
  font-size: 36px;
  margin: 0;
  width: 100%;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }
`;
export const ActionsContainer = styled.div`
  margin-top: 68px;
  padding-bottom: 20px;
`;
export const BenefitsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    position: absolute;
  }

  @media (max-width: 1040px) {
    width: 90%;
    img {
      position: unset;
      margin-bottom: -25px;
      z-index: 999;
    }
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const CarrosselContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 60%;

  @media (max-width: 1040px) {
    width: 100%;
  }
`;
export const Carrossel = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-left: 40px;
    margin-right: 40px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Dots = styled.div`
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Dot = styled.span<{ $active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#2BBE41' : '#C4C4C4')};
  transition: background 0.3s;
`;

export const CarrosselActions = styled.div`
  margin-top: 54px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1040px) {
    align-items: center;
    justify-content: center;
  }
`;
