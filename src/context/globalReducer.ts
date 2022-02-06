import { GlobalActionsType, GlobalStateType } from "../types/types";

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
      //TODO: Keep users list alive
      return {
        ...state,
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

    default:
      return state;
  }
};
