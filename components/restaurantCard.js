import { View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

  {/*To show items image, name, etcc...*/}
export default function RestaurantCard({item}) {
        {/* Navigate to Restaurant Screen with item/data/api */}
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={()=> navigation.navigate('Restaurant', {...item})}
    >
        <View style={{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }}>
        <View className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
            <View className="px-3 pb-4 space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Text className="text-lg font-bold pt-2">{item.name}
                        <Text className="text-gray-700 font-semibold text-xs"> - {item.category}</Text>
                    </Text>
                </View>  
                {/* <View className="flex-row items-center space-x-1">
                    <Icon name="map-pin" size={15} color="#fbbf24" />
                    <Text className="text-sm text-gray-700"> {item.address}</Text>
                </View> */}
           </View>  
        </View>
        </View>
    </TouchableWithoutFeedback>
  )
}