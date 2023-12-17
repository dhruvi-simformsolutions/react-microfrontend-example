// auth-microfrontend/src/store/authActions.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      // Simulate a login action (replace this with actual API calls)
      const { username, password } = action.payload;
      if (username === 'user' && password === 'password') {
        state.user = { username };
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      // Simulate a logout action
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
