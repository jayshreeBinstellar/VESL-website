import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// Register user
export const registerUser = (userData) => API.post('/register', userData);

// Login user
export const loginUser = (userData) => API.post('/login', userData);


export const fetchUsers = () => API.get('/users');


