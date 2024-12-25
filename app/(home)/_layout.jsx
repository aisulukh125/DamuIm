import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function HomeLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="help" />
        <Stack.Screen name="update" />
        <Stack.Screen name="training" />
      </Stack>

      {/* StatusBar */}
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </SafeAreaView>
  );
}