import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocations($id: ID!) {
    location(id: $id) {
      id
      name
      description
      photo
    }
  }
`;