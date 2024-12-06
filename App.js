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
  const [isSplashLoaded, setSplashLoaded] = useState(true);

  useEffect(() => {
    // Simulate app loading process
    const loadApp = async () => {
      try {
        // Perform any initial setup like loading user data, checking authentication, etc.
        // For example: await AsyncStorage.getItem('user-data')
        
        // Simulate a more natural loading transition
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSplashLoaded(false);
      } catch (error) {
        console.error('App loading error:', error);
        setSplashLoaded(false);
      }
    };

    loadApp();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { 
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        >
          {isSplashLoaded ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
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
                      onPress={() => navigation.navigate('Settings')}
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
                  presentation: 'modal',
                  headerShown: true,
                })}
              />
              <Stack.Screen
                name="AddItemModal"
                component={AddItemModal}
                options={{
                  title: 'Add New Item',
                  presentation: 'modal',
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
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}