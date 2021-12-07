import React, { ReactNode, useCallback, useEffect } from 'react';
import { BlackBG, Wrapper } from './style';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose: (value: boolean) => void;
}
const Modal = ({ children, visible }: Props) => {
  //
  const preventScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  useEffect(() => {
    if (!visible) return;
    window.addEventListener('scroll', preventScroll, { capture: false, passive: false });
    window.addEventListener('touchmove', preventScroll, { capture: false, passive: false });
    window.addEventListener('mousewheel', preventScroll, { capture: false, passive: false });
    return () => {
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('mousewheel', preventScroll);
    };
  }, [visible]);
  return ReactDOM.createPortal(
    <BlackBG visible={visible} tabIndex={-1}>
      <Wrapper>{children}</Wrapper>
    </BlackBG>,
    document.getElementById('modal') as HTMLElement,
  );
};
export default Modal;
