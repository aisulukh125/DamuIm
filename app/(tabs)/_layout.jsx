import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000", 
        tabBarInactiveTintColor: "#BDBDBD", 
        tabBarStyle: {
          backgroundColor: "#FFFFFF", 
          borderTopWidth: 0.5, 
          borderTopColor: "#DADADA", 
          height: 60, 
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Camera Tab */}
      <Tabs.Screen
        name="cameraPage"
        options={{
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="instagram" size={20} color={color} />
          ),
        }}
      />

      {/* Favorites Tab */}
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks-outline" size={20} color={color} />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
