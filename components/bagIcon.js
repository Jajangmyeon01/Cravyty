import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBagItems, selectBagTotal } from '../slices/bagSlice';

const BagIcon = () => {
  const navigation = useNavigation(); 
  const bagItems = useSelector(selectBagItems);
  const totalPrice = useSelector(selectBagTotal);

  const totalItems = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!bagItems.length) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Bag')}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        {/* Cart Item Count */}
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{totalItems}</Text>
        </View>

        {/* View Bag */}
        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Bag</Text>
        <Text className="font-extrabold text-white text-lg">₱{totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BagIcon;
