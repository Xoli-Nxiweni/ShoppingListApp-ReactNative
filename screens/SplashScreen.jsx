import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.emoji}>🛒</Text>
        <Text style={styles.title}>Keep track of your shopping list</Text>
      </View>
      {/* <Text style={styles.subtitle}>Loading, please wait...</Text> */}
      {/* <ActivityIndicator size="large" color="#00b4d8" style={styles.loader} /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a8d0e6',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  loader: {
    marginTop: 20,
  },
});
