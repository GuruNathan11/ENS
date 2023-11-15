/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      {/* <NavigationContainer> */}
        <Navigation />
      {/* </NavigationContainer> */}
    </AuthProvider>
  )
}

export default App;
