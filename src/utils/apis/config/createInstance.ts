import axios from 'axios';
import { authInterceptor } from './interceptor';

const createAuthInstance = () => {
  const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
  authInterceptor(instance);
  return instance;
};

export const authInstance = createAuthInstance();
