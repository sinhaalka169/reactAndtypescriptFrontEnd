import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

interface Props {
  onAdd: (title: string, dueDate: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (title && dueDate) {
      onAdd(title, dueDate);
      setTitle('');
      setDueDate('');
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <TextField
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        style={{ marginRight: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskForm;
