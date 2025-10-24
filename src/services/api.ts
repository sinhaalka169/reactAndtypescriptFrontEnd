import axios from 'axios';
import { Task } from '../types/Task';

const BASE_URL = 'http://localhost:5000'; // method one

const API = axios.create({baseURL: 'http://localhost:5000'}) // method two
const token = localStorage.getItem('token');
const bTkn = 
{
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export const fetchTodos = () => axios.get<Task[]>(`${BASE_URL}/todos`, bTkn);
export const createTodo = (task: Omit<Task, 'id' | 'completed'>) =>
  axios.post<Task>(`${BASE_URL}/todos`, task,bTkn);
export const deleteTodo = (id: string) =>
  axios.delete(`${BASE_URL}/todos/${id}`, bTkn);
export const completeTodo = (id: string) =>
  axios.patch<Task>(`${BASE_URL}/todos/${id}/complete`, bTkn);
export const updateTodo = (task: Task) =>
  axios.put<Task>(`${BASE_URL}/todos`, task, bTkn);
export const signUp = (email: string, password: string) => 
  API.post('/signup', {email, password}, bTkn);
export const login = (email: string, password: string) => 
  API.post('/login', {email, password}, bTkn);
