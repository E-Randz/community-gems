import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import TabNavigator from "./src/navigation/TabNavigator";
import AuthLoadingScreen from "./src/components/screens/AuthLoadingScreen";
import AuthNavigator from "./src/navigation/AuthNavigator";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import { getUserByID, editUser } from './src/db/users'


firebase.initializeApp(firebaseConfig);

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Auth"
  }
);

class App extends Component {

  componentDidMount() {
    console.log('hi there :)!vshshs!!')
    editUser('yE8JCq8A73cSsfDuRCMTyT0NVXX2', 'hello', '3', 'abbey close', 'alcester', 'b49 5QW')
  }

  state = {};
  render() {
    const AppContainer = createAppContainer(switchNavigator);
    return <AppContainer />;
  }
}

export default App;
