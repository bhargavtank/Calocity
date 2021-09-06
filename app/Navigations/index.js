import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import AuthNavigator from './AuthNavigator'
import DrawerNavigation from './DrawerNavigation'


const AppNavigation = () => {
    const [IsLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <NavigationContainer>
            {IsLoggedIn ? <DrawerNavigation /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigation

