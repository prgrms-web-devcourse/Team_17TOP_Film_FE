import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from '../ToastItem';
import { Container } from './style';

export interface Toast {
  id: string;
  message: string;
  duration: number;
}
export type CreateToast = (message: string, duration: number) => void;
interface Props {
  bind: (createToast: CreateToast) => void;
}

const ToastManager = ({ bind }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast: CreateToast = useCallback((message, duration) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Container>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem message={message} duration={duration} key={id} onDone={() => removeToast(id)} />
      ))}
    </Container>
  );
};
export default ToastManager;
