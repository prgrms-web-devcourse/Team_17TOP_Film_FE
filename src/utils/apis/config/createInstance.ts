import axios from 'axios';
import { authInterceptor } from './interceptor';
import { CustomInstance } from './type';

const createAuthInstance = () => {
  const instance: CustomInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
  authInterceptor(instance);
  return instance;
};

export const authInstance = createAuthInstance();
