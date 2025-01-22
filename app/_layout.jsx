import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(home)" />
        <Stack.Screen name="(auth)" />
      </Stack>

      {/* StatusBar */}
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </SafeAreaView>
  );
}
