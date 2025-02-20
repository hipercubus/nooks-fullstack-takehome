import { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  GlobalContextProviderType,
  GlobalContextType,
  User,
} from "../types/types";
import { globalReducer } from "./globalReducer";

const USER_ID = uuidv4();

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export function GlobalContextProvider({ children }: GlobalContextProviderType) {
  const [state, dispatch] = useReducer(globalReducer, {
    currentUser: {
      id: USER_ID,
      name: "",
    },
    usersList: [],
    isSignedIn: false,
    currentVideo: {
      id: "",
      title: "",
      status: "PAUSED",
      time: 0,
    },
    isVideoAdded: false,
  });
  const [message, setMessage] = useState<string | null>();

  return (
    <GlobalContext.Provider
      value={{
        signIn: (name: string) => dispatch({ type: "SIGN_IN", payload: name }),
        setUserId: (id: string) => dispatch({ type: "SIGN_IN", payload: id }),
        setUsersList: (usersList: User[]) =>
          dispatch({ type: "SET_USERS_LIST", payload: usersList }),
        setVideoId: (videoId: string) =>
          dispatch({ type: "SET_VIDEO_ID", payload: videoId }),
        setVideoTitle: (title: string) =>
          dispatch({ type: "SET_VIDEO_TITLE", payload: title }),
        closeVideo: () => dispatch({ type: "CLOSE_VIDEO" }),
        playVideo: (time) => dispatch({ type: "PLAY_VIDEO", payload: time }),
        pauseVideo: () => dispatch({ type: "PAUSE_VIDEO" }),
        state,
        message,
        setMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
