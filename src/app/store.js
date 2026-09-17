import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import infoReducer from '../features/infoSlice';
import grabReducer from '../features/grabSlice';
import expReducer from '../features/expSlice';

export const store = configureStore({
  reducer: {
    exp: expReducer,
    grab: grabReducer,
    info: infoReducer,
    user: userReducer,
  },
});
