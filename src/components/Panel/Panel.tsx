import styled from 'styled-components';
import type { PanelProps } from './Panel.types';

export const Panel = styled.div<PanelProps>`
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  justify-content: ${({ direction = 'center' }) => direction};
  align-items: center;
  margin-bottom: ${({ overlap = 0 }) => `-${overlap}px`};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  display: flex;
  flex-direction: row;
  height: 7.5rem;
  gap: 50px;

  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    width: 40%;
  }

  @media (max-width: 1040px) {
    height: 12rem;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    padding-bottom: ${({ overlap = 0 }) => (overlap > 0 ? '50px' : '0px')};
    gap: 20px;

    p {
      font-size: ${({ theme }) => theme.fontSize.md};
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 390px) {
    padding-bottom: ${({ overlap = 0 }) => (overlap > 0 ? '35px' : '0px')};
  }
`;
