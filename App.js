import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './src/navigation/TabNavigator';
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen';
import AuthNavigator from './src/navigation/AuthNavigator';

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: TabNavigator,
  Auth: AuthNavigator
},
{
  initialRouteName: 'App'
}
)



export default createAppContainer(switchNavigator);
