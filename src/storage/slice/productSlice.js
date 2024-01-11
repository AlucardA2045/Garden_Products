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
    list: [],
    /* filtered: [],
    related: [], */
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
