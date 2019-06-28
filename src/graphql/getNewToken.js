import { loader } from 'graphql.macro';
import { getApolloClient } from './createClient';

const authorizeMutation = loader('./mutations/authorize.gql');

export async function getNewToken(token) {
  const client = getApolloClient();

  const { data } = await client.mutate({
    mutation: authorizeMutation,
    variables: {
      token
    }
  });

  const newToken = data && data.authorize && data.authorize.token;

  if (newToken) {
    localStorage.setItem('token', newToken);
  } else {
    localStorage.removeItem('token');
  }

  return newToken;
}
