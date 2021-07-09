import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// slices
import sidebarReducer from './Sidebar/sidebarSlice';
import userReducer from './User/userSlice';

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer
  },
  middleware
});
