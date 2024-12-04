// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// // import HomeScreen from './screens/HomeScreen';
// // import SettingsScreen from './screens/SettingsScreen';
// // import ShoppingItemModal from './screens/ShoppingItemModal';
// // import ShoppingLists from './screens/ShoppingLists';
// // import SplashScreen from './screens/SplashScreen';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <StatusBar/>
// //       {/* Setting up tabs for the application and i have a few so far that i imported but not used yet and i need your help with it*/}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import ShoppingItemModal from './screens/ShoppingItemModal';
// import ShoppingLists from './screens/ShoppingLists';
// import SplashScreen from './screens/SplashScreen';
// import { Ionicons } from '@expo/vector-icons'; // for tab icons

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar style="dark" /> {/* Customize StatusBar */}
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#6200EE', // Dark purple background for header
//           },
//           headerTintColor: '#fff', // White text for the header
//           tabBarStyle: {
//             backgroundColor: '#6200EE', // Tab bar background color
//           },
//           tabBarActiveTintColor: '#fff', // Active tab icon color
//           tabBarInactiveTintColor: '#B0B0B0', // Inactive tab icon color
//         }}
//       >
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Shopping Lists" 
//           component={ShoppingLists} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="list" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Settings" 
//           component={SettingsScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="settings" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Shopping Item Modal" 
//           component={ShoppingItemModal} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="add-circle" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Splash" 
//           component={SplashScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="rocket" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ShoppingItemModal from './screens/ShoppingItemModal';
import ShoppingLists from './screens/ShoppingLists';
import SplashScreen from './screens/SplashScreen';
import { Ionicons } from '@expo/vector-icons'; // for tab icons
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#6200EE',
          backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          // backgroundColor: '#6200EE',
          backgroundColor: '#000000',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#B0B0B0',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Shopping Lists" 
        component={ShoppingLists} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Shopping Item Modal" 
        component={ShoppingItemModal} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isSplashLoaded, setSplashLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay for the SplashScreen (e.g., 2 seconds)
    setTimeout(() => {
      setSplashLoaded(true);
    }, 2000); // 2 seconds delay for splash screen
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* SplashScreen shows up first */}
        {!isSplashLoaded ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          // After splash, show the TabNavigator
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

