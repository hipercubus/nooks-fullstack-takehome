import {
  GlobalActionsType,
  GlobalStateType,
  VideoStatus,
} from "../types/types";

export const globalReducer = (
  state: GlobalStateType,
  action: GlobalActionsType
) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        currentUser: { ...state.currentUser, name: action.payload },
      };

    case "SET_USER_ID":
      return {
        ...state,
        currentUser: { ...state.currentUser, id: action.payload },
      };

    case "SET_USERS_LIST":
      return {
        ...state,
        usersList: action.payload,
      };

    case "SET_VIDEO_ID":
      return {
        ...state,
        isVideoAdded: true,
        currentVideo: { ...state.currentVideo, id: action.payload },
      };

    case "SET_VIDEO_TITLE":
      return {
        ...state,
        currentVideo: {
          ...state.currentVideo,
          title: action.payload,
        },
      };

    case "CLOSE_VIDEO":
      return {
        ...state,
        isVideoAdded: false,
        currentVideo: {
          ...state.currentVideo,
          id: "",
          title: "",
        },
      };

    case "PLAY_VIDEO":
      return {
        ...state,
        currentVideo: {
          ...state.currentVideo,
          status: "PLAYING" as VideoStatus,
          time: action.payload,
        },
      };

    case "PAUSE_VIDEO":
      return {
        ...state,
        currentVideo: {
          ...state.currentVideo,
          status: "PAUSED" as VideoStatus,
        },
      };

    default:
      return state;
  }
};
