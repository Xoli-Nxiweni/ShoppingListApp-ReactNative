// import { configureStore } from '@reduxjs/toolkit';
// import shoppingListReducer from '../Redux/ShoppingListSlice';

// export const store = configureStore({
//   reducer: {
//     shoppingList: shoppingListReducer,
//   },
// });

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './ShoppingListSlice';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer
  }
});