import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ListType = {
  myList: string[];
};

const initialState: ListType = {
    myList: [],
};

export const selectList = createSlice({
  name: 'setList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.myList.push(action.payload);
    },
  },
});

export const { addItem } = selectList.actions;

export default selectList.reducer;
