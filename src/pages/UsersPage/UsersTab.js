import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import debounce from 'lodash/debounce';

import { UsersTabView } from './UserTabView';

const query = loader('../../graphql/queries/users.gql');

const initialVariables = {
  page: 1,
  sortDirection: 'ASC',
  sortBy: 'nickname',
  search: null,
  limit: 10
};

function onSearch(search, refetch) {
  refetch({
    search
  });
}

const debouncedOnSearch = debounce(onSearch, 500);

export function UsersTab() {
  const { data, loading, refetch } = useQuery(query, {
    variables: initialVariables
  });

  const users = (data && data.users && data.users.results) || [];

  const { limit, page, sortBy, sortDirection, total } =
    (data && data.users && data.users.pagination) || {};

  const onSort = (column, direction) => {
    refetch({
      sortDirection: direction === 'ascending' ? 'ASC' : 'DESC',
      sortBy: column
    });
  };

  const onPageChange = (_, { activePage }) => {
    if (activePage !== page) {
      refetch({
        page: activePage
      });
    }
  };

  return (
    <UsersTabView
      loading={loading}
      onPageChange={onPageChange}
      onSearch={searchTerm => debouncedOnSearch(searchTerm, refetch)}
      onSort={onSort}
      page={page}
      sortColumn={sortBy}
      sortDirection={sortDirection === 'ASC' ? 'ascending' : 'descending'}
      total={Math.ceil(total / limit)}
      users={users}
    />
  );
}
