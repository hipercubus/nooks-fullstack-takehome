import { createContext, useReducer } from "react";
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
  });

  return (
    <GlobalContext.Provider
      value={{
        signIn: (name: string) => dispatch({ type: "SIGN_IN", payload: name }),
        setUserId: (id: string) => dispatch({ type: "SIGN_IN", payload: id }),
        setUsersList: (usersList: User[]) =>
          dispatch({ type: "SET_USERS_LIST", payload: usersList }),
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
