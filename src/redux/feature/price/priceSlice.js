import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiUrl = 'api.coincap.io/v2/assets';

const initialState = {
    lists: [],
  status: null
}

export const fetchCoins = createAsyncThunk(
    'price/fetchCoins', async() =>{
        const response = await fetch(ApiUrl)
       return response.data  
    })
   

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
    extraReducers: {
        [fetchCoins.pending]: (state) => {
          state.status = 'Loading';
        },
        [fetchCoins.fulfilled]: (state, { payload }) => {
          state.lists = payload,
          state.status = 'Success';
        },
        [fetchCoins.rejected]: (state) => {
          state.status = 'Failed';
        },
      },
})

export default priceSlice.reducer