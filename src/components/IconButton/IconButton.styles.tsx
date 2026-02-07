import styled from 'styled-components';

export const IconButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: 0.3s ease-in-out;


  &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.neutralLight};
  }

`;
