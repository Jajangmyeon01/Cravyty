import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import RestaurantCard from './restaurantCard';
import { useNavigation } from '@react-navigation/native';

export default function FeaturedRow({ title, description, restaurants = [] }) {
  const navigation = useNavigation();

  return (
    <View className="mt-4">
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SeeAll', { title, restaurants })}
        >
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard item={restaurant} key={restaurant.id} />
        ))}
      </ScrollView>
    </View>
  );
}