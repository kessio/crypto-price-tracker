import { combineReducers, configureStore } from '@reduxjs/toolkit';
import priceSlice from './feature/price/prices';
import coinDetailsSlice from './feature/coinDetails/coinDetails'

const allReducers = combineReducers({
  prices: priceSlice,
  coinDetails: coinDetailsSlice 
})

const store = configureStore({
  reducer: allReducers
  
});

export default store;
