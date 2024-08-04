// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetForm: (state) => {
      state.username = '';
      state.password = '';
      state.email = '';
    },
  },
});

export const { setUsername, setPassword, setEmail, resetForm } = formSlice.actions;
export default formSlice.reducer;
