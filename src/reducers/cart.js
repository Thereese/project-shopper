import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //action that first checks if the item (payload) is in the cart and then either
  //pushes it to items or adds quantity
  //use spread operator to add quantity-property
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
