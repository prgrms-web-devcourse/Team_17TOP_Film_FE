import ReactDOM from 'react-dom';
import ToastManager, { CreateToast } from './components/ToastManager';

interface InfoProps {
  msg1: string;
  msg2?: string;
  duration?: number;
}

class Toast {
  $portal: HTMLDivElement | null = null;
  createToast: CreateToast | null = null;
  constructor() {
    const portalId = 'toast-portal';
    const $portal = document.createElement('div');
    $portal.id = portalId;
    this.$portal = $portal;
    document.body.appendChild(this.$portal);

    ReactDOM.render(
      <ToastManager
        bind={(createToast: CreateToast) => {
          this.createToast = createToast;
        }}
      />,
      this.$portal,
    );
  }

  info({ msg1, msg2, duration = 1000 }: InfoProps) {
    this.createToast?.({ msg1, msg2, duration, type: 'info' });
  }
  warn({ msg1, msg2, duration = 1000 }: InfoProps) {
    this.createToast?.({ msg1, msg2, duration, type: 'warn' });
  }
}
export default new Toast();
