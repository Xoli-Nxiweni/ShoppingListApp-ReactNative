// src/themeStyles.js
export const getThemeStyles = (darkMode) => ({
    container: {
      backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    },
    text: {
      color: darkMode ? '#fff' : '#000',
    },
    card: {
      backgroundColor: darkMode ? '#1e1e1e' : '#fff',
      shadowColor: darkMode ? '#000' : '#ccc',
    },
  });
  