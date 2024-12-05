// src/Redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  darkMode: false, // Default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      AsyncStorage.setItem('darkMode', JSON.stringify(state.darkMode)); // Persist theme state
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
