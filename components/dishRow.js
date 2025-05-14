import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function DishRow({ item }) {
  const navigation = useNavigation();

   {/* Navigate to FoodDetail Screen */}
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('FoodDetails', item)}
      className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2"
    >
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex-1 pl-3 space-y-2">
        <Text className="text-lg font-semibold">{item.name}</Text>
        <Text className="text-sm text-gray-700">{item.category}</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-700 text-lg font-bold">₱{item.price}</Text>
          <Icon name="bookmark" size={20} color="#fbbf24" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
