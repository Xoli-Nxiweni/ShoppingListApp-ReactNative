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
import themeReducer from './ThemeSlice'

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    theme: themeReducer,
  }
});