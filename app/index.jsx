import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { CustomButton } from '../components';
import { images } from '../constants'
 

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: '100%' }}> 
        <View className="w-full h-full justify-evenly items-center px-6">
          <View className="w-full h-[65vh] justify-center items-center">
            <Image
              source={images.logo}
              className="w-[25vw] h-[25vh]"
              resizeMode='cover'
            />
            <Text className="w-[65vw] text-5xl font-medium text-center">WELCOME TO DAUYS<Text className="text-[#51f542]">YM</Text></Text>
          </View>
          <View className="relative w-[60vw] h-[20vh] items-end justify-center">
            <CustomButton 
              title="Let's Start"
              handlePress={()=>{router.push('/(auth)/registration')}}
              containerStyles="w-[60vw] border-2 border-[#0D9543] bg-[#0D9543]"
              textStyles="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
