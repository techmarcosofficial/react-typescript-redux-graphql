
import { handleResponse, handleErrors } from "../utils/api-response";

export const getTodos = () => {
  const requestOptions = { method: 'GET', };
//   let url = `${process.env.REACT_APP_API_URL}/todos`;
  let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const getTodoById = (id: number) => {
  const requestOptions = { method: 'GET', };
  // let url = `${process.env.REACT_APP_API_URL}/todos/${id}`;
  let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const updateTodo = (id: number) => {
  const requestOptions = { method: 'PUT', };
  let url = `${process.env.REACT_APP_API_URL}/todos/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const deleteTodo = (id: number) => {
  const requestOptions = { method: 'DELETE', };
  let url = `${process.env.REACT_APP_API_URL}/todos/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

