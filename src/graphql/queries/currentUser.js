import gql from 'graphql-tag';

export const currentUserQuery = gql`
  query currentUser {
    currentUser {
      email
      id
      nickname
      role
    }
  }
`;
