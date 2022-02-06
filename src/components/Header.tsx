import React from "react";
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function Header() {
  return (
    <CustomAppBar position="static" color="transparent">
      <Logo>
        <OndemandVideoIcon />
        <span>Youtube Watch Party</span>
      </Logo>
    </CustomAppBar>
  );
}

const CustomAppBar = styled(AppBar)`
  background-color: #ffffffaa;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  padding: 0 0.8rem;
`;

const Logo = styled.div`
  color: #333;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Header;
