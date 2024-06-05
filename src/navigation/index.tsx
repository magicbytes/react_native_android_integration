import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CCMScreen from '../screens/CCMScreen';

const Stack = createStackNavigator();

const Navigation = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="CCMScreen" component={CCMScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;