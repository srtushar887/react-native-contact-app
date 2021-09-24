import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { CONTACT_LIST, CONTACT_DETAILS, CONTACT_CREATE, SETTINGS } from "../constants/routeNames";
import Contacts from "../screens/Contacts/Contacts";
import ContactDetails from "../screens/ContactDetails/ContactDetails";
import CreateContact from "../screens/CreateContact/CreateContact";
import Settings from "../screens/Settings/Settings";

const HomeStack = createStackNavigator();


const HomeNatigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="Contact">
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
};


export default HomeNatigator;