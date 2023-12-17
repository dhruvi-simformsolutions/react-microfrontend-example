// auth-microfrontend/src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/authActions';

const App = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({ username: 'user', password: 'password' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Auth Microfrontend</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
