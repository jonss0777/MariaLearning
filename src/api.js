// Usually placed in a central api.js file
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Smoothly injects the Spring Boot-required header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response, // If 200 OK, just pass the data through
  (error) => {
    if (error.response && error.response.status === 401) {
      // The token is dead! 
      localStorage.removeItem('token');
      window.location.href = '/login'; // Force the user out
    }
    return Promise.reject(error);
  }
);