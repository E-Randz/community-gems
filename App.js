import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './src/navigation/TabNavigator';
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: TabNavigator
},
{
  initialRouteName: 'AuthLoading'
}
)



export default createAppContainer(switchNavigator);
