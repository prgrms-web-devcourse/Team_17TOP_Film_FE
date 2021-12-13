import { getLocalStorage } from '../../getLocalStorage';
import { CustomInstance } from './types';

const authInterceptor = (instance: CustomInstance) => {
  instance.interceptors.request.use((config) => {
    const token = getLocalStorage('token', () => (location.href = '/login'));
    config.headers = {
      authorization: `Bearer ${token}`,
      ...config.headers,
    };
    return config;
  });
};

export { authInterceptor };
