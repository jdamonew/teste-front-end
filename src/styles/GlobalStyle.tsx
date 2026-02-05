import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.background};
}

 h1,h2,h3,h4,h5,h6{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
 }

`;