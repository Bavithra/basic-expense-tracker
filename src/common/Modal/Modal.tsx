import React, { useEffect } from 'react';

import Portal from '../Portal';

import { ModalRoot, Backdrop, ModalDialog } from './Modal.styles';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal(props: Props) {
  const { children, isOpen, onClose } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <ModalRoot>
        <Backdrop onClick={onClose}></Backdrop>
        <ModalDialog>{children}</ModalDialog>
      </ModalRoot>
    </Portal>
  );
}
