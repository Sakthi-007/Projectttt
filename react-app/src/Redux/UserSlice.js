// src/Redux/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  sellers: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSellers: (state, action) => {
      state.sellers = action.payload;
    }
  }
});

export const { setUsers, setSellers } = userSlice.actions;
export default userSlice.reducer;
