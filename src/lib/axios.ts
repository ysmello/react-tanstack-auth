import axios, { AxiosError, AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:6969',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const token = sessionStorage.getItem('accessToken');

    if (error.status === 401 && token) {
      const response = await api.get('/refresh');

      const newAcessToken = response.data.accessToken;

      sessionStorage.setItem('accessToken', newAcessToken);
      api.defaults.headers.Authorization = `Bearer ${newAcessToken}`;
    }
  }
);

export default api;
