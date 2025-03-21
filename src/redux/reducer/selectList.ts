import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../features/user';

type ListType = {
  myList: UserType[];
  userCount: number;
};

const initialState: ListType = {
  myList: [],
  userCount: 0,
};

export const selectList = createSlice({
  name: 'setList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<UserType, 'id'>>) => {
      state.userCount += 1;
      const newUser = {
        id: `${state.userCount}`, // 1, 2, 3
        ...action.payload,
      };
      state.myList.push(newUser);
    },
  },
});

export const {addItem} = selectList.actions;
export default selectList.reducer;
