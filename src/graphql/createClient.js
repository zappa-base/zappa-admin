import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onErrorLink } from './links/onError';
import { httpLink } from './links/httpLink';
import { authLink } from './links/autrhLink';

const link = ApolloLink.from([onErrorLink, authLink, httpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export function getApolloClient() {
  return client;
}
