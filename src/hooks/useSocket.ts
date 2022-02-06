import { useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { GlobalContext } from "../context/GlobalContext";

const useSocket = () => {
  const { state, setUsersList, setMessage, setVideoId, closeVideo } =
    useContext(GlobalContext);
  const prevSignedIn = useRef<boolean>(false);
  const prevVideoAdded = useRef<boolean>(false);

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

    //When current user adds video
    if (state.isSignedIn && state.isVideoAdded && !prevVideoAdded.current) {
      console.log("======> emit setVideo");
      prevVideoAdded.current = true;
      socket.emit("client:setVideo", {
        user: state.currentUser,
        videoId: state.currentVideo.id,
      });
    }

    //When current user closes video
    if (state.isSignedIn && !state.isVideoAdded && prevVideoAdded.current) {
      prevVideoAdded.current = false;
      socket.emit("client:closeVideo", {
        user: state.currentUser,
      });
    }

    //TODO: When current user plays video
    //TODO: When current user pauses video
    //TODO: When current user seeks video
    //TODO: Polling to transmit video position

    // When another user signs in
    socket.on("server:updateUsers", ({ usersList, currentVideoId, user }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        setMessage(`${user.name} has joined the party!`);
      }
      // If a video is already added
      if (currentVideoId) {
        setMessage(`A video is already added!`);
        setVideoId(currentVideoId);
      }
      //TODO: Handle if a video is playing
      setUsersList(usersList);
    });

    // When another user leaves
    socket.on("server:userLeft", ({ usersList, user }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        setMessage(`${user.name} has left the party!`);
        setUsersList(usersList);
      }
    });

    // When another user adds video
    socket.on("server:updateVideo", ({ user, currentVideoId }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        setMessage(`${user.name} has added a new video!`);
        prevVideoAdded.current = true;
        setVideoId(currentVideoId);
      }
    });

    // When another user closes video
    socket.on("server:closeVideo", ({ user }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        setMessage(`${user.name} has closed the video!`);
        prevVideoAdded.current = false;
        closeVideo();
      }
    });

    //TODO: When another user plays video
    //TODO: When another user pauses video
    //TODO: When another user seeks video

    // return () => {
    //   socket.disconnect();
    // };
  }, [state.isSignedIn, state.isVideoAdded]);
};

export default useSocket;
