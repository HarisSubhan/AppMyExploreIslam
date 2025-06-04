import axios from 'axios';
import { store } from '../store/store';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;