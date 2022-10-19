import { configureStore } from '@reduxjs/toolkit';
import priceSlice from './feature/price/prices';

const store = configureStore({
  reducer: {
    prices: priceSlice,
  },
});

export default store;
