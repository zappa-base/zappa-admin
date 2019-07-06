import { HttpLink } from 'apollo-link-http';

export const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin'
});
