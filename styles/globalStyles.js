import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing : border-box;
    margin : 0;
    padding : 0;
    font-family : 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;
  @media screen and (max-width: 991px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;
