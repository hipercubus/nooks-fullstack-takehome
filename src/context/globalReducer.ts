import { GlobalActionsType, GlobalStateType } from "../types/types";

export const globalReducer = (
  state: GlobalStateType,
  action: GlobalActionsType
) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
      };
    case "SET_USER_ID":
      return {
        ...state,
      };
    case "SET_USERS_LIST":
      return {
        ...state,
      };
    default:
      return state;
  }
};
