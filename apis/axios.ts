import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from '@/utils/cookie/cookie';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  timeout: 2000,
});

// instance.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     config.headers.Authorization = `Bearer ${getCookie('accessToken')}`;
//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   },
// );

export default instance;
