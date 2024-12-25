import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { images } from "../constants";
import { router } from "expo-router";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Comfortaa: require("../assets/fonts/Comfortaa-Regular.ttf"), // Replace with correct path
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          {/* Logo and Welcome Text */}
          <View style={styles.logoContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.title}>
              WELCOME TO DAUYS
              <Text style={styles.highlight}>YM</Text>
            </Text>
          </View>

          {/* Gradient Button */}
          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={["#0D9543", "#3FB76F", "#A5E8C0"]} 
              start={{ x: 0.77, y: -0.22 }} 
              end={{ x: 0, y: 1 }} 
              style={styles.gradientButton}
            >
              <Text
                style={styles.buttonText}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "60%",
    width: "80%",
    marginVertical: "20%",
    marginHorizontal: "10%",
    backgroundColor: "white",
  },
  scrollContent: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "30%", 
    height: "30%",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "Comfortaa", // Use Comfortaa font
  },
  highlight: {
    color: "#0D9543",
  },
  buttonContainer: {
    width: "75%",
    marginBottom: 24,
  },
  gradientButton: {
    width: "100%",
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Comfortaa",
  },
});
