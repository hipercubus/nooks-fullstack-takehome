import React from "react";
import { Avatar, Tooltip } from "@mui/material";

type Props = {
  name: string;
  color: string;
};

const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();

function UserAvatar({ name, color }: Props) {
  return (
    <Tooltip title={name}>
      <Avatar
        sx={{
          bgcolor: color,
          width: 30,
          height: 30,
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        {getFirstLetter(name)}
      </Avatar>
    </Tooltip>
  );
}

export default UserAvatar;
