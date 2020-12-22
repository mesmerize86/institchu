import React from 'react';
import { componentWillAppendToBody } from 'react-append-to-body';
import classnames from 'classnames';
import { BodyOverlayStyle } from './BodyOverlayStyle';

const BodyOverlayComponent = ({ isModalOpen, onClose}) => {
  return (
    <BodyOverlayStyle
      className={classnames({ 'modal-is-open': isModalOpen })}
      onClick={ onClose }>
    </BodyOverlayStyle>
  );
};

const BodyOverlay = componentWillAppendToBody(BodyOverlayComponent);

export default BodyOverlay;