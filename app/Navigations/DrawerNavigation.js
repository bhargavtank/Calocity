import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Settings from '../Screens/Settings'
import Home from '../Screens/Home'
import ToDo from '../Screens/To-Do'
import CalendarScreen from '../Screens/Calendar'
import Profile from '../Screens/Profile'
import Contacts from '../Screens/Contacts'
import Recipe from '../Screens/Recipe'
import Rewards from '../Screens/Rewards'
import ShoppingList from '../Screens/ShoppingList'
import Alaram from '../Screens/Alaram'
const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="ToDo" component={ToDo} />
            <Drawer.Screen name="Contacts" component={Contacts} />
            <Drawer.Screen name="Calendar" component={CalendarScreen} />
            <Drawer.Screen name="Recipe" component={Recipe} />
            <Drawer.Screen name="ShoppingList" component={ShoppingList} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Rewards" component={Rewards} />
            <Drawer.Screen name="Alaram" component={Alaram} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

