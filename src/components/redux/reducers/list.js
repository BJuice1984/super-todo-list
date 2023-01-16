import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};
const addlist = 0;
const list = createReducer(initialState, (builder) => {
  builder.addCase(addlist, (state, action) => {
    state.list.unshift(action.payload);
  });
});
