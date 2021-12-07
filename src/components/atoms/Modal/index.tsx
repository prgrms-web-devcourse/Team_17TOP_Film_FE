import React, { ReactNode, useCallback, useEffect } from 'react';
import { BlackBG, Wrapper } from './style';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose: (value: boolean) => void;
}
const Modal = ({ children, visible, onClose }: Props) => {
  //

  return ReactDOM.createPortal(
    <BlackBG visible={visible} tabIndex={-1}>
      <Wrapper>{children}</Wrapper>
    </BlackBG>,
    document.getElementById('modal') as HTMLElement,
  );
};
export default Modal;
