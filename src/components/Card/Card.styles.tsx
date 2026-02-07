import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 30px 25px;
  width: 100%;
  min-width: 280px;
  max-width: 280px;
  max-height: 300px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-width: 276px;
  }
`;

export const Icon = styled.div``;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 22px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  margin: 0;
`;
