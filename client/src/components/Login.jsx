import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', credentials);
      console.log(response.data);
      // Save the received token to local storage or context state
      // Redirect user to home page upon successful login
    } catch (error) {
      console.error('Error during login:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
      </label>
      <label>Password:
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
