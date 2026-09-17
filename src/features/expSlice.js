import { createSlice } from '@reduxjs/toolkit';



export const expSlice = createSlice({
  name: 'exp',
  initialState :{
    exp: null,
  },
  reducers: {
    exp: (state, action) => {
      state.exp = action.payload;
    },
  }
});

export const { exp } = expSlice.actions;

export const selectexp = (state) => state.exp.exp;

export default expSlice.reducer;
