import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
const AuthLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="registration" />
        <Stack.Screen name="profileSettings" />
      </Stack>

      {/* Status Bar */}
      <StatusBar backgroundColor="#fff" style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Consistent background for auth screens
  },
  header: {
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default AuthLayout;
