import { todoConstants } from "../constants";

export const todosAction = (todos: any) => {
  return {
    type: todoConstants.FETCH_TODOS,
    todos,
  }
}

export const _todoAction = (todo: any) => {
  return {
    type: todoConstants.FETCH_TODO,
    todo,
  }
}