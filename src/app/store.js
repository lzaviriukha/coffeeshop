import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from '../features/goods/goodsSlice';

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },
});
