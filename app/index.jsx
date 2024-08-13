import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { CustomButton } from '../components';
import { images } from '../constants'
 

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-[#008da8]">
      <ScrollView contentContainerStyle={{ height: '100%' }}> 
        <View className="w-full h-full justify-evenly items-center px-6">
          <View className="w-full h-[65vh] justify-center items-center">
            <Image
              source={images.logo}
              className="w-[50vw] h-[30vh]"
              resizeMode='cover'
            />
            <Text className="text-3xl text-white font-bold text-center">Welcome to the Sign Language to Kazakh Translator!</Text>
          </View>
          <View className="relative w-full h-[20vh] items-end justify-center">
            <CustomButton 
              title="Get Started"
              handlePress={()=>{router.push('/(auth)/registration')}}
              containerStyles="w-full border-2 border-[#ddb500] bg-[#ddb500]"
              textStyles="text-white"
            />
            <CustomButton 
              title="Already have Account"
              handlePress={()=>{router.push('/(auth)/login')}}
              containerStyles="w-full mt-3 border-[#ddb500] border-2"
              textStyles="text-white"
            />
          </View>
        </View>
      </ScrollView>
      

      <StatusBar backgroundColor='#008da8' style='light'/> 
    </SafeAreaView>
  );
}
