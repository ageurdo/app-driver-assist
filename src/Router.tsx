import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'

const noHeaderNavigationOptions = {
    headerShown: false,
}

const noNavegableHeaderNavigationOptions = {
    gestureEnable: false,
    ...noHeaderNavigationOptions
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: noNavegableHeaderNavigationOptions
    }
    },
    {
        initialRouteName: 'Home',
    });

    export default createAppContainer(AppNavigator);