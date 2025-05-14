import { View, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants'; 
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { selectBagItems, selectBagTotal } from '../slices/bagSlice';
import { useDispatch } from 'react-redux';
import { addToBag, removeFromBag } from '../slices/bagSlice';


export default function BagScreen() {
  const dispatch = useDispatch();
  const bagItems = useSelector(selectBagItems); // get items actually in bag
  const totalPrice = useSelector(selectBagTotal); // get total

  const navigation = useNavigation();
  // const restaurant = featured[0]?.restaurants?.[0] ?? { dishes: [] };
  const restaurant = useSelector(selectRestaurant);
  return (
    <View style={{ backgroundColor: themeColors.background }} className="flex-1">
      {/* Header */}
      <View className="relative py-6 shadow-sm mb-4 bg-white rounded-b-3xl">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-12 left-4 bg-gray-50 p-2 rounded-full shadow z-10"
        >
          <Icon name="arrow-left" size={22} color={themeColors.primary} />
        </TouchableOpacity>

        <View className="mt-10 mb-4">
          <Text className="text-center font-extrabold text-2xl" style={{ color: themeColors.text }}>Your Bag</Text>
        </View>
      </View>

      {/* Dishes List */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {bagItems.length > 0 ? (
          bagItems.map((dish, index) => (
            <View key={index} className="flex-row items-center justify-between p-4 mx-4 mb-4 bg-white rounded-2xl shadow">
              <Image className="h-16 w-16 rounded-full" source={dish.image} />
              <View className="flex-1 mx-3">
                <Text className="font-bold text-black text-base">{dish.name}</Text>
                <Text className="text-gray-500 text-sm">₱{(dish.price * dish.quantity).toFixed(2)}</Text>
              </View>
              <View className="flex-row items-center space-x-3">
              <TouchableOpacity 
                onPress={() => dispatch(removeFromBag({ id: dish.id }))}
                className="p-2 rounded-full"
                style={{ backgroundColor: dish.quantity > 1 ? themeColors.primary : 'red' }}
              >
                <Icon name={dish.quantity > 1 ? "minus" : "trash"} size={18} color={themeColors.white} />
              </TouchableOpacity>

                <Text className="font-bold text-black text-lg">{dish.quantity}</Text>
                <TouchableOpacity 
                  onPress={() => dispatch(addToBag(dish))}
                  className="p-2 rounded-full"
                  style={{ backgroundColor: themeColors.primary }}
                >
                  <Icon name="plus" size={18} color={themeColors.white} />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text className="text-center text-gray-500 mt-5">No items in your bag</Text>
        )}

      </ScrollView>
      
      {/* Total Section */}
      <View 
        style={{ backgroundColor: themeColors.white }}
        className="p-6 px-8 rounded-t-3xl shadow-lg mt-2"
      >
        <View className="flex-row justify-between mb-4">
          <Text className="text-lg font-extrabold" style={{ color: themeColors.text }}>Total</Text>
          <Text className="text-lg font-extrabold" style={{ color: themeColors.text }}>
            ₱{totalPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('OrderSuccess')}
          style={{ backgroundColor: themeColors.primary }}
          className="p-4 rounded-full"
        >
          <Text className="text-white text-center font-bold text-lg">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
