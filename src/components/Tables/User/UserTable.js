import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon, Pagination, Input } from 'semantic-ui-react';
import { UserHeader } from './UserHeader';
import { TableLoader } from '../TableLoader';

export function UserTable({
  children,
  loading,
  sortDirection,
  sortColumn,
  page,
  total,
  onSort,
  onPageChange,
  onSearch
}) {
  // const [{ direction, column }, setState ] = useState({ direction: 'ascending', column: 'status' });

  return (
    <div>
      <Input
        disabled={loading}
        icon="search"
        placeholder="Search..."
        loading={loading}
        onChange={({ target: { value } }) => onSearch && onSearch(value)}
      />
      <Table compact celled sortable striped>
        <UserHeader
          disabled={loading}
          onSort={(column, direction) => {
            let newDirection = 'ascending';

            if (sortColumn === column) {
              newDirection =
                direction === 'ascending' ? 'descending' : 'ascending';
            }

            onSort(column, newDirection);
          }}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
        />
        {loading && <TableLoader />}
        <Table.Body
          style={{
            position: 'relative',
            opacity: loading ? 0.5 : 1,
            pointerEvents: loading ? 'none' : 'auto'
          }}
        >
          {children}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Pagination
        activePage={page || 0}
        disabled={loading}
        totalPages={total || 0}
        onPageChange={onPageChange}
      />
    </div>
  );
}

UserTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  loading: PropTypes.bool,
  sortDirection: PropTypes.string,
  sortColumn: PropTypes.string,
  page: PropTypes.number,
  total: PropTypes.number,
  onSort: PropTypes.func,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func
};

UserTable.defaultProps = {
  children: null,
  loading: false,
  sortDirection: '',
  sortColumn: '',
  page: 1,
  total: 0,
  onSort: () => {},
  onPageChange: () => {},
  onSearch: () => {}
};
