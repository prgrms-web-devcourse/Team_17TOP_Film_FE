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
    return () => {
      document.body.removeChild(modalElement);
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
