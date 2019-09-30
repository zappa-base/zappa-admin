import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';

export function UserRow({ id, nickname, email, role }) {
  return (
    <Table.Row data-id={id}>
      <Table.Cell collapsing textAlign="center">
        <Icon name="circle" color="green" />
      </Table.Cell>
      <Table.Cell>{nickname}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{role}</Table.Cell>
      <Table.Cell textAlign="center" width="1">
        <Button color="red" icon>
          <Icon name="trash" inverted />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}

UserRow.propTypes = {
  id: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string
};

UserRow.defaultProps = {
  id: '',
  nickname: '',
  email: '',
  role: ''
};
