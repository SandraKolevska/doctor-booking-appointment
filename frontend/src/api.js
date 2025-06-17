import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Твојот backend порт и API патека
  withCredentials: true,  // ако користиш cookies или автентикација
});

export default api;
