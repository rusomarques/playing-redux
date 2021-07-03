import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nested: {
    counterA: 0,
    counterB: 0
  },
  counterC: 0
};

export const playingSlice = createSlice({
  name: 'playing',
  initialState,
  reducers: {
    incrementA: state => {
      state.nested.counterA += 1;
    },
    incrementB: state => {
      state.nested.counterB += 1;
    },
    incrementC: state => {
      state.counterC += 1;
    }
  }
});

export const { incrementA, incrementB, incrementC } = playingSlice.actions;

export const selectNested = state => state.playing.nested;
export const selectCounterA = state => state.playing.nested.counterA;
export const selectCounterB = state => state.playing.nested.counterB;
export const selectCounterC = state => state.playing.counterC;

export default playingSlice.reducer;
