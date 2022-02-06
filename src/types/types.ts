export type User = {
  id: string;
  name: string;
};

export type Video = {
  id: string;
  title: string;
  status: VideoStatus;
  time: number;
};

export type VideoStatus = "PLAYING" | "PAUSED";

export type GlobalContextType = {
  signIn: (name: string) => void;
  setUserId: (id: string) => void;
  setUsersList: (usersList: User[]) => void;
  setVideoId: (videoId: string) => void;
  setVideoTitle: (title: string) => void;
  closeVideo: () => void;
  playVideo: (time: number) => void;
  pauseVideo: () => void;
  state: GlobalStateType;
  message?: string | null;
  setMessage: (message: string | null) => void;
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
  | { type: "CLOSE_VIDEO" }
  | { type: "PLAY_VIDEO"; payload: number }
  | { type: "PAUSE_VIDEO" };
