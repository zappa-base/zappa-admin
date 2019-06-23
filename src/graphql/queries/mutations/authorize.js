import gql from 'graphql-tag';

export const authorizeMutation = gql`
  mutation authorize($token: String!) {
    authorize(token: $token) {
      token
    }
  }
`;
