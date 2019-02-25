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
import { postNewEvent, getEventUsers, addUserToEvent, deleteUserFromEvent } from './src/db/events'
import { getUserEvents } from './src/db/users'
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

class App extends Component {

  componentDidMount() {
    // getEventUsers('-LZKWvtNG3XhaVWFDIhz')
    // getUserEvents('08aoDFnYysOUCfPADRAu911RAKH3')
    // addUserToEvent('-LZKWvtNG3XhaVWFDIhz', {
    //   '0R6uS2UKntTJoSnllE5otwHhNl93': 'liam123'
    // })
    // deleteUserFromEvent('-LZKWvtNG3XhaVWFDIhz', '0R6uS2UKntTJoSnllE5otwHhNl93')


    // postNewEvent('Move my pots', '12 arlington drive', 'stockport', 'sk27eb', 'street clean', 'great event', Date.now(), Date.now(), 3, 'Small job', 'vabbbzbsbs', 'VsRmfX5PtQRP7KIJ2yStGYGKJef2')
 
  }

class App extends Component {
  state = {};
  render() {
    const AppContainer = createAppContainer(switchNavigator);
    return <AppContainer />;
  }
}

export default App;
