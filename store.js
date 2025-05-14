import { configureStore } from '@reduxjs/toolkit';
import bagReducer from './slices/bagSlice';
import restaurantReducer from './slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    bag: bagReducer,     
    restaurant: restaurantReducer,
  },
});

export default store;