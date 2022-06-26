import ReactDOM from 'react-dom';
import ToastManager, { CreateToast } from './components/ToastManager';

class Toast {
  portal: HTMLElement | null = null;

  createToast: CreateToast | null = null;

  constructor() {
    const portalId = 'prev-toast-portal';
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;
      document.body.appendChild(this.portal);
    }

    ReactDOM.render(
      <ToastManager
        bind={(createToast: any) => {
          this.createToast = createToast;
        }}
      />,
      this.portal,
    );
  }

  info(message: string, duration = 2000) {
    this.createToast?.(message, duration, 'info');
  }
  warn(message: string, duration = 2000) {
    this.createToast?.(message, duration, 'warn');
  }
}
export default new Toast();
