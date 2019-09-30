import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const userHeaders = [
  { value: 'status', label: 'Status' },
  { value: 'nickname', label: 'Nickname' },
  { value: 'email', label: 'Email' },
  { value: 'role', label: 'Role' },
  { value: 'delete', label: 'Delete' }
];

export function UserHeader({
  disabled,
  onSort = () => {},
  sortDirection,
  sortColumn
}) {
  return (
    <Table.Header>
      <Table.Row
        style={{
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : 'auto'
        }}
      >
        {userHeaders.map(({ label, value }) => (
          <Table.HeaderCell
            key={value}
            onClick={() => {
              if (onSort) {
                onSort(value, sortDirection);
              }
            }}
            sorted={value === sortColumn ? sortDirection : null}
          >
            {label}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
}

UserHeader.propTypes = {
  disabled: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['ascending', 'descending']),
  sortColumn: PropTypes.string,
  onSort: PropTypes.func.isRequired
};

UserHeader.defaultProps = {
  disabled: false,
  sortDirection: 'descending',
  sortColumn: 'status'
};
