import { authConstants  } from '../constants';

let user = localStorage.getItem('user');
if (user) {
  user = JSON.parse(user);
}

const initialState = {
  loading: false,
  user: null || user,
  token: null || localStorage.getItem('accessToken'),
}

export function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case authConstants.FETCH:
      return {
        ...state,
        loading: action.loading,
      }
    case authConstants.LOGIN:
      const token = action.user.token;
      delete action.user.token;
      return { 
        ...state,
        user: action.user,
        token,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
}