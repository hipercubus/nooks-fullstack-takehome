import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <MainSection>
      <Header />
      <Main>{children}</Main>
    </MainSection>
  );
}

const MainSection = styled.section`
  min-height: 100vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export default MainLayout;
