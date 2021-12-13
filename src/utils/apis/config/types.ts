import { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

interface customAxiosRequestConfig extends AxiosRequestConfig {
  token: string;
}
export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<customAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  getUri(config?: customAxiosRequestConfig): string;
  request<T>(config: customAxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: customAxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: customAxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: customAxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: customAxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: customAxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: customAxiosRequestConfig): Promise<T>;
}
