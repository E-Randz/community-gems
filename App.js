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
import { addReview } from "./src/db/users";

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

addReview(
  "0u42EIcHPAM2YdvNTXkEWo0iHLk1",
  "hello this is another review",
  "11/01/2000"
);

class App extends Component {
  // componentDidMount() {
  //   postNewEvent('testevent2', '12 arlington drive', 'stockport', 'sk27eb', 'street clean', 'great event', Date.now(), Date.now(), 3, 'Small job', 'vabbbzbsbs', 'VsRmfX5PtQRP7KIJ2yStGYGKJef2')
  // }

  state = {};
  render() {
    const AppContainer = createAppContainer(switchNavigator);
    return <AppContainer />;
  }
}

export default App;
