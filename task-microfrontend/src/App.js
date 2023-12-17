// task-microfrontend/src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './store/taskActions';

const App = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const [newTask, setNewTask] = React.useState('');

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask('');
  };

  return (
    <div>
      <h1>Task Microfrontend</h1>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
