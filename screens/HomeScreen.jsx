import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Home refreshed!');
      setRefreshing(false);
    }, 1500);
  };

  const handleStartShopping = () => {
    navigation.navigate('ShoppingLists');
  };

  return (
    <ImageBackground style={styles.background}>
      <LinearGradient
        colors={['#1c1c1c', '#2a2a2a']}
        style={StyleSheet.absoluteFillObject}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#00b4d8']}
            progressBackgroundColor="#1a1a1a"
          />
        }
      >
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <MaterialCommunityIcons name="cart-outline" size={100} color="#00b4d8" />
            <Text style={styles.title}>Organize Your Shopping</Text>
            <Text style={styles.subtitle}>Keep track of your lists efficiently</Text>
          </View>

          {/* Emojis Section */}
          <View style={styles.emojis}>
            {['🛒', '🥦', '🍞', '🍎'].map((emoji, index) => (
              <Text key={index} style={styles.emoji}>
                {emoji}
              </Text>
            ))}
          </View>

          {/* CTA Button */}
          <Animated.View>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={handleStartShopping}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#00b4d8', '#0077b6']}
                style={styles.gradientButton}
              >
                <Text style={styles.ctaButtonText}>View Shopping List</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          {/* Feature Section */}
          <View style={styles.featureSection}>
            <View style={styles.featureItem}>
              <Ionicons name="list" size={30} color="#00b4d8" />
              <Text style={styles.featureText}>Simple List Management</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="time-outline" size={30} color="#00b4d8" />
              <Text style={styles.featureText}>Quick Access</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00b4d8',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#adb5bd',
    textAlign: 'center',
    marginTop: 5,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    width: '100%',
  },
  emoji: {
    fontSize: 50,
  },
  ctaButton: {
    width: width * 0.8,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#00b4d8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  gradientButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  featureSection: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureText: {
    color: '#e9ecef',
    marginLeft: 10,
    fontSize: 14,
  },
});
