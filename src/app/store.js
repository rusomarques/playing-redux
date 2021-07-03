import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import playingReducer from '../features/playing/playingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playing: playingReducer
  }
});
