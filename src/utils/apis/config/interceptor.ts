import { AxiosInstance, AxiosResponse } from 'axios';
// import { getLocalStorage } from '../../getLocalStorage';

const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
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
          status: res?.response?.status,
          errorCode: res?.response?.data?.code || null,
          errorMessage: res?.response?.data?.message || '예기치 못한 에러입니다.',
        },
      };
      return Promise.resolve(result);
    },
  );
};

export { authInterceptor };
