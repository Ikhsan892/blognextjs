import React, { useState } from "react";
import { Container } from "../styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";

export const Header = styled.h1`
  flex-basis: 100%;
  text-align: center;
  color: #fff;
`;
export const Navbar = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  align-items: center;
  background: ${(props) => props.theme.primary.main};
  position: sticky;
`;
export const Text = styled.p`
  color: #fff;
  padding: 6px 10px;
  border-radius: 30px;
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  ${Container}
`;
export const Content = styled.div`
  width: 100%;
  min-height: 95vh;
  padding-bottom: 20px;
  overflow: auto;
  background: ${(props) => props.theme.primary.background};
`;
const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const handleDark = () => setIsDark(!isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Navbar>
        <NavContainer>
          <Header>Ikhsan's Blog</Header>
          <Text onClick={handleDark}>{isDark ? "Light" : "Dark"}</Text>
        </NavContainer>
      </Navbar>
      <Content>
        <Container>{children}</Container>
      </Content>
    </ThemeProvider>
  );
};

export default Layout;
