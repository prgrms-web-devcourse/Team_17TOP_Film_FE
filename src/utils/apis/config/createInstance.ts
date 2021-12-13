import axios from 'axios';
import { authInterceptor } from './interceptor';
import { CustomInstance } from './types';

const createAuthInstance = () => {
  const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL }) as CustomInstance;
  authInterceptor(instance);
  return instance;
};

export const authInstance = createAuthInstance();
