import {StatusBar} from "expo-status-bar";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./navigation";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar/>
            <MainNavigator/>
        </NavigationContainer>
    );
}

export default App;
