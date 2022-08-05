import { authConstants } from "../constants";

export const loginAction = (user: any) => {
  return {
    type: authConstants.LOGIN,
    user,
  }
}

export const logoutAction = () => {
  return {
    type: authConstants.LOGOUT,
  }
}