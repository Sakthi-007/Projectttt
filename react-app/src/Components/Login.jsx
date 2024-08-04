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
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, resetForm } from '../Redux/formSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AuthForm.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { username, password } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', { username, password });
    dispatch(resetForm());
    navigate('/home'); // Redirect to homepage
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          required
        />
        <button type="submit">Log In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
