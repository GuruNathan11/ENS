import React, {useContext, useState} from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screen/MainScreen/HomeScreen";
import LoginScreen from "../screen/MainScreen/LoginScreen";
import RegisterScreen from "../screen/MainScreen/RegisterScreen"
import { AuthContext } from "../context/AuthContext";
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo} =useContext(AuthContext)
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.usertype ? (
                    <Stack.Screen
                 name = "Home"
                 component={HomeScreen} /> 
                ) :(
                    <>
                    <Stack.Screen
                    name = "Login"
                    component={LoginScreen} 
                    options={{headerShown:false}}/>
                    <Stack.Screen
                    name = "Register"
                    component={RegisterScreen} />
                    </>
                )}
           
                
                 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;