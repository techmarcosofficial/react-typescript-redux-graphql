import { gql } from "@apollo/client";

const todos = () => gql`
  query {
    posts {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export const todo = (id: number) => gql`
  query {
    post(id: ${id}) {
      id
      title
      body
    }
  }
`;
