import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { LayoutWithRouterUser } from '../Layout';
import { MenuContextProvider } from '../Contexts/MenuContext';
import { UserContextProvider } from '../Contexts/UserContext';
import { currentUserQuery } from '../../graphql/queries/currentUser';

export function App({ apolloClient }) {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Query query={currentUserQuery}>
          {({ data, loading, error }) => {
            if (loading && !error) {
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
