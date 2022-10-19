/*eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.coincap.io/v2/assets';

const initialState = {
  lists: [],
  status: null,
};

export const fetchCoins = createAsyncThunk(
  'rockets/fetchCoins',
  async () => {
    const response = await fetch(api);
    return await response.json()
  }
);

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  extraReducers: {
    [fetchCoins.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchCoins.fulfilled]: (state, { payload }) => {
      state.lists = payload,
      state.status = 'Success';
    },
    [fetchCoins.rejected]: (state, action) => {
      state.status = 'Failed';
    },
  },

});

export default priceSlice.reducer;
