// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [], // Array of shopping list items
// };

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const loadItems = async () => {
//   try {
//     const savedItems = await AsyncStorage.getItem('shoppingListItems');
//     if (savedItems) {
//       return JSON.parse(savedItems);
//     }
//     return [];
//   } catch (error) {
//     console.error('Failed to load shopping list', error);
//     return [];
//   }
// };

// const saveItems = async (items) => {
//   try {
//     await AsyncStorage.setItem('shoppingListItems', JSON.stringify(items));
//   } catch (error) {
//     console.error('Failed to save shopping list', error);
//   }
// };


// const shoppingListSlice = createSlice({
//   name: 'shoppingList',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     editItem: (state, action) => {
//       const { id, newName, newQuantity } = action.payload;
//       const itemIndex = state.items.findIndex(item => item.id === id);
//       if (itemIndex !== -1) {
//         state.items[itemIndex].name = newName;
//         state.items[itemIndex].quantity = newQuantity;
//       }
//     },
//     deleteItem: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     togglePurchased: (state, action) => {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload);
//       if (itemIndex !== -1) {
//         state.items[itemIndex].purchased = !state.items[itemIndex].purchased;
//       }
//     },
//   },
// });

// export const { addItem, editItem, deleteItem, togglePurchased } = shoppingListSlice.actions;
// export default shoppingListSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const shoppingSlice = createSlice({
//   name: 'shopping',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = {
//         id: Date.now(),
//         name: action.payload.name,
//       };
//       state.items.push(newItem);
//     },
//   },
// });

// export const { addItem } = shoppingSlice.actions;
// export default shoppingSlice.reducer;

// src/redux/shoppingListSlice.js


import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loadItemsFromStorage = async () => {
  try {
    const storedItems = await AsyncStorage.getItem('shoppingListItems');
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error('Error loading items from storage:', error);
    return [];
  }
};

const saveItemsToStorage = async (items) => {
  try {
    await AsyncStorage.setItem('shoppingListItems', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving items to storage:', error);
  }
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: []
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      const newItem = {
        ...action.payload,
        id: Date.now(), 
        createdAt: new Date().toISOString(),
        fulfilled: false, // New property
      };
      state.items.push(newItem);
      saveItemsToStorage(state.items);
    },
    updateItem: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
          saveItemsToStorage(state.items); // Save updated state to AsyncStorage
        }
      },
            
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveItemsToStorage(state.items);
    },
    toggleFulfilled: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload);
        if (index !== -1) {
          state.items[index].fulfilled = !state.items[index].fulfilled;
          saveItemsToStorage(state.items);
        }
      },
  }
});

export const { setItems, addItem, updateItem, deleteItem, toggleFulfilled  } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
