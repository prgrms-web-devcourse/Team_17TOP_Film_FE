import { AxiosInstance } from 'axios';
import { getLocalStorage } from '../../getLocalStorage';

const authInterceptor = (instance: AxiosInstance) => {
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
