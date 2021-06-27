import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import sidebarReducer from './Sidebar/sidebarSlice';

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
  middleware
});
