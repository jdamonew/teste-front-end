import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.fontSize.lg};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  transition: 0.4s ease-in-out;

  &:hover {
    transition: 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 390px) {
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.lg};
  }
`;
