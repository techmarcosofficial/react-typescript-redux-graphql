import { postConstants  } from '../constants';

const initialState = {
  loading: false,
  posts: [],
  post: null,
}

export function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case postConstants.FETCH:
      return {
        ...state,
        loading: action.loading,
      }
    case postConstants.FETCH_POSTS:
      return { 
        ...state,
        posts: action.posts,
      };
    case postConstants.FETCH_POST:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
}