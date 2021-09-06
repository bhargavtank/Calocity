import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import InitialScreen from '../Screens/InitialScreen';

const AuthNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen name="Initial" component={InitialScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthNavigator


