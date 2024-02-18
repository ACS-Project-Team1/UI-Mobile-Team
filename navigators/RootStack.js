import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import { Colors } from '../components/styles';

const {primary, tertiary} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyled : {
                    backgroundColor:'transparent',
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle:{
                    paddingLeft: 20
                }
            }}
            initialRouteName = "Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;