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
        status: res.status,
        errorCode: null,
        errorMessage: null,
      },
    }),
    (res) => {
      const result = {
        ...res,
        data: null,
        error: {
          status: res.response.status,
          errorCode: res.response.data.code,
          errorMessage: res.response.data.message,
        },
      };
      return Promise.resolve(result);
    },
  );
};

export { authInterceptor };
