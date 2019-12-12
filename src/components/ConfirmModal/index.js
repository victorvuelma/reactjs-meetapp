import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';

import { Container, Actions } from './styles';

export default function ConfirmModal({
  children,
  onClose,
  onCancel,
  onConfirm,
  ...props
}) {
  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  return (
    <ReactModal
      {...props}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'fixed',
          top: 'none',
          bottom: 'none',
          right: 'none',
          left: 'none',
          borderRadius: '4px',
          width: '100%',
          maxWidth: '350px',
        },
      }}
    >
      <Container>
        <button onClick={onClose} type="button">
          <MdClose size={20} color="#999" />
        </button>
        {children}
        <Actions>
          <button onClick={onCancel} type="button">
            Não
          </button>
          <button onClick={onConfirm} type="button">
            Sim
          </button>
        </Actions>
      </Container>
    </ReactModal>
  );
}

ConfirmModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
