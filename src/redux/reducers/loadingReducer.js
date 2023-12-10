import { createSlice } from "@reduxjs/toolkit";
const carSlice = createSlice({
  name: "loading",
  initialState: { loading: true },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCarData } = carSlice.actions;
export default carSlice.reducer;
