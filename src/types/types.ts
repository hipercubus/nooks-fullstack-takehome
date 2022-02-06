export type User = {
  id: string;
  name: string;
};
export type Video = {
  id: string;
  title: string;
};
export type GlobalContextType = {
  signIn: (name: string) => void;
  setUserId: (id: string) => void;
  setUsersList: (usersList: User[]) => void;
  setVideoId: (videoId: string) => void;
  setVideoTitle: (title: string) => void;
  closeVideo: () => void;
  state: GlobalStateType;
};
export type GlobalContextProviderType = {
  children: React.ReactNode;
};
export type GlobalStateType = {
  currentUser: User;
  usersList: User[];
  isSignedIn: boolean;
  currentVideo: Video;
  isVideoAdded: boolean;
};
export type GlobalActionsType =
  | { type: "SIGN_IN"; payload: string }
  | { type: "SET_USER_ID"; payload: string }
  | { type: "SET_USERS_LIST"; payload: User[] }
  | { type: "SET_VIDEO_ID"; payload: string }
  | { type: "SET_VIDEO_TITLE"; payload: string }
  | { type: "CLOSE_VIDEO" };
