import React, { FormEvent, useContext, useRef } from "react";
import { Button, CardActions, CardContent, TextField } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import CustomCard from "./CustomCard";

function SignInForm() {
  const userName = useRef<HTMLInputElement>();
  const { signIn } = useContext(GlobalContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.current?.value) {
      signIn(userName.current?.value);
    }
    //TODO: Notify when userName is empty
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomCard>
        <CardContent>
          <h4>Welcome to the Youtube Watch Party!</h4>
          <TextField
            name="userName"
            label="Please enter your name"
            variant="standard"
            inputRef={userName}
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button type="submit">Sign in</Button>
        </CardActions>
      </CustomCard>
    </form>
  );
}

export default SignInForm;
