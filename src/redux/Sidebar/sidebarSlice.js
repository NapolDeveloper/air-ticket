import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'sidebar', // prefix
  initialState: {
    isOpen: false
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
      console.log('redux - open');
    },
    close: (state) => {
      state.isOpen = false;
      console.log('redux - close');
    }
  }
});

export const { open, close } = slice.actions;
export const selectIsOpen = (state) => state.sidebar.isOpen;

export default slice.reducer;
