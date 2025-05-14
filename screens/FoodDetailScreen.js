  import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
  import React from 'react';
  import { useRoute, useNavigation } from '@react-navigation/native';
  import Icon from 'react-native-vector-icons/Feather';
  import { themeColors } from '../theme';
  import BagIcon from '../components/bagIcon';
  import { addToBag, removeFromBag, selectBagItemsById } from '../slices/bagSlice';
  import { useDispatch, useSelector } from 'react-redux';

  export default function FoodDetailScreen() {
    const { params: item } = useRoute(); // Get selected food data
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // Get count for the specific item in the bag
    const bagItemsForItem = useSelector(state => selectBagItemsById(state, item.id));
    const itemCount = bagItemsForItem?.quantity || 0;


    const handleIncrease = () => {
      dispatch(addToBag({ ...item }));
    };
    
    const handleDecrease = () => {
      if (itemCount > 0) {
        dispatch(removeFromBag({ id: item.id }));
      }
    };  

    return (
      <View className="flex-1 bg-white">
        <BagIcon/>
        <ScrollView>
          {/* Food Image */}
          <View className="relative flex items-center">

          {/* handles both require() and URI formats: */}
          <Image
            source={typeof item.image === 'string' ? { uri: item.image } : item.image}
            className="w-72 h-60 rounded-2xl mt-8"
            resizeMode="cover"
          />
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            >
              <Icon name="arrow-left" size={24} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity 
              className="absolute top-14 right-4 bg-gray-50 p-2 rounded-full shadow"
            >
              <Icon name="heart" size={24} color="red" />
            </TouchableOpacity>
          </View>

          {/* Food Details */}
          <View className="bg-white mt-6 mx-4 rounded-3xl p-6 shadow-lg flex items-center">
            <Text className="text-2xl font-semibold text-center">{item.name}</Text>
            <Text className="text-gray-500 text-sm mt-1 text-center">{item.category}</Text>
            <Text className="text-gray-800 text-sm mt-1 text-center">₱{item.price}</Text>

            {/* Quantity and Price */}
            <View className="flex-row items-center justify-between mt-4 w-full px-4">
              <TouchableOpacity 
                onPress={handleDecrease}
                disabled={itemCount === 0}
                className="p-2 rounded-lg" 
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon name="minus" size={20} color="white" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-gray-800">{itemCount}</Text>
              <TouchableOpacity 
                onPress={handleIncrease}
                className="p-2 rounded-lg" 
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Add to Bag Button */}
            {/* <TouchableOpacity 
              className="px-6 py-3 rounded-full mt-4" 
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Text className="text-white font-semibold text-lg">Add to Bag</Text>
            </TouchableOpacity> */}

            {/* Food Description */}
            <Text className="text-xl font-bold mt-6 text-center">Food Description</Text>
            <Text className="text-gray-600 mt-2 text-sm text-center">{item.description}</Text>

            {/* Nutritional Information */}
            <Text className="text-xl font-bold mt-6 text-center">Nutritional Information</Text>
            <View className="mt-2 p-3 bg-gray-50 rounded-lg w-full">
              <Text className="text-gray-700 text-center">Calories: {item.nutrition.calories} kcal</Text>
              <Text className="text-gray-700 text-center">Total Fat: {item.nutrition.totalFat}g</Text>
              <Text className="text-gray-700 text-center">Protein: {item.nutrition.protein}g</Text>
              <Text className="text-gray-700 text-center">Sodium: {item.nutrition.sodium}mg</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
