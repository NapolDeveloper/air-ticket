import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    userData: {
      name: '',
      passportNumber: ''
    }
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.userData = { name: 'd', passportNumber: '' };
    }
  }
});

export const { login, logout } = slice.actions;

export const selectIsLogged = (state) => state.user.isLogged;
export const selectUserData = (state) => state.user.userData;

export default slice.reducer;
