import React, { FormEvent } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";

function SignInForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
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
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button> Add a youtube video</Button>
        </CardActions>
      </CustomCard>
    </form>
  );
}

const CustomCard = styled(Card)`
  width: 30rem;
  background-color: #ffffffcc;
`;

export default SignInForm;
