import { useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { GlobalContext } from "../context/GlobalContext";

const useSocket = () => {
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const socket = io("http://localhost:3001/");

    //TODO: When current user signs in
    //TODO: When current user adds video
    //TODO: When current user closes video
    //TODO: When current user plays video
    //TODO: When current user pauses video
    //TODO: When current user seeks video

    //TODO: When another user signs in
    //TODO: When another user adds video
    //TODO: When another user closes video
    //TODO: When another user plays video
    //TODO: When another user pauses video
    //TODO: When another user seeks video

    return () => {
      socket.disconnect();
    };
  });
};

export default useSocket;
