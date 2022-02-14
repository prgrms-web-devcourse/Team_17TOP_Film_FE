import { MutableRefObject, ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BackgroundDim, Wrapper } from './style';
import useClickOutSide from './useClickOutSide';
interface Props {
  children: ReactNode;
  dimClose?: () => void;
}
const Modal = ({ children, dimClose }: Props) => {
  const ref = useClickOutSide(() => dimClose && dimClose());
  const modalElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(modalElement);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeChild(modalElement);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <BackgroundDim>
      <Wrapper ref={ref as MutableRefObject<HTMLDivElement>}>{children}</Wrapper>
    </BackgroundDim>,
    modalElement,
  );
};

export default Modal;
