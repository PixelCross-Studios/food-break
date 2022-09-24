import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import HomeIcon from "../assets/HomeIcon";
import SettingsIcon from "../assets/SettingsIcon";

const Tab = createBottomTabNavigator();

//TODO: change nav style for browser, add menu icon
//this is just a placeholder so it runs on web for now
const MainNav = () => (
  <NavigationContainer>
    <View style={{width: '100%', height: '100%'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let color = focused ? 'black' : 'grey'
            switch (route.name) {
              case 'Dashboard':
                return <HomeIcon color={color} />
              case 'Settings':
                return <SettingsIcon color={color} />
            }
          },
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: { 
            backgroundColor: 'white' },
        })}>
        <Tab.Screen name="Dashboard" component={Dashboard}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </View>
  </NavigationContainer>
);

export default MainNav;
