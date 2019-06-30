import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { LayoutWithRouterUser } from '../Layout';
import { MenuContextProvider } from '../Contexts/MenuContext';
import { UserContextProvider } from '../Contexts/UserContext';

const currentUserQuery = loader('../../graphql/queries/currentUser.gql');

export function App({ apolloClient }) {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Query query={currentUserQuery} errorPolicy="ignore">
          {({ data, loading }) => {
            if (loading) {
              return 'Loading...';
            }

            return (
              <UserContextProvider initialUser={data && data.currentUser}>
                <MenuContextProvider>
                  <LayoutWithRouterUser />
                </MenuContextProvider>
              </UserContextProvider>
            );
          }}
        </Query>
      </BrowserRouter>
    </ApolloProvider>
  );
}

App.propTypes = {
  apolloClient: PropTypes.object
};

App.defaultProps = {
  apolloClient: undefined
};
