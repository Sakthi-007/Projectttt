// src/components/Signup.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setEmail, resetForm } from '../Redux/formSlice';
import './AuthForm.css';
import axios from 'axios';

const Signup = () => {
  const dispatch = useDispatch();
  const { username, password, email } = useSelector((state) => state.form);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Signup form submitted:', { username, password, email });
  //   dispatch(resetForm());
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/', {
        name: username,
        email:email,
        password:password,
      });
      console.log('Signup response:', response.data);
  
      if (response.data.status==200) { // Assuming your backend returns a success flag
        dispatch(resetForm());
        // Optionally navigate the user or show a success message
      } 
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          required
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/">Log In</a></p>
      </form>
    </div>
  );
};

export default Signup;
