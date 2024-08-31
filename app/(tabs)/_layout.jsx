import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from "expo-router";

import { TabBarIcon } from '../../components';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 70
          }
        }}>
          <Tabs.Screen 
            name='home' 
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen 
            name='history' 
            options={{
              title: 'History',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen 
            name='favorite' 
            options={{
              title: 'Favorite',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
              ),
            }}
          />
        <Tabs.Screen 
          name='settings' 
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout