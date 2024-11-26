import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/parking' });

export const fetchSlots = () => API.get('/');
export const createSlot = (data) => API.post('/', data);
export const updateSlot = (id, data) => API.put(`/${id}`, data);
