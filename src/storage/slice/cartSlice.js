import { createSlice } from "@reduxjs/toolkit";

// Функция для получения начального состояния из Local Storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Функция для сохранения состояния в Local Storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch {
    // игнорируем ошибки записи в Local Storage
  }
};

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) =>
      total + Math.floor(Number(product.priceMax) * product.count * 100) / 100,
    0
  );
};

const initialState = loadState() || {
  product: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCountProduct(state, action) {
      const { id, count } = action.payload;
      const existingProductIndex = state.product.findIndex(
        (item) => item.id === id
      );
      if (existingProductIndex !== -1) {
        // Если товар уже есть в корзине, обновляем его количество
        state.product[existingProductIndex].count += count;
      } else if (count) {
        state.product.push(action.payload);
      } else {
        state.product.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.product);

      // После каждого обновления сохраняем состояние в Local Storage
      saveState(state);
    },
    removeProduct(state, action) {
      const productId = action.payload;
      state.product = state.product.filter((item) => item.id !== productId);
      state.totalPrice = calculateTotalPrice(state.product);

      // После удаления продукта сохраняем состояние в Local Storage
      saveState(state);
    },
    updateProductCount(state, action) {
      const { id, count } = action.payload;
      const productToUpdate = state.product.find((item) => item.id === id);
      if (productToUpdate) {
        productToUpdate.count = count;
        state.totalPrice = calculateTotalPrice(state.product);
        // После каждого обновления сохраняем состояние в Local Storage
        saveState(state);
      }
    },
  },
});

export const { setCountProduct, removeProduct, updateProductCount } =
  cartSlice.actions;

export default cartSlice.reducer;
