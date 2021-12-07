import { MutableRefObject, ReactNode, useCallback, useEffect, useMemo } from 'react';
import { BlackBG, Wrapper } from './style';
import ReactDOM from 'react-dom';
import { useClickOutSide } from './useClickOutSide';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}
const eventTypes = ['scroll', 'touchmove', 'mousewheel'];

const Modal = ({ children, visible, onClose }: Props) => {
  const ref = useClickOutSide(onClose);
  const modalElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(modalElement);
    return () => {
      document.body.removeChild(modalElement);
    };
  }, []);

  const preventScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, []);

  useEffect(() => {
    if (!visible) return;
    for (const eventType of eventTypes) {
      window.addEventListener(eventType, preventScroll, { capture: false, passive: false });
    }
    return () => {
      for (const eventType of eventTypes) {
        window.removeEventListener(eventType, preventScroll);
      }
    };
  }, [visible]);

  return ReactDOM.createPortal(
    <BlackBG visible={visible} tabIndex={-1}>
      <Wrapper ref={ref as MutableRefObject<HTMLDivElement>}>{children}</Wrapper>
    </BlackBG>,
    modalElement,
  );
};
export default Modal;
