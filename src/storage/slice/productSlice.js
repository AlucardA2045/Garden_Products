import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}categories/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: { data: [], category: [] },
    /* filtered: [],
    related: [], */
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.list.data = payload.data.map((el) => {
        if (el.discont_price) {
          let priceMax = el.discont_price;
          return { ...el, priceMax };
        } else {
          let priceMax = el.price;
          return { ...el, priceMax };
        }
      });
      state.list.category = payload.category;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
