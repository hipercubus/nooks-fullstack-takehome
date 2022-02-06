import { useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { GlobalContext } from "../context/GlobalContext";
import { VideoStatus } from "../types/types";

const useSocket = () => {
  const { state, setUsersList, setMessage, setVideoId, closeVideo, playVideo } =
    useContext(GlobalContext);
  const prevSignedIn = useRef<boolean>(false);
  const prevVideoAdded = useRef<boolean>(false);
  const prevVideoStatus = useRef<VideoStatus>("PAUSED");

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

    // When current user plays video
    if (
      state.isSignedIn &&
      state.isVideoAdded &&
      prevVideoStatus.current === "PAUSED" &&
      state.currentVideo.status === "PLAYING"
    ) {
      prevVideoStatus.current = "PLAYING";
      socket.emit("client:playVideo", {
        user: state.currentUser,
        time: state.currentVideo.time,
      });
    }

    //TODO: When current user pauses video
    //TODO: Poll to transmit video position

    // When another user signs in
    socket.on(
      "server:updateUsers",
      ({ usersList, currentVideoId, currentVideoState, user }) => {
        if (state.isSignedIn && state.currentUser.id !== user?.id) {
          setMessage(`${user.name} has joined the party!`);
        }
        // If a video is already added
        if (currentVideoId) {
          setMessage(`A video is already added!`);
          setVideoId(currentVideoId);
        }
        if (currentVideoState === "PLAYING") {
          //TODO: poll seek time to use it here
          //playVideo(?);
        }
        setUsersList(usersList);
      }
    );

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

    // When another user plays video
    socket.on("server:playVideo", ({ user, time }) => {
      if (state.isSignedIn && state.currentUser.id !== user?.id) {
        setMessage(`${user.name} has played or seeked the video!`);
        prevVideoStatus.current = "PLAYING";
        playVideo(time);
      }
    });

    //TODO: When another user pauses video

    // return () => {
    //   socket.disconnect();
    // };
  }, [state.isSignedIn, state.isVideoAdded, state.currentVideo.status]);
};

export default useSocket;
