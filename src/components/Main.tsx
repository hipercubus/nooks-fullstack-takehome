import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useSocket from "../hooks/useSocket";
import SignInForm from "./SignInForm";
import VideoForm from "./VideoForm";
import VideoPlayer from "./VideoPlayer";

function Main() {
  const { state } = useContext(GlobalContext);
  useSocket();

  if (!state.isSignedIn) return <SignInForm />;
  if (!state.isVideoAdded) return <VideoForm />;
  return <VideoPlayer />;
}

export default Main;
