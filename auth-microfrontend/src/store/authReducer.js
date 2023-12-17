// auth-microfrontend/src/store/authReducer.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authActions';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
