import { useState } from 'react';
import useTimeout from '../../util/useTimeout';
import { Toast } from '../ToastManager';
import { Container, Content, ProgressBar } from './style';

interface Props extends Omit<Toast, 'id'> {
  onDone: () => void;
}

const ToastItem = ({ type, message, duration, onDone }: Props) => {
  const [show, setShow] = useState(true);
  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);
  return (
    <Container
      style={{ opacity: show ? 1 : 0, backgroundColor: type === 'info' ? '#A9AFB3' : '#F5544E' }}
    >
      <ProgressBar style={{ animationDuration: `${duration}ms` }} />
      <Content>{message}</Content>
    </Container>
  );
};
export default ToastItem;
