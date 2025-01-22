import { useRouter } from "expo-router";
import { SafeAreaView, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { images } from "../constants";

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0D9543" />
        <Text className="mt-4 text-lg text-green-600 font-Comfortaa">Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="justify-center items-center">
        <View className="flex-1 justify-center items-center py-32">
          {/* Logo and Welcome Text */}
          <View className="items-center mb-8">
            <Image source={images.logo} className="w-40 h-40" resizeMode="cover" />
            <Text className="mt-5 text-3xl font-Comfortaa text-center">
              WELCOME TO DAUYS
              <Text className="text-green-600">YM</Text>
            </Text>
          </View>

          {/* Gradient Button */}
          <View className="w-4/5">
            <LinearGradient
              colors={["#0D9543", "#3FB76F", "#A5E8C0"]}
              start={{ x: 0.77, y: -0.22 }}
              end={{ x: 0, y: 1 }}
              className="w-full rounded-2xl py-4 shadow-md items-center"
            >
              <Text
                className="text-white text-lg font-Nunito"
                onPress={() => router.push("/(auth)/registration")}
              >
                Let’s Start
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
