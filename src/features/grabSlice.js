import { createSlice } from '@reduxjs/toolkit';



export const grabSlice = createSlice({
  name: 'grab',
  initialState :{
    grab: null,
  },
  reducers: {
    grab: (state, action) => {
      state.grab = action.payload;
    },
  }
});

export const { grab } = grabSlice.actions;

export const selectgrab = (state) => state.grab.grab;

export default grabSlice.reducer;
