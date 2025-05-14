import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    // React Native Reanimated values
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(()=>{
        // Reset animation rings to 0
        ring1padding.value = 0; 
        ring2padding.value = 0;

      setTimeout(()=> ring1padding.value = withSpring(ring1padding.value + hp(5)), 100);
      setTimeout(()=> ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 300);

      setTimeout(()=> navigation.navigate('Home'), 2500);
    },[])

  return (
    <View className ='flex-1 justify-center items-center space-y-10 bg-amber-400 px-6'>
      <StatusBar style="light"/>

      {/* Logo image with circular background and responsive screen*/}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}> 
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1padding}}> 
          <Image
            source={require('../assets/images/cravyty-logo.png')}
            style={{ width: hp(20), height: hp(20) }}/>
        </Animated.View>
      </Animated.View>
    
        {/* Logo Title */}
        <View className="flex items-center mt-6 space-y-4">
          <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest">
            Cravyty
          </Text>
          <Text style={{fontSize: hp(2)}} className="font-bold text-white tracking-widest text-md">
            Find the best meals within your budget!
          </Text>
        </View>
    </View>
      
    
  )
}
