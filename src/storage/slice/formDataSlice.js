import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

// Создаем асинхронное действие (thunk) для отправки данных формы
export const submitFormData = createAsyncThunk(
  "formData/submitFormData",
  async (formData) => {
    const response = await axios.post(`${BASE_URL}order/send`, formData);
    return response.data;
  }
);

// Создаем начальное состояние
const initialState = {
  status: "idle",
  error: null,
};

// Создаем slice для обработки POST запросов
const formDataSlice = createSlice({
  name: "formData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitFormData.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitFormData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default formDataSlice.reducer;
