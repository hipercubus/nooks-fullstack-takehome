import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { AccountCircle } from "@mui/icons-material";
import { GlobalContext } from "../context/GlobalContext";
import UserAvatar from "./UserAvatar";

function Header() {
  const { state } = useContext(GlobalContext);

  return (
    <CustomAppBar position="static" color="transparent">
      <Logo>
        <OndemandVideoIcon />
        <span>Youtube Watch Party</span>
      </Logo>
      <UsersBar>
        {!state.isSignedIn ? (
          <AccountCircle />
        ) : (
          <UserAvatar name={state.currentUser.name} color="darkmagenta" />
        )}
      </UsersBar>
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

const UsersBar = styled.div``;

export default Header;
