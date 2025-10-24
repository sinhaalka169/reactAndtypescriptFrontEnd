import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/Task';
import { fetchTodos, createTodo, deleteTodo, completeTodo, updateTodo } from './services/api';
import EditDialog from './components/EditDialog';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTodos().then((res) => setTasks(res.data));
  }, []);

  const handleAdd = (title: string, dueDate: string) => {
    createTodo({ title, dueDate }).then((res) =>
      setTasks((prev) => [...prev, res.data])
    );
  };

  const handleDelete = (id: string) => {
    deleteTodo(id).then(() =>
      setTasks((prev) => prev.filter((task) => task.id !== id))
    );
  };

  const handleComplete = (id: string) => {
    completeTodo(id).then((res) =>
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? res.data : task))
      )
    );
  };

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setEditOpen(true);
  };
  
  const handleSaveEdit = (updated: Task) => {
    updateTodo(updated).then((res) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === res.data.id ? res.data : t))
      );
    });
  };
  

  return (
    <Container maxWidth="sm">
      <h2>
        To-Do List
      </h2>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onComplete={handleComplete} onEdit={handleEdit}/>
      <EditDialog
  open={editOpen}
  task={selectedTask}
  onClose={() => setEditOpen(false)}
  onSave={handleSaveEdit}
/>
    </Container>
  );
};

export default App;
