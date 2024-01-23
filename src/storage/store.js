import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import categorySlice from "./slice/categorySlice";
import productAllSlice from "./slice/productAllSlice";
import productOneSlice from "./slice/productOneSlice";
import sortSlice from "./slice/sortSlice";

export const store = configureStore({
  reducer: {
    products: productAllSlice,
    product: productSlice,
    categories: categorySlice,
    productOne: productOneSlice,
    sort: sortSlice,
  },
  devTools: true,
});
