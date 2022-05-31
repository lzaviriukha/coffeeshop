import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import coffeeApi from "./commonApi";

const initialState = {
  goods: [],
  status: "idle", //The request hasn't started yet
  error: null,
};

// createAsyncThunk accepts two arguments:

// A string that will be used as the prefix for the generated action types
// A "payload creator" callback function that should return a Promise containing some data, or a rejected Promise with an error

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const response = await coffeeApi.get("coffee.json");
  console.log(response.data);
  return response.data;
});

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // The extraReducers option should be a function that receives a parameter called builder.
    //  The builder object provides methods that let us define additional case reducers that will
    //  run in response to actions defined outside of the slice. 
    // We'll use builder.addCase(actionCreator, reducer) to handle each of the actions dispatched by
    //  our async thunks.
    builder
      .addCase(fetchGoods.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fatched posts to the array
        state.goods = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllGoods = (state) => state.goods.goods;
export const selectReccommendGoods = (state) => state.goods.goods.filter(good => good.reccommend === 'true')
export const selectGoodsById = (state, gooddsId) => {
  state.goods.goods.find((good) => good.id === gooddsId);
};
export const selectGoodsByFilter = (state, filter) => 
  state.goods.goods.filter(good => good.country === filter)


export default goodsSlice.reducer;
