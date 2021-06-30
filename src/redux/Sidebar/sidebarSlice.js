import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'sidebar', // prefix
  initialState: {
    isOpen: false,
    sideWidth: -300
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
      state.sideWidth = 0;
    },
    close: (state) => {
      state.isOpen = false;
      state.sideWidth = -300;
    }
  }
});

export const { open, close } = slice.actions;

export const selectIsOpen = (state) => state.sidebar.isOpen;
export const selectSideWidth = (state) => state.sidebar.sideWidth;

export default slice.reducer;
