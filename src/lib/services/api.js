import { goto } from '$app/navigation';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    const response = error.response;
    if (response) {
      const { status, data } = response;
      
      switch (status) {
        case 401:
          localStorage.removeItem('token');
          goto('/sign-in');
          return Promise.resolve(error);
        case 400:
          return Promise.resolve({ 
            isError: true, 
            status: 400, 
            message: 'Bad Request', 
            data 
          });
          
        case 404:
          return Promise.resolve({ 
            isError: true, 
            status: 404, 
            message: 'Not Found', 
            data 
          });
          
        case 409:
          return Promise.resolve({ 
            isError: true, 
            status: 409, 
            message: 'Conflict', 
            data 
          });
          
        default:
          return Promise.reject(error);
      }
    }
    
    return Promise.reject(error);
  }
)

export default api;
