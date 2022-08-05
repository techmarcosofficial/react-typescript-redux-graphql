import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      token
    }
  }
`;

export const ADD_POST = gql`
  mutation CreatePost($title: String!, $body: String!, $user: String!) {
    createPost(title: $title, body: $body, user: $user) {
      id
      title
      body
    }
  }
`;

export const Edit_POST = gql`
  mutation EditPost($id: String!, $title: String!, $body: String!, $user: String!) {
    editPost(id: $id, title: $title, body: $body, user: $user) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    deletePost(id: $id) {
      id
      title
      body
    }
  }
`;