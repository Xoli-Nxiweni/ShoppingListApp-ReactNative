import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../Redux/ShoppingListSlice';
import { LinearGradient } from 'expo-linear-gradient';

export default function ShoppingItemModal({ route, navigation }) {
  const { item } = route.params;
  const dispatch = useDispatch();

  const handleDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Do you wish to delete the item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch(deleteItem(item.id));
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.detailText}>Quantity: {item.quantity}</Text>
        {item.notes && (
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Notes:</Text>
            <Text style={styles.notesText}>{item.notes}</Text>
          </View>
        )}
        <Text style={styles.dateText}>
          Added on: {new Date(item.createdAt).toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <LinearGradient
          colors={['#FF6F61', '#D32F2F']}
          style={styles.gradientButton}
        >
          <Text style={styles.deleteButtonText}>Delete Item</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
    justifyContent: 'space-between',
  },
  itemDetails: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#FF6F61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00b4d8',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 18,
    color: '#e9ecef',
    marginBottom: 10,
    textAlign: 'center',
  },
  notesContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2b2b2b',
    borderRadius: 5,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00b4d8',
  },
  notesText: {
    fontSize: 16,
    color: '#e9ecef',
  },
  dateText: {
    marginTop: 15,
    fontSize: 14,
    color: '#adb5bd',
    textAlign: 'center',
  },
  deleteButton: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
