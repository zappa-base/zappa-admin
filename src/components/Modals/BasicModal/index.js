import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';

export function BasicModal({
  buttonText,
  content,
  handleClose,
  headerContent,
  headerIcon,
  opened
}) {
  return (
    <Modal
      basic
      closeOnDimmerClick={false}
      onClose={handleClose}
      open={opened}
      size="mini"
    >
      <Header icon={headerIcon} content={headerContent} />
      <Modal.Content>
        <p>{content}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={handleClose}>
          <Icon name="checkmark" /> {buttonText}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

BasicModal.propTypes = {
  buttonText: PropTypes.string,
  content: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  headerContent: PropTypes.string.isRequired,
  headerIcon: PropTypes.string,
  opened: PropTypes.bool.isRequired
};

BasicModal.defaultProps = {
  buttonText: 'Okay',
  content: '',
  headerIcon: 'circle'
};
