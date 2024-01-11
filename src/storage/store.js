import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import categorySlice from "./slice/categorySlice";
import productAllSlice from "./slice/productAllSlice";

export const store = configureStore({
  reducer: {
    products: productAllSlice,
    product: productSlice,
    categories: categorySlice,
  },
  devTools: true,
});
