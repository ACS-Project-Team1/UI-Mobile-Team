import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"

import Dashboard from '../screens/afterLogin/Dashboard.js';
import Leagues from '../screens/afterLogin/Leagues.js';
import Profile from '../screens/afterLogin/Profile.js';
import Stats from '../screens/afterLogin/Stats.js';
import Teams from '../screens/afterLogin/Teams.js';

import { bottomNavStyles } from '../components/bottomNavStyles.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageLogo } from '../components/styles.js';

const dashboardName = 'Home';
const leaguesName = 'Leagues';
const teamsName = 'Teams';
const statsName = 'Stats';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function BottomNavigation(){
  return (
      <Tab.Navigator
        initialRouteName={dashboardName}
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const rn = route.name;

            if (rn === dashboardName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === leaguesName) {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (rn === teamsName) {
              iconName = focused ? 'people' : 'people-outline';
            } else if (rn === statsName) {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You may return null here if you don't want to display any icon
            // when the route is leaguesName or any other specific route
            // if (rn === leaguesName) return null;

            return(
              <View style={focused?[bottomNavStyles.navbar_button,bottomNavStyles.navbar_button_active]:bottomNavStyles.navbar_button}>
                <Ionicons name={iconName} size={size} color={color} />
                <Text style={focused ? bottomNavStyles.label_active : bottomNavStyles.label}>{route.name}</Text>
              </View>
            );
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarStyle:bottomNavStyles.tabBar,
          tabBarLabel:() => null,

        })}
      >
        <Tab.Screen name={dashboardName} component={Dashboard} />
        <Tab.Screen name={teamsName} component={Teams} />
        <Tab.Screen name={leaguesName} component={Leagues} />
        <Tab.Screen name={statsName} component={Stats} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
  );
};



