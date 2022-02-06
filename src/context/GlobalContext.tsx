import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContextProviderType, GlobalContextType } from "../types/typs";

const USER_ID = uuidv4();

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export function GlobalContextProvider({ children }: GlobalContextProviderType) {
  return (
    <GlobalContext.Provider
      value={{
        currentUser: {
          id: USER_ID,
          name: "",
        },
        usersList: [],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
