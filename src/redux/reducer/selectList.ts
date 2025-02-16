import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type UserType = {
  id: string;
  name: string;
  surName: string;
  phoneNumber: string;
  mail: string;
  address: string;
  instagram: string;
  website: string;
};

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
        id: `user${state.userCount}`, // user1, user2, user3
        ...action.payload,
      };
      state.myList.push(newUser);
    },
  },
});

export const {addItem} = selectList.actions;
export default selectList.reducer;
