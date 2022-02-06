import React from "react";
import { v4 as uuidv4 } from "uuid";
import SignInForm from "./SignInForm";

const USER_ID = uuidv4();

function Main() {
  return <SignInForm />;
}

export default Main;
