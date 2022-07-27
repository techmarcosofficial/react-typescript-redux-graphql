import { todoConstants  } from '../constants';

const initialState = {
  loading: false,
  todos: [],
  todo: null,
}

export function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case todoConstants.FETCH:
      return {
        ...state,
        loading: action.loading,
      }
    case todoConstants.FETCH_TODOS:
      return { 
        ...state,
        todos: action.todos,
      };
    case todoConstants.FETCH_TODO:
      return {
        ...state,
        todo: action.todo,
      };
    default:
      return state;
  }
}