import React from 'react';
import { Table, Checkbox, Button, Icon, Pagination } from 'semantic-ui-react';

export function UsersTab() {
  return (
    <div>
      <Table compact celled sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted="descending">Status</Table.HeaderCell>
            <Table.HeaderCell>Nickname</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider checked />
            </Table.Cell>
            <Table.Cell>Kalnode</Table.Cell>
            <Table.Cell>kalanosh@gmail.com</Table.Cell>
            <Table.Cell>admin</Table.Cell>
            <Table.Cell textAlign="center" width="1">
              <Button color="red" icon>
                <Icon name="trash" inverted />
              </Button>
            </Table.Cell>
          </Table.Row>
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
      <Pagination defaultActivePage={5} totalPages={10} />
    </div>
  );
}
