import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloProvider as ApolloHookProvider,
  useQuery
} from '@apollo/react-hooks';

import { BrowserRouter } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { LayoutWithRouterUser } from '../Layout';
import { MenuContextProvider } from '../Contexts/MenuContext';
import { UserContextProvider } from '../Contexts/UserContext';

const currentUserQuery = loader('../../graphql/queries/currentUser.gql');

export function App({ apolloClient }) {
  const { loading, error, data } = useQuery(currentUserQuery, {
    client: apolloClient,
    errorPolicy: 'ignore'
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ApolloProvider client={apolloClient}>
      <ApolloHookProvider client={apolloClient}>
        <BrowserRouter>
          <UserContextProvider initialUser={data && data.currentUser}>
            <MenuContextProvider>
              <LayoutWithRouterUser />
            </MenuContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ApolloHookProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  apolloClient: PropTypes.object
};

App.defaultProps = {
  apolloClient: undefined
};
