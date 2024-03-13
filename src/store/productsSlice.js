import { createSlice } from "@reduxjs/toolkit";
import productsData from '../data/products.json';

const initialState = {
  products: productsData,
  cartItems: [],
  counter: 0
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const productToAdd = state.products.find(product => product._id === productId);
      state.cartItems.push(productToAdd);
      state.counter += 1
    },
  }
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
