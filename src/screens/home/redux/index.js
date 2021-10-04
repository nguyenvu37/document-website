import { createSlice } from '@reduxjs/toolkit';

const homeReducer = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = homeReducer;
export const { addData } = actions;
export default reducer;
