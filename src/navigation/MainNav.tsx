import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import HomeIcon from "../assets/HomeIcon";
import SettingsIcon from "../assets/SettingsIcon";
import * as colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const MainNav = ({ dummySignout }) => (
  <NavigationContainer>
    <View style={{width: '100%', height: '100%'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let color = focused ? colors.LIGHTBLUE : colors.GREY
            switch (route.name) {
              case 'Dashboard':
                return <HomeIcon color={color} />
              case 'Settings':
                return <SettingsIcon color={color} />
            }
          },
          headerShown: false,
          tabBarActiveTintColor: colors.LIGHTBLUE,
          tabBarInactiveTintColor: colors.GREY,
          tabBarStyle: { 
            backgroundColor: colors.BLUE },
        })}>
        <Tab.Screen name="Dashboard" component={Dashboard}/>
        <Tab.Screen
          name="Settings"
          children={() => <Settings dummySignout={dummySignout}/>}
          />
      </Tab.Navigator>
    </View>
  </NavigationContainer>
);

export default MainNav;
