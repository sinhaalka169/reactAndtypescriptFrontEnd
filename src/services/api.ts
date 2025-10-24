import axios from 'axios';
import { Task } from '../types/Task';

const BASE_URL = 'http://localhost:5000';

export const fetchTodos = () => axios.get<Task[]>(`${BASE_URL}/todos`);
export const createTodo = (task: Omit<Task, 'id' | 'completed'>) =>
  axios.post<Task>(`${BASE_URL}/todos`, task);
export const deleteTodo = (id: string) =>
  axios.delete(`${BASE_URL}/todos/${id}`);
export const completeTodo = (id: string) =>
  axios.patch<Task>(`${BASE_URL}/todos/${id}/complete`);
export const updateTodo = (task: Task) =>
  axios.put<Task>(`${BASE_URL}/todos`, task);
