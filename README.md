# Shopping List App with Redux

A simple shopping list app built with **React Native** and **Redux** for state management. Users can add, edit, delete, and manage items on their shopping list. It includes persistence to ensure that the shopping list data is saved and available across app sessions.

## Table of Contents

- [Shopping List App with Redux](#shopping-list-app-with-redux)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Cloning the Project](#cloning-the-project)
    - [Install Dependencies](#install-dependencies)
    - [Run the App](#run-the-app)
  - [Usage](#usage)
  - [Redux Setup](#redux-setup)
    - [Actions](#actions)
    - [Reducers](#reducers)
  - [Persistence](#persistence)
    - [How it Works](#how-it-works)
  - [Testing](#testing)
  - [Contributing](#contributing)

---

## Features

- **Add New Items**: Add items to the shopping list using an input field.
- **Edit Items**: Edit item names and quantities.
- **Delete Items**: Remove items from the list.
- **Mark as Purchased**: Mark items as purchased with a checkbox.
- **Persisted Data**: Data is saved using local storage, ensuring persistence across app sessions.
- **User Feedback**: Visual feedback when items are added, edited, or deleted.
- **Simple UI**: A user-friendly interface with easy navigation for managing the shopping list.

---

## Technologies Used

- **React Native**: A framework for building mobile applications using JavaScript and React.
- **Redux**: State management for the app, handling actions such as adding, editing, and deleting items.
- **React Navigation**: For handling in-app navigation.
- **AsyncStorage**: For storing shopping list data locally on the device.
- **Expo**: For easy setup, development, and testing of the app.

---

## Setup Instructions

### Prerequisites

Before running the app, make sure you have the following installed:

1. **Node.js**: [Download and Install](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Expo CLI**: Install Expo CLI globally by running:
   ```bash
   npm install -g expo-cli
   ```
4. **Git**: If you haven't installed Git, [download and install Git](https://git-scm.com/).

### Cloning the Project

To clone this project, run the following command in your terminal:

```bash
git clone https://github.com/Xoli-Nxiweni/ShoppingListApp-ReactNative.git
cd ShoppingListApp-ReactNative
```

### Install Dependencies

After cloning the repository, install the necessary dependencies by running:

```bash
npm install
```

This command installs all the libraries and packages required for the app to function correctly.

### Run the App

To run the app on your emulator or physical device, use Expo CLI. In your project folder, run:

```bash
npm start
```

This will open the Expo developer tools in your browser. You can either:

- Scan the QR code with the **Expo Go** app on your mobile device.
- Press `a` to run the app on an Android emulator.
- Press `i` to run the app on an iOS simulator.

---

## Usage

Once the app is running:

1. **Adding Items**: Type the item name in the input field and click the "Add Item" button to add it to the shopping list.
2. **Editing Items**: Tap an item in the list to edit its name or quantity.
3. **Deleting Items**: Tap the delete button next to any item to remove it from the list.
4. **Marking as Purchased**: Check the checkbox next to an item to mark it as purchased.
5. **Persistence**: When you close and reopen the app, the shopping list is saved, so you don't lose your data.

---

## Redux Setup

Redux is used to manage the app's state, specifically the shopping list. The app's state includes a list of items, each with an `id`, `name`, `quantity`, and a `purchased` status.

### Actions

Redux actions define the operations that can modify the state. Here are the actions used in this app:

- **`ADD_ITEM`**: Adds a new item to the shopping list.
- **`EDIT_ITEM`**: Edits an existing item in the shopping list.
- **`DELETE_ITEM`**: Deletes an item from the list.
- **`TOGGLE_PURCHASED`**: Marks an item as purchased or not.

### Reducers

Reducers are responsible for updating the Redux state based on the actions dispatched. The main reducer manages the `shoppingList` array, which stores each item.

The state is structured like this:

```js
{
  shoppingList: [
    {
      id: 1,
      name: 'Apples',
      quantity: 2,
      purchased: false,
    },
    {
      id: 2,
      name: 'Bananas',
      quantity: 3,
      purchased: true,
    },
  ],
}
```

Each item has the following properties:
- `id`: A unique identifier for the item.
- `name`: The name of the item.
- `quantity`: The quantity of the item.
- `purchased`: A boolean indicating whether the item has been marked as purchased.

---

## Persistence

The app uses **AsyncStorage** to persist the shopping list between app sessions. This ensures that users' data is saved and restored when the app is closed and reopened.

### How it Works

- Every time the shopping list changes (e.g., items are added, edited, or deleted), the updated list is saved to AsyncStorage.
- On app startup, the saved list is loaded from AsyncStorage and used to initialize the app's state.

---

## Testing

To test the app, ensure the following:

1. The app runs correctly on your simulator or device.
2. Test adding, editing, and deleting items, and ensure the app responds as expected.
3. Check that the shopping list persists between app sessions.
4. Optionally, write unit tests for Redux actions and reducers using **Jest** or another testing library.

---

## Contributing

We welcome contributions! If you would like to contribute to this project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push the changes to your branch: `git push origin feature/your-feature`.
5. Open a pull request.

---
