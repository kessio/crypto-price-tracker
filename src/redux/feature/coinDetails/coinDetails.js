/*eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.coincap.io/v2/assets';

const initialState = {
  lists: [],
  status: null,
};

export const fetchCoinDetails = createAsyncThunk(
  'coins/fetchCoinDetails',
  async (id) => {
    const response = await fetch(`${api}/${id}`);
    const result = await response.json();
    return result.data
  }
);

const coinDetailsSlice = createSlice({
  name: 'coin',
  initialState,
  extraReducers: {
    [fetchCoinDetails.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchCoinDetails.fulfilled]: (state, { payload }) => {
      state.lists = payload,
      state.status = 'Success';
    },
    [fetchCoinDetails.rejected]: (state, action) => {
      state.status = 'Failed';
    },
  },

});

export default coinDetailsSlice.reducer;
