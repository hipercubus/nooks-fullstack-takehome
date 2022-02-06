import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SignInForm from "./SignInForm";
import VideoForm from "./VideoForm";

function Main() {
  const { state } = useContext(GlobalContext);
  if (!state.isSignedIn) return <SignInForm />;
  if (!state.isVideoAdded) return <VideoForm />;
  //TODO: Video Component // test videoId: stQVMipINKk
  return <>Video Component</>;
}

export default Main;
