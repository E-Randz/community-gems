import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import TabNavigator from "./src/navigation/TabNavigator";
import AuthLoadingScreen from "./src/components/screens/AuthLoadingScreen";
import AuthNavigator from "./src/navigation/AuthNavigator";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKQA51q2geGB13b9S7pllwZTZRK8AWNkU",
  authDomain: "community-gems.firebaseapp.com",
  databaseURL: "https://community-gems.firebaseio.com",
  projectId: "community-gems",
  storageBucket: "community-gems.appspot.com"
};
firebase.initializeApp(firebaseConfig);

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(switchNavigator);
