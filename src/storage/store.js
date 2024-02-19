import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import categorySlice from "./slice/categorySlice";
import productAllSlice from "./slice/productAllSlice";
import productOneSlice from "./slice/productOneSlice";
import sortSlice from "./slice/sortSlice";
import cartSlice from "./slice/cartSlice";
import formDataSlice from "./slice/formDataSlice";

export const store = configureStore({
  reducer: {
    products: productAllSlice,
    product: productSlice,
    categories: categorySlice,
    productOne: productOneSlice,
    sort: sortSlice,
    cartProduct: cartSlice,
    formDataSlice: formDataSlice,
  },
  devTools: true,
});
