import { AxiosInstance, AxiosResponse } from 'axios';
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

  instance.interceptors.response.use(
    (res: AxiosResponse) => ({
      ...res,
      error: {
        code: res.status,
        errorMessage: null,
      },
    }),
    (res) => {
      const result = {
        ...res,
        data: null,
        error: {
          code: res.response.status,
          errorMessage: res.response.data.message,
        },
      };
      return Promise.resolve(result);
    },
  );
};

export { authInterceptor };
