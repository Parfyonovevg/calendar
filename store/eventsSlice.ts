import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { eventType } from '../types';

export interface EventsState {
  events: eventType[];
}

const initialState: EventsState = {
  events: [],
};

export const eventSlice = createSlice({
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

export const { setEvents, addEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
