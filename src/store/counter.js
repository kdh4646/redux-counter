import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//Redux Toolkit
//Counter
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Redux Toolkit export actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
