import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import RestaurantCard from '../components/restaurantCard';
import Icon from 'react-native-vector-icons/Feather';

export default function SeeAllScreen() {
  const { params } = useRoute();
  const { title, restaurants } = params;
  const navigation = useNavigation();

  // Header and card animations
  const [headerOpacity] = useState(new Animated.Value(0));
  const [cardsOpacity] = useState(new Animated.Value(0));
  const [cardScale] = useState(new Animated.Value(1)); // Scale effect for cards

  useEffect(() => {
    // Fade in header
    Animated.timing(headerOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Fade in cards
    Animated.stagger(100, [
      Animated.timing(cardsOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Scale up animation for hover effect on cards
  const scaleUp = () => {
    Animated.spring(cardScale, {
      toValue: 1.05,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.spring(cardScale, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView
      className="bg-white flex-1 p-6"
      contentContainerStyle={{ paddingTop: 30 }}>
      {/* Back to Home (with arrow) */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: '#fbbf24',
          borderRadius: 50, // Rounded button
          alignSelf: 'flex-start', // Align button to the left
          marginBottom: 16, // Space between button and title
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <Text className="ml-2 text-white font-semibold">Back</Text>
      </TouchableOpacity>

      {/* Title with animation */}
      <Animated.View style={{ opacity: headerOpacity }}>
        <Text className="text-2xl font-bold mb-6 text-center text-gray-800">
          {title}
        </Text>
      </Animated.View>

      {/* Restaurant Cards with fade-in animation */}
      <View className="space-y-6">
        {restaurants.map((restaurant) => (
          <Animated.View
            key={restaurant.id}
            style={{
              opacity: cardsOpacity,
              transform: [{ scale: cardScale }],
            }}
            className="shadow-2xl rounded-lg overflow-hidden bg-white">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetails', {
                  restaurantId: restaurant.id,
                })
              }
              onMouseEnter={scaleUp}
              onMouseLeave={scaleDown}
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 16,
              }}>
              <RestaurantCard item={restaurant} />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}
