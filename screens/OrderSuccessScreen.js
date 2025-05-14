import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';


export default function OrderSuccessScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showFoodSuccess, setShowFoodSuccess] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        {!showFoodSuccess ? (
          <Lottie 
            source={require('../assets/images/fireworks.json')} 
            autoPlay 
            loop={false}
            style={styles.lottie}
            onAnimationFinish={() => setShowFoodSuccess(true)} // Switch animation when done
          />
        ) : (
          <Lottie 
            source={require('../assets/images/food-success.json')} 
            autoPlay 
            loop={false} 
            style={styles.lottie}
          />
        )}

        <Text style={[styles.title, { color: themeColors.text }]}>Order Placed Successfully!</Text>
        <Text style={styles.message}>Thank you for choosing us!</Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: themeColors.primary }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    elevation: 10,
  },
  lottie: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
