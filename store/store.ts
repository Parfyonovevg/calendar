import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '@/store/eventsSlice';
import userReducer from '@/store/userSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
