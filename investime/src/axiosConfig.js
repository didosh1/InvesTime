import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
