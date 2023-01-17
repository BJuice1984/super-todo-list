import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [{ name: 'Backlog' }, { name: 'To Do' }, { name: 'Done' }] };
const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList(state, action) {
      state.list.unshift({ name: action.payload });
    },
    addTaskList(state, action) {
      let index = 0;
      index = state.list.findIndex((i) => i.name == action.payload.currentListName);

      state.list[index].taskList === undefined
        ? (state.list[index].taskList = [action.payload.task])
        : state.list[index].taskList.push(action.payload.task);
      index = 0;
    },
  },
});
export default listSlice.reducer;
export const { addList, addTaskList } = listSlice.actions;
