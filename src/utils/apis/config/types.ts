import { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  token: string;
}
export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<CustomAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  getUri(config?: CustomAxiosRequestConfig): string;
  request<T>(config: CustomAxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<T>;
}
