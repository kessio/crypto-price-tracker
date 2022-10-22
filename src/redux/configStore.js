import { combineReducers, configureStore } from '@reduxjs/toolkit';
import priceSlice from './feature/price/prices';
import coinDetailsSlice from './feature/coinDetails/coinDetails';

const allReducers = combineReducers({
  prices: priceSlice,
  coinDetails: coinDetailsSlice,
});

// use setup store so that it can be easy to setup store in the test-utils
const setupStore = (preloadedState) => configureStore({
  reducer: allReducers,
  preloadedState,
});

export default setupStore;
