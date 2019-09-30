import React from 'react';
import PropTypes from 'prop-types';
import { UserRow, UserTable } from '../../components/Tables/User';

export function UsersTabView({
  loading,
  onPageChange,
  onSearch,
  onSort,
  page,
  sortColumn,
  sortDirection,
  total,
  users
}) {
  return (
    <UserTable
      loading={loading}
      onPageChange={onPageChange}
      onSearch={onSearch}
      onSort={onSort}
      page={page}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      total={total}
    >
      {users.map(({ id, email, nickname, role, status }) => (
        <UserRow
          email={email}
          id={id}
          key={id}
          nickname={nickname}
          role={role}
          status={status}
        />
      ))}
    </UserTable>
  );
}

UsersTabView.propTypes = {
  loading: PropTypes.bool,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  page: PropTypes.number,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.string,
  total: PropTypes.number,
  users: PropTypes.array
};

UsersTabView.defaultProps = {
  loading: false,
  onPageChange: () => {},
  onSearch: () => {},
  onSort: () => {},
  page: 1,
  sortColumn: '',
  sortDirection: '',
  total: 0,
  users: []
};
