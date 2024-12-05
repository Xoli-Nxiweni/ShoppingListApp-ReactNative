// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store';

// // Import screens and modals
// import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import SplashScreen from './screens/SplashScreen';
// import ShoppingItemModal from './screens/ShoppingItemModal';
// import AddItemModal from './screens/AddItemModal';
// import ShoppingLists from './screens/ShoppingLists';

// // Initialize stack navigator
// const Stack = createStackNavigator();

// export default function App() {
//   const [isSplashLoaded, setSplashLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSplashLoaded(true);
//     }, 2000); // Splash screen duration

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <StatusBar style="light" />
//         <Stack.Navigator screenOptions={{headerStyle: {backgroundColor:'black',},}}>
//           {/* Splash Screen only shown when isSplashLoaded is false */}
//           {isSplashLoaded ? (
//             <>
//               <Stack.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={({ navigation }) => ({
//                   title: 'Home',
//                   headerStyle: { backgroundColor: '#000' },
//                   headerTintColor: '#fff',
//                   headerRight: () => (
//                     <Ionicons
//                       name="settings"
//                       size={24}
//                       color="#fff"
//                       style={{ marginRight: 15 }}
//                       onPress={() => navigation.navigate('Settings')}  // Correct navigation here
//                     />
//                   ),
//                 })}
//               />
//               <Stack.Screen
//                 name="ShoppingLists"
//                 component={ShoppingLists}
//                 options={{
//                   title: 'My Shopping List',
//                   headerStyle: { backgroundColor: '#000' },
//                   headerTintColor: '#fff',
//                 }}
//               />
//               <Stack.Screen
//                 name="ShoppingItemModal"
//                 component={ShoppingItemModal}
//                 options={({ route }) => ({
//                   title: route.params?.itemName || 'Item Details',
//                   presentation: 'modal',
//                   headerShown: true,
//                 })}
//               />
//               <Stack.Screen
//                 name="AddItemModal"
//                 component={AddItemModal}
//                 options={{
//                   title: 'Add New Item',
//                   presentation: 'modal',
//                   headerShown: true,
//                 }}
//               />
//               <Stack.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//                 options={{
//                   title: 'Settings',
//                   headerStyle: { backgroundColor: '#000' },
//                   headerTintColor: '#fff',
//                 }}
//               />
//             </>
//           ) : (
//             <Stack.Screen
//               name="Splash"
//               component={SplashScreen}
//               options={{ headerShown: false }}
//             />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// Import screens and modals
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import ShoppingItemModal from './screens/ShoppingItemModal';
import AddItemModal from './screens/AddItemModal';
import ShoppingLists from './screens/ShoppingLists';

// Initialize stack navigator
const Stack = createStackNavigator();

export default function App() {
  const [isSplashLoaded, setSplashLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashLoaded(true);
    }, 2000); // Splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false, // Disable animations for smooth screen transitions
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
          }}
        >
          {/* Splash Screen only shown when isSplashLoaded is false */}
          {isSplashLoaded ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                  title: 'Home',
                  headerRight: () => (
                    <Ionicons
                      name="settings"
                      size={24}
                      color="#fff"
                      style={{ marginRight: 15 }}
                      onPress={() => navigation.navigate('Settings')} // Correct navigation here
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="ShoppingLists"
                component={ShoppingLists}
                options={{
                  title: 'My Shopping List',
                }}
              />
              <Stack.Screen
                name="ShoppingItemModal"
                component={ShoppingItemModal}
                options={({ route }) => ({
                  title: route.params?.itemName || 'Item Details',
                  presentation: 'modal', // Modal style for this screen
                  headerShown: true,
                })}
              />
              <Stack.Screen
                name="AddItemModal"
                component={AddItemModal}
                options={{
                  title: 'Add New Item',
                  presentation: 'modal', // Modal style for this screen
                  headerShown: true,
                }}
              />
              <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  title: 'Settings',
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
