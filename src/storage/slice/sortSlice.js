import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "by default",
  listProd: [],
  priceMinus: "",
  pricePlus: "",
  check: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryName = action.payload;
    },
    setPriceMinus(state, action) {
      state.priceMinus = action.payload;
    },
    setPricePlus(state, action) {
      state.pricePlus = action.payload;
    },
    setCheck(state, action) {
      state.check = !state.check;
    },
    setList(state, action) {
      state.listProd = (
        state.categoryName === "price: low-high"
          ? action.payload.sort((a, b) => {
              return a.priceMax - b.priceMax;
            })
          : state.categoryName === "price: high-low"
          ? action.payload.sort((a, b) => {
              return b.priceMax - a.priceMax;
            })
          : action.payload
      ).filter((e) => {
        if (state.pricePlus) {
          return (
            e.priceMax <= state.pricePlus && e.priceMax >= state.priceMinus
          );
        } else {
          return e.priceMax >= state.priceMinus;
        }
      });
    },
  },
});

export const { setCategory, setPriceMinus, setPricePlus, setCheck, setList } =
  sortSlice.actions;

export default sortSlice.reducer;
