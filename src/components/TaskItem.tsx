import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Task } from '../types/Task';
import { getRowColor } from '../utils/getRowColor';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete, onComplete, onEdit }) => {
  return (
    <div
      style={{
        backgroundColor: getRowColor(task.dueDate, task.completed),
        padding: '0.5rem',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Checkbox
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          color="primary"
        />
        <p          
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title} – {task.dueDate}
        </p>
      </div>
      <IconButton onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => onEdit(task)}>
  <EditIcon />
</IconButton>
    </div>
  );
};

export default TaskItem;
