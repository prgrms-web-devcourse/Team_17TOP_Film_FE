import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BackkgroundDim, Wrapper } from './style';
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
    <BackkgroundDim onClick={onClose}>
      <Wrapper>{children}</Wrapper>
    </BackkgroundDim>,
    modalElement,
  );
};

export default Modal;
