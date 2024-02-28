import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getProductOne = createAsyncThunk(
  "product/getProductOne",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}products/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productOneSlice = createSlice({
  name: "productOne",
  initialState: {
    listOne: [],
    /* filtered: [],
    related: [], */
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductOne.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductOne.fulfilled, (state, { payload }) => {
      state.listOne = payload.map((el) => {
        if (el.discont_price) {
          let priceMax = el.discont_price;
          return { ...el, priceMax };
        } else {
          let priceMax = el.price;
          return { ...el, priceMax };
        }
      });
      state.isLoading = false;
    });
    builder.addCase(getProductOne.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productOneSlice.reducer;
