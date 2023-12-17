// task-microfrontend/src/store/taskReducer.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskActions';

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
