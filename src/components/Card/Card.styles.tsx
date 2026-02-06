import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 30px 25px;
  width: 100%;
  min-width: 280px;
  max-width: 280px;
  max-height: 300px;
  scroll-snap-align: center;

  @media (max-width: 768px) {
    min-width: 276px;
  }
`;


export const Icon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
  `;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
    /* max-width: 108px; */
  `;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  margin-bottom: 16px;
`;

