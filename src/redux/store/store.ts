import { configureStore } from '@reduxjs/toolkit';
import { selectList } from '../reducer/selectList';


export const store = configureStore({
  reducer: {
    selectList: selectList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;