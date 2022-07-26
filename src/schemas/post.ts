import { gql } from "@apollo/client";

const posts = () => gql`
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

export const post = (id: number) => gql`
  query {
    post(id: ${id}) {
      id
      title
      body
    }
  }
`;
