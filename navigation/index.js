import React from 'react';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from "../screens/HomeScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;
