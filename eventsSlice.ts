import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { eventType } from './types';

export interface CounterState {
  events: eventType[];
}

const initialState: CounterState = {
  events: [],
};

export const counterSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<eventType[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<eventType>) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { setEvents, addEvent, deleteEvent } = counterSlice.actions;

export default counterSlice.reducer;
