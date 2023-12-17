// task-microfrontend/src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskActions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
