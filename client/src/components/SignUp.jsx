import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', user);
      console.log(response.data);
      // Redirect user to login page or home page upon successful sign-up
    } catch (error) {
      console.error('Error during sign-up:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" name="username" value={user.username} onChange={handleChange} required />
      </label>
      <label>Password:
        <input type="password" name="password" value={user.password} onChange={handleChange} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
