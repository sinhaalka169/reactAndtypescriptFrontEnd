import React from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
