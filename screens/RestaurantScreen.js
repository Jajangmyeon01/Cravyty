import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import DishRow from '../components/dishRow';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';

export default function RestaurantScreen() {
    {/* For Debug only to get api/data/item */}
    const {params} = useRoute();
    let item = params;
    // console.log('restaurant: ',item);
    const navigation = useNavigation();
    const dispatch = useDispatch();
   // Default to the first category if available
    const [selectedCategory, setSelectedCategory] = useState(
        item?.categories?.[0] || ''
    );
        useEffect(() => {
            if (item?.id) {
            dispatch(setRestaurant({ ...item }));
            }
        }, [dispatch, item]);      

  return (
    // UI for restaurant Menu's
    <View>
      <ScrollView>
        <View className="relative">
            <Image className="w-full h-72" source={item.image}/> 
            <TouchableOpacity onPress={()=> navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded full shadow">
                <Icon name="arrow-left" size={24} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity className="absolute top-14 right-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon name="heart" size={24} color="red" />
            </TouchableOpacity>
        </View>
            {/* Border background on Menu */}
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            className="bg-white -mt-12 pt-6">
            <View className="px-5">
                <Text className="text-2xl font-semibold">{item.name}
                <Text className="text-gray-700 font-semibold text-xs"> - {item.category}</Text>
                </Text>
                <View>
                    <Text className="text-gray-500 mt-2 ">Description: {item.description}</Text>
                </View>
            </View>
            <View className="pb-36 bg-white">
                <Text className="text-amber-400 text-center px-4 py-4 text-2xl font-semibold">Menu</Text> 
                   {/* Slider/Highlight Tab */}
                   <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row px-4 mb-4">
                    {item.categories?.map((cat, index) => (
                        <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedCategory(cat)}
                        className={`mr-4 pb-2 ${selectedCategory === cat ? 'border-b-2 border-amber-400' : ''}`}
                        >
                        <Text className={`text-lg font-semibold ${selectedCategory === cat ? 'text-amber-400' : 'text-gray-700'}`}>
                            {cat}
                        </Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>

                 {/* Dishes UI | mapped all the data */}
                 {item.dishes
                    .filter(dish => {
                        // If 'All' is selected, show everything
                        if (selectedCategory === 'All') return true;

                        // Check if dish.category exactly matches selectedCategory
                        return dish.category === selectedCategory;
                    })
                    .map((dish, index) => (
                        <DishRow item={{ ...dish }} key={index} />
                    ))}
            </View>
        </View>
      </ScrollView>
    </View>
  )
}