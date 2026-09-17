import { createSlice } from '@reduxjs/toolkit';



export const infoSlice = createSlice({
  name: 'info',
  initialState :{
    info: null,
  },
  reducers: {
    info: (state, action) => {
      state.info = action.payload;
    },
  }
});

export const { info } = infoSlice.actions;

export const selectInfo = (state) => state.info.info;

export default infoSlice.reducer;
