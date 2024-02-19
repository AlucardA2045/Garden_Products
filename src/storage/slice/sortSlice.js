import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "by default",
  listProd: [],
  priceMinus: "",
  pricePlus: "",
  check: false,
  newTextValue: "", // Новое поле для значения нового input
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
    setNewTextValue(state, action) {
      state.newTextValue = action.payload;
    },
  },
});

export const {
  setCategory,
  setPriceMinus,
  setPricePlus,
  setCheck,
  setNewTextValue,
} = sortSlice.actions;

export default sortSlice.reducer;
