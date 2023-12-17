// task-microfrontend/src/store/taskActions.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      // Simulate adding a task (replace this with actual API calls)
      const newTask = { id: state.tasks.length + 1, text: action.payload };
      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
