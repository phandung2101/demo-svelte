import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Optional: thêm interceptor để tự động đính token nếu cần
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  respose => response,
  error => {
    const response = error.response;
    // Kiểm tra xem có response không và status code là gì
    if (response) {
      const { status, data } = response;
      
      switch (status) {
        case 400:
          console.log('Lỗi Bad Request:', data);
          // Xử lý lỗi 400 tại đây thay vì ném lỗi
          return Promise.resolve({ 
            isError: true, 
            status: 400, 
            message: 'Bad Request', 
            data 
          });
          
        case 404:
          console.log('Lỗi Not Found:', data);
          // Xử lý lỗi 404 tại đây
          return Promise.resolve({ 
            isError: true, 
            status: 404, 
            message: 'Not Found', 
            data 
          });
          
        case 409:
          console.log('Lỗi Conflict:', data);
          // Xử lý lỗi 409 tại đây
          return Promise.resolve({ 
            isError: true, 
            status: 409, 
            message: 'Conflict', 
            data 
          });
          
        default:
          // Trả về các lỗi khác như bình thường
          return Promise.reject(error);
      }
    }
    
    // Nếu không có response (lỗi mạng, timeout, v.v.)
    return Promise.reject(error);
  }
)

export default api;
