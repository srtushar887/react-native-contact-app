import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNatigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";


const Drawer = createDrawerNavigator();

const DrawerNatigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown:false }}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNatigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
};


export default DrawerNatigator;