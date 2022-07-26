
import { handleResponse, handleErrors } from "../utils/api-response";

export const getPosts = () => {
  const requestOptions = { method: 'GET', };
  // let url = `${process.env.REACT_APP_API_URL}/posts`;
  let url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const getPostById = (id: number) => {
  const requestOptions = { method: 'GET', };
  // let url = `${process.env.REACT_APP_API_URL}/post/${id}`;
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const updatePost = (id: number) => {
  const requestOptions = { method: 'PUT', };
  let url = `${process.env.REACT_APP_API_URL}/post/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

export const deletePost = (id: number) => {
  const requestOptions = { method: 'DELETE', };
  let url = `${process.env.REACT_APP_API_URL}/post/${id}`;
  return fetch(url, requestOptions).then(handleResponse).catch(handleErrors);
}

