// slices/bagSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromBag: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    emptyBag: state => {
      state.items = [];
    },
  },
});

export const { addToBag, removeFromBag, emptyBag } = bagSlice.actions;

export const selectBagItems = state => state.bag.items;
export const selectBagItemsById = (state, id) =>
  state.bag.items.find(item => item.id === id);

export const selectBagTotal = state => state.bag.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default bagSlice.reducer;
