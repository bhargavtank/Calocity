import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'

import ContactsList from './ContactList'
import CreateContact from './CreateContact'
import styles from './styles'


const Contacts = () => {
    const StackNav = createStackNavigator();
    return (
        <StackNav.Navigator initialRouteName="ContactsList" >
            <StackNav.Screen options={{ headerShown: false }} name="ContactsList" component={ContactsList} />
            <StackNav.Screen options={{ headerShown: false, headerTitle: 'Create Contact', headerBackAccessibilityLabel: 'back' }} name="CreateContact" component={CreateContact} />
        </StackNav.Navigator>
    )
}

export default Contacts


