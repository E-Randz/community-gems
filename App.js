import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './src/navigation/TabNavigator';



export default createAppContainer(TabNavigator);
