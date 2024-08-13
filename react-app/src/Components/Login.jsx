// // src/components/Login.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUsername, setPassword, resetForm } from '../Redux/formSlice';
// import './AuthForm.css';

// const Login = () => {
//   const dispatch = useDispatch();
//   const { username, password } = useSelector((state) => state.form);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login form submitted:', { username, password });
//     dispatch(resetForm());
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Log In</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => dispatch(setUsername(e.target.value))}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => dispatch(setPassword(e.target.value))}
//           required
//         />
//         <button type="submit">Log In</button>
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email:email,
        password:password,
      });

      const token = response.data.token;
      const isAdmin = response.data.isAdmin;

      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);

      toast.success('Logged in successfully!');

      if (isAdmin) {
        navigate('/admin'); // Redirect to admin page if the user is an admin
      } else {
        navigate('/home'); // Redirect to the home page if the user is not an admin
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      toast.error('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
