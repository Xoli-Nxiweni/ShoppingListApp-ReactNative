import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/ShoppingListSlice';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddItemModal({ navigation }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Item name is required');
      return;
    }

    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return;
    }

    dispatch(
      addItem({
        name: name.trim(),
        quantity: parsedQuantity,
        notes: notes.trim(),
      })
    );

    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Add New Item</Text>

          <TextInput
            style={styles.input}
            placeholder="Item Name"
            placeholderTextColor="#adb5bd"
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            autoFocus
          />

          <TextInput
            style={styles.input}
            placeholder="Quantity"
            placeholderTextColor="#adb5bd"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            returnKeyType="next"
          />

          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Additional Notes (Optional)"
            placeholderTextColor="#adb5bd"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={3}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <LinearGradient
              colors={['#00b4d8', '#0077b6']}
              style={styles.gradientButton}
            >
              <Text style={styles.addButtonText}>Add to List</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#00b4d8',
  },
  input: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#e9ecef',
    shadowColor: '#00b4d8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
