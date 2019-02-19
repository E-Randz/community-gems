import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './src/navigation/TabNavigator';


export default createAppContainer(TabNavigator);
