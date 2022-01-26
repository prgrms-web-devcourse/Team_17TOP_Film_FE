import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from '../ToastItem';
import { Container } from './style';

export interface Toast {
  id: string;
  msg1: string;
  msg2?: string;
  duration: number;
  type: 'info' | 'warn';
}
export type CreateToast = ({ msg1, msg2, duration, type }: Omit<Toast, 'id'>) => void;

interface Props {
  bind: (createToast: CreateToast) => void;
}

const ToastManager = ({ bind }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast: CreateToast = useCallback(({ msg1, msg2, duration, type }) => {
    const newToast: Toast = {
      id: v4(),
      msg1,
      duration,
      type,
    };
    msg2 && (newToast.msg2 = msg2);
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: string): void => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Container>
      {toasts.map(({ id, msg1, msg2, duration, type }) => (
        <ToastItem
          type={type}
          msg1={msg1}
          msg2={msg2}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </Container>
  );
};
export default ToastManager;
