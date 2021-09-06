/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';



import { useState } from 'react';

import AppNavigation from './app/Navigations';

const App = () => {

  const [IsAuthenticated, setIsAuthenticated] = useState(false)
  const [UserInfo, setUserInfo] = useState({ name: 'bhargav', 'email': 'bhargavtank@icloud.com' })

  const AuthStateHandler = (value) => {
    setIsAuthenticated(value)
  }

  const UserInfoHandler = (info) => {
    setUserInfo(info)
  }

  const GlobalProvider = {
    IsAuth: IsAuthenticated,
    User: UserInfo
  }


  return (
    <AppNavigation />
  );
};




export default App;
