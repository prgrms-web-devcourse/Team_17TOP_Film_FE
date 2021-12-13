import { AxiosInstance, AxiosResponse } from 'axios';
import { Certificate } from 'crypto';
import { getLocalStorage } from '../../getLocalStorage';
import { CustomResponseFormat } from './type';

const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const token = getLocalStorage('token', () => (location.href = '/login'));
    config.headers = {
      authorization: `Bearer ${token}`,
      ...config.headers,
    };
    return config;
  });

  instance.interceptors.response.use(
    (res) => ({
      ...res,
      error: {
        code: res.status,
        message: null,
      },
    }),
    (res) => {
      console.error(res);
      return {
        ...res,
        error: {
          code: res.status,
          message: null,
        },
      };
    },
  );
};

export { authInterceptor };
