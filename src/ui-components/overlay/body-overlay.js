import React from 'react';
import { componentWillAppendToBody } from 'react-append-to-body';
import classnames from 'classnames';
import { BodyOverlayStyle } from './BodyOverlayStyle';

const BodyOverlayComponent = ({ isModalOpen, onClose}) => {
  const handleCloseModalOnOverlay = ()=> {
    if (onClose) {
      onClose();
    }
  }
  return (
    <BodyOverlayStyle
      className={classnames({ 'modal-is-open': isModalOpen })}
      onClick={ handleCloseModalOnOverlay }>
    </BodyOverlayStyle>
  );
};

const BodyOverlay = componentWillAppendToBody(BodyOverlayComponent);

export default BodyOverlay;