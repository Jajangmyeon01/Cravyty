// Categories.js
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { categories } from '../constants/index';

export default function Categories({ selectedCategory, setSelectedCategory }) {
  const visibleCategories = categories.slice(0, 5);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {visibleCategories.map((category, index) => {
          const isActive = category.name === selectedCategory;
          const btnClass = isActive && category.name !== 'All' ? 'bg-yellow-400' : 'bg-gray-200';
          const textClass = isActive && category.name !== 'All' ? 'font-semibold text-yellow-700' : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setSelectedCategory(category.name)}
                className={`p-2 rounded-full shadow ${btnClass}`}
              >
                <View className="items-center">
                  <Image style={{ width: 45, height: 45 }} source={category.image} />
                </View>
              </TouchableOpacity>
              <Text className={`text-sm ${textClass} mt-1`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
