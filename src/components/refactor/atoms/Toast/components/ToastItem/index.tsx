import { useState } from 'react';
import useTimeout from '../../util/useTimeout';
import { Toast } from '../ToastManager';
import { Container, Content, ProgressBar, Body, CloseBtn } from './style';

interface Props extends Omit<Toast, 'id'> {
  onDone: () => void;
}

const ToastItem = ({ type, msg1, msg2, duration, onDone }: Props) => {
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
      <Body>
        <CloseBtn onClick={onDone} />
        <Content>{msg1}</Content>
        {msg2 && <Content>{msg2}</Content>}
      </Body>
    </Container>
  );
};
export default ToastItem;
