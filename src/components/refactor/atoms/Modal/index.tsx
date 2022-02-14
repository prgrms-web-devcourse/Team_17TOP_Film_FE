import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BackgroundDim, Wrapper } from './style';
interface Props {
  children: ReactNode;
  onClose?: () => void;
}
const Modal = ({ children, onClose }: Props) => {
  const modalElement = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(modalElement);
    return () => {
      document.body.removeChild(modalElement);
    };
  }, []);

  return ReactDOM.createPortal(
    <BackgroundDim onClick={onClose}>
      <Wrapper>{children}</Wrapper>
    </BackgroundDim>,
    modalElement,
  );
};

export default Modal;
