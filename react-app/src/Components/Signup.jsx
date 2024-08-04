// src/components/Signup.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setEmail, resetForm } from '../Redux/formSlice';
import './AuthForm.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { username, password, email } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', { username, password, email });
    dispatch(resetForm());
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
        <p>Already have an account? <a href="/login">Log In</a></p>
      </form>
    </div>
  );
};

export default Signup;
