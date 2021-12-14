import { useState } from 'react';
import useTimeout from '../../util/useTimeout';
import { Toast } from '../ToastManager';
import { Container, Content } from './style';

interface Props extends Omit<Toast, 'id'> {
  onDone: () => void;
}

const ToastItem = ({ message, duration, onDone }: Props) => {
  const [show, setShow] = useState(true);
  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);
  return (
    <Container style={{ opacity: show ? 1 : 0, backgroundColor: '#00CF9D' }}>
      <Content>{message}</Content>
    </Container>
  );
};
export default ToastItem;
