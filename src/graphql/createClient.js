import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { getNewToken } from './getNewToken';

// eslint-disable-next-line consistent-return
const onErrorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      for (let index = 0; index < graphQLErrors.length; index += 1) {
        switch (graphQLErrors[index].extensions.code) {
          case 'UNAUTHENTICATED': {
            const token = localStorage.getItem('token');

            if (!token) {
              break;
            }

            return new Observable(observer => {
              getNewToken(token)
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  };

                  // Retry last failed request
                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  // No refresh or client token available, we force user to login
                  console.error('Invalid creds, going to login screen', error);

                  localStorage.removeItem('token');

                  observer.next(undefined);
                  observer.error(error);
                });
            });
          }
          default:
            console.log(
              `[GraphQL error]: Message: ${graphQLErrors[index].message}, Location: ${graphQLErrors[index].locations}, Path: ${graphQLErrors[index].path}`
            );
            break;
        }
      }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin'
});

const link = ApolloLink.from([onErrorLink, authLink, httpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export function getApolloClient() {
  return client;
}
