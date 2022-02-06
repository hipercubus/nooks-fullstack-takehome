import { useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { GlobalContext } from "../context/GlobalContext";

const useSocket = () => {
  const { state, setUsersList } = useContext(GlobalContext);
  const prevSignedIn = useRef<boolean>(false);

  useEffect(() => {
    const socket = io("http://localhost:3001/");

    // When current user signs in
    if (state.isSignedIn && !prevSignedIn.current) {
      prevSignedIn.current = true;
      socket.emit("client:join", {
        id: state.currentUser.id,
        name: state.currentUser.name,
      });
    }

    //TODO: When current user adds video
    //TODO: When current user closes video
    //TODO: When current user plays video
    //TODO: When current user pauses video
    //TODO: When current user seeks video

    // When another user signs in
    socket.on("server:updateUsers", ({ usersList, currentVideoId, user }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        console.log(`${user.name} has joined the party!`);
      }
      //TODO: Handle if a video is already added
      setUsersList(usersList);
    });

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
