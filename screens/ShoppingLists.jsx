// import React, { useEffect } from 'react';
// import {
//   View,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { setItems } from '../Redux/ShoppingListSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ShoppingLists({ navigation }) {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.shoppingList.items);

//   useEffect(() => {
//     // Load items from AsyncStorage when component mounts
//     const loadItems = async () => {
//       try {
//         const storedItems = await AsyncStorage.getItem('shoppingListItems');
//         if (storedItems) {
//           dispatch(setItems(JSON.parse(storedItems)));
//         }
//       } catch (error) {
//         console.error('Error loading items:', error);
//       }
//     };

//     loadItems();
//   }, [dispatch]);

//   const handleItemPress = (item) => {
//     navigation.navigate('ShoppingItemModal', { item });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
//       <View style={styles.itemContent}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <View style={styles.itemDetails}>
//           <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//           {item.notes && (
//             <Text style={styles.itemNotes} numberOfLines={1}>
//               Notes: {item.notes}
//             </Text>
//           )}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Shopping List</Text>
//       {items.length === 0 ? (
//         <Text style={styles.emptyText}>No items in the list. Add some!</Text>
//       ) : (
//         <FlatList
//           data={items}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderItem}
//           contentContainerStyle={styles.listContent}
//         />
//       )}
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('AddItemModal')}
//       >
//         <LinearGradient
//           colors={['#00b4d8', '#0077b6']}
//           style={styles.gradientButton}
//         >
//           <Text style={styles.addButtonText}>+ Add Item</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     textAlign: 'center',
//     color: '#00b4d8',
//     marginBottom: 20,
//   },
//   listContent: {
//     paddingVertical: 10,
//   },
//   item: {
//     backgroundColor: '#1f1f1f',
//     borderRadius: 8,
//     marginBottom: 12,
//     padding: 15,
//     elevation: 3,
//     shadowColor: '#00b4d8',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   itemContent: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#e9ecef',
//     marginBottom: 5,
//   },
//   itemDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemQuantity: {
//     fontSize: 14,
//     color: '#adb5bd',
//   },
//   itemNotes: {
//     fontSize: 14,
//     color: '#6c757d',
//     maxWidth: '60%',
//   },
//   emptyText: {
//     textAlign: 'center',
//     color: '#adb5bd',
//     fontSize: 16,
//     marginTop: 40,
//   },
//   addButton: {
//     marginTop: 20,
//     borderRadius: 8,
//     elevation: 5,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     paddingVertical: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     letterSpacing: 1,
//   },
// });


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { setItems } from '../Redux/ShoppingListSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ShoppingLists({ navigation }) {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.shoppingList.items);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     // Load items from AsyncStorage when component mounts
//     const loadItems = async () => {
//       try {
//         const storedItems = await AsyncStorage.getItem('shoppingListItems');
//         if (storedItems) {
//           dispatch(setItems(JSON.parse(storedItems)));
//         }
//       } catch (error) {
//         console.error('Error loading items:', error);
//       } finally {
//         setLoading(false); // Set loading to false after data is loaded
//       }
//     };

//     loadItems();
//   }, [dispatch]);

//   const handleItemPress = (item) => {
//     navigation.navigate('ShoppingItemModal', { item });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
//       <View style={styles.itemContent}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <View style={styles.itemDetails}>
//           <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//           {item.notes && (
//             <Text style={styles.itemNotes} numberOfLines={1}>
//               Notes: {item.notes}
//             </Text>
//           )}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     // Show loader while data is loading
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#00b4d8" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {items.length === 0 ? (
//         <Text style={styles.emptyText}>No items in the list. Add some!</Text>
//       ) : (
//         <FlatList
//           data={items}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderItem}
//           contentContainerStyle={styles.listContent}
//         />
//       )}
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('AddItemModal')}
//       >
//         <LinearGradient
//           colors={['#00b4d8', '#0077b6']}
//           style={styles.gradientButton}
//         >
//           <Text style={styles.addButtonText}>+ Add Item</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#121212',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#00b4d8',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     textAlign: 'center',
//     color: '#00b4d8',
//     marginBottom: 20,
//   },
//   listContent: {
//     paddingVertical: 10,
//   },
//   item: {
//     backgroundColor: '#1f1f1f',
//     borderRadius: 8,
//     marginBottom: 12,
//     padding: 15,
//     elevation: 3,
//     shadowColor: '#00b4d8',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   itemContent: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#e9ecef',
//     marginBottom: 5,
//   },
//   itemDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemQuantity: {
//     fontSize: 14,
//     color: '#adb5bd',
//   },
//   itemNotes: {
//     fontSize: 14,
//     color: '#6c757d',
//     maxWidth: '60%',
//   },
//   emptyText: {
//     textAlign: 'center',
//     color: '#adb5bd',
//     fontSize: 16,
//     marginTop: 40,
//   },
//   addButton: {
//     marginTop: 20,
//     borderRadius: 8,
//     elevation: 5,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     paddingVertical: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     letterSpacing: 1,
//   },
// });


import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setItems, toggleFulfilled } from '../Redux/ShoppingListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function ShoppingLists({ navigation }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load items from AsyncStorage when component mounts
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('shoppingListItems');
        if (storedItems) {
          dispatch(setItems(JSON.parse(storedItems)));
        }
      } catch (error) {
        console.error('Error loading items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, [dispatch]);

  const handleCheckboxToggle = (id) => {
    dispatch(toggleFulfilled(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          item.fulfilled && styles.checkboxChecked,
        ]}
        onPress={() => handleCheckboxToggle(item.id)}
      >
        {item.fulfilled && <Text style={styles.checkboxText}>✓</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => navigation.navigate('ShoppingItemModal', { item })}
      >
        <Text
          style={[
            styles.itemName,
            item.fulfilled && styles.strikethroughText,
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.itemDetails,
            item.fulfilled && styles.strikethroughText,
          ]}
        >
          Quantity: {item.quantity}
        </Text>
        {item.notes && (
          <Text
            style={[
              styles.itemNotes,
              item.fulfilled && styles.strikethroughText,
            ]}
          >
            Notes: {item.notes}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00b4d8" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.emptyText}>No items in the list. Add some!</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItemModal')}
      >
        <LinearGradient
          colors={['grey', 'lightgrey']}
          style={styles.gradientButton}
        >
          <Text style={styles.addButtonText}>+ Add Item</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00b4d8',
  },
  listContent: {
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    marginBottom: 12,
    padding: 15,
    elevation: 3,
    shadowColor: '#00b4d8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#adb5bd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  checkboxChecked: {
    backgroundColor: '#00b4d8',
    borderColor: '#00b4d8',
  },
  checkboxText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e9ecef',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    color: '#adb5bd',
  },
  itemNotes: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  emptyText: {
    textAlign: 'center',
    color: '#adb5bd',
    fontSize: 16,
    marginTop: 40,
  },
  addButton: {
    marginTop: 20,
    borderRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
