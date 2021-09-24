import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native"
import AuthNatigator from "./AuthNavigator";
import HomeNatigator from "./HomeNavigator";
import DrawerNatigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import { View, Text } from "react-native";


const AppNavContainer = () => {

    const { authState: { isLoggedIn} } = useContext(GlobalContext);
    console.log(isLoggedIn);
    return (
        <NavigationContainer>
           
            {isLoggedIn ? <DrawerNatigator /> : <AuthNatigator />}
        </NavigationContainer>
    )
};


export default AppNavContainer;