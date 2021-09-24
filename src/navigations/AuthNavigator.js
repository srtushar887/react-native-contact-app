import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from '../screens/Login/Signin';
import Register from '../screens/Register/Signup';


const AuthStack = createStackNavigator();


const AuthNatigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown:false }}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
};


export default AuthNatigator;