export type User = {
  id: string;
  name: string;
};
export type GlobalContextType = {
  signIn: (name: string) => void;
  setUserId: (id: string) => void;
  setUsersList: (usersList: User[]) => void;
  state: GlobalStateType;
};
export type GlobalContextProviderType = {
  children: React.ReactNode;
};
export type GlobalStateType = {
  currentUser: User | null;
  usersList: User[];
  isSignedIn: boolean;
};
export type GlobalActionsType =
  | { type: "SIGN_IN"; payload: string }
  | { type: "SET_USER_ID"; payload: string }
  | { type: "SET_USERS_LIST"; payload: User[] };
