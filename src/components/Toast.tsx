import React, { useContext, useEffect, useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GlobalContext } from "../context/GlobalContext";

function Toast() {
  const { message, setMessage } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    setOpen(false);
    setMessage(null);
  };

  const action = (
    <IconButton size="small" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message={message ?? ""}
      action={action}
      onClose={handleClose}
    />
  );
}

export default Toast;
