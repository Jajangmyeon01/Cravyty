import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import BagScreen from './screens/BagScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import SeeAllScreen from './screens/SeeAllScreen';
const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            {/*Set first screen to load and remove headers for all screens*/}
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="FoodDetails" component={FoodDetailScreen} />
            <Stack.Screen name="Bag" options={{presentation: 'modal'}} component={BagScreen} />
            <Stack.Screen name="OrderSuccess" options={{presentation: 'fullScreenModal'}} component={OrderSuccessScreen} />
            <Stack.Screen name="SeeAll" component={SeeAllScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}