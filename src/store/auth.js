import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

//Authentication
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//Redux Toolkit export actions
export const authActions = authSlice.actions;

export default authSlice.reducer;
